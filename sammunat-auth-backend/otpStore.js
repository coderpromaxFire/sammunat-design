const otpStore = new Map();

export function saveOTP(email, otp) {
  otpStore.set(email, {
    otp,
    expiresAt: Date.now() + 5 * 60 * 1000, // 5 minutes
  });
}

export function verifyOTP(email, otp) {
  const stored = otpStore.get(email);

  if (!stored) return false;

  if (Date.now() > stored.expiresAt) {
    otpStore.delete(email);
    return false;
  }

  if (stored.otp !== otp) return false;

  otpStore.delete(email); // one-time use
  return true;
}
