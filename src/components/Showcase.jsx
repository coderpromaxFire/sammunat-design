import { motion } from "framer-motion";

const steps = [
  { title: "Discover", desc: "We deeply understand your idea, users, and goals before building anything." },
  { title: "Design", desc: "We craft clean, intuitive interfaces focused on clarity and experience." },
  { title: "Develop", desc: "We build scalable, high-performance solutions using modern technologies." },
  { title: "Test", desc: "Every detail is tested for performance, reliability, and usability." },
  { title: "Deliver", desc: "We launch, monitor, and continuously improve your product." }
];

export default function Showcase() {
  return (
    <section className="relative py-16 px-4 md:py-32 md:px-6 bg-[#F8F1FF]">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-5xl font-extrabold text-center mb-12 md:mb-20 text-[#534D56]"
      >
        How We <span className="text-[#1B998B]">Work</span>
      </motion.h2>

      <div className="relative max-w-4xl mx-auto">
        <div className="absolute left-4 top-0 bottom-0 w-[2px] bg-[#1B998B]/30" />

        <div className="space-y-10 md:space-y-16">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative pl-14"
            >
              <div className="absolute left-0 top-2 w-8 h-8 rounded-full bg-[#1B998B] text-white flex items-center justify-center text-sm font-semibold">
                {i + 1}
              </div>

              <div className="bg-[#DECDF5] rounded-2xl p-5 md:p-8 shadow-md">
                <h3 className="text-lg md:text-xl font-semibold text-[#534D56] mb-2">
                  {step.title}
                </h3>
                <p className="text-sm md:text-base text-[#656176]">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
