import RippleGrid from "./RippleGrid";
import TrueFocus from "./TrueFocus";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="relative w-full min-h-screen overflow-hidden"
      style={{ backgroundColor: "#0b0f19" }}
    >
      {/* BACKGROUND EFFECT (Aurora via RippleGrid) */}
      <div className="absolute inset-0 z-0">
        <RippleGrid
          colorStops={["#154d0bff", "#459ed6ff", "#0c4084ff"]}
          amplitude={0.9}
          blend={0.7}
          speed={0.5}
        />
      </div>

      {/* DARK OVERLAY so text is readable */}
      <div className="absolute inset-0 z-[1] bg-black/60" />

      {/* CONTENT */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center text-white">
        
        <TrueFocus
          sentence="Build True Focused Products"
          blurAmount={4}
        />

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-6 max-w-2xl text-lg text-gray-300"
        >
          Sammunat helps startups and businesses design, develop,
          and scale modern digital products with clarity and purpose.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="mt-10 flex flex-col gap-5 sm:flex-row"
        >
          <button className="rounded-lg bg-blue-600 px-8 py-3 font-medium transition hover:scale-105 hover:bg-blue-500">
            Get Consultation
          </button>

          <button className="rounded-lg border border-white/30 px-8 py-3 font-medium transition hover:bg-white hover:text-black">
            View Services
          </button>
        </motion.div>
      </div>
    </section>
  );
}
