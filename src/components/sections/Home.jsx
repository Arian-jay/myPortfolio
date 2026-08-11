import React from "react";
import { PROFILE } from "../../data/portfolioData.js";

export default function Home() {
  return (
    <section
      id="home"
      className="grid-paper relative min-h-screen flex flex-col justify-center px-6 sm:px-10 lg:px-16 py-24"
    >
      <div className="max-w-3xl">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-rust mb-6">
          {PROFILE.location}
        </p>
        <h1 className="font-display font-light text-[13vw] leading-[0.95] sm:text-6xl md:text-7xl lg:text-6xl xl:text-7xl text-paper whitespace-pre-line">
          {PROFILE.tagline}
        </h1>
        <p className="mt-8 max-w-xl text-faint text-base sm:text-lg leading-relaxed">
          {PROFILE.summary}
        </p>
        <div className="mt-10 flex items-center gap-4">
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-6 py-3 bg-rust text-ink font-mono text-xs uppercase tracking-[0.15em] hover:bg-paper transition-colors"
          >
            View Projects
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-6 py-3 border border-line text-paper font-mono text-xs uppercase tracking-[0.15em] hover:border-rust hover:text-rust transition-colors"
          >
            Get in Touch
          </a>
          <a
            href="/Resume.pdf"
            download="Resume.pdf"
            className="px-6 py-3 border border-line text-paper font-mono text-xs uppercase tracking-[0.15em] hover:border-rust hover:text-rust transition-colors"
          >
            Download Resume
          </a>
          <a
            href="/cv.pdf"
            download="cv.pdf"
            className="px-6 py-3 border border-line text-paper font-mono text-xs uppercase tracking-[0.15em] hover:border-rust hover:text-rust transition-colors"
          >
            Download CV
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-6 sm:left-10 lg:left-16 font-mono text-[11px] text-faint hidden sm:block">
        scroll — 01 / 06
      </div>
    </section>
  );
}
