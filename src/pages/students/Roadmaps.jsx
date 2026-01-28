import { Link } from "react-router-dom";

export default function Roadmaps() {
  const roadmaps = [
    {
      title: "Frontend Developer Roadmap",
      intro:
        "Focuses on building user interfaces and client-side logic.",
      steps: [
        "HTML, CSS (Flexbox, Grid)",
        "JavaScript (ES6+, DOM, async)",
        "React / Next.js",
        "State management & APIs",
        "Basic testing & performance"
      ],
      links: [
        {
          label: "Frontend Roadmap (roadmap.sh)",
          url: "https://roadmap.sh/frontend"
        },
        {
          label: "freeCodeCamp – Frontend Curriculum",
          url: "https://www.freecodecamp.org/learn"
        },
        {
          label: "Traversy Media – Frontend Videos",
          url: "https://www.youtube.com/c/TraversyMedia"
        }
      ]
    },
    {
      title: "Backend Developer Roadmap",
      intro:
        "Focuses on servers, databases, authentication, and APIs.",
      steps: [
        "Programming language (Node.js / Python / Java)",
        "Databases (SQL & NoSQL)",
        "REST APIs & authentication",
        "Security basics",
        "Deployment & scaling"
      ],
      links: [
        {
          label: "Backend Roadmap (roadmap.sh)",
          url: "https://roadmap.sh/backend"
        },
        {
          label: "Backend Courses (Coursera)",
          url: "https://www.coursera.org/search?query=backend%20development"
        }
      ]
    },
    {
      title: "Full Stack Developer Roadmap",
      intro:
        "Combination of frontend + backend with system understanding.",
      steps: [
        "Frontend fundamentals",
        "Backend fundamentals",
        "Database design",
        "System design basics",
        "End-to-end projects"
      ],
      links: [
        {
          label: "Full Stack Roadmap",
          url: "https://roadmap.sh/full-stack"
        },
        {
          label: "Build Full Stack Projects (freeCodeCamp)",
          url: "https://www.freecodecamp.org/news/tag/full-stack/"
        }
      ]
    },
    {
      title: "AI / Machine Learning Roadmap",
      intro:
        "For students interested in data, AI, and intelligent systems.",
      steps: [
        "Python programming",
        "Math (linear algebra, probability)",
        "Machine learning algorithms",
        "Deep learning basics",
        "Model deployment"
      ],
      links: [
        {
          label: "AI Roadmap (roadmap.sh)",
          url: "https://roadmap.sh/ai"
        },
        {
          label: "Machine Learning (Coursera)",
          url: "https://www.coursera.org/search?query=machine%20learning"
        }
      ]
    },
    {
      title: "UI / UX Design Roadmap",
      intro:
        "For students who enjoy design, usability, and user psychology.",
      steps: [
        "Design principles & color theory",
        "User research & wireframing",
        "Figma / design tools",
        "Prototyping & testing",
        "Design systems"
      ],
      links: [
        {
          label: "Design Roadmap (roadmap.sh)",
          url: "https://roadmap.sh/design"
        },
        {
          label: "Figma Learn",
          url: "https://www.figma.com/resources/learn-design/"
        }
      ]
    }
  ];

  return (
    <section className="py-24 px-4 bg-[#F8F1FF] min-h-screen">
      <div className="max-w-6xl mx-auto">

        {/* Back */}
        <Link to="/students" className="text-sm text-[#1B998B]">
          ← Back to Student Corner
        </Link>

        {/* Header */}
        <header className="mt-4 mb-10">
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#534D56]">
            Learning Roadmaps
          </h1>
          <p className="mt-3 text-[#656176] max-w-2xl">
            Structured paths to avoid random learning.  
            Pick one roadmap, follow it step-by-step, and build projects along the way.
          </p>
        </header>

        {/* Roadmap Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {roadmaps.map((rm, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 shadow-lg border border-black/5"
            >
              <h2 className="text-xl font-bold text-[#534D56]">
                {rm.title}
              </h2>

              <p className="mt-2 text-sm text-[#656176]">
                {rm.intro}
              </p>

              <div className="mt-4">
                <h4 className="text-sm font-semibold text-[#534D56]">
                  Typical learning order
                </h4>
                <ul className="mt-2 list-disc list-inside text-sm text-[#656176]">
                  {rm.steps.map((step, i) => (
                    <li key={i}>{step}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-4">
                <h4 className="text-sm font-semibold text-[#534D56]">
                  Helpful links
                </h4>
                <ul className="mt-2 space-y-2">
                  {rm.links.map((l, i) => (
                    <li key={i}>
                      <a
                        href={l.url}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm text-[#1B998B] hover:underline"
                      >
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Advice */}
        <div className="mt-10 p-6 bg-[#1B998B]/10 rounded-2xl text-sm text-[#534D56]">
          <strong>Important advice:</strong>  
          Don’t follow multiple roadmaps at once.  
          Choose one, build small projects every 2–3 weeks, and track progress publicly (GitHub, portfolio).
        </div>
      </div>
    </section>
  );
}