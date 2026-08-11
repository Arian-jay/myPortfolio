import React from "react";
import { PROFILE } from "../../data/portfolioData.js";

const FACTS = [
  { label: "Role", value: PROFILE.role },
  { label: "Location", value: PROFILE.location.replace("Based in ", "") },
  { label: "Focus", value: "Web Applications" },
  { label: "Availability", value: "Open to Opportunities" },
];

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center px-6 sm:px-10 lg:px-16 py-24 border-t border-line"
    >
      <div className="flex items-center gap-4 mb-10">
        <span className="font-mono text-xs text-rust tnum">02</span>
        <span className="font-mono text-xs uppercase tracking-[0.25em] text-faint">
          About Me
        </span>
        <span className="flex-1 h-px bg-line" />
      </div>

      <div className="grid lg:grid-cols-[1.4fr_1fr] gap-14 lg:gap-20">
        <div>
          <h2 className="font-display font-light text-3xl sm:text-4xl md:text-5xl leading-tight text-paper max-w-2xl">
            I like solving problems that live between design and code.
          </h2>
          <p className="mt-6 text-faint text-base sm:text-lg leading-relaxed max-w-xl">
            {PROFILE.summary} Outside of writing code, I spend time studying
            layout and typography, reading through other people's projects,
            and refining the small details most people scroll past.
          </p>
          <p className="mt-4 text-faint text-base sm:text-lg leading-relaxed max-w-xl">
            I'm currently looking to work on projects that need someone who
            treats both the interface and the logic behind it seriously.
          </p>
        </div>

        <dl className="grid grid-cols-2 gap-x-6 gap-y-8 content-start border-t border-line pt-8 lg:border-t-0 lg:pt-0">
          {FACTS.map((fact) => (
            <div key={fact.label}>
              <dt className="font-mono text-[11px] uppercase tracking-[0.15em] text-rustdim">
                {fact.label}
              </dt>
              <dd className="mt-2 font-body text-paper text-sm sm:text-base">
                {fact.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
