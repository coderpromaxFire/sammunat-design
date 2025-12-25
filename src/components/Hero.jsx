import Threads from "./Threads";
import RotatingText from "./RotatingText";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">

      {/* Threads Background */}
      <div className="absolute inset-0 z-0">
        <Threads
          amplitude={1}
          distance={0}
          enableMouseInteraction={true}
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 z-[1]" />

      {/* Hero Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 text-white">

        {/* Heading */}
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight flex flex-wrap items-center justify-center gap-4">

          <span className="hero-glow">Build</span>

          <RotatingText
            texts={["High-Impact", "Future-Ready", "Scalable", "Modern"]}
            mainClassName="text-rotate-glass px-3"
            staggerFrom="last"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={2000}
          />

          <span className="hero-glow">Products</span>
        </h1>

        {/* Subtext (NO BOX, ONLY GLOW) */}
        <p
          className="
            mt-8 max-w-3xl
            text-gray-300 text-lg md:text-xl
            leading-relaxed
            hero-subtext
          "
        >
          Sammunat helps startups and businesses design, develop, and scale
          modern digital experiences.
        </p>

        {/* CTA BUTTONS – PUSHED LOWER */}
        <div className="mt-20 md:mt-24 flex flex-col sm:flex-row gap-8">

          <button
            className="
              px-8 py-3 rounded-lg font-medium text-white
              bg-gradient-to-r from-blue-500 to-violet-600
              hover:scale-105 transition-all duration-300
              shadow-lg
            "
          >
            Get Consultation
          </button>

          <button
            className="
              px-8 py-3 border border-white/30 rounded-lg font-medium
              hover:bg-white hover:text-black
              transition-all duration-300
            "
          >
            Get Started
          </button>

        </div>
      </div>
    </section>
  );
}




