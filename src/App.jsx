import { Routes, Route } from "react-router-dom";

/* Layout */
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

/* Sections */
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

/* Blog */
import BlogSection from "./blog/BlogSection";
import BlogPost from "./blog/BlogPost";
import ShareBlogSection from "./blog/ShareBlogSection";

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#F8F1FF] text-[#534D56]">

      {/* Global Navbar */}
      <Navbar />

      <Routes>
        {/* ================= HOME PAGE ================= */}
        <Route
          path="/"
          element={
            <>
              {/* Hero */}
              <Hero />

              {/* Trust */}
              <Stats />
              <Partners />

              {/* Services */}
              <Services />
              <ServiceHighlights />

              {/* Why Us */}
              <Features />

              {/* Work Process */}
              <Showcase />

              {/* Portfolio */}
              <RecentWork />

              {/* Blog */}
              <BlogSection />

              {/* Share Your Blog (NEW SECTION BELOW BLOG) */}
              <ShareBlogSection />

              {/* Newsletter */}
              <Newsletter />

              {/* Contact CTA */}
              <CTA />

              {/* About */}
              <About />
            </>
          }
        />

        {/* ================= BLOG DETAIL PAGE ================= */}
        <Route path="/blog/:slug" element={<BlogPost />} />
      </Routes>

      {/* Footer */}
      <Footer />
    </div>
  );
}

