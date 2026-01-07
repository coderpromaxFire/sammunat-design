import { motion } from "framer-motion";
import { useState } from "react";

export default function CTA() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbx7tYuT-wecDTvCn_Lk-PjGu7nJoOP8vA8wTYN_QEOtx2jHCAuESXlzxzorKmjUCXQFEg/exec",
        {
          method: "POST",
          body: JSON.stringify(form)
        }
      );

      setStatus("success");
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="
        relative
        py-16 px-4
        md:py-32 md:px-6
        bg-[#F8F1FF]
        overflow-hidden
      "
    >
      {/* 🔹 DOT WALLPAPER */}
      <div
        className="
          absolute inset-0
          opacity-[0.25]
          bg-[radial-gradient(circle_at_1px_1px,#1B998B_1.4px,transparent_1.4px)]
          [background-size:26px_26px]
        "
      />

      {/* 🔹 FLOATING CHAT ICONS */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 14 }).map((_, i) => {
          const float = 14 + Math.random() * 12;
          const duration = 12 + Math.random() * 6;
          const size = 14 + Math.random() * 10;

          return (
            <motion.span
              key={i}
              initial={{ y: 0 }}
              animate={{ y: [-float, float, -float] }}
              transition={{
                duration,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute text-[#1B998B]/30 select-none"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                fontSize: `${size}px`
              }}
            >
              💬
            </motion.span>
          );
        })}
      </div>

      {/* 🔹 BLOBS */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-60 h-60 bg-[#1B998B]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#DECDF5] rounded-full blur-3xl" />
      </div>

      {/* CONTENT */}
      <div
        className="
          relative z-10
          max-w-6xl mx-auto
          grid gap-10
          md:grid-cols-2 md:gap-16
          items-center
        "
      >
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-5xl font-extrabold text-[#534D56] mb-4">
            Let’s Build Something
            <span className="text-[#1B998B]"> Meaningful</span>
          </h2>

          <p className="text-[#656176] text-sm md:text-lg max-w-md">
            Have an idea, startup, or product in mind?
            Tell us about it — we’ll help you turn it into reality.
          </p>

          <ul className="mt-6 space-y-3 text-[#656176] text-sm md:text-base">
            <li>✔ Clean & modern solutions</li>
            <li>✔ Scalable architecture</li>
            <li>✔ Human-centered design</li>
          </ul>
        </motion.div>

        {/* RIGHT FORM */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="
            bg-[#DECDF5]
            rounded-2xl
            p-5 md:p-8
            shadow-xl
          "
        >
          {status === "success" ? (
            <p className="text-green-600 font-medium text-center">
              ✅ Message sent successfully!
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Your Name"
                className="w-full px-3 py-2.5 md:px-4 md:py-3 rounded-lg text-sm md:text-base"
              />

              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="Email Address"
                className="w-full px-3 py-2.5 md:px-4 md:py-3 rounded-lg text-sm md:text-base"
              />

              <input
                name="phone"
                type="tel"
                value={form.phone}
                onChange={handleChange}
                required
                placeholder="Phone Number"
                className="w-full px-3 py-2.5 md:px-4 md:py-3 rounded-lg text-sm md:text-base"
              />

              <textarea
                name="message"
                rows="4"
                value={form.message}
                onChange={handleChange}
                required
                placeholder="Message"
                className="w-full px-3 py-2.5 md:px-4 md:py-3 rounded-lg resize-none text-sm md:text-base"
              />

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                className="
                  w-full
                  py-3 md:py-4
                  text-sm md:text-base
                  bg-[#1B998B]
                  text-white
                  rounded-lg
                  font-semibold
                "
              >
                {status === "loading" ? "Sending..." : "Send Message"}
              </motion.button>

              {status === "error" && (
                <p className="text-red-500 text-sm text-center">
                  Something went wrong. Please try again.
                </p>
              )}
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}

