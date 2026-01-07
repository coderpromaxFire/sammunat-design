import { motion } from "framer-motion";

const services = [
  {
    title: "Web Development",
    desc:
      "Modern, scalable websites and web applications built with cutting-edge technologies and best practices.",
    tags: ["Responsive", "E-Commerce", "SEO Optimized"],
    bg: "bg-[#FBF7F4]",
    text: "text-[#1B1B1B]",
    span: "lg:col-span-2"
  },
  {
    title: "App Development",
    desc:
      "High-performance mobile applications designed for speed, usability, and scale.",
    tags: ["iOS & Android", "Cross-Platform", "Native Apps"],
    bg: "bg-[#0E0E0E]",
    text: "text-white",
    span: ""
  },
  {
    title: "CRM Solutions",
    desc:
      "Custom CRM systems to manage customer relationships, automate workflows, and boost growth.",
    tags: ["Sales Pipeline", "Analytics", "Automation"],
    bg: "bg-[#A996F3]",
    text: "text-white",
    span: ""
  },
  {
    title: "Video Editing",
    desc:
      "Professional video editing that enhances storytelling, engagement, and brand presence.",
    tags: ["Reels", "Ads", "YouTube"],
    bg: "bg-[#111111]",
    text: "text-white",
    span: ""
  },
  {
    title: "Video Animation",
    desc:
      "Motion graphics and animations that bring your ideas to life visually.",
    tags: ["Motion", "Explainers", "Branding"],
    bg: "bg-[#DECDF5]",
    text: "text-[#1B1B1B]",
    span: ""
  },
  {
    title: "Web Design",
    desc:
      "Clean, intuitive UI/UX designs focused on clarity, usability, and conversion.",
    tags: ["UI/UX", "Figma", "Prototypes"],
    bg: "bg-[#0F172A]",
    text: "text-white",
    span: ""
  },
  {
    title: "SaaS Development",
    desc:
      "End-to-end SaaS products engineered for scalability and long-term growth.",
    tags: ["Dashboards", "APIs", "Cloud"],
    bg: "bg-[#1B998B]",
    text: "text-white",
    span: "lg:col-span-2"
  },
  {
    title: "Android Development",
    desc:
      "Native and modern Android applications with smooth performance.",
    tags: ["Material UI", "Performance", "Security"],
    bg: "bg-[#101010]",
    text: "text-white",
    span: ""
  },
  {
    title: "Email Marketing",
    desc:
      "High-converting email campaigns and newsletters that retain users.",
    tags: ["Campaigns", "Automation", "Analytics"],
    bg: "bg-[#FBF7F4]",
    text: "text-[#1B1B1B]",
    span: ""
  },
  {
    title: "3D Design & Animation",
    desc:
      "High-quality 3D visuals, product renders, and creative animations.",
    tags: ["3D Models", "Renders", "Visuals"],
    bg: "bg-[#0E0E0E]",
    text: "text-white",
    span: ""
  },
  {
    title: "SEO",
    desc:
      "Search Engine Optimization to improve visibility, traffic, and rankings.",
    tags: ["Keywords", "Analytics", "Growth"],
    bg: "bg-[#DECDF5]",
    text: "text-[#1B1B1B]",
    span: ""
  }
];

export default function Services() {
  const scrollToContact = () => {
    document
      .getElementById("contact")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="py-32 px-6 bg-[#F8F1FF]">
      {/* Heading */}
      <div className="max-w-6xl mx-auto mb-24">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#534D56]">
          Our <span className="text-[#1B998B]">Services</span>
        </h2>
        <p className="mt-4 max-w-xl text-[#656176] text-lg">
          We design, build, and scale digital products that help businesses grow.
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <motion.div
            key={i}
            role="button"
            tabIndex={0}
            onClick={scrollToContact}
            onKeyDown={(e) => e.key === "Enter" && scrollToContact()}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              delay: i * 0.06
            }}
            whileHover={{ y: -8 }}
            className={`
              relative overflow-hidden cursor-pointer
              ${s.bg} ${s.text} ${s.span}
              rounded-3xl p-10
              flex flex-col justify-between
              focus:outline-none focus:ring-2 focus:ring-[#1B998B]
            `}
            style={{
              boxShadow: "0 20px 40px rgba(0,0,0,0.18)"
            }}
          >
            {/* GLASS OVERLAY */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(120deg, rgba(255,255,255,0.25), rgba(255,255,255,0.05))",
                backdropFilter: "blur(12px)"
              }}
            />

            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4">
                {s.title}
              </h3>

              <p className="opacity-80 leading-relaxed">
                {s.desc}
              </p>
            </div>

            {/* Tags */}
            <div className="relative z-10 mt-8 flex flex-wrap gap-3">
              {s.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="
                    px-4 py-1.5 rounded-full
                    text-sm
                    border border-current/30
                    bg-white/10
                    backdrop-blur-md
                  "
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
