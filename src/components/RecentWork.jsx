import { motion } from "framer-motion";

const works = [
  {
    title: "Healthcare Platform",
    category: "Web Application",
    image: "/work/work1.jpg",
    summary: "A secure platform designed to streamline patient data and care workflows.",
    status: "Case study coming soon"
  },
  {
    title: "Startup CRM System",
    category: "SaaS Product",
    image: "/work/work2.jpg",
    summary: "A scalable CRM built to help startups manage leads and customer relationships.",
    status: "In progress"
  },
  {
    title: "E-commerce Redesign",
    category: "UI / UX Design",
    image: "/work/work3.jpg",
    summary: "A modern redesign focused on conversion, speed, and clarity.",
    status: "Completed"
  },
  {
    title: "Mobile Fitness App",
    category: "Mobile App",
    image: "/work/work4.jpg",
    summary: "A fitness app focused on habit building and daily motivation.",
    status: "Prototype"
  },
  {
    title: "EdTech Learning Portal",
    category: "Education",
    image: "/work/work5.jpg",
    summary: "An online learning portal designed for accessibility and engagement.",
    status: "Completed"
  },
  {
    title: "FinTech Dashboard",
    category: "Finance",
    image: "/work/work6.jpg",
    summary: "A data-heavy dashboard with a focus on clarity and decision making.",
    status: "Case study coming soon"
  },
  {
    title: "Brand Website Revamp",
    category: "Marketing Website",
    image: "/work/work7.jpg",
    summary: "A brand-forward website revamp for better storytelling and presence.",
    status: "Completed"
  },
  {
    title: "Logistics Tracking System",
    category: "Enterprise Software",
    image: "/work/work8.jpg",
    summary: "A system to monitor shipments and improve operational visibility.",
    status: "In progress"
  },
  {
    title: "AI Analytics Tool",
    category: "Data & AI",
    image: "/work/work9.jpg",
    summary: "An analytics tool that turns complex data into clear insights.",
    status: "Research phase"
  }
];

export default function RecentWork() {
  return (
    <section id="work" className="py-36 px-6 bg-[#F8F1FF]">
      {/* Header */}
      <div className="max-w-5xl mx-auto text-center mb-28">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#534D56]">
          Recent <span className="text-[#1B998B]">Work</span>
        </h2>
        <p className="mt-6 text-[#656176] text-lg">
          Selected products crafted with clarity and care.
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid gap-20 sm:grid-cols-2 lg:grid-cols-3">
        {works.map((work, i) => (
          <motion.article
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05, duration: 0.5 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Image */}
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <img
                src={work.image}
                alt={work.title}
                className="w-full h-[300px] object-cover"
              />
            </div>

            {/* Floating caption */}
            <div
              className="
                relative
                -mt-14 mx-6
                bg-white
                rounded-2xl
                p-6
                shadow-[0_20px_40px_rgba(83,77,86,0.15)]
              "
            >
              <span className="text-xs uppercase tracking-widest text-[#1B998B]">
                {work.category}
              </span>

              <h3 className="mt-2 text-lg font-semibold text-[#534D56]">
                {work.title}
              </h3>

              <p className="mt-3 text-sm text-[#656176]">
                {work.summary}
              </p>

              <span className="
                inline-block mt-4
                text-xs px-3 py-1 rounded-full
                bg-[#1B998B]/10
                text-[#1B998B]
              ">
                {work.status}
              </span>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}


