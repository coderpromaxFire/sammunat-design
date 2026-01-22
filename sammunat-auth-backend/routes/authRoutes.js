import express from "express";
import nodemailer from "nodemailer";
import { saveOTP, verifyOTP } from "./otpStore.js";

const router = express.Router();

/* ---------- SMTP TRANSPORT (HOSTINGER FIXED) ---------- */
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST || "smtp.hostinger.com",
  port: 587,                 // Hostinger requires 587
  secure: false,             // MUST be false for 587
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false, // IMPORTANT for Hostinger
  },
});

/* ---------- VERIFY SMTP CONNECTION ---------- */
transporter.verify((err, success) => {
  if (err) {
    console.error("❌ SMTP connection failed:", err);
  } else {
    console.log("✅ Hostinger SMTP connected");
  }
});

/* ---------- SEND OTP ---------- */
router.post("/send-otp", async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: "Email is required" });
  }

  // Generate 6-digit OTP
  const otp = Math.floor(100000 + Math.random() * 900000).toString();

  // Save OTP with expiry (handled in otpStore.js)
  saveOTP(email, otp);

  try {
    await transporter.sendMail({
      from: `"Sammunat LLC" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Your Sammunat Login OTP",
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6">
          <h2>Sammunat Login Verification</h2>
          <p>Your One-Time Password (OTP) is:</p>
          <h1 style="letter-spacing: 4px">${otp}</h1>
          <p>This OTP is valid for <b>5 minutes</b>.</p>
          <p>If you did not request this, please ignore this email.</p>
          <br/>
          <p style="font-size: 12px; color: #777">
            © Sammunat LLC — Secure Login System
          </p>
        </div>
      `,
    });

    return res.json({ message: "OTP sent successfully" });
  } catch (err) {
    console.error("❌ Email send error:", err);
    return res.status(500).json({ message: "Failed to send OTP" });
  }
});

/* ---------- VERIFY OTP ---------- */
router.post("/verify-otp", (req, res) => {
  const { email, otp } = req.body;

  if (!email || !otp) {
    return res.status(400).json({
      message: "Email and OTP are required",
    });
  }

  const isValid = verifyOTP(email, otp);

  if (!isValid) {
    return res.status(400).json({
      message: "Invalid or expired OTP",
    });
  }

  return res.json({
    message: "OTP verified successfully",
  });
});

export default router;
