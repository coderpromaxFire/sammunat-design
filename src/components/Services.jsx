import { motion } from "framer-motion";

const services = [
  {
    title: "Web Development",
    desc: "High-performance websites and web apps built with modern technologies.",
    tags: ["React", "Next.js", "Tailwind", "Node.js"],
    bg: "bg-[#DECDF5]",
    text: "text-[#534D56]",
    span: ""
  },
  {
    title: "UI / UX Design",
    desc: "Clean, user-focused interfaces that are intuitive and conversion-driven.",
    tags: ["Figma", "Design Systems", "Prototyping"],
    bg: "bg-[#E8DDF8]",
    text: "text-[#534D56]",
    span: ""
  },
  {
    title: "CRM & ERP Systems",
    desc: "Custom internal tools to manage operations, customers, and data.",
    tags: ["Dashboards", "Automation", "Scalability"],
    bg: "bg-[#F3E9FF]",
    text: "text-[#534D56]",
    span: ""
  },
  {
    title: "Video Editing",
    desc: "Professional video editing with cinematic storytelling and motion.",
    tags: ["Reels", "YouTube", "Motion Graphics"],
    bg: "bg-[#DECDF5]",
    text: "text-[#534D56]",
    span: ""
  },
  {
    title: "Branding & Identity",
    desc: "Brand systems that communicate trust, clarity, and credibility.",
    tags: ["Logos", "Visual Identity", "Guidelines"],
    bg: "bg-[#E8DDF8]",
    text: "text-[#534D56]",
    span: ""
  },
  {
    title: "Consulting & Strategy",
    desc: "Technical and product guidance to help you make the right decisions.",
    tags: ["Roadmaps", "Audits", "Scaling"],
    bg: "bg-[#F3E9FF]",
    text: "text-[#534D56]",
    span: ""
  }
];

export default function Services() {
  const scrollToContact = () =>
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="services" className="py-16 px-4 md:py-32 md:px-6 bg-[#F8F1FF]">
      <div className="max-w-6xl mx-auto mb-12 md:mb-24">
        <h2 className="text-3xl md:text-5xl font-extrabold text-[#534D56]">
          Our <span className="text-[#1B998B]">Services</span>
        </h2>
        <p className="mt-4 max-w-xl text-[#656176] text-sm md:text-lg">
          We design, build, and scale digital products that help businesses grow.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid gap-6 md:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <motion.div
            key={i}
            onClick={scrollToContact}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            className={`
              ${s.bg} ${s.text}
              rounded-3xl p-6 md:p-10
              cursor-pointer relative overflow-hidden
            `}
          >
            <div className="relative z-10">
              <h3 className="text-xl md:text-2xl font-bold mb-3">
                {s.title}
              </h3>
              <p className="opacity-80 text-sm md:text-base">
                {s.desc}
              </p>
            </div>

            <div className="relative z-10 mt-6 flex flex-wrap gap-2">
              {s.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 text-xs md:text-sm rounded-full border border-current/30"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
