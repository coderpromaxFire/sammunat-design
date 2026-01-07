import {
  VscHome,
  VscArchive,
  VscBook,
  VscAccount,
  VscSettingsGear
} from "react-icons/vsc";

export default function MobileDock() {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <nav className="
      fixed bottom-0 left-0 right-0 z-40
      bg-white border-t border-[#534D56]/10
      flex justify-around items-center
      h-14 md:hidden
    ">
      <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
        <VscHome size={20} />
      </button>
      <button onClick={() => scrollTo("services")}>
        <VscArchive size={20} />
      </button>
      <button onClick={() => scrollTo("blog")}>
        <VscBook size={20} />
      </button>
      <button onClick={() => scrollTo("about")}>
        <VscAccount size={20} />
      </button>
      <button onClick={() => scrollTo("contact")}>
        <VscSettingsGear size={20} />
      </button>
    </nav>
  );
}
