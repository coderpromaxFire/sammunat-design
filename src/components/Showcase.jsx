import BounceCards from "./BounceCards";

const images = [
  "/img1.jpg",
  "/img2.jpg",
  "/img3.jpg",
  "/img4.jpg",
  "/img5.jpg"
];

export default function Showcase() {
  return (
    <section className="py-32 px-8 relative overflow-hidden">
      
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-20">
        <span className="bg-gradient-to-r from-blue-400 to-violet-500 bg-clip-text text-transparent">
          Our Work
        </span>
      </h2>

      <div className="flex justify-center">
        <BounceCards
          images={images}
          containerWidth={420}
          containerHeight={420}
          animationDelay={0.4}
          animationStagger={0.08}
        />
      </div>

    </section>
  );
}
