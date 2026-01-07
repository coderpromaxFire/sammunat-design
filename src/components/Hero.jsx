import Threads from "./Threads";
import RotatingText from "./RotatingText";

export default function Hero() {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="relative min-h-screen bg-[#F8F1FF] overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-35">
        <Threads
          color={[27 / 255, 153 / 255, 139 / 220]}
          amplitude={0.5}
          distance={0}
          enableMouseInteraction
        />
      </div>

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold flex gap-3 text-[#534D56]">
          Build
          <RotatingText
            texts={["High-Impact", "Future-Ready", "Scalable", "Modern"]}
          />
          Products
        </h1>

        <p className="mt-6 max-w-2xl text-[#656176]">
          Sammunat helps startups and businesses design, develop,
          and scale thoughtful digital experiences.
        </p>

        <div className="mt-12 flex gap-5">
          <button
            onClick={() => scrollTo("contact")}
            className="px-8 py-3 rounded-lg bg-[#1B998B] text-white font-semibold"
          >
            Get Consultation
          </button>

          <button
            onClick={() => scrollTo("services")}
            className="px-8 py-3 rounded-lg border border-[#1B998B] text-[#1B998B]"
          >
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}




