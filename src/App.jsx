import { Routes, Route, useLocation } from "react-router-dom";

/* ========== Layout ========== */
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MobileDock from "./components/MobileDock";

/* ========== Home Sections ========== */
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

/* ========== Business / Extras ========== */
import ProjectEstimator from "./components/ProjectEstimator";
import ClientPromiseBoard from "./components/ClientPromiseBoard";
import RealityCheckSlider from "./components/RealityCheckSlider";
import FounderAdvice from "./components/FounderAdvice";

/* ========== 🎓 Student Corner ========== */
import StudentCorner from "./components/StudentCorner";
import StudentHome from "./pages/StudentHome";

/* ========== Student Pages ========== */
import Careers from "./pages/students/Careers";
import Roadmaps from "./pages/students/Roadmaps";
import Internships from "./pages/students/Internships";
import Tools from "./pages/students/Tools";
import Guidance from "./pages/students/Guidance";
import AssessmentRunner from "./pages/students/AssessmentRunner";

/* ========== Auth / Dashboards ========== */
import Login from "./pages/Login";
import ClientDashboard from "./pages/ClientDashboard";
import EmployeeDashboard from "./pages/EmployeeDashboard";

/* ========== Blog ========== */
import BlogSection from "./blog/BlogSection";
import BlogPost from "./blog/BlogPost";
import ShareBlogSection from "./blog/ShareBlogSection";


export default function App() {
  const location = useLocation();

  /* ===== Hide Navbar, Dock, Footer on these routes ===== */
  const hideLayout =
    location.pathname.startsWith("/students") ||
    location.pathname.startsWith("/client") ||
    location.pathname.startsWith("/employee") ||
    location.pathname === "/login";

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#F8F1FF] text-[#534D56]">

      {/* ===== NAVBAR ===== */}
      {!hideLayout && <Navbar />}

      <Routes>
        {/* ================= HOME ================= */}
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
              <RealityCheckSlider />

              {/* ⭐ Student Corner entry */}
              <StudentCorner />

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

        {/* ================= STUDENT CORNER ================= */}
        <Route path="/students" element={<StudentHome />} />
        <Route path="/students/careers" element={<Careers />} />
        <Route path="/students/roadmaps" element={<Roadmaps />} />
        <Route path="/students/internships" element={<Internships />} />
        <Route path="/students/tools" element={<Tools />} />
        <Route path="/students/guidance" element={<Guidance />} />

        {/* ===== 🎯 STUDENT ASSESSMENTS ===== */}
        <Route
          path="/students/assessments/:domain"
          element={<AssessmentRunner />}
        />

        {/* ================= AUTH ================= */}
        <Route path="/login" element={<Login />} />

        {/* ================= DASHBOARDS ================= */}
        <Route path="/client/dashboard" element={<ClientDashboard />} />
        <Route path="/employee/dashboard" element={<EmployeeDashboard />} />

        {/* ================= BLOG ================= */}
        <Route path="/blog/:slug" element={<BlogPost />} />
      </Routes>

      {/* ===== MOBILE DOCK & FOOTER ===== */}
      {!hideLayout && <MobileDock />}
      {!hideLayout && <Footer />}
    </div>
  );
}


// import { Routes, Route } from "react-router-dom";
// import StudentHome from "./pages/StudentHome";

// export default function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<StudentHome />} />
//     </Routes>
//   );
// }