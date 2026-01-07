import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const stats = [
  { label: "Completed Projects", value: 300, suffix: "+" },
  { label: "Happy Customers", value: 900, suffix: "+" },
  { label: "Expert Employees", value: 100, suffix: "+" },
  { label: "Years Experience", value: 4, suffix: "+" }
];

function AnimatedNumber({ value, suffix }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= value) clearInterval(timer);
    }, 20);
    return () => clearInterval(timer);
  }, [value]);

  return <span>{count}{suffix}</span>;
}

export default function Stats() {
  return (
    <section className="relative py-16 px-4 md:py-28 md:px-6 bg-[#F8F1FF]">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
        {stats.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#DECDF5]/60 rounded-2xl p-5 md:p-10 text-center shadow"
          >
            <h3 className="text-2xl md:text-5xl font-extrabold text-[#1B998B]">
              <AnimatedNumber value={s.value} suffix={s.suffix} />
            </h3>
            <p className="mt-2 text-xs md:text-base text-[#656176]">
              {s.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

