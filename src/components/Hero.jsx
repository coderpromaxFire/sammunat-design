import { useState, useEffect } from "react";
import Chatbot from "./Chatbot";
import Threads from "./Threads";
import RotatingText from "./RotatingText";

export default function Hero() {
  const [openChat, setOpenChat] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth"
    });
  };

  return (
    <>
      {/* ================= HERO ================= */}
      <section
        id="home"
        className="
          relative
          bg-[#F8F1FF]
          overflow-hidden

          /* ✅ MOBILE FIX */
          min-h-[calc(100svh-56px)]
          flex items-center

          /* desktop unchanged */
          md:min-h-screen
        "
      >
        {/* Background Threads */}
        <div className="absolute inset-0 z-0 opacity-40 sm:opacity-30">
          <Threads
            color={[27 / 255, 153 / 255, 139 / 220]}
            amplitude={isMobile ? 0.9 : 0.5}
            distance={isMobile ? 0.12 : 0}
            enableMouseInteraction={!isMobile}
          />
        </div>

        {/* Content */}
        <div
          className="
            relative z-10
            w-full
            flex flex-col
            items-center
            text-center
            px-4

            /* ✅ MOBILE SPACING */
            pt-[72px]
            pb-12

            /* desktop spacing */
            md:pt-0
            md:pb-0
            md:min-h-screen
            md:justify-center
            md:px-6
          "
        >
          <h1 className="text-3xl sm:text-4xl md:text-7xl font-extrabold flex flex-wrap justify-center gap-2 text-[#534D56]">
            Build
            <RotatingText
              texts={["Impactful", "Futuristic", "Scalable", "Modern"]}
            />
            Products
          </h1>

          <p className="mt-4 max-w-xl text-sm sm:text-base md:text-lg text-[#656176]">
            Sammunat LLC helps startups and businesses design, develop,
            and scale thoughtful digital experiences.
          </p>

          {/* Buttons */}
          <div className="mt-6 grid grid-cols-2 gap-3 sm:flex sm:flex-row sm:gap-4">
            <button
              onClick={() => setOpenChat(true)}
              className="px-4 py-2 md:px-8 md:py-4 bg-[#1B998B] text-white font-semibold rounded-md md:rounded-lg"
            >
              Get Consultation
            </button>

            <button
              onClick={() => scrollTo("cta")}
              className="px-4 py-2 md:px-8 md:py-4 border border-[#1B998B] text-[#1B998B] font-semibold rounded-md md:rounded-lg"
            >
              Get Started
            </button>
          </div>
        </div>
      </section>

      {/* Chatbot */}
      <Chatbot open={openChat} onClose={() => setOpenChat(false)} />

      {/* Floating chat button */}
      {!openChat && (
        <div className="fixed right-4 bottom-[88px] sm:bottom-6 z-[150] flex items-center gap-3">
          <span className="hidden sm:inline-block px-3 py-1 rounded-full bg-white text-sm text-[#534D56] shadow-md">
            Connect with our AI
          </span>

          <button
            onClick={() => setOpenChat(true)}
            className="w-14 h-14 rounded-full bg-[#1B998B] text-white shadow-2xl text-xl flex items-center justify-center"
          >
            💬
          </button>
        </div>
      )}
    </>
  );
}






