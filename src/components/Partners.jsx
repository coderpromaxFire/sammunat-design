import { useEffect, useState } from "react";
import CircularGallery from "./CircularGallery";
import MobilePartnerCards from "./MobilePartnerCards";

const partnerItems = [
  { image: "/partners/global-retail.png", text: "Global Retail Client" },
  { image: "/partners/healthcare-network.jpg", text: "Healthcare Network" },
  { image: "/partners/fintech-platform.jpg", text: "Fintech Platform" },
  { image: "/partners/logistics-solution.jpeg", text: "Logistics Solutions" },
  { image: "/partners/education-lms.jpg", text: "Education LMS" },
  { image: "/partners/enterprise-crm.jpg", text: "Enterprise CRM Client" }
];

export default function Partners() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <section className="bg-[#DECDF5] py-16 px-4 md:py-32 md:px-6 overflow-hidden">
      {/* HEADING */}
      <div className="max-w-4xl mx-auto text-center mb-10 md:mb-20">
        <h2 className="text-2xl md:text-5xl font-extrabold text-[#534D56]">
          Trusted by <span className="text-[#1B998B]">Clients</span>
        </h2>

        <p className="mt-4 text-[#656176] text-sm md:text-lg">
          Teams across industries rely on us to design, build,
          and scale impactful digital solutions.
        </p>
      </div>

      {/* CONTENT */}
      {isMobile ? (
        /* MOBILE → SIMPLE CARDS */
        <MobilePartnerCards items={partnerItems} />
      ) : (
        /* DESKTOP → CIRCULAR GALLERY */
        <div className="relative h-[600px]">
          <CircularGallery
            items={partnerItems}
            bend={3}
            textColor="#534D56"
            borderRadius={0.08}
            scrollEase={0.025}
          />
        </div>
      )}
    </section>
  );
}

