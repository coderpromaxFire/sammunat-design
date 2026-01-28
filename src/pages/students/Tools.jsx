import { Link } from "react-router-dom";

/**
 * Tools.jsx
 *
 * A curated toolbox for students across engineering & tech:
 * - Learning & practice
 * - Coding & projects
 * - Design & prototyping
 * - Productivity & planning
 * - Resume, internships & placements
 *
 * Tools selected from widely trusted platforms used by students globally.
 */

export default function Tools() {
  const categories = [
    {
      id: "learning",
      title: "Learning & Skill Building",
      description:
        "High-quality platforms to learn concepts properly instead of random YouTube hopping.",
      tools: [
        {
          name: "NPTEL",
          use: "Core engineering subjects from IIT professors",
          link: "https://nptel.ac.in/"
        },
        {
          name: "Coursera",
          use: "Structured courses & certificates (CS, Data, Core branches)",
          link: "https://www.coursera.org/"
        },
        {
          name: "edX",
          use: "University-level courses (MIT, Harvard, etc.)",
          link: "https://www.edx.org/"
        },
        {
          name: "freeCodeCamp",
          use: "Free coding curriculum + projects",
          link: "https://www.freecodecamp.org/"
        }
      ]
    },
    {
      id: "coding",
      title: "Coding & Practice Platforms",
      description:
        "Practice problem-solving, DSA, and real-world coding challenges.",
      tools: [
        {
          name: "LeetCode",
          use: "Interview-focused DSA practice",
          link: "https://leetcode.com/"
        },
        {
          name: "HackerRank",
          use: "Beginner to intermediate coding practice",
          link: "https://www.hackerrank.com/"
        },
        {
          name: "Codeforces",
          use: "Competitive programming & logic building",
          link: "https://codeforces.com/"
        },
        {
          name: "Exercism",
          use: "Mentored coding exercises",
          link: "https://exercism.org/"
        }
      ]
    },
    {
      id: "projects",
      title: "Projects & Version Control",
      description:
        "Tools to build, store, and showcase projects professionally.",
      tools: [
        {
          name: "GitHub",
          use: "Host code, collaborate, and showcase projects",
          link: "https://github.com/"
        },
        {
          name: "GitLab",
          use: "Alternative to GitHub with CI/CD",
          link: "https://gitlab.com/"
        },
        {
          name: "Vercel",
          use: "Deploy frontend & full-stack projects easily",
          link: "https://vercel.com/"
        },
        {
          name: "Netlify",
          use: "Static & JAMstack project hosting",
          link: "https://www.netlify.com/"
        }
      ]
    },
    {
      id: "design",
      title: "Design & UI/UX Tools",
      description:
        "For frontend, product, and presentation design — no design degree needed.",
      tools: [
        {
          name: "Figma",
          use: "UI/UX design, wireframes, prototypes",
          link: "https://www.figma.com/"
        },
        {
          name: "Canva",
          use: "Presentations, resumes, posters",
          link: "https://www.canva.com/"
        },
        {
          name: "Coolors",
          use: "Color palette generation",
          link: "https://coolors.co/"
        },
        {
          name: "Unsplash",
          use: "Free high-quality images",
          link: "https://unsplash.com/"
        }
      ]
    },
    {
      id: "productivity",
      title: "Productivity & Planning",
      description:
        "Stay organized, manage learning, and avoid burnout.",
      tools: [
        {
          name: "Notion",
          use: "Notes, study plans, trackers",
          link: "https://www.notion.so/"
        },
        {
          name: "Google Calendar",
          use: "Time blocking & reminders",
          link: "https://calendar.google.com/"
        },
        {
          name: "Trello",
          use: "Task & project boards",
          link: "https://trello.com/"
        },
        {
          name: "Pomofocus",
          use: "Pomodoro-based focused study",
          link: "https://pomofocus.io/"
        }
      ]
    },
    {
      id: "career",
      title: "Internships, Resume & Placements",
      description:
        "Tools that help you move from learning → earning.",
      tools: [
        {
          name: "Internshala",
          use: "Internships & training programs",
          link: "https://internshala.com/"
        },
        {
          name: "LinkedIn",
          use: "Networking, jobs, personal brand",
          link: "https://www.linkedin.com/"
        },
        {
          name: "Resume Worded",
          use: "Resume & LinkedIn profile feedback",
          link: "https://resumeworded.com/"
        },
        {
          name: "Overleaf",
          use: "Professional resumes (LaTeX)",
          link: "https://www.overleaf.com/"
        }
      ]
    }
  ];

  return (
    <section className="py-24 px-4 bg-[#F8F1FF] min-h-screen">
      <div className="max-w-6xl mx-auto">

        {/* Navigation */}
        <div className="flex justify-between items-center mb-8">
          <Link to="/students" className="text-sm text-[#1B998B]">
            ← Back to Student Corner
          </Link>
          <Link to="/" className="text-sm text-[#1B998B]">
            Back to Main Website →
          </Link>
        </div>

        {/* Header */}
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#534D56]">
          Student Tools — Learn, Build & Get Hired
        </h1>

        <p className="mt-3 text-[#656176] max-w-3xl">
          These tools are used by successful students worldwide. You don’t need all of them —
          pick what fits your goal and use them consistently.
        </p>

        {/* Tool Categories */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map(cat => (
            <article
              key={cat.id}
              className="bg-white rounded-2xl p-6 shadow-lg border border-black/5"
            >
              <h2 className="text-xl font-bold text-[#534D56]">
                {cat.title}
              </h2>

              <p className="mt-2 text-sm text-[#656176]">
                {cat.description}
              </p>

              <ul className="mt-4 space-y-3">
                {cat.tools.map((tool, i) => (
                  <li key={i} className="text-sm">
                    <a
                      href={tool.link}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[#1B998B] font-medium hover:underline"
                    >
                      {tool.name}
                    </a>
                    <div className="text-[#656176] text-xs">
                      {tool.use}
                    </div>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        {/* Advice Box */}
        <div className="mt-10 p-6 bg-[#1B998B]/10 rounded-2xl text-sm text-[#534D56]">
          <strong>Reality check:</strong> Tools don’t make you skilled — consistent usage does.
          Choose 1–2 tools per category, stick to them for 90 days, and build something real.
        </div>
      </div>
    </section>
  );
}