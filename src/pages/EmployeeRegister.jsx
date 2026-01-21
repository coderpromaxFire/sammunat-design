import { useState } from "react";

export default function EmployeeRegister() {
  const [employeeId, setEmployeeId] = useState("");

  const generateId = () => {
    const year = new Date().getFullYear();
    const rand = Math.floor(100 + Math.random() * 900);
    setEmployeeId(`EMP-${year}-${rand}`);
  };

  return (
    <div className="p-10 max-w-md mx-auto">
      <h2 className="text-2xl mb-4">Employee Registration</h2>

      <input className="border p-2 w-full mb-2" placeholder="Name" />
      <input className="border p-2 w-full mb-2" placeholder="Email" />
      <input className="border p-2 w-full mb-4" placeholder="Phone" />

      <button
        onClick={generateId}
        className="bg-green-600 text-white px-4 py-2 w-full"
      >
        Generate Virtual ID
      </button>

      {employeeId && (
        <p className="mt-4 font-bold">Your ID: {employeeId}</p>
      )}
    </div>
  );
}
