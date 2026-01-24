import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { playbookCategories } from "./playbookData";

export default function PlaybookSection() {
  return (
    <section className="py-24 px-4 bg-[#F8F1FF]">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-20 max-w-2xl">
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#534D56]">
            The <span className="text-[#1B998B]">Sammunat Playbook</span>
          </h2>
          <p className="mt-4 text-[#656176] text-sm md:text-lg">
            Clear thinking for people building their digital future.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {playbookCategories.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="relative bg-white rounded-3xl p-8 shadow-xl border border-black/5"
            >
              {/* Accent bar */}
              <div
                className="absolute top-0 left-0 h-1.5 w-full rounded-t-3xl"
                style={{ backgroundColor: cat.accent }}
              />

              <h3 className="text-xl md:text-2xl font-bold text-[#534D56]">
                {cat.title}
              </h3>

              <p className="mt-2 text-sm text-[#656176]">
                {cat.desc}
              </p>

              <div className="mt-6 space-y-4">
                {cat.articles.map(article => (
                  <Link
                    key={article.slug}
                    to={`/playbook/${article.slug}`}
                    className="
                      block
                      p-4
                      rounded-xl
                      bg-[#F8F1FF]
                      hover:bg-white
                      border border-transparent
                      hover:border-[#1B998B]/30
                      transition
                    "
                  >
                    <p className="font-semibold text-[#534D56]">
                      {article.title}
                    </p>
                    <p className="mt-1 text-xs text-[#656176]">
                      {article.summary}
                    </p>
                  </Link>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}