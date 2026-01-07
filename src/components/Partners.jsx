import CircularGallery from "./CircularGallery";

const partnerItems = [
  {
    image: "/partners/global-retail.png",
    text: "Global Retail Client"
  },
  {
    image: "/partners/healthcare-network.jpg",
    text: "Healthcare Network"
  },
  {
    image: "/partners/fintech-platform.jpg",
    text: "Fintech Platform"
  },
  {
    image: "/partners/logistics-solution.jpeg",
    text: "Logistics Solutions"
  },
  {
    image: "/partners/education-lms.jpg",
    text: "Education LMS"
  },
  {
    image: "/partners/enterprise-crm.jpg",
    text: "Enterprise CRM Client"
  }
];

export default function Partners() {
  return (
    <section className="bg-[#DECDF5] py-32 px-6 overflow-hidden">
      
      {/* SECTION HEADING */}
      <div className="max-w-4xl mx-auto text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#534D56]">
          Trusted by <span className="text-[#1B998B]">Clients</span>
        </h2>

        <p className="mt-5 text-[#656176] text-lg leading-relaxed">
          Teams across industries rely on us to design, build,
          and scale impactful digital solutions.
        </p>
      </div>

      {/* CIRCULAR GALLERY */}
      <div className="relative h-[600px]">
        <CircularGallery
          items={partnerItems}
          bend={3}
          textColor="#534D56"
          borderRadius={0.08}
          scrollEase={0.025}
        />
      </div>
    </section>
  );
}


