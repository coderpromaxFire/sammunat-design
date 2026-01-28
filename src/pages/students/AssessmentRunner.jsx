import { useParams, Link } from "react-router-dom";
import { useState } from "react";

import frontend from "../../assessments/frontend";
import data from "../../assessments/data";
import core from "../../assessments/core";
import design from "../../assessments/design";
import product from "../../assessments/product";

const assessments = {
  frontend,
  data,
  core,
  design,
  product,
};

export default function AssessmentRunner() {
  const { domain } = useParams();
  const assessment = assessments[domain];

  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  if (!assessment) {
    return <div className="p-10">Assessment not found</div>;
  }

  const question = assessment.questions[current];

  const handleAnswer = (index) => {
    const updated = [...answers];
    updated[current] = index;
    setAnswers(updated);
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const score = answers.filter(
    (ans, i) => ans === assessment.questions[i].correct
  ).length;

  const passed = score >= assessment.passingScore;

  return (
    <section className="py-24 px-4 bg-[#F8F1FF] min-h-screen">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-2xl shadow">

        <Link to="/students" className="text-sm text-[#1B998B]">
          ← Back to Student Corner
        </Link>

        <h1 className="mt-4 text-2xl font-bold text-[#534D56]">
          {assessment.domain} Assessment
        </h1>

        {!submitted ? (
          <>
            <p className="mt-2 text-sm text-[#656176]">
              Question {current + 1} of {assessment.questions.length}
            </p>

            <div className="mt-6">
              <h2 className="text-lg font-medium">{question.q}</h2>

              <div className="mt-4 space-y-3">
                {question.options.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => handleAnswer(i)}
                    className={`w-full text-left p-3 rounded border ${
                      answers[current] === i
                        ? "border-[#1B998B] bg-[#1B998B]/10"
                        : "border-gray-300"
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6 flex justify-between">
              <button
                disabled={current === 0}
                onClick={() => setCurrent(current - 1)}
                className="text-sm text-gray-500"
              >
                Previous
              </button>

              {current < assessment.questions.length - 1 ? (
                <button
                  onClick={() => setCurrent(current + 1)}
                  className="text-[#1B998B] font-medium"
                >
                  Next →
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  className="bg-[#1B998B] text-white px-4 py-2 rounded"
                >
                  Submit Test
                </button>
              )}
            </div>
          </>
        ) : (
          <div className="mt-10 text-center">
            <h2 className="text-2xl font-bold">
              {passed ? "✅ Passed" : "❌ Not Passed"}
            </h2>

            <p className="mt-2 text-[#656176]">
              Score: {score} / {assessment.questions.length}
            </p>

            {passed ? (
              <p className="mt-4 text-green-600">
                You’re eligible for Sammunat Skill Readiness Certificate.
              </p>
            ) : (
              <p className="mt-4 text-red-500">
                Improve skills and try again.
              </p>
            )}
          </div>
        )}
      </div>
    </section>
  );
}