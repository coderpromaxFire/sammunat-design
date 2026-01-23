import React from "react";

export default function EmployeeDashboard() {
  // Mock employee data (later this will come from backend)
  const employee = {
    name: "Komal Bavoria",
    role: "Frontend Developer",
    email: "komal@sammunat.com",
    virtualId: "EMP-2026-321",
    photo: "https://i.pravatar.cc/150?img=47",
  };

  const projects = [
    {
      name: "Sammunat Website",
      client: "Sammunat LLC",
      status: "In Progress",
      progress: 70,
    },
    {
      name: "Client Dashboard UI",
      client: "Client A",
      status: "Review",
      progress: 90,
    },
  ];

  const tasks = [
    "Finish homepage responsiveness",
    "Fix dashboard UI bugs",
    "Upload final assets",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F8F1FF] to-[#EFE7FF] p-4 sm:p-8">
      <div className="max-w-6xl mx-auto space-y-6">

        {/* 🔹 HEADER */}
        <h1 className="text-2xl sm:text-3xl font-bold text-[#534D56]">
          Employee Dashboard
        </h1>

        {/* 🔹 EMPLOYEE CARD */}
        <div className="bg-white rounded-2xl shadow p-6 flex flex-col sm:flex-row items-center gap-6">
          <img
            src={employee.photo}
            alt="Employee"
            className="w-28 h-28 rounded-full border-4 border-[#1B998B]"
          />

          <div className="flex-1 text-center sm:text-left">
            <h2 className="text-xl font-semibold">{employee.name}</h2>
            <p className="text-sm text-gray-500">{employee.role}</p>
            <p className="text-sm text-gray-500">{employee.email}</p>

            <div className="mt-3 inline-block bg-[#1B998B]/10 text-[#1B998B] px-4 py-1 rounded-full text-sm font-medium">
              Virtual ID: {employee.virtualId}
            </div>
          </div>
        </div>

        {/* 🔹 PROJECTS SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow p-6"
            >
              <h3 className="font-semibold text-lg">{project.name}</h3>
              <p className="text-sm text-gray-500">
                Client: {project.client}
              </p>

              <div className="mt-4">
                <div className="flex justify-between text-sm mb-1">
                  <span>Status: {project.status}</span>
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

        {/* 🔹 TASKS CARD */}
        <div className="bg-white rounded-2xl shadow p-6">
          <h3 className="font-semibold text-lg mb-4">Today’s Tasks</h3>
          <ul className="space-y-3">
            {tasks.map((task, index) => (
              <li
                key={index}
                className="flex items-center gap-3 text-sm"
              >
                <span className="w-2 h-2 bg-[#1B998B] rounded-full"></span>
                {task}
              </li>
            ))}
          </ul>

          <button className="mt-5 w-full sm:w-auto bg-[#1B998B] text-white px-6 py-2 rounded-lg">
            Mark Tasks as Done
          </button>
        </div>

      </div>
    </div>
  );
}
