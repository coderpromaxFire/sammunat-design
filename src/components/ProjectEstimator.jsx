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
        "Deployment & Basic Support"
      ];
      breakdown = [
        "Design & UX: ₹15,000",
        "Development: ₹25,000 – ₹45,000",
        "Testing & Deployment: ₹10,000"
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
        "Testing & Deployment"
      ];
      breakdown = [
        "Design & UX: ₹30,000",
        "Development: ₹70,000 – ₹1,30,000",
        "Testing & Deployment: ₹20,000"
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
        "Post-launch Support"
      ];
      breakdown = [
        "System Design: ₹30,000",
        "Development: ₹1,00,000+",
        "Testing & Support: ₹20,000"
      ];
    }

    setResult({ cost, duration, stack, services, breakdown });
  };

  /* ================== PDF (DETAILED + NO OVERLAP) ================== */
  const generatePDF = () => {
    if (!result) return;

    const doc = new jsPDF();
    const pageHeight = doc.internal.pageSize.height;
    const marginX = 14;
    const contentWidth = 180;
    let y = 20;

    const addPageIfNeeded = (space = 8) => {
      if (y + space > pageHeight - 15) {
        doc.addPage();
        y = 20;
      }
    };

    const addHeading = (text) => {
      addPageIfNeeded(12);
      doc.setFontSize(13);
      doc.text(text, marginX, y);
      y += 8;
    };

    const addParagraph = (text) => {
      doc.setFontSize(11);
      const lines = doc.splitTextToSize(text, contentWidth);
      lines.forEach((line) => {
        addPageIfNeeded(6);
        doc.text(line, marginX, y);
        y += 6;
      });
      y += 4;
    };

    const addBullet = (text) => {
      const lines = doc.splitTextToSize(`• ${text}`, contentWidth);
      lines.forEach((line) => {
        addPageIfNeeded(6);
        doc.text(line, marginX + 2, y);
        y += 6;
      });
    };

    /* HEADER */
    doc.setFontSize(18);
    doc.text("Sammunat LLC", marginX, y);
    y += 8;

    doc.setFontSize(12);
    doc.text("Project Proposal & Cost Estimate", marginX, y);
    y += 12;

    /* CLIENT INFO */
    addHeading("Client Overview");
    addParagraph(
      `Business Type: ${form.businessType}\n`
      + `Project Type: ${form.projectType}\n`
      + `Budget Preference: ${form.budget}\n`
      + `Timeline Preference: ${form.timeline}`
    );

    /* OVERVIEW */
    addHeading("1. Project Overview");
    addParagraph(
      "This document provides a high-level estimate for the requested project based on the initial inputs. "
      + "The scope, cost, and delivery timeline may change after detailed requirement discussions."
    );

    /* SCOPE */
    addHeading("2. Scope of Work");
    result.services.forEach((service) => addBullet(service));
    y += 4;

    /* TECH STACK */
    addHeading("3. Technology Stack");
    addParagraph(result.stack);

    /* TIMELINE */
    addHeading("4. Estimated Timeline");
    addParagraph(
      `Total Estimated Duration: ${result.duration}\n\n`
      + "Project Phases:\n"
      + "• Planning & Design\n"
      + "• Development\n"
      + "• Testing\n"
      + "• Deployment"
    );

    /* COST */
    addHeading("5. Cost Estimate & Breakdown");
    addParagraph(`Estimated Cost Range: ${result.cost}`);
    result.breakdown.forEach((item) => addBullet(item));
    y += 4;

    /* ASSUMPTIONS */
    addHeading("6. Assumptions & Exclusions");
    addParagraph(
      "• Content, hosting, and third-party tools are not included unless specified.\n"
      + "• One revision cycle is included by default.\n"
      + "• Any additional features or scope changes will affect cost and timeline."
    );

    /* NEXT STEPS */
    addHeading("7. Next Steps");
    addParagraph(
      "To proceed further, please schedule a discovery call with our team. "
      + "A detailed proposal and final quotation will be shared after requirement analysis."
    );

    /* FOOTER */
    addPageIfNeeded(10);
    doc.setFontSize(10);
    doc.text(
      `Generated on: ${new Date().toLocaleDateString()}\n`
      + "This is a system-generated estimate by Sammunat LLC.",
      marginX,
      y
    );

    doc.save("Sammunat_Detailed_Project_Proposal.pdf");
  };

  /* ---------- UI (UNCHANGED) ---------- */
  const selectClass =
    "w-full rounded-xl border border-[#D7CFE8] bg-white px-4 py-3 text-sm text-[#534D56] focus:outline-none focus:ring-2 focus:ring-[#1B998B] transition";

  return (
    <section className="py-14 bg-gradient-to-b from-[#F8F1FF] to-white">
      <div className="max-w-6xl mx-auto px-4">
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




