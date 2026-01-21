import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState(1); // 1=email, 2=otp, 3=success
  const [role, setRole] = useState(
    localStorage.getItem("loginRole") || "client"
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [timer, setTimer] = useState(0);

  const intervalRef = useRef(null);

  const { login } = useAuth();
  const navigate = useNavigate();

  /* ---------- REMEMBER ROLE ---------- */
  useEffect(() => {
    localStorage.setItem("loginRole", role);
  }, [role]);

  /* ---------- CLEAN TIMER ---------- */
  useEffect(() => {
    if (timer <= 0) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
      return;
    }

    intervalRef.current = setInterval(() => {
      setTimer((t) => t - 1);
    }, 1000);

    return () => clearInterval(intervalRef.current);
  }, [timer]);

  /* ---------- SEND OTP ---------- */
  const sendOtp = async () => {
    if (!email) {
      setError("Please enter a valid email address");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5001/api/auth/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email })
      });

      if (!res.ok) throw new Error();

      setStep(2);
      setOtp("");
      setTimer(30);
    } catch {
      setError("Failed to send OTP. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  /* ---------- VERIFY OTP ---------- */
  const verifyOtp = async () => {
    if (!otp) {
      setError("Please enter the OTP");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5001/api/auth/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp })
      });

      if (!res.ok) throw new Error();

      login(email, role);
      setStep(3);

      setTimeout(() => {
        navigate(`/${role}/dashboard`);
      }, 1000);
    } catch {
      setError("Invalid or expired OTP");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-[#F8F1FF] to-[#EFE7FF] px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6 sm:p-8">

        {/* HEADER */}
        <div className="text-center mb-6">
          <h1 className="text-xl sm:text-2xl font-bold text-[#534D56]">
            Secure Login
          </h1>
          <p className="mt-1 text-sm text-[#656176]">
            {step === 1 && "Enter your email to receive an OTP"}
            {step === 2 && "Enter the OTP sent to your email"}
            {step === 3 && "Login successful"}
          </p>
        </div>

        {/* ERROR */}
        {error && (
          <div className="mb-4 text-center text-sm text-red-600">
            {error}
          </div>
        )}

        {/* SUCCESS */}
        {step === 3 && (
          <div className="text-center py-8">
            <div className="text-3xl mb-2">✅</div>
            <p className="font-semibold text-[#1B998B]">
              Login successful
            </p>
          </div>
        )}

        {/* ROLE */}
        {step !== 3 && (
          <div className="mb-4">
            <label className="block mb-1 text-sm font-medium text-[#534D56]">
              Login as
            </label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full rounded-lg border border-[#534D56]/20 px-4 py-3 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#1B998B]"
            >
              <option value="client">Client</option>
              <option value="employee">Employee</option>
            </select>
          </div>
        )}

        {/* STEP 1 */}
        {step === 1 && (
          <>
            <div className="mb-4">
              <label className="block mb-1 text-sm font-medium text-[#534D56]">
                Email address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full rounded-lg border border-[#534D56]/20 px-4 py-3 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#1B998B]"
              />
            </div>

            <button
              onClick={sendOtp}
              disabled={loading}
              className="w-full py-3 rounded-lg bg-[#1B998B] text-white font-semibold hover:opacity-90 disabled:opacity-60"
            >
              {loading ? "Sending OTP..." : "Send OTP"}
            </button>
          </>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <>
            <div className="mb-4">
              <label className="block mb-1 text-sm font-medium text-[#534D56]">
                Enter OTP
              </label>
              <input
                type="number"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="6-digit OTP"
                className="w-full rounded-lg border border-[#534D56]/20 px-4 py-3 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#1B998B]"
              />
            </div>

            <button
              onClick={verifyOtp}
              disabled={loading}
              className="w-full py-3 rounded-lg bg-[#1B998B] text-white font-semibold hover:opacity-90 disabled:opacity-60"
            >
              {loading ? "Verifying..." : "Verify & Continue"}
            </button>

            <button
              onClick={sendOtp}
              disabled={timer > 0}
              className="mt-3 w-full text-sm text-[#656176] disabled:opacity-50"
            >
              {timer > 0 ? `Resend OTP in ${timer}s` : "Resend OTP"}
            </button>

            <button
              onClick={() => setStep(1)}
              className="mt-2 w-full text-sm text-[#656176]"
            >
              Change email
            </button>
          </>
        )}
      </div>
    </div>
  );
}
