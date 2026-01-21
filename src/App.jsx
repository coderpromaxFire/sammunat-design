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

/* 🔥 NEW FEATURE */
import ProjectEstimator from "./components/ProjectEstimator";

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

  // Hide navbar & dock on dashboards and login
  const hideLayout =
    location.pathname.startsWith("/client") ||
    location.pathname.startsWith("/employee") ||
    location.pathname === "/login";

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#F8F1FF] text-[#534D56] pb-14 md:pb-0">
      {/* Navbar */}
      {!hideLayout && <Navbar />}

      <Routes>
        {/* ================= HOME PAGE ================= */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Stats />
              <Partners />
              <Services />

              {/* 🔥 AI PROJECT ESTIMATOR */}
              <ProjectEstimator />

              <ServiceHighlights />
              <Features />
              <Showcase />
              <RecentWork />
              <BlogSection />
              <ShareBlogSection />
              <Newsletter />
              <CTA />
              <About />
            </>
          }
        />

        {/* ================= AUTH ================= */}
        <Route path="/login" element={<Login />} />

        {/* ================= DASHBOARDS ================= */}
        <Route path="/client/dashboard" element={<ClientDashboard />} />
        <Route path="/employee/dashboard" element={<EmployeeDashboard />} />

        {/* ================= BLOG ================= */}
        <Route path="/blog/:slug" element={<BlogPost />} />
      </Routes>

      {/* Mobile Dock */}
      {!hideLayout && <MobileDock />}

      {/* Footer */}
      {!hideLayout && <Footer />}
    </div>
  );
}
