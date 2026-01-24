// import { useState } from "react";

// export default function HiringModal({ open, onClose }) {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     college: "",
//     branch: "",
//     domain: "",
//     resume: null
//   });

//   const [status, setStatus] = useState("idle");

//   if (!open) return null;

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleFile = (e) => {
//     const file = e.target.files[0];
//     if (!file) return;

//     const reader = new FileReader();
//     reader.onload = () => {
//       setForm({
//         ...form,
//         resume: {
//           data: reader.result.split(",")[1],
//           name: file.name,
//           type: file.type
//         }
//       });
//     };
//     reader.readAsDataURL(file);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setStatus("loading");

//     try {
//       await fetch(
//         "https://script.google.com/macros/s/AKfycbx6KwGCFlRPwVXo4um5IznlC19s1XBBDzuodu-4vttmwb7KEPbU0RlfYBQcio9YSxJ4/exec",
//         {
//           method: "POST",
//           body: JSON.stringify({
//             name: form.name,
//             email: form.email,
//             college: form.college,
//             branch: form.branch,
//             domain: form.domain,
//             resume: form.resume.data,
//             resumeName: form.resume.name,
//             resumeType: form.resume.type
//           })
//         }
//       );

//       setStatus("success");
//     } catch {
//       setStatus("error");
//     }
//   };

//   return (
//     <div className="fixed inset-0 z-[100] bg-black/40 flex items-center justify-center px-4">
//       <div className="bg-white rounded-2xl w-full max-w-md p-6 relative">

//         {/* Close */}
//         <button
//           onClick={onClose}
//           className="absolute top-3 right-4 text-xl"
//         >
//           ×
//         </button>

//         <h2 className="text-2xl font-bold text-[#534D56] mb-4">
//           Apply at Sammunat
//         </h2>

//         {status === "success" ? (
//           <p className="text-green-600 font-medium">
//             ✅ Application submitted successfully!
//           </p>
//         ) : (
//           <form onSubmit={handleSubmit} className="space-y-4">

//             {/* Name */}
//             <input
//               name="name"
//               value={form.name}
//               onChange={handleChange}
//               required
//               placeholder="Full Name"
//               className="w-full px-4 py-2 border rounded-lg"
//             />

//             {/* Email */}
//             <input
//               name="email"
//               type="email"
//               value={form.email}
//               onChange={handleChange}
//               required
//               placeholder="Email Address"
//               className="w-full px-4 py-2 border rounded-lg"
//             />

//             {/* College */}
//             <input
//               name="college"
//               value={form.college}
//               onChange={handleChange}
//               required
//               placeholder="College / University"
//               className="w-full px-4 py-2 border rounded-lg"
//             />

//             {/* Branch */}
//             <input
//               name="branch"
//               value={form.branch}
//               onChange={handleChange}
//               required
//               placeholder="Branch / Department"
//               className="w-full px-4 py-2 border rounded-lg"
//             />

//             {/* DOMAIN / POSITION SELECT */}
//             <select
//               name="domain"
//               value={form.domain}
//               onChange={handleChange}
//               required
//               className="w-full px-4 py-2 border rounded-lg bg-white"
//             >
//               <option value="" disabled>
//                 Select Position
//               </option>

//               {/* === Positions (edit anytime) === */}
//               <option value="Frontend Developer">Frontend Developer</option>
//               <option value="Backend Developer">Backend Developer</option>
//               <option value="Full Stack Developer">Full Stack Developer</option>
//               <option value="UI/UX Designer">UI / UX Designer</option>
//               <option value="Mobile App Developer">Mobile App Developer</option>
//               <option value="Software Intern">Software Intern</option>
//               <option value="Marketing Intern">Marketing Intern</option>
//             </select>

//             {/* Resume Upload */}
//             <div>
//               <label className="block mb-1 text-sm font-medium text-[#534D56]">
//                 Upload Resume (PDF / DOC / DOCX)
//               </label>
//               <input
//                 type="file"
//                 accept=".pdf,.doc,.docx"
//                 required
//                 onChange={handleFile}
//                 className="w-full text-sm"
//               />
//             </div>

//             {/* Submit */}
//             <button
//               type="submit"
//               disabled={status === "loading"}
//               className="w-full py-3 bg-[#1B998B] text-white rounded-lg font-semibold"
//             >
//               {status === "loading" ? "Submitting..." : "Submit Application"}
//             </button>

//             {status === "error" && (
//               <p className="text-red-500 text-sm">
//                 Something went wrong. Try again.
//               </p>
//             )}
//           </form>
//         )}
//       </div>
//     </div>
//   );
// }



import React from "react";

export default function HiringModal({ open, onClose }) {
  if (!open) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    // Open Google Form in new tab
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSd2FeGtXis_yWLRt3d7kWvf4GKlsqxttc-iaohbywRN6oOXJg/viewform?usp=publish-editor",
      "_blank"
    );
  };

  return (
    <div className="fixed inset-0 z-[100] bg-black/40 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl w-full max-w-md p-6 relative shadow-lg">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-2xl text-gray-500 hover:text-black"
        >
          ×
        </button>

        {/* Heading */}
        <h2 className="text-2xl font-bold text-[#534D56] mb-2">
          Apply at Sammunat
        </h2>

        {/* Description */}
        <p className="text-sm text-gray-600 mb-6">
          We’ve moved our application process to a quick and secure Google Form.
        </p>

        {/* Button */}
        <form onSubmit={handleSubmit}>
          <button
            type="submit"
            className="w-full py-3 bg-[#1B998B] text-white rounded-lg font-semibold hover:opacity-90 transition"
          >
            Open Application Form
          </button>
        </form>

      </div>
    </div>
  );
}