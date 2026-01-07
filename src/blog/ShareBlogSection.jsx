import { useParams, Link } from "react-router-dom";
import { useBlogs } from "./useBlogs";

export default function BlogPost() {
  const { slug } = useParams();
  const { blogs, loading } = useBlogs();

  if (loading) {
    return (
      <div className="py-20 text-center text-[#656176]">
        Loading content...
      </div>
    );
  }

  const blog = blogs.find(b => b.slug === slug);

  if (!blog) {
    return (
      <div className="py-20 text-center text-[#656176]">
        Blog not found
      </div>
    );
  }

  return (
    <article className="max-w-3xl mx-auto py-20 md:py-32 px-4 md:px-6">
      <h1 className="text-3xl md:text-5xl font-extrabold text-[#534D56] leading-tight">
        {blog.title}
      </h1>

      <p className="mt-3 md:mt-4 text-sm text-[#656176]">
        {blog.date} • {blog.author} • {blog.readTime} min read
      </p>

      <div className="mt-8 md:mt-12 space-y-5 md:space-y-6 text-sm md:text-base text-[#656176] leading-relaxed">
        {blog.content}
      </div>

      <Link
        to="/#blog"
        className="inline-block mt-12 md:mt-16 text-sm font-medium text-[#1B998B]"
      >
        ← Back to blogs
      </Link>
    </article>
  );
}
