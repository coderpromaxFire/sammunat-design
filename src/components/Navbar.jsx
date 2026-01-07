'use client';

import { useEffect, useState } from "react";
import Dock from "./Dock";
import HiringModal from "./HiringModal";
import {
  VscHome,
  VscArchive,
  VscAccount,
  VscSettingsGear,
  VscBook,
} from "react-icons/vsc";

export default function Navbar({ showSearch = true }) {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const [showDock, setShowDock] = useState(true);
  const [openHiring, setOpenHiring] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowDock(window.scrollY < window.innerHeight * 0.85);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const dockItems = [
    { icon: <VscHome size={20} />, label: "Home", onClick: () => window.scrollTo({ top: 0, behavior: "smooth" }) },
    { icon: <VscArchive size={20} />, label: "Services", onClick: () => scrollTo("services") },
    { icon: <VscBook size={20} />, label: "Blog", onClick: () => scrollTo("blog") },
    { icon: <VscAccount size={20} />, label: "About", onClick: () => scrollTo("about") },
    { icon: <VscSettingsGear size={20} />, label: "Contact", onClick: () => scrollTo("contact") }
  ];

  return (
    <>
      {/* NAVBAR */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#DECDF5]/90 backdrop-blur-lg border-b border-[#534D56]/10">
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-14 md:h-16 flex items-center justify-between">

          {/* Logo */}
          <div
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="cursor-pointer text-xl md:text-2xl font-extrabold text-[#534D56]"
          >
            Sammu<span className="text-[#1B998B]">nat</span>
          </div>

          {/* CTA */}
          <button
            onClick={() => setOpenHiring(true)}
            className="
              px-4 py-2
              md:px-6 md:py-2
              rounded-full
              bg-[#1B998B]
              text-white
              text-sm md:text-base
              font-semibold
            "
          >
            We’re Hiring
          </button>
        </div>
      </header>

      {/* DOCK → DESKTOP ONLY */}
      {showDock && (
        <nav className="hidden md:flex fixed bottom-6 left-0 right-0 z-40 justify-center">
          <Dock
            items={dockItems}
            panelHeight={68}
            baseItemSize={48}
            magnification={68}
            distance={180}
          />
        </nav>
      )}

      <HiringModal open={openHiring} onClose={() => setOpenHiring(false)} />
    </>
  );
}






