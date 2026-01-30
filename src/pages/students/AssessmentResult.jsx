import { useLocation, useParams, Link, Navigate } from "react-router-dom";
import { assessments } from "../../assessments";
import generateCertificate from "../../utils/generateCertificate";

/* 🔗 GOOGLE SCRIPT URL */
const GOOGLE_SHEET_URL =
  "https://script.google.com/macros/s/AKfycbzEmc7XJYJbJ7v5d5jQpls6F6mdm3X2N-8gXEDV-UJhBu3x_n0fNAU5YXRujRksIHVq/exec";

export default function AssessmentResult() {
  const { domain } = useParams();
  const location = useLocation();

  const assessment = assessments[domain];

  // Try from router state or from sessionStorage (after refresh)
  const stored = sessionStorage.getItem("sammunat_result");
  const state = location.state || (stored && JSON.parse(stored));

  // If domain is wrong
  if (!assessment) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Assessment not found
      </div>
    );
  }

  // If no state (user refreshed without flow)
  if (!state) {
    return <Navigate to={`/students/assessments/${domain}/details`} replace />;
  }

  const { answers, student } = state;

  /* ===== Calculate Score ===== */
  let score = 0;
  assessment.questions.forEach((q, i) => {
    if (q.correct === answers[i]) score++;
  });

  const total = assessment.questions.length;
  const passed = score >= assessment.passingScore;

  /* ===== Save to Google Sheet ONCE ===== */
  const saveToSheet = async () => {
    try {
      await fetch(GOOGLE_SHEET_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: student.name,
          email: student.email,
          domain: assessment.domain,
          score,
          total,
          passed,
        }),
      });
    } catch (error) {
      console.error("Error saving student data:", error);
    }
  };

  // Prevent multiple saves on re-renders
  if (!sessionStorage.getItem("sammunat_saved")) {
    saveToSheet();
    sessionStorage.setItem("sammunat_saved", "true");
  }

  return (
    <section className="min-h-screen bg-[#F8F1FF] px-4 py-16">
      <div className="max-w-xl mx-auto bg-white p-6 rounded-2xl shadow text-center">

        <h1 className="text-2xl font-bold text-[#534D56]">
          Assessment Result
        </h1>

        <p className="mt-4 text-lg">
          Score: <strong>{score} / {total}</strong>
        </p>

        <p
          className={`mt-2 font-medium ${
            passed ? "text-green-600" : "text-red-600"
          }`}
        >
          {passed ? "PASSED 🎉" : "NOT PASSED"}
        </p>

        {passed && (
          <>
            <p className="mt-4 text-sm">
              You are eligible for the Sammunat Skill Readiness Certificate.
            </p>

            <button
              onClick={() =>
                generateCertificate({
                  name: student.name,
                  domain: assessment.domain,
                  score,
                  total,
                })
              }
              className="mt-6 bg-green-600 text-white px-4 py-2 rounded"
            >
              Download Certificate
            </button>
          </>
        )}

        <Link
          to="/students"
          onClick={() => {
            sessionStorage.removeItem("sammunat_result");
            sessionStorage.removeItem("sammunat_saved");
          }}
          className="block mt-6 text-[#1B998B]"
        >
          ← Back to Student Corner
        </Link>

      </div>
    </section>
  );
}

