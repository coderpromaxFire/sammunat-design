// src/blog/BlogSection.jsx

import { motion } from "framer-motion";
import BlogCard from "./BlogCard";
import { useBlogs } from "./useBlogs";

export default function BlogSection() {
  const { blogs, loading } = useBlogs();

  if (loading) {
    return (
      <div className="py-24 text-center text-[#656176]">
        Loading blogs...
      </div>
    );
  }

  return (
    <section id="blog" className="py-40 px-6 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center mb-20"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#534D56]">
          Writing & Insights
        </h2>
      </motion.div>

      <div className="max-w-6xl mx-auto grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog, index) => (
          <BlogCard key={blog.slug} blog={blog} index={index} />
        ))}
      </div>
    </section>
  );
}



