export default function Process() {
  const steps = ["Discover", "Design", "Develop", "Deliver"];

  return (
    <section className="py-24 px-6 bg-[#DECDF5]">
      <h2 className="text-4xl font-bold text-center mb-16">
        How We Work
      </h2>

      <div className="flex flex-col md:flex-row gap-12 justify-center">
        {steps.map((step, i) => (
          <div key={i} className="card text-center w-64">
            <span className="text-3xl font-bold text-[#1B998B]">{i + 1}</span>
            <h3 className="mt-4 text-xl font-semibold">{step}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

