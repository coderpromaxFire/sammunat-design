import { Link } from "react-router-dom";

/**
 * Careers.jsx
 * Student-facing page that highlights major tech career paths,
 * what they do, key skills, suggested learning links, and top colleges.
 *
 * Sources used to compile guidance: LSE insights (in-demand roles),
 * rankings (QS / THE), national rankings (NIRF), major learning platforms
 * (freeCodeCamp, Coursera), and trusted tutorial channels (Traversy Media).
 * (Links are provided below for students to explore.)
 */

export default function Careers() {
  const careers = [
    {
      id: "software",
      title: "Software Engineer (Frontend / Backend / Full-stack)",
      micro:
        "Build products, features, and services — the backbone role for most tech companies.",
      keySkills: [
        "Languages: JavaScript, Python, Java, TypeScript",
        "Frontend: React / Next.js, HTML, CSS",
        "Backend: Node.js, Django, Spring, Databases",
        "Version control, testing, deployment"
      ],
      learnLinks: [
        { label: "Frontend roadmap (roadmap.sh)", href: "https://roadmap.sh/frontend" },
        { label: "Full web dev courses (Coursera)", href: "https://www.coursera.org/courses?query=web+development" },
        { label: "Hands-on projects (freeCodeCamp)", href: "https://www.freecodecamp.org/" }
      ]
    },
    {
      id: "ai",
      title: "AI / ML Engineer",
      micro: "Train and productionize models that add intelligence to products.",
      keySkills: [
        "Python, ML libraries (PyTorch, TensorFlow)",
        "Data pipelines, feature engineering",
        "Model evaluation, deployment (MLops)"
      ],
      learnLinks: [
        { label: "Machine Learning courses (Coursera)", href: "https://www.coursera.org/search?query=machine%20learning" },
        { label: "Practical ML tutorials (freeCodeCamp)", href: "https://www.freecodecamp.org/news/tag/machine-learning/" }
      ]
    },
    {
      id: "data",
      title: "Data Scientist / Data Engineer",
      micro:
        "Turn data into insights and build reliable data infrastructure for teams.",
      keySkills: [
        "Statistics, SQL, Python / R",
        "Data modelling, ETL, Big Data tooling (Spark, Airflow)",
        "Storytelling & dashboards"
      ],
      learnLinks: [
        { label: "Data curriculum (Coursera)", href: "https://www.coursera.org/browse/data-science" },
        { label: "free tutorials (freeCodeCamp)", href: "https://www.freecodecamp.org/news/tag/data-science/" }
      ]
    },
    {
      id: "cloud",
      title: "Cloud Engineer / DevOps / SRE",
      micro:
        "Build resilient infrastructure, CI/CD pipelines, and scalable systems in the cloud.",
      keySkills: [
        "Cloud platforms: AWS / GCP / Azure",
        "Containers (Docker), Kubernetes",
        "CI/CD, monitoring, infra-as-code (Terraform)"
      ],
      learnLinks: [
        { label: "Cloud learning (Coursera)", href: "https://www.coursera.org/search?query=cloud%20computing" },
        { label: "Free labs & docs (AWS / GCP)", href: "https://aws.amazon.com/training/" }
      ]
    },
    {
      id: "security",
      title: "Cybersecurity Engineer",
      micro:
        "Protect products, data and users — security is a core requirement for modern systems.",
      keySkills: [
        "Network security, secure coding",
        "Threat modelling, pentesting basics",
        "Identity & access management"
      ],
      learnLinks: [
        { label: "Intro to cybersecurity (Coursera)", href: "https://www.coursera.org/search?query=cybersecurity" }
      ]
    },
    {
      id: "product",
      title: "Product Manager / Product Designer (hybrid with design)",
      micro:
        "Define what to build, why, and measure impact — the glue between business, design and engineering.",
      keySkills: [
        "Customer discovery, roadmaps, analytics",
        "Basic technical fluency",
        "UX thinking & prioritization"
      ],
      learnLinks: [
        { label: "Product courses (Coursera)", href: "https://www.coursera.org/search?query=product%20management" }
      ]
    }
  ];

  // Top-university / college links (global + India)
  const topGlobal = [
    { label: "QS Subject Rankings — Computer Science", href: "https://www.topuniversities.com/university-subject-rankings/computer-science-information-systems" },
    { label: "Times Higher Education — Computer Science", href: "https://www.timeshighereducation.com/world-university-rankings/2025/subject-ranking/computer-science" }
  ];

  const topIndia = [
    { label: "NIRF — India (Engineering)", href: "https://nirfindia.org/Rankings/2025/EngineeringRanking.html" },
    { label: "List of top IITs (overview)", href: "https://www.shiksha.com/engineering/articles/iits-in-india-blogId-12884" }
  ];

  const practicalResources = [
    { label: "roadmap.sh (role roadmaps)", href: "https://roadmap.sh" },
    { label: "freeCodeCamp (free projects & curriculum)", href: "https://www.freecodecamp.org/" },
    { label: "Coursera (structured courses / certificates)", href: "https://www.coursera.org/" },
    { label: "Traversy Media (YouTube tutorials)", href: "https://www.youtube.com/c/TraversyMedia" },
    { label: "freeCodeCamp (YouTube channel)", href: "https://www.youtube.com/c/Freecodecamp" }
  ];

  return (
    <section className="py-24 px-4 bg-[#F8F1FF] min-h-screen">
      <div className="max-w-6xl mx-auto">

        <Link to="/students" className="text-sm text-[#1B998B]">
          ← Back to Student Corner
        </Link>

        <header className="mt-4 mb-8">
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#534D56]">
            Career Options in Tech
          </h1>
          <p className="mt-3 text-[#656176]">
            Short, practical breakdowns of common tech careers, what you need to learn, and where to go next.
          </p>

          <div className="mt-4 text-sm text-[#656176]">
            <strong>Why these careers?</strong> Market demand and high compensation for roles in software engineering, AI/ML,
            cloud, data and security make these areas strong choices for students exploring tech. (See resources below.)
          </div>
        </header>

        {/* Career cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {careers.map(c => (
            <article key={c.id} className="bg-white rounded-2xl p-6 shadow-lg border border-black/5">
              <h2 className="text-xl font-bold text-[#534D56]">{c.title}</h2>
              <p className="mt-2 text-sm text-[#656176]">{c.micro}</p>

              <div className="mt-4">
                <h4 className="text-sm font-semibold text-[#534D56]">Key skills</h4>
                <ul className="mt-2 text-sm text-[#656176] list-disc list-inside">
                  {c.keySkills.map((s, i) => <li key={i}>{s}</li>)}
                </ul>
              </div>

              <div className="mt-4">
                <h4 className="text-sm font-semibold text-[#534D56]">Where to learn</h4>
                <ul className="mt-2 space-y-2">
                  {c.learnLinks.map((l, i) => (
                    <li key={i}>
                      <a
                        href={l.href}
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
            </article>
          ))}
        </div>

        {/* Resources / Top Colleges */}
        <div className="mt-10 grid md:grid-cols-2 gap-6">

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-black/5">
            <h3 className="text-lg font-bold text-[#534D56]">Practical resources (start here)</h3>
            <p className="mt-2 text-sm text-[#656176]">
              Prioritize projects and consistency. Use roadmaps, build small projects, and publish them (GitHub / personal site).
            </p>

            <ul className="mt-4 space-y-2">
              {practicalResources.map((r, i) => (
                <li key={i}>
                  <a href={r.href} target="_blank" rel="noreferrer" className="text-[#1B998B] hover:underline">
                    {r.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-black/5">
            <h3 className="text-lg font-bold text-[#534D56]">Top universities & colleges (guidance)</h3>
            <p className="mt-2 text-sm text-[#656176]">
              If you plan to apply to universities, check subject-specific rankings and national lists — use them to compare research, industry connections, and placement statistics.
            </p>

            <div className="mt-4">
              <h4 className="text-sm font-semibold text-[#534D56]">Global</h4>
              <ul className="mt-2">
                {topGlobal.map((t, i) => (
                  <li key={i}>
                    <a href={t.href} target="_blank" rel="noreferrer" className="text-[#1B998B] hover:underline">
                      {t.label}
                    </a>
                  </li>
                ))}
              </ul>

              <h4 className="mt-4 text-sm font-semibold text-[#534D56]">India (national ranking)</h4>
              <ul className="mt-2">
                {topIndia.map((t, i) => (
                  <li key={i}>
                    <a href={t.href} target="_blank" rel="noreferrer" className="text-[#1B998B] hover:underline">
                      {t.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Final note */}
        <div className="mt-10 text-sm text-[#656176]">
          <strong>Quick advice:</strong> build small projects, publish them, and keep a learning log. Employers look for results — not just certificates.
        </div>
      </div>
    </section>
  );
}