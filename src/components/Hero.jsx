import Threads from "./Threads";
import RotatingText from "./RotatingText";

export default function Hero() {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="relative bg-[#F8F1FF] overflow-hidden">
      {/* Background animation */}
      <div className="absolute inset-0 z-0 opacity-30">
        <Threads
          color={[27 / 255, 153 / 255, 139 / 220]}
          amplitude={0.5}
          distance={0}
          enableMouseInteraction
        />
      </div>

      {/* Content */}
      <div
        className="
          relative z-10
          flex flex-col items-center justify-center text-center
          px-4
          py-24
          md:min-h-screen
          md:px-6
        "
      >
        {/* Heading */}
        <h1
          className="
            text-3xl
            sm:text-4xl
            md:text-7xl
            font-extrabold
            flex flex-wrap justify-center gap-2
            text-[#534D56]
          "
        >
          Build
          <RotatingText
            texts={["High-Impact", "Future-Ready", "Scalable", "Modern"]}
          />
          Products
        </h1>

        {/* Subtitle */}
        <p
          className="
            mt-4
            max-w-xl
            text-sm
            sm:text-base
            md:text-lg
            text-[#656176]
          "
        >
          Sammunat helps startups and businesses design, develop,
          and scale thoughtful digital experiences.
        </p>

        {/* CTAs */}
        <div
          className="
            mt-6
            flex flex-col gap-3
            sm:flex-row
            sm:gap-4
          "
        >
          <button
            onClick={() => scrollTo("contact")}
            className="
              w-full sm:w-auto

              /* MOBILE (SMALL) */
              px-4 py-2
              text-sm
              rounded-md

              /* DESKTOP (UNCHANGED) */
              md:px-8 md:py-4
              md:text-base
              md:rounded-lg

              bg-[#1B998B]
              text-white
              font-semibold
            "
          >
            Get Consultation
          </button>

          <button
            onClick={() => scrollTo("services")}
            className="
              w-full sm:w-auto

              /* MOBILE (SMALL) */
              px-4 py-2
              text-sm
              rounded-md

              /* DESKTOP (UNCHANGED) */
              md:px-8 md:py-4
              md:text-base
              md:rounded-lg

              border border-[#1B998B]
              text-[#1B998B]
              font-semibold
            "
          >
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}



