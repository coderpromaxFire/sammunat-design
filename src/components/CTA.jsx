import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="relative py-32 text-center overflow-hidden">

      {/* soft background glow */}
      <div className="
        absolute inset-0
        bg-gradient-to-b from-transparent via-blue-500/10 to-transparent
        pointer-events-none
      " />

      {/* content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative z-10"
      >
        {/* heading */}
        <motion.h2
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
          className="
            text-4xl md:text-5xl font-extrabold mb-8
            bg-gradient-to-r from-blue-400 to-violet-500
            bg-clip-text text-transparent
            hero-glow
          "
        >
          Let’s Build Something Amazing
        </motion.h2>

        {/* subtext */}
        <p className="max-w-xl mx-auto text-gray-400 mb-14 text-lg leading-relaxed">
          Have an idea or a product in mind? Let’s collaborate and turn it into
          something exceptional.
        </p>

        {/* CTA button */}
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="
            relative px-12 py-4 rounded-full
            text-lg font-semibold text-white
            overflow-hidden group
          "
        >
          {/* background */}
          <span className="
            absolute inset-0
            bg-gradient-to-r from-blue-600 to-violet-600
          " />

          {/* glow */}
          <span className="
            absolute inset-0 blur-xl opacity-0
            group-hover:opacity-70
            bg-gradient-to-r from-blue-500 to-violet-500
            transition duration-500
          " />

          {/* shine sweep */}
          <span className="
            absolute inset-0 translate-x-[-120%]
            group-hover:translate-x-[120%]
            transition-transform duration-700
            bg-white/20 skew-x-12
          " />

          <span className="relative z-10">
            Contact Us
          </span>
        </motion.button>
      </motion.div>
    </section>
  );
}
