import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const stats = [
  {
    label: "Completed Projects",
    value: 300,
    suffix: "+"
  },
  {
    label: "Happy Customers",
    value: 900,
    suffix: "+"
  },
  {
    label: "Expert Employees",
    value: 100,
    suffix: "+"
  },
  {
    label: "Years Experience",
    value: 4,
    suffix: "+"
  }
];

function AnimatedNumber({ value, suffix }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    const duration = 1500;
    const stepTime = Math.max(Math.floor(duration / end), 20);

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) clearInterval(timer);
    }, stepTime);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="relative py-28 px-6 bg-[#F8F1FF] overflow-hidden">

      {/* background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-16 left-16 w-64 h-64 bg-[#DECDF5] rounded-full blur-3xl" />
        <div className="absolute bottom-16 right-16 w-72 h-72 bg-[#1B998B]/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10">
        {stats.map((s, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            className="
              bg-[#DECDF5]/60
              backdrop-blur-xl
              rounded-3xl
              p-10
              text-center
              shadow-lg
              border border-[#534D56]/15
            "
          >
            {/* NUMBER */}
            <h3 className="text-4xl md:text-5xl font-extrabold text-[#1B998B]">
              <AnimatedNumber value={s.value} suffix={s.suffix} />
            </h3>

            {/* LABEL */}
            <p className="mt-3 text-[#656176] text-sm md:text-base font-medium tracking-wide">
              {s.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
