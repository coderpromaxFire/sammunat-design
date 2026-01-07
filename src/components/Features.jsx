import { motion } from "framer-motion";

const features = [
  {
    title: "Scalable Architecture",
    desc: "Systems designed to grow with your product without painful rewrites."
  },
  {
    title: "Clean UI / UX",
    desc: "Interfaces that feel intuitive, simple, and conversion-focused."
  },
  {
    title: "Secure by Default",
    desc: "Security best practices built in from the very first line of code."
  },
  {
    title: "Performance First",
    desc: "Fast load times and smooth experiences across all devices."
  },
  {
    title: "Modern Tech Stack",
    desc: "Built using reliable, future-ready tools and frameworks."
  },
  {
    title: "Fast & Reliable Delivery",
    desc: "Lean process that ships real value without unnecessary delays."
  }
];

export default function Features() {
  return (
    <section
      id="features"
      className="relative py-40 px-6 bg-[#F8F1FF] overflow-hidden"
    >
      {/* DOT WALLPAPER */}
      <div
        className="
          absolute inset-0
          opacity-[0.32]
          bg-[radial-gradient(circle_at_1px_1px,#1B998B_1.4px,transparent_1.4px)]
          [background-size:24px_24px]
        "
      />

      {/* CONTENT */}
      <div className="relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-32">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#534D56]">
            Why Choose <span className="text-[#1B998B]">Us</span>
          </h2>

          <p className="mt-6 text-lg text-[#656176] leading-relaxed">
            We focus on building digital products that are thoughtful,
            scalable, and built to last.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="
                p-10 rounded-3xl
                bg-[#DECDF5]/55
                backdrop-blur-md
                border border-[#534D56]/20
                shadow-xl
              "
            >
              <h3 className="text-2xl font-semibold text-[#1B998B] mb-4">
                {f.title}
              </h3>
              <p className="text-[#656176]">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

