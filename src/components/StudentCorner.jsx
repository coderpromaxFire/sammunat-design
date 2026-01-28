import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function StudentCorner() {
  return (
    <section className="py-24 px-4 bg-[#F8F1FF]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-white rounded-3xl p-10 md:p-16 shadow-2xl border border-[#1B998B]/20"
        >
          {/* 🔥 NEW TAG – LEFT CORNER */}
          <div className="absolute -top-4 -left-4">
            <span className="px-4 py-1 text-xs font-bold text-white bg-[#EF476F] rounded-full animate-pulse shadow-[0_0_20px_rgba(239,71,111,0.9)]">
              NEW
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold text-[#534D56]">
            Student <span className="text-[#1B998B]">Corner</span>
          </h2>

          <p className="mt-4 max-w-xl text-[#656176] text-sm md:text-lg">
            A dedicated space for students to explore careers, internships,
            learning paths, and practical tools.
          </p>

          <Link
            to="/students"
            className="inline-block mt-8 px-6 py-3 rounded-xl bg-[#1B998B] text-white font-semibold hover:scale-105 transition"
          >
            Enter Student Corner →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}