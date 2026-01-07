import { motion } from "framer-motion";

const steps = [
  {
    title: "Discover",
    desc: "We deeply understand your idea, users, and goals before building anything."
  },
  {
    title: "Design",
    desc: "We craft clean, intuitive interfaces focused on clarity and experience."
  },
  {
    title: "Develop",
    desc: "We build scalable, high-performance solutions using modern technologies."
  },
  {
    title: "Test",
    desc: "Every detail is tested for performance, reliability, and usability."
  },
  {
    title: "Deliver",
    desc: "We launch, monitor, and continuously improve your product."
  }
];

export default function Showcase() {
  return (
    <section className="relative py-32 px-6 bg-[#F8F1FF] overflow-hidden">

      {/* Subtle background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-24 left-12 w-72 h-72 bg-[#DECDF5] rounded-full blur-3xl" />
        <div className="absolute bottom-24 right-12 w-80 h-80 bg-[#1B998B]/10 rounded-full blur-3xl" />
      </div>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-extrabold text-center mb-20 text-[#534D56]"
      >
        How We <span className="text-[#1B998B]">Work</span>
      </motion.h2>

      {/* Timeline */}
      <div className="relative max-w-4xl mx-auto">

        {/* Vertical line */}
        <div className="absolute left-4 top-0 bottom-0 w-[2px] bg-[#1B998B]/30" />

        <div className="space-y-16">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative pl-16"
            >
              {/* Dot */}
              <div className="
                absolute left-0 top-2
                w-8 h-8 rounded-full
                bg-[#1B998B]
                flex items-center justify-center
                text-white font-semibold
                shadow-md
              ">
                {i + 1}
              </div>

              {/* Card */}
              <div
                className="
                  bg-[#DECDF5]
                  rounded-2xl p-8
                  shadow-md
                  transition-all duration-300
                  hover:shadow-xl hover:-translate-y-1
                "
              >
                <h3 className="text-xl font-semibold text-[#534D56] mb-3">
                  {step.title}
                </h3>

                <p className="text-[#656176] leading-relaxed max-w-xl">
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
