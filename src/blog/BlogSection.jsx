


import BlogCard from "./BlogCard";
import blogData from "./blogData";

export default function BlogSection() {
  if (!blogData || blogData.length === 0) {
    return (
      <section className="py-24 text-center">
        <p className="text-[#656176]">No blogs available.</p>
      </section>
    );
  }

  return (
    <section className="py-24 px-6 bg-[#F8F1FF]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#534D56] mb-12">
          Writing & Insights
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogData.map((blog, index) => (
            <BlogCard key={blog.slug} blog={blog} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

