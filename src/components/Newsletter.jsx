import { motion } from "framer-motion";
import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");

    try {
      const formData = new URLSearchParams();
      formData.append("email", email);

      const res = await fetch(
        "https://script.google.com/macros/s/AKfycbxld4Oz0E30aMf5OwaF3CGC8DYIDtyu6P_VBn9kSQAUbUY4f7-1jJ63w2snQg8OQ1nE/exec",
        {
          method: "POST",
          body: formData
        }
      );

      if (!res.ok) throw new Error("Request failed");

      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="relative py-32 px-6 bg-[#F8F1FF] overflow-hidden">
      {/* Soft outer background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-16 left-12 w-72 h-72 bg-[#1B998B]/15 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#DECDF5]/80 rounded-full blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="
          relative z-10
          max-w-3xl mx-auto
          rounded-3xl
          shadow-2xl
          px-10 py-14
          text-center
          bg-[#DECDF5]/75
          backdrop-blur-xl
          overflow-hidden
        "
      >
        {/* 🔹 DOTTED BACKGROUND INSIDE CARD */}
        <div
          className="
            absolute inset-0
            opacity-[0.28]
            bg-[radial-gradient(circle_at_1px_1px,#1B998B_1.3px,transparent_1.3px)]
            [background-size:24px_24px]
          "
        />

        {/* CONTENT */}
        <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#534D56] mb-4">
            Stay in the Loop
          </h2>

          <p className="text-[#656176] mb-10">
            Get insights, updates, and hiring announcements straight to your inbox.
          </p>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="
                w-full sm:w-80
                px-5 py-4 rounded-xl
                bg-[#F8F1FF]
                border border-[#534D56]/20
                focus:outline-none
                focus:ring-2 focus:ring-[#1B998B]
                transition
              "
            />

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              type="submit"
              disabled={status === "loading"}
              className="
                px-8 py-4 rounded-xl
                bg-[#1B998B]
                text-white font-semibold
                shadow-lg shadow-[#1B998B]/40
                hover:opacity-90
                disabled:opacity-60
                transition
              "
            >
              {status === "loading" ? "Subscribing..." : "Subscribe"}
            </motion.button>
          </form>

          {/* Status Messages */}
          {status === "success" && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-6 text-[#1B998B] font-medium"
            >
              ✅ Thanks for subscribing! We’ll keep you updated.
            </motion.p>
          )}

          {status === "error" && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-6 text-red-500 font-medium"
            >
              ❌ Something went wrong. Please try again.
            </motion.p>
          )}

          {/* LinkedIn CTA */}
          <p className="mt-10 text-sm text-[#656176]">
            Prefer LinkedIn?{" "}
            <a
              href="https://www.linkedin.com/company/sammunat/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1B998B] font-semibold hover:underline"
            >
              Follow us there →
            </a>
          </p>
        </div>
      </motion.div>
    </section>
  );
}

