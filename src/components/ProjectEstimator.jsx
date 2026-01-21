import { useState } from "react";
import jsPDF from "jspdf";

export default function ProjectEstimator() {
  const [form, setForm] = useState({
    projectType: "website",
    businessType: "",
    budget: "medium",
    timeline: "normal"
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

    if (form.projectType === "website") {
      cost =
        form.budget === "low"
          ? "₹20,000 – ₹40,000"
          : form.budget === "medium"
          ? "₹50,000 – ₹90,000"
          : "₹1,00,000+";
      duration = "2 – 4 weeks";
      stack = "React, Node.js";
      services = ["UI/UX Design", "Website Development", "Deployment"];
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
      services = ["UI/UX Design", "App Development", "Testing", "Deployment"];
    }

    if (form.projectType === "crm") {
      cost = "₹1,50,000+";
      duration = "2 – 4 months";
      stack = "React, Node.js, MongoDB";
      services = ["CRM Development", "Admin Panel", "Support"];
    }

    setResult({ cost, duration, stack, services });
  };

  const generatePDF = () => {
    if (!result) return;

    const doc = new jsPDF();
    let y = 20;

    doc.setFontSize(18);
    doc.text("Sammunat LLC – Project Estimate", 14, y);
    y += 10;

    doc.setFontSize(11);
    doc.text(`Project Type: ${form.projectType}`, 14, y);
    y += 6;
    doc.text(`Business Type: ${form.businessType}`, 14, y);
    y += 6;
    doc.text(`Budget: ${form.budget}`, 14, y);
    y += 6;
    doc.text(`Timeline: ${form.timeline}`, 14, y);
    y += 10;

    doc.text(`Estimated Cost: ${result.cost}`, 14, y);
    y += 6;
    doc.text(`Duration: ${result.duration}`, 14, y);
    y += 6;
    doc.text(`Tech Stack: ${result.stack}`, 14, y);
    y += 10;

    result.services.forEach((s) => {
      doc.text(`• ${s}`, 16, y);
      y += 5;
    });

    doc.save("Sammunat_Project_Estimate.pdf");
  };

  /* ---------- UI ---------- */
  const selectClass =
    "w-full rounded-xl border border-[#D7CFE8] bg-white px-4 py-3 text-sm text-[#534D56] focus:outline-none focus:ring-2 focus:ring-[#1B998B] transition";

  return (
    <section className="py-14 bg-gradient-to-b from-[#F8F1FF] to-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* HEADER */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#534D56]">
            Project Cost Estimator
          </h2>
          <p className="mt-3 text-[#656176] text-sm sm:text-base max-w-xl mx-auto">
            Get an instant idea of cost, timeline, and technology for your project.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 sm:p-8">
            {/* LEFT */}
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Project Type
                </label>
                <select
                  name="projectType"
                  value={form.projectType}
                  onChange={handleChange}
                  className={selectClass}
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
                  className={selectClass}
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
                  className={selectClass}
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
                  className={selectClass}
                >
                  <option value="fast">Urgent</option>
                  <option value="normal">Normal</option>
                  <option value="flexible">Flexible</option>
                </select>
              </div>

              {error && (
                <p className="text-sm text-red-600">{error}</p>
              )}

              <button
                onClick={estimateProject}
                disabled={!canGenerate()}
                className={`w-full py-3 rounded-xl font-semibold transition ${
                  canGenerate()
                    ? "bg-[#1B998B] text-white hover:opacity-90"
                    : "bg-[#E8E1F3] text-[#9E95B6] cursor-not-allowed"
                }`}
              >
                Generate Estimate
              </button>
            </div>

            {/* RIGHT */}
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

                    <ul className="mt-4 space-y-2">
                      {result.services.map((s, i) => (
                        <li
                          key={i}
                          className="bg-white rounded-lg px-4 py-2 shadow-sm text-sm"
                        >
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={generatePDF}
                    className="mt-6 w-full border border-[#1B998B] text-[#1B998B] py-3 rounded-xl font-semibold hover:bg-[#1B998B] hover:text-white transition"
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



