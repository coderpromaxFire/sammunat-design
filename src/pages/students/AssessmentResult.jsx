import { useLocation, useParams, Link } from "react-router-dom";
import { assessments } from "../../assessments";

export default function AssessmentResult() {
  const { slug } = useParams();
  const { state } = useLocation();
  const assessment = assessments[slug];

  const answers = state?.answers || [];
  let score = 0;

  assessment.questions.forEach((q, i) => {
    if (q.correct === answers[i]) score++;
  });

  const percent = Math.round(
    (score / assessment.questions.length) * 100
  );

  const passed = percent >= assessment.passScore;

  return (
    <section className="min-h-screen bg-[#F8F1FF] px-4 py-16">
      <div className="max-w-xl mx-auto bg-white p-6 rounded-2xl shadow text-center">

        <h1 className="text-2xl font-bold text-[#534D56]">
          Assessment Result
        </h1>

        <p className="mt-4 text-lg">
          Score: <strong>{percent}%</strong>
        </p>

        <p className={`mt-2 font-medium ${passed ? "text-green-600" : "text-red-600"}`}>
          {passed ? "PASSED 🎉" : "NOT PASSED"}
        </p>

        {passed && (
          <div className="mt-6 p-4 bg-green-50 rounded">
            <p className="text-sm">
              You are eligible for the <strong>Sammunat Skill Readiness Certificate</strong>.
            </p>
          </div>
        )}

        {!passed && (
          <p className="mt-4 text-sm text-[#656176]">
            Review fundamentals and try again.
          </p>
        )}

        <Link
          to="/students"
          className="inline-block mt-6 text-[#1B998B]"
        >
          ← Back to Student Corner
        </Link>
      </div>
    </section>
  );
}