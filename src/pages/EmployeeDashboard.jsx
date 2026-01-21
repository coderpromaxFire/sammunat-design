export default function EmployeeDashboard() {
  return (
    <div className="p-10">
      <h1 className="text-2xl mb-4">Employee Dashboard</h1>
      <p>Virtual ID: EMP-2026-321</p>

      <h3 className="mt-4 font-semibold">Assigned Clients</h3>
      <ul className="list-disc ml-6">
        <li>Client A</li>
        <li>Client B</li>
      </ul>
    </div>
  );
}
