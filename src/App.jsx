import { Routes, Route, useLocation } from "react-router-dom";

/* Layout */
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MobileDock from "./components/MobileDock";

/* Home Sections */
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Partners from "./components/Partners";
import Services from "./components/Services";
import ServiceHighlights from "./components/ServiceHighlights";
import Features from "./components/Features";
import Showcase from "./components/Showcase";
import RecentWork from "./components/RecentWork";
import Newsletter from "./components/Newsletter";
import CTA from "./components/CTA";
import About from "./components/About";

/* 🔥 Custom Features */
import ProjectEstimator from "./components/ProjectEstimator";
import ClientPromiseBoard from "./components/ClientPromiseBoard";
import RealityCheckSlider from "./components/RealityCheckSlider";
import FounderAdvice from "./components/FounderAdvice";

/* Auth Pages */
import Login from "./pages/Login";
import ClientDashboard from "./pages/ClientDashboard";
import EmployeeDashboard from "./pages/EmployeeDashboard";

/* Blog */
import BlogSection from "./blog/BlogSection";
import BlogPost from "./blog/BlogPost";
import ShareBlogSection from "./blog/ShareBlogSection";

export default function App() {
  const location = useLocation();

  const hideLayout =
    location.pathname.startsWith("/client") ||
    location.pathname.startsWith("/employee") ||
    location.pathname === "/login";

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#F8F1FF] text-[#534D56] pb-14 md:pb-0">

      {!hideLayout && <Navbar />}

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Stats />
              <Partners />
              <Services />

              <ProjectEstimator />
              <ClientPromiseBoard />

              {/* ⭐ UNIQUE SECTIONS */}
              <RealityCheckSlider />
              

              <ServiceHighlights />
              <Features />
              <Showcase />
              <RecentWork />
             
              <BlogSection />
              <ShareBlogSection />
              <Newsletter />
              <CTA />
               <FounderAdvice />
              <About />
            </>
          }
        />

        <Route path="/login" element={<Login />} />
        <Route path="/client/dashboard" element={<ClientDashboard />} />
        <Route path="/employee/dashboard" element={<EmployeeDashboard />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
      </Routes>

      {!hideLayout && <MobileDock />}
      {!hideLayout && <Footer />}
    </div>
  );
}

