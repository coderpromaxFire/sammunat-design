'use client';

import { useEffect, useState } from "react";
import Dock from "./Dock";
import HiringModal from "./HiringModal";
import SearchOverlay from "./SearchOverlay";
import {
  VscHome,
  VscArchive,
  VscAccount,
  VscSettingsGear,
  VscBook,
  VscSearch
} from "react-icons/vsc";

export default function Navbar({ showSearch = true }) {
  const [query, setQuery] = useState("");
  const [showOverlay, setShowOverlay] = useState(false);
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
    { icon: <VscHome />, label: "Home", onClick: () => document.getElementById("home")?.scrollIntoView({ behavior: "smooth" }) },
    { icon: <VscArchive />, label: "Services", onClick: () => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" }) },
    { icon: <VscBook />, label: "Blog", onClick: () => document.getElementById("blog")?.scrollIntoView({ behavior: "smooth" }) },
    { icon: <VscAccount />, label: "About", onClick: () => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" }) },
    { icon: <VscSettingsGear />, label: "Contact", onClick: () => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }) }
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#DECDF5]/90 backdrop-blur-lg border-b border-[#534D56]/10">
        <div className="max-w-7xl mx-auto px-4 h-12 md:h-16 flex items-center justify-between gap-3">

          <div
            onClick={() => document.getElementById("home")?.scrollIntoView({ behavior: "smooth" })}
            className="cursor-pointer text-lg md:text-2xl font-extrabold text-[#534D56]"
          >
            Sammu<span className="text-[#1B998B]">nat</span>
          </div>

          {showSearch && (
            <div className="flex items-center gap-2 bg-white rounded-full px-3 py-1 text-sm text-[#656176] border border-[#534D56]/10 w-full max-w-[160px] md:max-w-[260px]">
              <VscSearch />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    setShowOverlay(true);
                  }
                }}
                placeholder="Search anything..."
                className="bg-transparent outline-none w-full"
              />
            </div>
          )}

          <button
            onClick={() => setOpenHiring(true)}
            className="px-3 py-1.5 md:px-6 md:py-2 rounded-full bg-[#1B998B] text-white text-xs md:text-base font-semibold"
          >
            Hiring
          </button>
        </div>
      </header>

      {showOverlay && (
        <SearchOverlay
          query={query}
          onClose={() => {
            setShowOverlay(false);
            setQuery("");
          }}
        />
      )}

      {showDock && (
        <nav className="hidden md:flex fixed bottom-6 left-0 right-0 z-40 justify-center">
          <Dock
            items={dockItems}
            panelHeight={64}
            baseItemSize={44}
            magnification={64}
            distance={180}
          />
        </nav>
      )}

      <HiringModal open={openHiring} onClose={() => setOpenHiring(false)} />
    </>
  );
}








