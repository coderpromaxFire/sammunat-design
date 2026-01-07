// src/blog/BlogPost.jsx

import { useParams, Link } from "react-router-dom";
import { useBlogs } from "./useBlogs";

export default function BlogPost() {
  const { slug } = useParams();
  const { blogs, loading } = useBlogs();

  if (loading) {
    return (
      <div className="py-32 text-center text-[#656176]">
        Loading content...
      </div>
    );
  }

  const blog = blogs.find(b => b.slug === slug);

  if (!blog) {
    return (
      <div className="py-32 text-center text-[#656176]">
        Blog not found
      </div>
    );
  }

  return (
    <article className="max-w-3xl mx-auto py-32 px-6">
      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-[#534D56] leading-tight">
        {blog.title}
      </h1>

      {/* Meta */}
      <p className="mt-4 text-sm text-[#656176]">
        {blog.date} • {blog.author} • {blog.readTime} min read
      </p>

      {/* Content */}
      <div className="mt-12 space-y-6 text-[#656176] leading-relaxed">
        {blog.content &&
          blog.content.split("\n\n").map((para, i) => (
            <p key={i}>{para}</p>
          ))}
      </div>

      <Link
        to="/#blog"
        className="inline-block mt-16 text-sm font-medium text-[#1B998B]"
      >
        ← Back to blogs
      </Link>
    </article>
  );
}
