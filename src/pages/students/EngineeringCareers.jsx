import { Link } from "react-router-dom";

/**
 * EngineeringCareers.jsx
 *
 * Detailed, curated career guidance for engineering graduates across branches.
 * Resources and links were selected from trusted platforms (NPTEL, Coursera, edX),
 * professional societies (IEEE, ASME, ICE), national rankings (NIRF), exam portals (GATE),
 * and internship platforms (Internshala).
 *
 * NOTE: See chat below for the web sources used.
 */

export default function EngineeringCareers() {
  const branches = [
    {
      id: "mechanical",
      name: "Mechanical Engineering",
      overview:
        "Design, manufacturing, automotive, aerospace, HVAC, robotics, and energy — mechanical engineers work across product and systems industries.",
      roles: [
        "Design Engineer (CAD/CAE)",
        "Manufacturing / Production Engineer",
        "Automation / Robotics Engineer",
        "R&D (materials, thermal systems)",
        "Maintenance & Reliability Engineer"
      ],
      studyOptions: [
        "MTech (Thermal, Design, Manufacturing)",
        "MS abroad (Aerospace / Robotics / Controls)",
        "Specialized certifications (CAD/CAE, FEA)"
      ],
      resources: [
        { label: "NPTEL – Mechanical courses", url: "https://nptel.ac.in/" },
        { label: "Coursera Mechanical Engineering", url: "https://www.coursera.org/browse/physical-science-and-engineering/mechanical-engineering" },
        { label: "edX Mechanical Engineering courses", url: "https://www.edx.org/learn/mechanical-engineering" },
        { label: "ASME – resources & standards", url: "https://www.asme.org/" }
      ],
      quickAdvice:
        "Get hands-on with CAD (SolidWorks/Fusion360), simple FEA, and one manufacturing project — internships in shops or automotive firms teach practical skills employers want."
    },
    {
      id: "electrical",
      name: "Electrical Engineering",
      overview:
        "Power systems, embedded systems, electronics, EVs, instrumentation and controls are core routes for electrical engineers.",
      roles: [
        "Power Systems Engineer",
        "Electronics / Embedded Developer",
        "Control Systems Engineer",
        "Electric Vehicle (EV) Engineer",
        "Test & Instrumentation Engineer"
      ],
      studyOptions: [
        "MTech (Power Systems, Control)",
        "MS (Embedded Systems / Power electronics)",
        "Certs: PLC, embedded toolchains, power systems simulation"
      ],
      resources: [
        { label: "NPTEL – Electrical courses", url: "https://nptel.ac.in/" },
        { label: "Coursera Electrical Engineering", url: "https://www.coursera.org/browse/physical-science-and-engineering/electrical-engineering" },
        { label: "IEEE educational resources", url: "https://innovate.ieee.org/educational-resources/" }
      ],
      quickAdvice:
        "Practice circuit design and PCB basics, learn an embedded language (C/C++), and try small hardware–software projects (sensors + microcontroller)."
    },
    {
      id: "civil",
      name: "Civil Engineering",
      overview:
        "Infrastructure, structural engineering, construction management, geotechnical and environmental roles support society’s built environment.",
      roles: [
        "Structural Engineer / Design",
        "Site & Project Engineer (Construction)",
        "Geotechnical Engineer",
        "BIM / Infrastructure Specialist",
        "Water Resources & Environmental Engineer"
      ],
      studyOptions: [
        "MTech (Structural / Geotech / Environmental)",
        "Construction management diplomas, BIM certifications",
        "PSU/Government roles (state & central public works)"
      ],
      resources: [
        { label: "NPTEL – Civil courses", url: "https://nptel.ac.in/" },
        { label: "Coursera Civil Engineering courses", url: "https://www.coursera.org/courses?query=civil%20engineering" },
        { label: "ICE – Institution of Civil Engineers", url: "https://www.ice.org.uk/" }
      ],
      quickAdvice:
        "Learn basic structural analysis tools, get exposure to on-site practices, and learn BIM (Revit) for better employability in construction firms."
    },
    {
      id: "chemical",
      name: "Chemical Engineering",
      overview:
        "Process engineering, pharmaceuticals, energy, petrochemicals, and materials are the main application areas for chemical engineers.",
      roles: [
        "Process Engineer",
        "Plant Operations / Chemical Plant Engineer",
        "R&D in materials and formulations",
        "Quality & Safety Engineer (HSE)"
      ],
      studyOptions: [
        "MTech / MS (Process, Materials)",
        "Specialized industry certifications (HSE, GMP for pharma)"
      ],
      resources: [
        { label: "NPTEL – Chemical Engineering", url: "https://nptel.ac.in/" },
        { label: "Coursera – process / chemical courses", url: "https://www.coursera.org/search?query=chemical%20engineering" }
      ],
      quickAdvice:
        "Intern with process plants or pharma; learn process simulation tools (Aspen Plus) and basics of plant safety and instrumentation."
    },
    {
      id: "ece",
      name: "Electronics & Communication (ECE)",
      overview:
        "Telecom, embedded systems, VLSI, signal processing, and semiconductor industries are primary employers for ECE grads.",
      roles: [
        "Embedded Systems Engineer",
        "VLSI / Chip Design Engineer",
        "Telecom Systems Engineer",
        "Signal Processing / FPGA Engineer"
      ],
      studyOptions: [
        "MTech / MS (VLSI, Communications)",
        "Certifications: FPGA, RTL design, communication systems"
      ],
      resources: [
        { label: "NPTEL – ECE courses", url: "https://nptel.ac.in/" },
        { label: "Coursera – electronics & communication", url: "https://www.coursera.org/search?query=electronics%20communication" },
        { label: "IEEE – publications & learning", url: "https://innovate.ieee.org/educational-resources/" }
      ],
      quickAdvice:
        "Work on embedded + FPGA projects, learn RTL basics, and contribute to small hardware-software prototypes to stand out."
    },
    {
      id: "cse",
      name: "Computer Science & IT (CSE / IT)",
      overview:
        "Software development, data, AI, cloud and security form the bulk of roles; high demand and many transition pathways from other branches exist.",
      roles: [
        "Software Developer / Full-stack / Frontend / Backend",
        "Data Analyst / Data Scientist",
        "AI / ML Engineer",
        "Cloud / DevOps Engineer",
        "Cybersecurity Engineer"
      ],
      studyOptions: [
        "MS (CS) or specialized Masters in Data/AI",
        "Certs: cloud (AWS/GCP/Azure), data (TensorFlow, PyTorch), security (CompTIA, CEH)"
      ],
      resources: [
        { label: "roadmap.sh – CS & role roadmaps", url: "https://roadmap.sh/computer-science" },
        { label: "freeCodeCamp – projects & curriculum", url: "https://www.freecodecamp.org/" },
        { label: "Coursera / edX – CS & AI programs", url: "https://www.coursera.org/" }
      ],
      quickAdvice:
        "If you’re switching from core engineering to IT, focus on data structures & algorithms, build 3+ projects, and learn system design basics for interviews."
    },
    {
      id: "biotech",
      name: "Biotechnology / Biomedical",
      overview:
        "Pharma, biotech startups, medical devices and research labs hire engineers with bio/biotech interest — roles blend biology and engineering.",
      roles: [
        "Process Engineer (bioprocess)",
        "R&D (biotech / pharma)",
        "Medical device design & testing",
        "Clinical data / bioinformatics"
      ],
      studyOptions: [
        "MS / MTech in Biotechnology",
        "Specialized courses in bioinformatics, regulatory affairs"
      ],
      resources: [
        { label: "NPTEL – biotech & related courses", url: "https://nptel.ac.in/" },
        { label: "Coursera – biotech & bioinformatics", url: "https://www.coursera.org/search?query=biotechnology" }
      ],
      quickAdvice:
        "Look for lab internships early, learn data tools used in bio (Python, R) and basic lab techniques relevant to biotech roles."
    }
  ];

  // General resources and exams
  const generalResources = [
    { label: "NPTEL (IITs) – high quality Indian courses", url: "https://nptel.ac.in/" },
    { label: "GATE (official) – exam & prep portal", url: "https://gate2026.iitg.ac.in/" },
    { label: "NIRF – national rankings for Indian institutes", url: "https://nirfindia.org/Rankings/2024/EngineeringRanking.html" },
    { label: "Internshala – internships platform", url: "https://internshala.com" },
    { label: "Coursera / edX – structured courses & certificates", url: "https://www.coursera.org/" }
  ];

  return (
    <section className="py-24 px-4 bg-[#F8F1FF] min-h-screen">
      <div className="max-w-6xl mx-auto">

        {/* Back links */}
        <div className="flex justify-between items-center mb-8">
          <Link to="/students" className="text-sm text-[#1B998B]">
            ← Back to Student Corner
          </Link>
          <Link to="/" className="text-sm text-[#1B998B]">
            Back to Main Website →
          </Link>
        </div>

        <h1 className="text-3xl md:text-4xl font-extrabold text-[#534D56]">
          Career Options After Engineering — Branch-by-branch
        </h1>

        <p className="mt-3 text-[#656176]">
          Below are realistic career directions for each engineering branch, top ways to gain relevant skills,
          and trusted resources for study, internships, and exams (GATE / higher study).
        </p>

        {/* Branch cards */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {branches.map(b => (
            <article key={b.id} className="bg-white rounded-2xl p-6 shadow-lg border border-black/5">
              <h2 className="text-xl font-bold text-[#534D56]">{b.name}</h2>
              <p className="mt-2 text-sm text-[#656176]">{b.overview}</p>

              <div className="mt-4">
                <h4 className="text-sm font-semibold text-[#534D56]">Common roles</h4>
                <ul className="mt-2 list-disc list-inside text-sm text-[#656176]">
                  {b.roles.map((r, i) => <li key={i}>{r}</li>)}
                </ul>
              </div>

              <div className="mt-4">
                <h4 className="text-sm font-semibold text-[#534D56]">Study & certification</h4>
                <ul className="mt-2 list-disc list-inside text-sm text-[#656176]">
                  {b.studyOptions.map((s, i) => <li key={i}>{s}</li>)}
                </ul>
              </div>

              <div className="mt-4">
                <h4 className="text-sm font-semibold text-[#534D56]">Trusted resources</h4>
                <ul className="mt-2 space-y-2">
                  {b.resources.map((l, i) => (
                    <li key={i}>
                      <a href={l.url} target="_blank" rel="noreferrer" className="text-[#1B998B] hover:underline text-sm">
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-4 text-sm text-[#656176]">
                <strong>Quick tip:</strong> {b.quickAdvice}
              </div>
            </article>
          ))}
        </div>

        {/* General resources & exams */}
        <div className="mt-10 grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl p-6 shadow-lg border">
            <h3 className="text-lg font-bold text-[#534D56]">Exams & Higher study</h3>
            <p className="mt-2 text-sm text-[#656176]">
              Consider GATE for MTech / PSU hiring; GRE for MS abroad; CAT for MBA if switching to product/management roles.
            </p>

            <ul className="mt-4 space-y-2">
              {generalResources.map((g, i) => (
                <li key={i}>
                  <a href={g.url} target="_blank" rel="noreferrer" className="text-[#1B998B] hover:underline text-sm">
                    {g.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border">
            <h3 className="text-lg font-bold text-[#534D56]">How to start (practical)</h3>
            <ol className="mt-2 list-decimal list-inside text-sm text-[#656176] space-y-2">
              <li>Pick a target role (one sentence)</li>
              <li>Follow 1–2 trusted courses (NPTEL / Coursera / edX) and build 2 projects relevant to that role</li>
              <li>Apply to internships early, even unpaid ones that teach skills</li>
              <li>Prepare GATE / GRE / industry certs only after an internship/project proves interest</li>
            </ol>
          </div>
        </div>

        <div className="mt-10 p-6 bg-[#1B998B]/10 rounded-2xl text-sm text-[#534D56]">
          <strong>Final note:</strong> Employers value demonstrable skills — small projects, internships, and public code or reports will beat unread certificates. Use the links above to find quality courses and then build.
        </div>
      </div>
    </section>
  );
}