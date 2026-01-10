import { motion } from "framer-motion";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";

const cardVariants = {
  initial: {
    y: 0,
    boxShadow: "0 0 0 rgba(27,153,139,0)"
  },
  hover: {
    y: -8,
    boxShadow: "0 20px 50px rgba(27,153,139,0.35)",
    transition: { type: "spring", stiffness: 200, damping: 15 }
  }
};

export default function About() {
  return (
    <section
      id="about"
      className="bg-[#DECDF5] py-24 md:py-36 px-4"
    >
      <div className="max-w-7xl mx-auto">

        {/* ================= ABOUT US (MAIN EMPHASIS) ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mb-20 md:mb-28"
        >
          <span className="inline-block mb-4 px-4 py-1 rounded-full bg-[#1B998B]/15 text-[#1B998B] font-semibold text-sm">
            About Us
          </span>

          <h2 className="text-3xl md:text-6xl font-extrabold leading-tight text-[#534D56]">
            Customers are our{" "}
            <span className="text-[#1B998B]">first priority</span>.
          </h2>

          <p className="mt-6 text-sm md:text-lg text-[#656176] leading-relaxed">
            At <strong>Sammunat LLC</strong>, we believe great digital products
            begin with a deep understanding of customers. Every design decision
            and engineering choice is made to create real value for the people
            who use your product.
          </p>

          <p className="mt-4 text-sm md:text-lg text-[#656176] leading-relaxed">
            We work with startups and growing businesses to build solutions that
            customers trust, enjoy, and continue to use.
          </p>
        </motion.div>

        {/* ================= VALUE CARDS ================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 mb-24">
          {[
            {
              title: "Customer-first design",
              desc:
                "We create intuitive, human-centered experiences that make your customers feel confident and engaged."
            },
            {
              title: "Scalable engineering",
              desc:
                "Our systems are designed to grow with your business, without fragile shortcuts or technical debt."
            },
            {
              title: "Clear & honest delivery",
              desc:
                "Transparent communication, realistic timelines, and solutions that actually ship."
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              initial="initial"
              whileHover="hover"
              className="
                bg-[#F8F1FF]
                p-6 md:p-10
                rounded-2xl md:rounded-3xl
                border border-[#1B998B]/20
                cursor-pointer
              "
            >
              <h3 className="text-lg md:text-2xl font-semibold text-[#1B998B]">
                {item.title}
              </h3>

              <p className="mt-3 md:mt-4 text-sm md:text-base text-[#656176] leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* ================= WHO WE ARE ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 mb-24"
        >
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-[#534D56]">
              Who we are
            </h3>

            <p className="mt-4 text-sm md:text-base text-[#656176] leading-relaxed">
              Sammunat LLC is a global digital solutions company working with
              clients across industries. We combine thoughtful design, modern
              engineering, and business clarity.
            </p>

            <p className="mt-4 text-sm md:text-base text-[#656176] leading-relaxed">
              We don’t just build software — we build long-term partnerships
              focused on meaningful customer outcomes.
            </p>
          </div>

          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="
              bg-[#F8F1FF]
              rounded-2xl md:rounded-3xl
              p-6 md:p-10
              border border-[#1B998B]/20
            "
          >
            <h4 className="text-lg md:text-xl font-semibold text-[#1B998B]">
              Why clients choose us
            </h4>

            <ul className="mt-6 space-y-4 text-sm md:text-base text-[#656176]">
              <li>• Strong customer-first mindset</li>
              <li>• Clean, maintainable codebases</li>
              <li>• Honest guidance & ownership</li>
              <li>• Long-term product thinking</li>
            </ul>
          </motion.div>
        </motion.div>

        {/* ================= CONTACT + SOCIAL ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
            bg-[#1B998B]
            rounded-2xl md:rounded-3xl
            px-6 md:px-14
            py-10 md:py-14
            flex flex-col md:flex-row
            items-center
            justify-between
            gap-6
            text-white
          "
        >
          <div>
            <p className="text-sm md:text-base opacity-90">
              Let’s build something your customers will love.
            </p>
            <p className="mt-1 text-sm md:text-lg font-semibold">
              contact@sammunat.com • +971 58 874 9689
            </p>
          </div>

          <div className="flex gap-4">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/sammunat/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
              className="
                w-11 h-11
                rounded-full
                bg-[#0A66C2]
                flex items-center justify-center
                text-white
                hover:scale-110
                transition-transform
              "
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/sammunat_llc/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                w-11 h-11
                rounded-full
                bg-pink-500
                flex items-center justify-center
                text-white
                hover:scale-110
                transition-transform
              "
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}




