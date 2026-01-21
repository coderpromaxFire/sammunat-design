import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

/* ---------------- SMTP TRANSPORT ---------------- */
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: Number(process.env.EMAIL_PORT),
  secure: process.env.EMAIL_SECURE === "true",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

/* ---------------- OTP STORE (IN-MEMORY) ---------------- */
const otpStore = new Map();

/* ---------------- SEND OTP ---------------- */
app.post("/api/auth/send-otp", async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: "Email is required" });
  }

  const otp = Math.floor(100000 + Math.random() * 900000).toString();

  otpStore.set(email, {
    otp,
    expiresAt: Date.now() + 5 * 60 * 1000 // 5 minutes
  });

  try {
    await transporter.sendMail({
      from: `"Sammunat LLC" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Your OTP for Sammunat Login",
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6">
          <h2>Sammunat Login OTP</h2>
          <p>Your one-time password is:</p>
          <h1 style="letter-spacing: 4px">${otp}</h1>
          <p>This OTP is valid for <b>5 minutes</b>.</p>
          <p>If you didn’t request this, you can ignore this email.</p>
        </div>
      `
    });

    res.json({ message: "OTP sent successfully" });
  } catch (error) {
    console.error("Email error:", error);
    res.status(500).json({ message: "Failed to send OTP" });
  }
});

/* ---------------- VERIFY OTP ---------------- */
app.post("/api/auth/verify-otp", (req, res) => {
  const { email, otp } = req.body;

  if (!email || !otp) {
    return res.status(400).json({ message: "Email and OTP required" });
  }

  const stored = otpStore.get(email);

  if (!stored) {
    return res.status(400).json({ message: "OTP not found" });
  }

  if (Date.now() > stored.expiresAt) {
    otpStore.delete(email);
    return res.status(400).json({ message: "OTP expired" });
  }

  if (stored.otp !== otp) {
    return res.status(400).json({ message: "Invalid OTP" });
  }

  otpStore.delete(email);
  res.json({ message: "OTP verified successfully" });
});

/* ---------------- SERVER START ---------------- */
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Auth server running on http://localhost:${PORT}`);
});
