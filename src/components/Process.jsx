import { motion } from "framer-motion";

const steps = [
  { title: "Discover", desc: "Understanding goals & challenges" },
  { title: "Design", desc: "Crafting intuitive experiences" },
  { title: "Develop", desc: "Building scalable solutions" },
  { title: "Deliver", desc: "Launching with precision" }
];

export default function Process() {
  return (
    <section className="relative py-32 px-8 overflow-hidden">

      {/* soft background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/60 to-transparent pointer-events-none" />

      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-20">
        <span className="bg-gradient-to-r from-blue-400 to-violet-500 bg-clip-text text-transparent">
          How We Work
        </span>
      </h2>

      <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-16">

        {/* connecting line (desktop) */}
        <div className="hidden md:block absolute top-1/2 left-0 right-0 h-[2px]
                        bg-gradient-to-r from-blue-500/40 to-violet-500/40" />

        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15, duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="relative z-10 group"
          >
            {/* glow ring */}
            <div className="
              absolute inset-0 rounded-full
              bg-gradient-to-r from-blue-500 to-violet-600
              blur-xl opacity-30 group-hover:opacity-70
              transition duration-500
            " />

            {/* step card */}
            <div className="
              relative w-48 h-48 rounded-full
              flex flex-col items-center justify-center text-center
              backdrop-blur-xl bg-white/5
              border border-white/15
              shadow-xl
              transition duration-500
            ">
              {/* step number */}
              <span className="
                text-3xl font-extrabold mb-2
                bg-gradient-to-r from-blue-400 to-violet-500
                bg-clip-text text-transparent
              ">
                {i + 1}
              </span>

              {/* title */}
              <h3 className="text-lg font-semibold text-white">
                {step.title}
              </h3>

              {/* description */}
              <p className="mt-1 text-sm text-gray-400 px-4">
                {step.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

