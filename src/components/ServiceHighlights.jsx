import { motion } from "framer-motion";

const GOOGLE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSfSLY3Qgdt0dtg08AOSG6sLUyIzD0Vwc5trpnFV6HwOGP9G9A/viewform?pli=1";

const services = [
  {
    title: "Build Powerful Digital Experiences with",
    focus: "Expert Web Development",
    desc:
      "From fast landing pages to complex web applications, we build secure, scalable, and high-performance websites that convert and scale.",
    cta: "Get Web Development",
    image: "/services/web-development.jpg"
  },
  {
    title: "Streamline Your Business with",
    focus: "CRM & ERP Solutions",
    desc:
      "We design scalable CRM & ERP systems that help you manage operations, track sales, and automate workflows — all tailored to your business growth.",
    cta: "Get CRM Solutions",
    image: "/services/crm-erp.jpg"
  },
  {
    title: "Design Seamless Digital Products with",
    focus: "UI / UX Excellence",
    desc:
      "We craft intuitive, user-centered designs that enhance usability, engagement, and customer satisfaction across web and mobile platforms.",
    cta: "Get UI / UX Design",
    image: "/services/ui-ux.jpg"
  }
];

export default function ServiceHighlights() {
  const openForm = () => {
    window.open(GOOGLE_FORM_URL, "_blank");
  };

  return (
    <section
      id="services"
      className="bg-[#F8F1FF] py-16 px-4 md:py-24 md:px-6"
    >
      <div className="max-w-7xl mx-auto space-y-12 md:space-y-16">
        {services.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="
              relative
              h-[320px] md:h-[460px]
              rounded-3xl overflow-hidden
              shadow-xl
            "
          >
            {/* BACKGROUND IMAGE */}
            <img
              src={item.image}
              alt={item.focus}
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

            {/* CONTENT */}
            <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-16 max-w-3xl">
              <h2 className="text-2xl md:text-5xl font-extrabold text-white leading-tight">
                {item.title}
                <span className="block text-[#1B998B]">
                  {item.focus}
                </span>
              </h2>

              <p className="mt-4 md:mt-6 text-white/90 text-sm md:text-lg leading-relaxed">
                {item.desc}
              </p>

              {/* CTA BUTTON */}
              <button
                onClick={openForm}
                className="mt-6 md:mt-8 w-fit px-6 py-3 rounded-lg bg-[#1B998B] text-white font-semibold hover:scale-105 transition-transform"
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

