import { useState } from "react";
import Chatbot from "./Chatbot";
import Threads from "./Threads";
import RotatingText from "./RotatingText";

export default function Hero() {
  const [openChat, setOpenChat] = useState(false);

  return (
    <>
      <section className="relative bg-[#F8F1FF] overflow-hidden">
        {/* background */}
        <div className="absolute inset-0 z-0 opacity-30">
          <Threads
            color={[27 / 255, 153 / 255, 139 / 220]}
            amplitude={0.5}
            distance={0}
            enableMouseInteraction
          />
        </div>

        {/* content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 py-24 md:min-h-screen md:px-6">
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

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:gap-4">
            {/* OPEN CHATBOT */}
            <button
              onClick={() => setOpenChat(true)}
              className="px-4 py-2 md:px-8 md:py-4 bg-[#1B998B] text-white font-semibold rounded-md md:rounded-lg"
            >
              Get Consultation
            </button>

            <button
              className="px-4 py-2 md:px-8 md:py-4 border border-[#1B998B] text-[#1B998B] font-semibold rounded-md md:rounded-lg"
            >
              Get Started
            </button>
          </div>
        </div>
      </section>

      {/* CHATBOT */}
      <Chatbot open={openChat} onClose={() => setOpenChat(false)} />

      {/* FLOATING CHAT BUTTON (BOTTOM RIGHT) */}
      {!openChat && (
        <div className="fixed bottom-6 right-6 z-[150] flex items-center gap-3">
          {/* Text Label */}
          <span className="hidden sm:inline-block px-3 py-1 rounded-full bg-white text-sm text-[#534D56] shadow-md">
            Connect with our AI
          </span>

          {/* Button */}
          <button
            onClick={() => setOpenChat(true)}
            className="
              w-14 h-14 rounded-full
              bg-[#1B998B] text-white
              shadow-2xl text-xl
              flex items-center justify-center
              hover:scale-110 transition
            "
            aria-label="Open AI Assistant"
          >
            💬
          </button>
        </div>
      )}
    </>
  );
}





