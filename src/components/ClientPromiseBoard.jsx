import { useState } from "react";

export default function ClientPromiseBoard() {
  const [open, setOpen] = useState(false);

  return (
    <section className="px-6 md:px-12 py-20">
      <div className="max-w-6xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Radical Transparency for Clients
        </h2>
        <p className="text-lg text-[#6b6570] mb-10">
          See exactly how your project will be handled — before you commit.
        </p>

        {/* Reveal Button */}
        <button
          onClick={() => setOpen(!open)}
          className="px-8 py-4 rounded-2xl bg-[#1B998B] text-white font-semibold text-lg hover:opacity-90 transition"
        >
          {open ? "Hide Client Promise Board" : "View Client Promise Board"}
        </button>

        {/* Reveal Card */}
        <div
          className={`transition-all duration-700 ease-in-out overflow-hidden ${
            open ? "max-h-[1200px] opacity-100 mt-14" : "max-h-0 opacity-0"
          }`}
        >
          <div className="card max-w-4xl mx-auto text-left">

            {/* Header */}
            <div className="flex justify-between flex-wrap gap-6 mb-8">
              <div>
                <p className="text-sm opacity-70">Client</p>
                <p className="font-semibold">Startup Founder (Demo)</p>
              </div>
              <div>
                <p className="text-sm opacity-70">Service</p>
                <p className="font-semibold">Website + UX</p>
              </div>
              <div>
                <p className="text-sm opacity-70">Timeline</p>
                <p className="font-semibold">3 Weeks</p>
              </div>
            </div>

            {/* Progress Graphs */}
            <div className="space-y-6 mb-10">

              {/* Design */}
              <ProgressBar
                title="Design Phase"
                percent={100}
                status="Completed"
                color="bg-[#1B998B]"
              />

              {/* Development */}
              <ProgressBar
                title="Development Phase"
                percent={60}
                status="In Progress"
                color="bg-yellow-400"
              />

              {/* Testing */}
              <ProgressBar
                title="Testing Phase"
                percent={0}
                status="Pending"
                color="bg-gray-400"
              />
            </div>

            {/* Current Focus */}
            <div className="bg-white/50 rounded-xl p-5 mb-8">
              <p className="text-sm opacity-70 mb-1">Current Focus</p>
              <p className="font-medium">
                Homepage layout & mobile responsiveness
              </p>
            </div>

            {/* Trust Footer */}
            <div className="flex justify-between items-center flex-wrap gap-4">
              <p className="text-sm opacity-70">
                Next milestone in <span className="font-semibold">6 days</span>
              </p>

              <span className="px-4 py-2 rounded-full text-sm bg-[#1B998B]/10 text-[#1B998B] font-medium">
                Transparency Guaranteed
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

/* 🔹 Progress Bar Component */
function ProgressBar({ title, percent, status, color }) {
  return (
    <div>
      <div className="flex justify-between mb-2">
        <p className="font-medium">{title}</p>
        <p className="text-sm opacity-70">{status}</p>
      </div>

      <div className="w-full h-3 bg-white/60 rounded-full overflow-hidden">
        <div
          className={`h-full ${color} transition-all duration-700`}
          style={{ width: `${percent}%` }}
        />
      </div>

      <p className="text-sm opacity-60 mt-1">{percent}% complete</p>
    </div>
  );
}
