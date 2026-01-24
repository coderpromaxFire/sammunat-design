import React, { useState } from "react";

export default function EmployeeDashboard() {
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
      progress: 70,
    },
  ];

  const [startTime, setStartTime] = useState("10:00");
  const [endTime, setEndTime] = useState("18:00");

  const [todos, setTodos] = useState([
    { text: "Finish homepage UI", done: false },
    { text: "Fix dashboard bugs", done: false },
  ]);

  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (!newTodo.trim()) return;
    setTodos([...todos, { text: newTodo, done: false }]);
    setNewTodo("");
  };

  const toggleTodo = (index) => {
    const updated = [...todos];
    updated[index].done = !updated[index].done;
    setTodos(updated);
  };

  const isAvailable = () => {
    const now = new Date();
    const current = now.getHours() * 60 + now.getMinutes();

    const [sh, sm] = startTime.split(":").map(Number);
    const [eh, em] = endTime.split(":").map(Number);

    const start = sh * 60 + sm;
    const end = eh * 60 + em;

    return current >= start && current <= end;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F8F1FF] to-[#EFE7FF] p-4 sm:p-8">
      <div className="max-w-6xl mx-auto space-y-6">

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

            <div className="mt-3 flex flex-wrap gap-3">
              <span className="bg-[#1B998B]/10 text-[#1B998B] px-4 py-1 rounded-full text-sm font-medium">
                ID: {employee.virtualId}
              </span>

              <span
                className={`px-4 py-1 rounded-full text-sm font-medium ${
                  isAvailable()
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {isAvailable() ? "Available" : "Offline"}
              </span>
            </div>
          </div>
        </div>

        {/* 🔹 PROJECT CARD */}
        <div className="bg-white rounded-2xl shadow p-6">
          <h3 className="font-semibold text-lg mb-3">Current Project</h3>
          {projects.map((p, i) => (
            <div key={i}>
              <p className="font-medium">{p.name}</p>
              <p className="text-sm text-gray-500 mb-2">Client: {p.client}</p>

              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-[#1B998B] h-2 rounded-full"
                  style={{ width: `${p.progress}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* 🔹 WORKING TIME */}
        <div className="bg-white rounded-2xl shadow p-6">
          <h3 className="font-semibold text-lg mb-4">Working Hours</h3>

          <div className="flex flex-col sm:flex-row gap-4">
            <div>
              <label className="text-sm text-gray-500">Start Time</label>
              <input
                type="time"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
                className="border rounded-lg px-3 py-2 w-full"
              />
            </div>

            <div>
              <label className="text-sm text-gray-500">End Time</label>
              <input
                type="time"
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
                className="border rounded-lg px-3 py-2 w-full"
              />
            </div>
          </div>

          <p className="mt-3 text-sm text-gray-500">
            Availability updates automatically based on these times.
          </p>
        </div>

        {/* 🔹 TODO LIST */}
        <div className="bg-white rounded-2xl shadow p-6">
          <h3 className="font-semibold text-lg mb-4">Today’s Tasks</h3>

          <div className="space-y-3">
            {todos.map((todo, index) => (
              <div
                key={index}
                className="flex items-center gap-3 text-sm"
              >
                <input
                  type="checkbox"
                  checked={todo.done}
                  onChange={() => toggleTodo(index)}
                />
                <span
                  className={
                    todo.done ? "line-through text-gray-400" : ""
                  }
                >
                  {todo.text}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-4 flex gap-2">
            <input
              type="text"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              placeholder="Add new task..."
              className="flex-1 border rounded-lg px-3 py-2"
            />
            <button
              onClick={addTodo}
              className="bg-[#1B998B] text-white px-4 rounded-lg"
            >
              Add
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
