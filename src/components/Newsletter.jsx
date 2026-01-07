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

      const res = await fetch("YOUR_SCRIPT_URL", {
        method: "POST",
        body: formData
      });

      if (!res.ok) throw new Error();
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="relative py-20 md:py-32 px-4 md:px-6 bg-[#F8F1FF] overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="
          relative z-10
          max-w-3xl mx-auto
          rounded-2xl md:rounded-3xl
          px-6 md:px-10
          py-10 md:py-14
          text-center
          bg-[#DECDF5]/75
          backdrop-blur-xl
          shadow-2xl
        "
      >
        <h2 className="text-2xl md:text-4xl font-extrabold text-[#534D56] mb-3">
          Stay in the Loop
        </h2>

        <p className="text-sm md:text-base text-[#656176] mb-6 md:mb-10">
          Get insights, updates, and hiring announcements straight to your inbox.
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full sm:w-80 px-4 py-3 rounded-xl border border-[#534D56]/20"
          />

          <motion.button
            whileTap={{ scale: 0.96 }}
            type="submit"
            className="px-6 py-3 rounded-xl bg-[#1B998B] text-white font-semibold"
          >
            Subscribe
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
}


