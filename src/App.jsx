import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Process from "./components/Process";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-[#0b0f19] text-white min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <Process />
      <CTA />
      <Footer />
    </div>
  );
}
