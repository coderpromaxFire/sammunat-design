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
  VscSearch
} from "react-icons/vsc";

export default function Navbar({ showSearch = true }) {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const [showDock, setShowDock] = useState(true);
  const [query, setQuery] = useState("");
  const [openHiring, setOpenHiring] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowDock(window.scrollY < window.innerHeight * 0.85);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    const q = query.toLowerCase().trim();
    if (!q) return;

    if (q.includes("service")) scrollTo("services");
    else if (q.includes("about")) scrollTo("about");
    else if (q.includes("contact")) scrollTo("contact");
    else if (q.includes("blog")) scrollTo("blog");

    setQuery("");
  };

  const dockItems = [
    { icon: <VscHome size={20} />, label: "Home", onClick: () => window.scrollTo({ top: 0, behavior: "smooth" }) },
    { icon: <VscArchive size={20} />, label: "Services", onClick: () => scrollTo("services") },
    { icon: <VscBook size={20} />, label: "Blog", onClick: () => scrollTo("blog") },
    { icon: <VscAccount size={20} />, label: "About", onClick: () => scrollTo("about") },
    { icon: <VscSettingsGear size={20} />, label: "Contact", onClick: () => scrollTo("contact") }
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#DECDF5]/90 backdrop-blur-lg border-b border-[#534D56]/10">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between gap-6">

          <div
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="cursor-pointer text-2xl font-extrabold text-[#534D56]"
          >
            Sammu<span className="text-[#1B998B]">nat</span>
          </div>

          {showSearch && (
            <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-md">
              <div className="relative w-full">
                <VscSearch
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-[#656176]"
                />
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search services, blogs..."
                  className="w-full pl-10 pr-4 py-2 rounded-full border border-[#534D56]/20 text-sm focus:outline-none focus:ring-2 focus:ring-[#1B998B]"
                />
              </div>
            </form>
          )}

          <button
            onClick={() => setOpenHiring(true)}
            className="px-6 py-2 rounded-full bg-[#1B998B] text-white font-semibold shadow-lg hover:scale-105 transition"
          >
            We’re Hiring 🚀
          </button>
        </div>
      </header>

      {showDock && (
        <nav className="fixed bottom-6 left-0 right-0 z-40 flex justify-center">
          <Dock
            items={dockItems}
            panelHeight={70}
            baseItemSize={52}
            magnification={74}
            distance={200}
          />
        </nav>
      )}

      <HiringModal
        open={openHiring}
        onClose={() => setOpenHiring(false)}
      />
    </>
  );
}





