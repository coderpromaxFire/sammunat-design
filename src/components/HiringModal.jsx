import { useState } from "react";

export default function HiringModal({ open, onClose }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    college: "",
    branch: "",
    domain: "",
    resume: null
  });

  const [status, setStatus] = useState("idle");

  if (!open) return null;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFile = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      setForm({
        ...form,
        resume: {
          data: reader.result.split(",")[1],
          name: file.name,
          type: file.type
        }
      });
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbx6KwGCFlRPwVXo4um5IznlC19s1XBBDzuodu-4vttmwb7KEPbU0RlfYBQcio9YSxJ4/exec",
        {
          method: "POST",
          body: JSON.stringify({
            name: form.name,
            email: form.email,
            college: form.college,
            branch: form.branch,
            domain: form.domain,
            resume: form.resume.data,
            resumeName: form.resume.name,
            resumeType: form.resume.type
          })
        }
      );

      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="fixed inset-0 z-[100] bg-black/40 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl w-full max-w-md p-6 relative">

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-xl"
        >
          ×
        </button>

        <h2 className="text-2xl font-bold text-[#534D56] mb-4">
          Apply at Sammunat
        </h2>

        {status === "success" ? (
          <p className="text-green-600 font-medium">
            ✅ Application submitted successfully!
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">

            {/* Text Inputs */}
            {["name", "email", "college", "branch", "domain"].map((field) => (
              <input
                key={field}
                name={field}
                value={form[field]}
                onChange={handleChange}
                required
                placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                className="w-full px-4 py-2 border rounded-lg"
              />
            ))}

            {/* Resume Upload */}
            <div>
              <label className="block mb-1 text-sm font-medium text-[#534D56]">
                Upload Resume (PDF / DOC / DOCX)
              </label>
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                required
                onChange={handleFile}
                className="w-full text-sm"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full py-3 bg-[#1B998B] text-white rounded-lg font-semibold"
            >
              {status === "loading" ? "Submitting..." : "Submit Application"}
            </button>

            {status === "error" && (
              <p className="text-red-500 text-sm">
                Something went wrong. Try again.
              </p>
            )}
          </form>
        )}
      </div>
    </div>
  );
}
