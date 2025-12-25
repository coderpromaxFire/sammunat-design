import { motion } from "framer-motion";


export default function CTA() {
  return (
    <section className="py-24 text-center">
      <motion.h2
        whileHover={{ scale: 1.05 }}
        className="text-3xl font-bold mb-6"
      >
        Let’s Build Something Amazing
      </motion.h2>
      <button className="px-10 py-4 bg-blue-600 rounded-xl hover:scale-105 transition">
        Contact Us
      </button>
    </section>
  );
}
