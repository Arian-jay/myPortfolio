import React from "react";
import { CERTIFICATIONS } from "../../data/portfolioData.js";

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="min-h-screen flex flex-col justify-center px-6 sm:px-10 lg:px-16 py-24 border-t border-line"
    >
      <div className="flex items-center gap-4 mb-10">
        <span className="font-mono text-xs text-rust tnum">07</span>
        <span className="font-mono text-xs uppercase tracking-[0.25em] text-faint">
          Certifications
        </span>
        <span className="flex-1 h-px bg-line" />
      </div>

      <h2 className="font-display font-light text-3xl sm:text-4xl md:text-5xl text-paper max-w-2xl mb-14">
        Credentials and recognition.
      </h2>

      <ul className="max-w-3xl space-y-4 pl-6 text-paper text-base sm:text-lg leading-relaxed list-disc marker:text-rust">
        {CERTIFICATIONS.map((item, index) => (
          <li key={item} className="pl-2">
            {/* <span className="font-mono text-xs uppercase tracking-[0.12em] text-rustdim tnum mr-3">
              0{index + 1}
            </span> */}
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
