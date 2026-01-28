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

  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return (
      <div className="py-20 text-center text-[#656176]">
        Blog not found
      </div>
    );
  }

  return (
    <article className="max-w-3xl mx-auto py-20 md:py-32 px-4 md:px-6">
      {/* Title */}
      <h1 className="text-3xl md:text-5xl font-extrabold text-[#534D56] leading-tight">
        {blog.title}
      </h1>

      {/* Meta */}
      <p className="mt-4 text-sm text-[#656176]">
        {blog.date} • {blog.author} • {blog.readTime} min read
      </p>

      {/* Content */}
      <div className="mt-10 space-y-6 text-[#656176] leading-relaxed">
        {blog.content.map((block, index) => {
          if (block.type === "paragraph") {
            return <p key={index}>{block.text}</p>;
          }

          if (block.type === "heading") {
            return (
              <h2
                key={index}
                className="text-xl md:text-2xl font-semibold text-[#534D56] mt-8"
              >
                {block.text}
              </h2>
            );
          }

          if (block.type === "list") {
            return (
              <ul key={index} className="list-disc pl-6 space-y-2">
                {block.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            );
          }

          return null;
        })}
      </div>

      {/* Back */}
      <Link
        to="/#blog"
        className="inline-block mt-14 text-sm font-medium text-[#1B998B]"
      >
        ← Back to blogs
      </Link>
    </article>
  );
}