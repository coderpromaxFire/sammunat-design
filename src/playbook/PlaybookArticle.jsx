import { useParams, Link } from "react-router-dom";
import { playbookCategories } from "./playbookData";

export default function PlaybookArticle() {
  const { slug } = useParams();

  const article = playbookCategories
    .flatMap(cat => cat.articles)
    .find(a => a.slug === slug);

  if (!article) {
    return (
      <div className="py-40 text-center text-[#656176]">
        Article not found.
      </div>
    );
  }

  return (
    <section className="py-24 px-4 bg-[#F8F1FF]">
      <div className="max-w-3xl mx-auto">

        {/* Back */}
        <Link
          to="/"
          className="inline-block mb-6 text-sm text-[#1B998B]"
        >
          ← Back to Playbook
        </Link>

        {/* Article */}
        <div className="bg-white rounded-3xl p-8 md:p-14 shadow-xl border border-black/5">
          <h1 className="text-2xl md:text-4xl font-extrabold text-[#534D56] leading-tight">
            {article.title}
          </h1>

          <div className="mt-8 text-[#656176] whitespace-pre-line leading-relaxed text-sm md:text-lg">
            {article.content}
          </div>

          {/* Soft CTA */}
          <div className="mt-12 p-6 rounded-2xl bg-[#1B998B]/10">
            <p className="text-sm text-[#534D56] font-medium">
              Need guidance building this properly?
            </p>
            <p className="mt-1 text-sm text-[#656176]">
              Sammunat helps people turn clarity into execution.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}