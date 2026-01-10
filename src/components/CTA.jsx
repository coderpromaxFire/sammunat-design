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
      id="cta"
      className="
        relative
        py-16 px-4
        md:py-32 md:px-6
        bg-[#F8F1FF]
        overflow-hidden
      "
    >
      {/* Dot background */}
      <div
        className="
          absolute inset-0
          opacity-[0.25]
          bg-[radial-gradient(circle_at_1px_1px,#1B998B_1.4px,transparent_1.4px)]
          [background-size:26px_26px]
        "
      />

      {/* Floating chat icons */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.span
            key={i}
            initial={{ y: 0 }}
            animate={{ y: [-20, 20, -20] }}
            transition={{
              duration: 10 + i,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute text-[#1B998B]/30 select-none"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              fontSize: `${14 + Math.random() * 10}px`
            }}
          >
            💬
          </motion.span>
        ))}
      </div>

      {/* Blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-60 h-60 bg-[#1B998B]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#DECDF5] rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto grid gap-12 md:grid-cols-2 items-center">
        {/* Left */}
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

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-[#DECDF5] rounded-2xl p-5 md:p-8 shadow-xl"
        >
          {status === "success" ? (
            <p className="text-green-600 font-medium text-center">
              ✅ Message sent successfully!
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg text-sm"
              />

              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="Email Address"
                className="w-full px-4 py-3 rounded-lg text-sm"
              />

              <input
                name="phone"
                type="tel"
                value={form.phone}
                onChange={handleChange}
                required
                placeholder="Phone Number"
                className="w-full px-4 py-3 rounded-lg text-sm"
              />

              <textarea
                name="message"
                rows="4"
                value={form.message}
                onChange={handleChange}
                required
                placeholder="Message"
                className="w-full px-4 py-3 rounded-lg resize-none text-sm"
              />

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                className="w-full py-3 bg-[#1B998B] text-white rounded-lg font-semibold"
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


