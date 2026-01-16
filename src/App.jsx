import { Routes, Route, useLocation } from "react-router-dom";

/* Layout */
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MobileDock from "./components/MobileDock";

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
  const location = useLocation();

  // hide navbar & dock on blog post page
  const isBlogPostPage = location.pathname.startsWith("/blog/");

  return (
    <div
      className="
        min-h-screen
        overflow-x-hidden
        bg-[#F8F1FF]
        text-[#534D56]

        /* ✅ IMPORTANT FIX */
        pb-14 md:pb-0
      "
    >
      {/* Navbar */}
      {!isBlogPostPage && <Navbar />}

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Stats />
              <Partners />
              <Services />
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

        <Route path="/blog/:slug" element={<BlogPost />} />
      </Routes>

      {/* Mobile Bottom Dock */}
      {!isBlogPostPage && <MobileDock />}

      {/* Footer */}
      <Footer />
    </div>
  );
}

