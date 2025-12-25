import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = ["Services", "Process", "About", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className={`
        fixed top-0 left-0 w-full z-50
        transition-all duration-500
        ${scrolled
          ? "backdrop-blur-xl bg-black/60 border-b border-white/10"
          : "bg-transparent"}
      `}
    >
      {/* Top gradient rail – fade only */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: scrolled ? 1 : 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="
          h-[3px] w-full
          bg-gradient-to-r from-blue-500 via-violet-500 to-pink-500
        "
      />

      <div className="max-w-7xl mx-auto px-10 py-6 flex items-center justify-between">

        {/* LOGO */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          whileHover={{ scale: 1.03 }}
          className="relative cursor-pointer group"
        >
          <span
            className="
              heading-font text-3xl font-extrabold tracking-tight
              bg-gradient-to-r from-blue-400 to-violet-500
              bg-clip-text text-transparent
            "
          >
            Sammunat
          </span>

          {/* subtle glow */}
          <span
            className="
              absolute inset-0 blur-xl opacity-0
              group-hover:opacity-50
              bg-gradient-to-r from-blue-500 to-violet-500
              transition duration-500
            "
          />
        </motion.div>

        {/* NAV LINKS – soft stagger fade */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.15 }
            }
          }}
          className="hidden md:flex items-center gap-14 relative"
        >
          {links.map((link, i) => (
            <motion.div
              key={link}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 }
              }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className="relative group cursor-pointer"
            >
              {/* hover bg */}
              <span
                className={`
                  absolute inset-x-[-14px] inset-y-[-10px]
                  rounded-xl
                  bg-gradient-to-r from-blue-500/15 to-violet-500/15
                  transition-all duration-300
                  ${hovered === i ? "opacity-100" : "opacity-0"}
                `}
              />

              <span
                className="
                  relative z-10 heading-font text-lg font-medium
                  text-gray-300 group-hover:text-white
                  transition duration-300
                "
              >
                {link}
              </span>

              {/* underline */}
              <span
                className={`
                  absolute left-0 -bottom-2 h-[2px]
                  bg-gradient-to-r from-blue-500 to-violet-500
                  transition-all duration-300
                  ${hovered === i ? "w-full" : "w-0"}
                `}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA BUTTON – gentle */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="
            relative px-9 py-3 rounded-full
            text-base font-semibold text-white
            overflow-hidden group
          "
        >
          {/* bg */}
          <span className="
            absolute inset-0
            bg-gradient-to-r from-blue-600 to-violet-600
          " />

          {/* soft glow */}
          <span className="
            absolute inset-0 blur-xl opacity-0
            group-hover:opacity-60
            bg-gradient-to-r from-blue-500 to-violet-500
            transition duration-500
          " />

          <span className="relative z-10">
            Get Started
          </span>
        </motion.button>

      </div>
    </motion.nav>
  );
}








