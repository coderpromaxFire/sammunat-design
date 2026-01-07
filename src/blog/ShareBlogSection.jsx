// src/blog/ShareBlogSection.jsx

import { motion } from "framer-motion";

export default function ShareBlogSection() {
  return (
    <section className="py-32 px-6 bg-[#F8F1FF]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#534D56]">
          Share Your Blog
        </h2>

        <p className="mt-4 text-[#656176] text-lg leading-relaxed">
          Have a story, experience, or insight you’d like to share?  
          Submit your blog and get featured on our website.
        </p>

        <div className="mt-10">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSedZFX0hGgo-Ewgh5cCPFvCU_x4-tj_eOiT9JhGnY0x23cCCA/viewform?usp=dialog"
            target="_blank"
            rel="noreferrer"
            className="
              inline-flex items-center justify-center
              px-10 py-4
              rounded-full
              bg-[#1B998B]
              text-white
              text-lg
              font-medium
              hover:bg-[#178f7f]
              transition
            "
          >
            Submit Your Blog →
          </a>
        </div>

        <p className="mt-6 text-sm text-[#656176]">
          All submissions are reviewed before publishing.
        </p>
      </motion.div>
    </section>
  );
}

