import { motion } from "framer-motion";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";

const infoBlocks = [
  {
    title: "Who We Are",
    desc:
      "Sammunat LLC is a global digital solutions company focused on building scalable, modern products."
  },
  {
    title: "What We Do",
    desc:
      "We specialize in web development, SaaS platforms, CRM & ERP systems, UI/UX, and automation."
  },
  {
    title: "Our Approach",
    desc:
      "We believe in clarity, transparency, and long-term partnerships."
  }
];

export default function About() {
  return (
    <section id="about" className="py-16 px-4 md:py-32 md:px-6 bg-[#DECDF5]">
      <div className="max-w-6xl mx-auto">
        <motion.div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl md:text-5xl font-extrabold">
            About <span className="text-[#1B998B]">Sammunat</span>
          </h2>
          <p className="mt-4 text-sm md:text-lg text-[#656176]">
            Building meaningful digital products.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-10 mb-16">
          {infoBlocks.map((item, i) => (
            <div key={i} className="bg-[#F8F1FF] p-6 md:p-10 rounded-2xl shadow">
              <h3 className="text-lg md:text-2xl font-semibold text-[#1B998B]">
                {item.title}
              </h3>
              <p className="mt-3 text-sm md:text-base text-[#656176]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-[#F8F1FF] p-6 md:p-12 rounded-2xl text-center shadow">
          <p className="text-sm md:text-lg text-[#656176]">
            contact@sammunat.com • +971 58 874 9689
          </p>

          <div className="mt-6 flex justify-center gap-4">
            <a className="w-10 h-10 rounded-full bg-[#0A66C2] flex items-center justify-center text-white">
              <FaLinkedinIn />
            </a>
            <a className="w-10 h-10 rounded-full bg-gradient-to-tr from-pink-500 to-orange-400 flex items-center justify-center text-white">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
