import express from "express";
import nodemailer from "nodemailer";
import { saveOTP, verifyOTP } from "./otpStore.js";

const router = express.Router();

/* ---------- SMTP TRANSPORT ---------- */
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: Number(process.env.EMAIL_PORT),
  secure: process.env.EMAIL_SECURE === "true",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

/* ---------- SEND OTP ---------- */
router.post("/send-otp", async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: "Email is required" });
  }

  const otp = Math.floor(100000 + Math.random() * 900000).toString();
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
        </div>
      `
    });

    res.json({ message: "OTP sent successfully" });
  } catch (err) {
    console.error("Email send error:", err);
    res.status(500).json({ message: "Failed to send OTP" });
  }
});

/* ---------- VERIFY OTP ---------- */
router.post("/verify-otp", (req, res) => {
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

export default router;
