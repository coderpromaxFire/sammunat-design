import { Link } from "react-router-dom";

export default function Guidance() {
  const guidanceBlocks = [
    {
      title: "Start With Clarity, Not Hype",
      points: [
        "Don’t choose a career because it’s trending on YouTube",
        "Ask yourself: do I enjoy problem-solving, design, data, or systems?",
        "It’s okay to take 2–3 months just to explore"
      ]
    },
    {
      title: "Certificates vs Skills (Reality Check)",
      points: [
        "Certificates don’t guarantee jobs",
        "Projects + GitHub + explanations matter more",
        "One strong project beats five certificates"
      ]
    },
    {
      title: "How to Learn Without Burning Out",
      points: [
        "Don’t study 10 hours one day and quit for a week",
        "Consistency > motivation",
        "2 focused hours daily is enough if done properly"
      ]
    },
    {
      title: "Common Student Mistakes",
      points: [
        "Trying to learn everything at once",
        "Copy-pasting projects without understanding",
        "Waiting to be ‘perfect’ before applying"
      ]
    },
    {
      title: "Internships: What to Accept & What to Avoid",
      points: [
        "Avoid internships with no learning or mentorship",
        "Stipend matters less than real work exposure",
        "Ask what you will build or learn before joining"
      ]
    }
  ];

  const helpfulLinks = [
    {
      label: "How to build projects (freeCodeCamp)",
      url: "https://www.freecodecamp.org/news/tag/projects/"
    },
    {
      label: "roadmap.sh – choose learning paths",
      url: "https://roadmap.sh"
    },
    {
      label: "Internshala (internship listings)",
      url: "https://internshala.com"
    },
    {
      label: "Wellfound (startup roles)",
      url: "https://wellfound.com/jobs"
    }
  ];

  return (
    <section className="py-24 px-4 bg-[#F8F1FF] min-h-screen">
      <div className="max-w-5xl mx-auto">

        {/* Back */}
        <Link to="/students" className="text-sm text-[#1B998B]">
          ← Back to Student Corner
        </Link>

        {/* Header */}
        <header className="mt-4 mb-10">
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#534D56]">
            Guidance & Reality Checks
          </h1>
          <p className="mt-3 text-[#656176] max-w-2xl">
            Honest advice students usually learn too late.  
            Read this slowly — it can save you months of confusion.
          </p>
        </header>

        {/* Guidance Blocks */}
        <div className="space-y-6">
          {guidanceBlocks.map((block, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 shadow-lg border border-black/5"
            >
              <h2 className="text-xl font-bold text-[#534D56]">
                {block.title}
              </h2>

              <ul className="mt-3 list-disc list-inside text-sm text-[#656176] space-y-1">
                {block.points.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Helpful Links */}
        <div className="mt-10 bg-white rounded-2xl p-6 shadow-lg border border-black/5">
          <h3 className="text-lg font-bold text-[#534D56]">
            Helpful Resources
          </h3>

          <p className="mt-2 text-sm text-[#656176]">
            Use these to learn properly instead of randomly jumping between content.
          </p>

          <ul className="mt-4 space-y-2">
            {helpfulLinks.map((l, i) => (
              <li key={i}>
                <a
                  href={l.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#1B998B] hover:underline text-sm"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Final Advice */}
        <div className="mt-10 p-6 bg-[#1B998B]/10 rounded-2xl text-sm text-[#534D56]">
          <strong>Final advice:</strong>  
          You don’t need to have everything figured out today.  
          Pick one path, commit for 90 days, build projects, and reflect.  
          That’s how clarity is created.
        </div>
      </div>
    </section>
  );
}