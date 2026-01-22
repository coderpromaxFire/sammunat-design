export default function FounderAdvice() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#F8F1FF] to-white">
      <div className="max-w-6xl mx-auto px-4">

        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            If This Were Our Startup
          </h2>
          <p className="text-lg text-[#6b6570] max-w-2xl mx-auto">
            Honest advice we’d follow ourselves — even if it means less money for us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* CARD 1 */}
          <div className="bg-white rounded-3xl p-6 shadow-md hover:-translate-y-2 hover:shadow-xl transition">
            <h4 className="font-semibold mb-3">
              Start Smaller Than You Think
            </h4>
            <p className="text-sm text-[#6b6570]">
              We wouldn’t build a full app first. We’d validate with a landing
              page or MVP and real users.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="bg-white rounded-3xl p-6 shadow-md hover:-translate-y-2 hover:shadow-xl transition">
            <h4 className="font-semibold mb-3">
              Design Before Development
            </h4>
            <p className="text-sm text-[#6b6570]">
              We’d spend time understanding users and flows before writing a
              single line of code.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="bg-white rounded-3xl p-6 shadow-md hover:-translate-y-2 hover:shadow-xl transition">
            <h4 className="font-semibold mb-3">
              Speed Comes From Clarity
            </h4>
            <p className="text-sm text-[#6b6570]">
              Clear goals save more time and money than rushing development
              blindly.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
