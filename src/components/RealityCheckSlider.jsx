import { useState } from "react";

export default function RealityCheckSlider() {
  const [timeline, setTimeline] = useState(50);
  const [budget, setBudget] = useState(50);

  const getRealityResult = () => {
    // Very fast + very low budget
    if (timeline < 30 && budget < 30) {
      return {
        text: "Very fast delivery with a very low budget is extremely risky 🚨",
        color: "bg-red-100 text-red-700",
      };
    }

    // Fast but decent budget
    if (timeline < 30 && budget >= 60) {
      return {
        text: "Fast delivery is possible because the budget supports it 💨",
        color: "bg-green-100 text-green-700",
      };
    }

    // Flexible time + low budget
    if (timeline >= 60 && budget < 30) {
      return {
        text: "Low budget works only if the timeline is flexible ⚠️",
        color: "bg-yellow-100 text-yellow-700",
      };
    }

    // Balanced
    if (timeline >= 40 && timeline <= 70 && budget >= 40 && budget <= 70) {
      return {
        text: "This is a balanced and healthy project setup ✅",
        color: "bg-green-100 text-green-700",
      };
    }

    // Default
    return {
      text: "This setup is possible but needs careful planning 🧠",
      color: "bg-blue-100 text-blue-700",
    };
  };

  const result = getRealityResult();

  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4">

        {/* HEADING */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Time & Money Reality Check
          </h2>
          <p className="text-lg text-[#6b6570] max-w-2xl mx-auto">
            Move the sliders to understand the real trade-offs between time,
            cost, and risk.
          </p>
        </div>

        {/* CARD */}
        <div className="bg-[#F8F1FF] rounded-3xl p-6 sm:p-10 shadow-lg">

          {/* TIMELINE */}
          <div className="mb-10">
            <div className="flex justify-between items-center mb-3">
              <p className="font-medium">Timeline ⏳</p>
              <span className="text-sm font-semibold">
                {timeline < 30
                  ? "Very Fast"
                  : timeline < 60
                  ? "Moderate"
                  : "Flexible"}
              </span>
            </div>

            <input
              type="range"
              min="0"
              max="100"
              value={timeline}
              onChange={(e) => setTimeline(Number(e.target.value))}
              className="w-full h-3 accent-[#1B998B] cursor-pointer"
            />

            <div className="flex justify-between text-xs opacity-70 mt-2">
              <span>Urgent</span>
              <span>Flexible</span>
            </div>
          </div>

          {/* BUDGET */}
          <div className="mb-10">
            <div className="flex justify-between items-center mb-3">
              <p className="font-medium">Budget 💰</p>
              <span className="text-sm font-semibold">
                {budget < 30
                  ? "Low"
                  : budget < 60
                  ? "Medium"
                  : "High"}
              </span>
            </div>

            <input
              type="range"
              min="0"
              max="100"
              value={budget}
              onChange={(e) => setBudget(Number(e.target.value))}
              className="w-full h-3 accent-[#1B998B] cursor-pointer"
            />

            <div className="flex justify-between text-xs opacity-70 mt-2">
              <span>Low</span>
              <span>High</span>
            </div>
          </div>

          {/* RESULT */}
          <div
            className={`rounded-2xl p-5 text-center font-semibold transition ${result.color}`}
          >
            {result.text}
          </div>
        </div>
      </div>
    </section>
  );
}
