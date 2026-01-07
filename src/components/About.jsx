import { motion } from "framer-motion";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";

const infoBlocks = [
  {
    title: "Who We Are",
    desc:
      "Sammunat LLC is a global digital solutions company focused on building scalable, modern, and reliable technology products. We work with startups and enterprises to turn ideas into impactful digital experiences."
  },
  {
    title: "What We Do",
    desc:
      "We specialize in web development, SaaS platforms, CRM & ERP systems, UI/UX design, video editing, and automation solutions that help businesses grow efficiently."
  },
  {
    title: "Our Approach",
    desc:
      "We believe in clarity, transparency, and long-term partnerships. Our team focuses on clean architecture, performance, and human-centered design in everything we build."
  }
];

export default function About() {
  return (
    <section
      id="about"
      className="py-32 px-6 bg-[#DECDF5]"
    >
      <div className="max-w-6xl mx-auto">

        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#534D56]">
            About <span className="text-[#1B998B]">Sammunat</span>
          </h2>

          <p className="mt-6 text-lg text-[#656176] max-w-2xl mx-auto">
            Building meaningful digital products through technology,
            creativity, and collaboration.
          </p>
        </motion.div>

        {/* INFO CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-24">
          {infoBlocks.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="
                bg-[#F8F1FF]
                rounded-3xl
                p-10
                shadow-lg
                border border-[#534D56]/15
              "
            >
              <h3 className="text-2xl font-semibold text-[#1B998B] mb-4">
                {item.title}
              </h3>

              <p className="text-[#656176] leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* COMPANY INFO + SOCIALS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="
            bg-[#F8F1FF]
            rounded-3xl
            p-12
            text-center
            shadow-xl
            border border-[#534D56]/15
          "
        >
          <h3 className="text-3xl font-bold text-[#534D56] mb-6">
            Company Information
          </h3>

          <div className="space-y-3 text-[#656176] text-lg mb-8">
            <p>
              <strong>Company:</strong> Sammunat LLC
            </p>
            <p>
              <strong>Address:</strong> 127 N Higgins Ave, Ste 307d,
              Missoula, MT 59802, USA
            </p>
            <p>
              <strong>Email:</strong> contact@sammunat.com
            </p>
            <p>
              <strong>Phone:</strong> +971 58 874 9689
            </p>
          </div>

          {/* SOCIAL LINKS */}
          <div className="flex justify-center gap-6">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/sammunat/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Sammunat LinkedIn"
              className="
                w-12 h-12 rounded-full
                flex items-center justify-center
                bg-[#0A66C2]
                text-white
                hover:scale-110 hover:shadow-lg
                transition
              "
            >
              <FaLinkedinIn size={20} />
            </a>

            {/* Instagram (replace link if you have exact handle) */}
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Sammunat Instagram"
              className="
                w-12 h-12 rounded-full
                flex items-center justify-center
                bg-gradient-to-tr from-pink-500 via-purple-500 to-orange-400
                text-white
                hover:scale-110 hover:shadow-lg
                transition
              "
            >
              <FaInstagram size={20} />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
