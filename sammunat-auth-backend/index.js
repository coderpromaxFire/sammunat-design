import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

/* ---------------- SMTP TRANSPORT (HOSTINGER FIX) ---------------- */
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST || "smtp.hostinger.com",
  port: 587,              // Hostinger SMTP port
  secure: false,          // MUST be false for port 587
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false, // IMPORTANT for Hostinger
  },
});

/* ---------------- VERIFY SMTP CONNECTION ---------------- */
transporter.verify((err, success) => {
  if (err) {
    console.error("❌ SMTP connection failed:", err);
  } else {
    console.log("✅ Hostinger SMTP connected");
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
    expiresAt: Date.now() + 5 * 60 * 1000, // 5 minutes
  });

  try {
    await transporter.sendMail({
      from: `"Sammunat LLC" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Your Sammunat Login OTP",
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6">
          <h2>Sammunat Login Verification</h2>
          <p>Your one-time password (OTP) is:</p>
          <h1 style="letter-spacing: 4px">${otp}</h1>
          <p>This OTP is valid for <b>5 minutes</b>.</p>
          <p>If you did not request this, please ignore this email.</p>
          <br/>
          <p style="font-size:12px;color:#777">
            © Sammunat LLC — Secure Login
          </p>
        </div>
      `,
    });

    return res.json({ message: "OTP sent successfully" });
  } catch (error) {
    console.error("❌ Email send error:", error);
    return res.status(500).json({ message: "Failed to send OTP" });
  }
});

/* ---------------- VERIFY OTP ---------------- */
app.post("/api/auth/verify-otp", (req, res) => {
  const { email, otp } = req.body;

  if (!email || !otp) {
    return res.status(400).json({
      message: "Email and OTP are required",
    });
  }

  const stored = otpStore.get(email);

  if (!stored) {
    return res.status(400).json({
      message: "OTP not found",
    });
  }

  if (Date.now() > stored.expiresAt) {
    otpStore.delete(email);
    return res.status(400).json({
      message: "OTP expired",
    });
  }

  if (stored.otp !== otp) {
    return res.status(400).json({
      message: "Invalid OTP",
    });
  }

  otpStore.delete(email);

  return res.json({
    message: "OTP verified successfully",
  });
});

/* ---------------- SERVER START ---------------- */
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`🚀 Auth server running on http://localhost:${PORT}`);
});

