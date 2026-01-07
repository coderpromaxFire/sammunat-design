export default function Process() {
  const steps = ["Discover", "Design", "Develop", "Deliver"];

  return (
    <section className="py-16 px-4 md:py-24 md:px-6 bg-[#DECDF5]">
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-10 md:mb-16 text-[#534D56]">
        How We Work
      </h2>

      <div className="flex flex-col md:flex-row gap-6 md:gap-12 justify-center items-center">
        {steps.map((step, i) => (
          <div
            key={i}
            className="
              text-center
              w-full max-w-[220px]
              bg-[#F8F1FF]
              rounded-2xl
              p-5 md:p-6
              shadow
            "
          >
            <span className="text-2xl md:text-3xl font-bold text-[#1B998B]">
              {i + 1}
            </span>

            <h3 className="mt-3 text-base md:text-xl font-semibold text-[#534D56]">
              {step}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}

