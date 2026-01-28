import { Link } from "react-router-dom";

export default function StudentHome() {
  const assessmentDomains = [
    {
      title: "Frontend Development",
      slug: "frontend",
      description: "HTML, CSS, JavaScript & basic React readiness",
    },
    {
      title: "Data & Analytics",
      slug: "data",
      description: "Data thinking, Python, SQL & analysis basics",
    },
    {
      title: "Core Engineering",
      slug: "core",
      description: "Fundamental engineering problem-solving ability",
    },
    {
      title: "UI / UX & Design",
      slug: "design",
      description: "Design sense, usability & tool awareness",
    },
    {
      title: "Product & Business",
      slug: "product",
      description: "Product thinking, decision-making & basics of business",
    },
  ];

  return (
    <section className="py-24 px-4 min-h-screen bg-[#F8F1FF]">
      <div className="max-w-6xl mx-auto">

        {/* Top Navigation */}
        <div className="flex justify-between items-center">
          <Link to="/" className="text-sm text-[#1B998B]">
            ← Back to Main Website
          </Link>
        </div>

        {/* Header */}
        <header className="mt-6">
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#534D56]">
            🎓 Student Corner
          </h1>
          <p className="mt-3 text-[#656176] max-w-3xl">
            Clear guidance, structured roadmaps, practical tools, internships,
            and readiness assessments — everything a student needs in one place.
          </p>
        </header>

        {/* ================= CORE STUDENT SECTIONS ================= */}
        <section className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">

          <Link
            to="/students/careers"
            className="bg-white p-6 rounded-2xl shadow border hover:scale-[1.02] transition"
          >
            <h2 className="text-xl font-bold text-[#534D56]">
              Career Options in Tech
            </h2>
            <p className="mt-2 text-sm text-[#656176]">
              Understand tech roles, skills required, and learning paths.
            </p>
          </Link>

          <Link
            to="/students/engineering-careers"
            className="bg-white p-6 rounded-2xl shadow border hover:scale-[1.02] transition"
          >
            <h2 className="text-xl font-bold text-[#534D56]">
              Careers After Engineering
            </h2>
            <p className="mt-2 text-sm text-[#656176]">
              Branch-wise career options, higher studies, and industry roles.
            </p>
          </Link>

          <Link
            to="/students/roadmaps"
            className="bg-white p-6 rounded-2xl shadow border hover:scale-[1.02] transition"
          >
            <h2 className="text-xl font-bold text-[#534D56]">
              Learning Roadmaps
            </h2>
            <p className="mt-2 text-sm text-[#656176]">
              Step-by-step paths for different roles and skills.
            </p>
          </Link>

          <Link
            to="/students/guidance"
            className="bg-white p-6 rounded-2xl shadow border hover:scale-[1.02] transition"
          >
            <h2 className="text-xl font-bold text-[#534D56]">
              Student Guidance
            </h2>
            <p className="mt-2 text-sm text-[#656176]">
              Mentorship-style advice, clarity, and common student doubts.
            </p>
          </Link>

          <Link
            to="/students/internships"
            className="bg-white p-6 rounded-2xl shadow border hover:scale-[1.02] transition"
          >
            <h2 className="text-xl font-bold text-[#534D56]">
              Internship Opportunities
            </h2>
            <p className="mt-2 text-sm text-[#656176]">
              Where to apply, how to prepare, and what actually works.
            </p>
          </Link>

          <Link
            to="/students/tools"
            className="bg-white p-6 rounded-2xl shadow border hover:scale-[1.02] transition"
          >
            <h2 className="text-xl font-bold text-[#534D56]">
              Student Tools
            </h2>
            <p className="mt-2 text-sm text-[#656176]">
              Best tools for learning, projects, productivity, and placements.
            </p>
          </Link>
        </section>

        {/* ================= ASSESSMENT SECTION ================= */}
        <section className="mt-20">
          <div className="flex items-center gap-3">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#534D56]">
              🧪 Student Assessment Tests
            </h2>
            <span className="text-xs bg-green-500 text-white px-2 py-0.5 rounded">
              NEW
            </span>
          </div>

          <p className="mt-3 text-[#656176] max-w-4xl">
            Test your <strong>practical readiness</strong> before internships,
            jobs, or higher studies. Certificates are issued only after passing.
            This is a skill-readiness validation — not a degree.
          </p>

          {/* Assessment Cards */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            {assessmentDomains.map((domain) => (
              <Link
                key={domain.slug}
                to={`/students/assessments/${domain.slug}`}
                className="relative bg-white p-6 rounded-2xl shadow border hover:scale-[1.02] transition"
              >
                <span className="absolute top-3 left-3 text-xs bg-[#1B998B] text-white px-2 py-0.5 rounded">
                  NEW
                </span>

                <h3 className="text-xl font-bold text-[#534D56]">
                  {domain.title}
                </h3>

                <p className="mt-2 text-sm text-[#656176]">
                  {domain.description}
                </p>

                <span className="mt-4 inline-block text-[#1B998B] font-medium">
                  Take assessment →
                </span>
              </Link>
            ))}
          </div>

          {/* Disclaimer */}
          <div className="mt-10 p-6 bg-[#1B998B]/10 rounded-2xl text-sm text-[#534D56]">
            <strong>Important:</strong> Sammunat Skill Readiness Certificates
            validate foundational understanding and problem-solving ability.
            They are not university degrees or government certifications.
          </div>
        </section>
      </div>
    </section>
  );
}