import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function BlogCard({ blog, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      viewport={{ once: true }}
      className="
        bg-white
        rounded-2xl
        border border-[#534D56]/10
        p-5 md:p-8
        hover:border-[#1B998B]/40
        transition
      "
    >
      <p className="text-xs text-[#656176] mb-2 md:mb-3">
        {blog.date} · {blog.readTime} min read
      </p>

      <h3 className="text-lg md:text-xl font-semibold text-[#534D56] leading-snug">
        {blog.title}
      </h3>

      <p className="mt-3 md:mt-4 text-sm md:text-base text-[#656176] leading-relaxed">
        {blog.excerpt}
      </p>

      <Link
        to={`/blog/${blog.slug}`}
        className="inline-block mt-4 md:mt-6 text-sm font-medium text-[#1B998B]"
      >
        Read article →
      </Link>
    </motion.article>
  );
}
