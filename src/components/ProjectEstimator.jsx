import { useState } from "react";
import jsPDF from "jspdf";

export default function ProjectEstimator() {
  const [form, setForm] = useState({
    projectType: "website",
    businessType: "",
    budget: "medium",
    timeline: "normal",
  });

  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setError("");
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const canGenerate = () => {
    return form.businessType.trim().length > 0;
  };

  const estimateProject = () => {
    if (!canGenerate()) {
      setError("Please enter your business type to continue.");
      return;
    }

    let cost = "";
    let duration = "";
    let stack = "";
    let services = [];
    let breakdown = [];

    if (form.projectType === "website") {
      cost =
        form.budget === "low"
          ? "₹20,000 – ₹40,000"
          : form.budget === "medium"
          ? "₹50,000 – ₹90,000"
          : "₹1,00,000+";
      duration = "2 – 4 weeks";
      stack = "React, Node.js";
      services = [
        "UI/UX Design",
        "Responsive Website Development",
        "SEO-friendly Structure",
        "Deployment & Basic Support",
      ];
      breakdown = [
        "Design & UX: ₹15,000",
        "Development: ₹25,000 – ₹45,000",
        "Testing & Deployment: ₹10,000",
      ];
    }

    if (form.projectType === "mobile-app") {
      cost =
        form.budget === "low"
          ? "₹60,000 – ₹1,00,000"
          : form.budget === "medium"
          ? "₹1,20,000 – ₹2,00,000"
          : "₹2,50,000+";
      duration = "1 – 3 months";
      stack = "Flutter / React Native";
      services = [
        "UI/UX Design",
        "App Development",
        "API Integration",
        "Testing & Deployment",
      ];
      breakdown = [
        "Design & UX: ₹30,000",
        "Development: ₹70,000 – ₹1,30,000",
        "Testing & Deployment: ₹20,000",
      ];
    }

    if (form.projectType === "crm") {
      cost = "₹1,50,000+";
      duration = "2 – 4 months";
      stack = "React, Node.js, MongoDB";
      services = [
        "CRM Development",
        "Admin Panel",
        "User Management",
        "Post-launch Support",
      ];
      breakdown = [
        "System Design: ₹30,000",
        "Development: ₹1,00,000+",
        "Testing & Support: ₹20,000",
      ];
    }

    setResult({ cost, duration, stack, services, breakdown });
  };

  /* ================== PDF ================== */
  const generatePDF = () => {
    if (!result) return;

    const doc = new jsPDF();
    let y = 20;

    doc.setFontSize(18);
    doc.text("Sammunat LLC", 14, y);
    y += 8;

    doc.setFontSize(12);
    doc.text("Project Proposal & Cost Estimate", 14, y);
    y += 12;

    doc.setFontSize(11);
    doc.text(`Business Type: ${form.businessType}`, 14, y);
    y += 6;
    doc.text(`Project Type: ${form.projectType}`, 14, y);
    y += 6;
    doc.text(`Estimated Cost: ${result.cost}`, 14, y);
    y += 6;
    doc.text(`Timeline: ${result.duration}`, 14, y);
    y += 10;

    doc.text("Included Services:", 14, y);
    y += 6;
    result.services.forEach((s) => {
      doc.text(`• ${s}`, 16, y);
      y += 6;
    });

    doc.save("Sammunat_Project_Estimate.pdf");
  };

  const inputClass =
    "w-full rounded-xl border border-[#D7CFE8] bg-white px-4 py-3 text-sm text-[#534D56] focus:outline-none focus:ring-2 focus:ring-[#1B998B] hover:border-[#1B998B] transition-all duration-300";

  return (
    <section className="py-20 bg-gradient-to-b from-[#F8F1FF] to-white">
      <div className="max-w-6xl mx-auto px-4">

        {/* HEADING */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Project Estimator
          </h2>
          <p className="text-lg text-[#6b6570] max-w-2xl mx-auto">
            Get a transparent cost & timeline estimate for your project —
            before you commit.
          </p>
        </div>

        {/* CARD */}
        <div className="bg-white rounded-3xl shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 sm:p-10">

            {/* LEFT FORM */}
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Project Type
                </label>
                <select
                  name="projectType"
                  value={form.projectType}
                  onChange={handleChange}
                  className={inputClass}
                >
                  <option value="website">Website</option>
                  <option value="mobile-app">Mobile App</option>
                  <option value="crm">CRM / Software</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Business Type <span className="text-gray-400">(required)</span>
                </label>
                <input
                  name="businessType"
                  value={form.businessType}
                  onChange={handleChange}
                  placeholder="Startup, Shop, Enterprise..."
                  className={inputClass}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Budget Preference
                </label>
                <select
                  name="budget"
                  value={form.budget}
                  onChange={handleChange}
                  className={inputClass}
                >
                  <option value="low">Low Budget</option>
                  <option value="medium">Medium Budget</option>
                  <option value="high">High Budget</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Timeline
                </label>
                <select
                  name="timeline"
                  value={form.timeline}
                  onChange={handleChange}
                  className={inputClass}
                >
                  <option value="fast">Urgent</option>
                  <option value="normal">Normal</option>
                  <option value="flexible">Flexible</option>
                </select>
              </div>

              {error && <p className="text-sm text-red-600">{error}</p>}

              <button
                onClick={estimateProject}
                disabled={!canGenerate()}
                className={`w-full py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${
                  canGenerate()
                    ? "bg-[#1B998B] text-white hover:scale-[1.02] hover:shadow-lg"
                    : "bg-[#E8E1F3] text-[#9E95B6] cursor-not-allowed"
                }`}
              >
                Generate Estimate
              </button>
            </div>

            {/* RIGHT RESULT */}
            <div className="bg-[#F8F1FF] rounded-2xl p-6 flex flex-col justify-between">
              {!result ? (
                <div className="flex items-center justify-center h-full text-center text-[#656176]">
                  <p>Fill the details to see your estimate ✨</p>
                </div>
              ) : (
                <>
                  <div>
                    <h3 className="text-lg font-semibold mb-4">
                      Estimated Plan
                    </h3>

                    <div className="space-y-2 text-sm">
                      <p><b>Cost:</b> {result.cost}</p>
                      <p><b>Timeline:</b> {result.duration}</p>
                      <p><b>Tech:</b> {result.stack}</p>
                    </div>

                    <ul className="mt-5 space-y-2">
                      {result.services.map((s, i) => (
                        <li
                          key={i}
                          className="bg-white rounded-lg px-4 py-2 shadow-sm text-sm hover:shadow-md transition"
                        >
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={generatePDF}
                    className="mt-6 w-full border border-[#1B998B] text-[#1B998B] py-4 rounded-xl font-semibold hover:bg-[#1B998B] hover:text-white transition-all duration-300"
                  >
                    Download Proposal (PDF)
                  </button>
                </>
              )}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}




