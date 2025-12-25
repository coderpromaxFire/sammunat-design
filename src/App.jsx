import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Showcase from "./components/Showcase";
import Process from "./components/Process";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
        {/* 👈 BounceCards here */}
      <Process />
      <Showcase /> 
      <CTA />
      <Footer />
    </div>
  );
}


