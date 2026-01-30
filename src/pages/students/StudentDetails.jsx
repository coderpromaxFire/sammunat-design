import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function StudentDetails() {
  const { domain } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);

  const startAssessment = () => {
    navigate(`/students/assessments/${domain}`, {
      state: { name, email },
    });
  };

  return (
    <section className="min-h-screen bg-[#F8F1FF] flex items-center justify-center">
      <div className="bg-white p-6 rounded-2xl shadow max-w-md w-full">

        <h1 className="text-xl font-bold text-[#534D56]">
          Student Details
        </h1>

        <input
          className="w-full mt-4 p-2 border rounded"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className="w-full mt-3 p-2 border rounded"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* Consent Checkbox */}
        <label className="flex items-start gap-2 mt-4 text-sm text-[#656176]">
          <input
            type="checkbox"
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
            className="mt-1"
          />
          I agree that Sammunat may contact me for internship or hiring
          opportunities based on my assessment performance.
        </label>

        <button
          disabled={!name || !email || !consent}
          onClick={startAssessment}
          className="mt-4 w-full bg-[#1B998B] text-white py-2 rounded disabled:opacity-50"
        >
          Start Assessment
        </button>
      </div>
    </section>
  );
}

