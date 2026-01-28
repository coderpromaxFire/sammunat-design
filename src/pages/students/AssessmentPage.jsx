import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { assessments } from "../../assessments";

export default function AssessmentPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const assessment = assessments[slug];

  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState([]);

  if (!assessment) {
    return <div className="p-10">Assessment not found</div>;
  }

  const q = assessment.questions[current];

  const selectOption = (index) => {
    const updated = [...answers];
    updated[current] = index;
    setAnswers(updated);
  };

  const next = () => {
    if (current < assessment.questions.length - 1) {
      setCurrent(current + 1);
    } else {
      navigate(`/students/assessments/${slug}/result`, {
        state: { answers }
      });
    }
  };

  return (
    <section className="min-h-screen bg-[#F8F1FF] px-4 py-16">
      <div className="max-w-xl mx-auto bg-white p-6 rounded-2xl shadow">

        <h1 className="text-xl font-bold text-[#534D56]">
          {assessment.title}
        </h1>

        <p className="text-sm text-[#656176] mt-1">
          Question {current + 1} of {assessment.questions.length}
        </p>

        <div className="mt-6">
          <h2 className="font-medium text-[#534D56]">
            {q.question}
          </h2>

          <div className="mt-4 space-y-2">
            {q.options.map((opt, i) => (
              <button
                key={i}
                onClick={() => selectOption(i)}
                className={`w-full text-left p-3 rounded border
                  ${answers[current] === i
                    ? "bg-[#1B998B]/10 border-[#1B998B]"
                    : "hover:bg-gray-50"
                  }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={next}
          disabled={answers[current] === undefined}
          className="mt-6 w-full bg-[#1B998B] text-white py-2 rounded disabled:opacity-50"
        >
          {current === assessment.questions.length - 1
            ? "Submit"
            : "Next"}
        </button>
      </div>
    </section>
  );
}