import { Link } from "react-router-dom";

/**
 * Internships.jsx
 *
 * A realistic, student-focused guide to internships:
 * - Where to find internships
 * - Types of internships (paid, unpaid, research, virtual)
 * - What skills are expected
 * - How to prepare before applying
 *
 * Sources & patterns observed from Internshala, LinkedIn, AICTE,
 * company career pages, and university internship cells.
 */

export default function Internships() {
  const categories = [
    {
      id: "types",
      title: "Types of Internships",
      description:
        "Not all internships are the same. Knowing the type helps you apply smarter.",
      items: [
        {
          name: "Industry Internships",
          detail:
            "Work with companies or startups on real products (tech, manufacturing, construction, analytics, etc.). Often paid, sometimes unpaid."
        },
        {
          name: "Research Internships",
          detail:
            "Work under professors or labs (IITs, IISc, foreign universities). Ideal for MS / MTech / PhD aspirants."
        },
        {
          name: "Virtual / Remote Internships",
          detail:
            "Work remotely with startups or platforms. Easier to access but requires discipline."
        },
        {
          name: "Government / PSU Internships",
          detail:
            "Offered by PSUs, DRDO, ISRO, state departments. Competitive and resume-strong."
        }
      ]
    },
    {
      id: "platforms",
      title: "Where to Find Internships",
      description:
        "These platforms are commonly used by students and recruiters.",
      items: [
        {
          name: "Internshala",
          detail: "Largest internship portal in India (students & freshers)",
          link: "https://internshala.com/"
        },
        {
          name: "LinkedIn",
          detail: "Networking + direct internship/job postings",
          link: "https://www.linkedin.com/jobs/"
        },
        {
          name: "Company Career Pages",
          detail: "Best quality internships (often not listed elsewhere)",
          link: "https://careers.google.com/"
        },
        {
          name: "AICTE Internship Portal",
          detail: "Government-supported internships",
          link: "https://internship.aicte-india.org/"
        }
      ]
    },
    {
      id: "skills",
      title: "What Skills Are Expected",
      description:
        "Internships don’t expect experts — they expect fundamentals + effort.",
      items: [
        {
          name: "Technical Basics",
          detail:
            "Core subjects of your branch or role (coding basics, circuits, mechanics, etc.)"
        },
        {
          name: "One Practical Skill",
          detail:
            "Example: React / Python / AutoCAD / MATLAB / Data analysis / PLC"
        },
        {
          name: "Communication",
          detail:
            "Clear writing, ability to explain what you know and what you’re learning"
        },
        {
          name: "Consistency",
          detail:
            "Showing projects, notes, or practice proves seriousness more than marks"
        }
      ]
    },
    {
      id: "prep",
      title: "How to Prepare Before Applying",
      description:
        "Do these before sending applications — it increases selection chances massively.",
      items: [
        {
          name: "Build 1–2 Small Projects",
          detail:
            "Even simple projects show learning intent (GitHub, reports, simulations)."
        },
        {
          name: "Create a Simple Resume",
          detail:
            "One page, clear skills, projects, tools used — no fancy design needed."
        },
        {
          name: "Write a Short Intro Pitch",
          detail:
            "2–3 lines explaining who you are, what you know, and what you want to learn."
        },
        {
          name: "Apply Consistently",
          detail:
            "5–10 quality applications per week is better than mass applying once."
        }
      ]
    }
  ];

  const trustedResources = [
    {
      name: "Internshala – Internship Guide",
      link: "https://internshala.com/student/help"
    },
    {
      name: "LinkedIn Career Advice",
      link: "https://www.linkedin.com/advice/"
    },
    {
      name: "AICTE Internship Portal",
      link: "https://internship.aicte-india.org/"
    },
    {
      name: "How to email for internships (Harvard guide)",
      link: "https://ocs.fas.harvard.edu/how-write-cold-email"
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
          Internship Opportunities — A Practical Guide
        </h1>

        <p className="mt-3 text-[#656176] max-w-3xl">
          Internships are not about perfection — they’re about learning.
          This section helps you understand where to apply, what to prepare,
          and how to avoid common student mistakes.
        </p>

        {/* Main Sections */}
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
                {cat.items.map((item, i) => (
                  <li key={i} className="text-sm">
                    <span className="font-medium text-[#534D56]">
                      {item.name}
                    </span>
                    <div className="text-[#656176] text-xs">
                      {item.detail}
                    </div>

                    {item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noreferrer"
                        className="text-[#1B998B] text-xs hover:underline"
                      >
                        Visit →
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        {/* Trusted Resources */}
        <div className="mt-10 bg-white rounded-2xl p-6 shadow-lg border">
          <h3 className="text-lg font-bold text-[#534D56]">
            Trusted Internship Resources
          </h3>

          <ul className="mt-4 space-y-2">
            {trustedResources.map((r, i) => (
              <li key={i}>
                <a
                  href={r.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#1B998B] hover:underline text-sm"
                >
                  {r.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Reality Check */}
        <div className="mt-10 p-6 bg-[#1B998B]/10 rounded-2xl text-sm text-[#534D56]">
          <strong>Reality check:</strong> Rejections are normal. Most students get selected
          only after multiple applications. Focus on learning during internships —
          paid offers come naturally later.
        </div>
      </div>
    </section>
  );
}