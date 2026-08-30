import React, { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar.jsx";
import Home from "./components/sections/Home.jsx";
import About from "./components/sections/About.jsx";
import Skills from "./components/sections/Skills.jsx";
import Education from "./components/sections/Education.jsx";
import Expertise from "./components/sections/Expertise.jsx";
import Projects from "./components/sections/Projects.jsx";
import Certifications from "./components/sections/Certifications.jsx";
import Contact from "./components/sections/Contact.jsx";
import PixelBlast from "./components/PixelBlast.jsx";

export default function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", toggleVisibility, {
      passive: true,
    });

    toggleVisibility();

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-ink">

      {/* ========================================
          PIXEL BLAST BACKGROUND
          ======================================== */}
      <div className="absolute inset-0 z-0 ">
        <PixelBlast
          variant="diamond"
          pixelSize={3}
          color="#F97316"
          patternScale={2}
          patternDensity={0.45}
          pixelSizeJitter={1.05}
          enableRipples
          rippleSpeed={0.3}
          rippleThickness={0.1}
          rippleIntensityScale={1}
          liquid={false}
          liquidStrength={0.12}
          liquidRadius={1.2}
          liquidWobbleSpeed={5}
          speed={3}
          edgeFade={0.25}
          transparent
        />
      </div>

      {/* ========================================
          SIDEBAR
          ======================================== */}
      <Sidebar />

      {/* ========================================
          WEBSITE CONTENT
          ======================================== */}
      <main className="relative z-10 lg:ml-64 xl:ml-72 pt-16 lg:pt-0">
        <Home />
        <About />
        <Skills />
        <Education />
        <Expertise />
        <Projects />
        <Certifications />
        <Contact />
      </main>

      {/* ========================================
          SCROLL TO TOP
          ======================================== */}
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className={`fixed bottom-5 right-5 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-rust/40 bg-ink/90 text-rust shadow-lg shadow-black/20 transition-all duration-300 hover:scale-105 hover:bg-rust hover:text-ink sm:bottom-6 sm:right-6 ${
          showScrollTop
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-3 opacity-0"
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-5 w-5"
        >
          <path d="M12 19V5" />
          <path d="m5 12 7-7 7 7" />
        </svg>
      </button>

    </div>
  );
}