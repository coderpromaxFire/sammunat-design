import React from "react";

export default function ClientDashboard() {
  // Mock client data (later from backend)
  const client = {
    name: "Komal Bavoria",
    email: "komalbavoria17@gmail.com",
    company: "Personal Project",
    virtualId: "CLI-2026-884",
    photo: "https://i.pravatar.cc/150?img=32",
  };

  const projects = [
    {
      name: "Sammunat Website",
      status: "In Progress",
      progress: 65,
      delivery: "Feb 15, 2026",
    },
    {
      name: "Client Dashboard UI",
      status: "Review",
      progress: 90,
      delivery: "Jan 30, 2026",
    },
  ];

  const promises = [
    "Weekly Progress Updates",
    "Clear Delivery Timeline",
    "Transparent Communication",
    "Post-Delivery Support",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F8F1FF] to-[#EFE7FF] p-4 sm:p-8">
      <div className="max-w-6xl mx-auto space-y-6">

        {/* 🔹 HEADER */}
        <h1 className="text-2xl sm:text-3xl font-bold text-[#534D56]">
          Client Dashboard
        </h1>

        {/* 🔹 CLIENT PROFILE CARD */}
        <div className="bg-white rounded-2xl shadow p-6 flex flex-col sm:flex-row items-center gap-6">
          <img
            src={client.photo}
            alt="Client"
            className="w-28 h-28 rounded-full border-4 border-[#1B998B]"
          />

          <div className="flex-1 text-center sm:text-left">
            <h2 className="text-xl font-semibold">{client.name}</h2>
            <p className="text-sm text-gray-500">{client.email}</p>
            <p className="text-sm text-gray-500">
              Company: {client.company}
            </p>

            <div className="mt-3 inline-block bg-[#1B998B]/10 text-[#1B998B] px-4 py-1 rounded-full text-sm font-medium">
              Client ID: {client.virtualId}
            </div>
          </div>
        </div>

        {/* 🔹 PROJECTS OVERVIEW */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow p-6"
            >
              <h3 className="font-semibold text-lg">{project.name}</h3>

              <div className="mt-3 space-y-1 text-sm text-gray-600">
                <p>Status: <b>{project.status}</b></p>
                <p>Expected Delivery: {project.delivery}</p>
              </div>

              <div className="mt-4">
                <div className="flex justify-between text-sm mb-1">
                  <span>Progress</span>
                  <span>{project.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-[#1B998B] h-2 rounded-full"
                    style={{ width: `${project.progress}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 🔹 CLIENT PROMISE BOARD */}
        <div className="bg-white rounded-2xl shadow p-6">
          <h3 className="font-semibold text-lg mb-4">
            Our Promise to You
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {promises.map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#F8F1FF] to-[#EFE7FF] border rounded-xl p-4"
              >
                <p className="text-sm font-medium text-[#534D56]">
                  ✔ {item}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 🔹 FEEDBACK / MESSAGE BOX */}
        <div className="bg-white rounded-2xl shadow p-6">
          <h3 className="font-semibold text-lg mb-3">
            Feedback / Message
          </h3>

          <textarea
            placeholder="Write your feedback, changes, or questions here..."
            className="w-full border rounded-xl p-4 min-h-[120px]"
          />

          <button className="mt-4 bg-[#1B998B] text-white px-6 py-2 rounded-lg">
            Send to Team
          </button>
        </div>

      </div>
    </div>
  );
}
