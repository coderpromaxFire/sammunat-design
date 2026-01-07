import { motion } from "framer-motion";

const services = [
  {
    title: "Elevate Your Content with",
    focus: "Professional Video Editing",
    desc:
      "High-quality video content is essential to capture attention and drive engagement. Our expert editors deliver seamless transitions, cinematic effects, and compelling storytelling.",
    cta: "Start Creating",
    image: "/services/video-editing.jpg"
  },
  {
    title: "Streamline Your Business with",
    focus: "CRM & ERP Solutions",
    desc:
      "We design scalable CRM & ERP systems that help you manage operations, track sales, and automate workflows — all tailored to your business growth.",
    cta: "Explore Solutions",
    image: "/services/crm-erp.jpg"
  },
  {
    title: "Build Powerful Digital Experiences with",
    focus: "Expert Web Development",
    desc:
      "From fast landing pages to complex web applications, we build secure, scalable, and high-performance websites that convert and scale.",
    cta: "Build with Us",
    image: "/services/web-development.jpg"
  }
];

export default function ServiceHighlights() {
  return (
    <section className="bg-[#F8F1FF] py-24 px-6">
      <div className="max-w-7xl mx-auto space-y-16">
        {services.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="
              relative
              h-[420px] md:h-[460px]
              rounded-3xl overflow-hidden
              shadow-2xl
            "
          >
            {/* IMAGE */}
            <img
              src={item.image}
              alt={item.focus}
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* GRADIENT OVERLAY */}
            <div
              className="
                absolute inset-0
                bg-gradient-to-r
                from-black/70 via-black/40 to-transparent
              "
            />

            {/* CONTENT */}
            <div
              className="
                relative z-10
                h-full
                flex flex-col justify-center
                px-8 md:px-16
                max-w-3xl
              "
            >
              <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
                {item.title}
                <span className="block text-[#1B998B]">
                  {item.focus}
                </span>
              </h2>

              <p className="mt-6 text-white/90 text-lg leading-relaxed">
                {item.desc}
              </p>

              <button
                className="
                  mt-8 w-fit
                  px-8 py-3 rounded-lg
                  bg-[#1B998B]
                  text-white font-semibold
                  hover:opacity-90
                  transition
                "
              >
                {item.cta}
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

