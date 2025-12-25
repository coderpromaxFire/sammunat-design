import { motion } from "framer-motion";


const services = [
  "Web Development",
  "Mobile Apps",
  "UI/UX Design",
  "SEO & Marketing",
  "Video Editing",
  "Custom Software"
];

export default function Services() {
  return (
    <section className="py-28 px-8">
      <h2 className="text-3xl font-bold text-center mb-16">Our Services</h2>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {services.map((s, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05, y: -10 }}
            className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 shadow-xl"
          >
            <h3 className="text-xl font-semibold mb-4">{s}</h3>
            <p className="text-gray-400">
              High-quality scalable solutions tailored for modern businesses.
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
