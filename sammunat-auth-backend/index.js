import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Resend } from "resend";
import { saveOTP, verifyOTP } from "./otpStore.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

/* ---------------- RESEND CLIENT ---------------- */
const resend = new Resend(process.env.RESEND_API_KEY);

/* ---------------- HEALTH CHECK ---------------- */
app.get("/", (req, res) => {
  res.send("Auth server running");
});

/* ---------------- SEND OTP ---------------- */
app.post("/api/auth/send-otp", async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: "Email is required" });
  }

  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  saveOTP(email, otp);

  try {
    await resend.emails.send({
      from: "Sammunat <login@sammunat.com>", // ✅ VERIFIED DOMAIN EMAIL
      to: email,
      subject: "Your Sammunat Login OTP",
      html: `
        <div style="font-family: Arial, sans-serif; line-height:1.6">
          <h2>Sammunat Login</h2>
          <p>Your One-Time Password (OTP) is:</p>
          <h1 style="letter-spacing:4px">${otp}</h1>
          <p>This OTP is valid for <b>5 minutes</b>.</p>
          <p>If you didn’t request this, please ignore this email.</p>
        </div>
      `,
    });

    res.json({ message: "OTP sent successfully" });
  } catch (error) {
    console.error("Resend error:", error);
    res.status(500).json({ message: "Failed to send OTP" });
  }
});

/* ---------------- VERIFY OTP ---------------- */
app.post("/api/auth/verify-otp", (req, res) => {
  const { email, otp } = req.body;

  if (!email || !otp) {
    return res.status(400).json({ message: "Email and OTP are required" });
  }

  const isValid = verifyOTP(email, otp);

  if (!isValid) {
    return res.status(400).json({ message: "Invalid or expired OTP" });
  }

  res.json({ message: "OTP verified successfully" });
});

/* ---------------- START SERVER ---------------- */
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`🚀 Auth server running on http://localhost:${PORT}`);
});
