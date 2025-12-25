
import { motion } from "framer-motion";

const services = [
  {
    title: "Web Development",
    desc: "High-performance, scalable web apps built for growth."
  },
  {
    title: "Mobile Apps",
    desc: "Smooth, fast, and modern mobile experiences."
  },
  {
    title: "UI / UX Design",
    desc: "Designs that convert users into customers."
  },
  {
    title: "SEO & Marketing",
    desc: "Rank higher, reach faster, grow smarter."
  },
  {
    title: "Video Editing",
    desc: "Cinematic edits that tell powerful stories."
  },
  {
    title: "Custom Software",
    desc: "Tailored solutions for complex business needs."
  }
];

export default function Services() {
  return (
    <section className="py-32 px-8 relative overflow-hidden">

      {/* Section glow background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-transparent pointer-events-none" />

      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-20">
        <span className="bg-gradient-to-r from-blue-400 to-violet-500 bg-clip-text text-transparent">
          Our Services
        </span>
      </h2>

      <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto relative z-10">
        {services.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ y: -12 }}
            className="group relative"
          >
            {/* Gradient glow border */}
            <div className="
              absolute inset-0 rounded-3xl
              bg-gradient-to-r from-blue-500 to-violet-600
              opacity-0 group-hover:opacity-100
              blur-xl transition duration-500
            " />

            {/* Card */}
            <div
              className="
                relative rounded-3xl p-8 h-full
                backdrop-blur-xl bg-white/5
                border border-white/10
                shadow-2xl
                transition-all duration-500
                group-hover:border-white/30
              "
            >
              {/* Title */}
              <h3 className="
                text-xl font-semibold mb-4
                bg-gradient-to-r from-blue-400 to-violet-400
                bg-clip-text text-transparent
              ">
                {s.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 leading-relaxed">
                {s.desc}
              </p>

              {/* Hover underline */}
              <span className="
                absolute bottom-6 left-8 right-8 h-[1px]
                bg-gradient-to-r from-blue-500 to-violet-500
                scale-x-0 group-hover:scale-x-100
                transition-transform origin-left duration-500
              " />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
