import { motion } from "framer-motion";


const steps = ["Discover", "Design", "Develop", "Deliver"];

export default function Process() {
  return (
    <section className="py-24 px-8 bg-black/30">
      <h2 className="text-3xl font-bold text-center mb-14">How We Work</h2>

      <div className="flex flex-wrap justify-center gap-10">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.1 }}
            className="w-40 h-40 backdrop-blur-md bg-white/5 border border-white/10 rounded-full flex flex-col items-center justify-center"
          >
            <span className="text-blue-500 font-bold text-xl">{i + 1}</span>
            <p className="mt-2">{step}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
