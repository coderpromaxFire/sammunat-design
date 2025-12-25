import { useEffect, useState } from "react";

const links = ["Services", "Process", "About", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0b0f19] border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      {/* Animated top gradient rail */}
      <div
        className={`h-[3px] w-full transition-all duration-700 ${
          scrolled
            ? "opacity-100 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
            : "opacity-0"
        }`}
      />

      <div className="max-w-7xl mx-auto px-10 py-6 flex items-center justify-between">

        {/* LOGO */}
        <div className="heading-font text-3xl font-extrabold tracking-tight cursor-pointer">
          Sammunat
        </div>

        {/* NAV LINKS */}
        <div className="hidden md:flex items-center gap-14 relative">
          {links.map((link, i) => (
            <div
              key={link}
              className="relative"
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Hover background sweep */}
              {hovered === i && (
                <span className="absolute inset-x-[-12px] inset-y-[-8px] bg-gradient-to-r from-blue-500/15 to-purple-500/15 rounded-xl"></span>
              )}

              <span className="relative z-10 heading-font text-xl font-medium text-gray-300 hover:text-white transition cursor-pointer">
                {link}
              </span>

              {/* Underline */}
              <span
                className={`absolute left-0 -bottom-2 h-[2px] bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 ${
                  hovered === i ? "w-full" : "w-0"
                }`}
              />
            </div>
          ))}
        </div>

        {/* CTA */}
        <button className="relative px-9 py-3 rounded-full text-base font-semibold text-white overflow-hidden group">

          {/* background */}
          <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600"></span>

          {/* shine sweep */}
          <span className="absolute inset-0 translate-x-[-120%] group-hover:translate-x-[120%] transition-transform duration-700 bg-white/20 skew-x-12"></span>

          <span className="relative z-10">
            Get Started
          </span>
        </button>
      </div>
    </nav>
  );
}





