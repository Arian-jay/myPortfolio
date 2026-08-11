import React from "react";
import { SKILLS } from "../../data/portfolioData.js";

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col justify-center px-6 sm:px-10 lg:px-16 py-24 border-t border-line"
    >
      <div className="flex items-center gap-4 mb-10">
        <span className="font-mono text-xs text-rust tnum">03</span>
        <span className="font-mono text-xs uppercase tracking-[0.25em] text-faint">
          Skills
        </span>
        <span className="flex-1 h-px bg-line" />
      </div>

      <h2 className="font-display font-light text-3xl sm:text-4xl md:text-5xl text-paper max-w-2xl mb-14">
        Tools I reach for most.
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-line">
        {SKILLS.map((skill) => (
          <div
            key={skill.name}
            className="border-b border-r border-line p-7 hover:bg-panel transition-colors"
          >
            <p className="font-display text-xl text-paper">{skill.name}</p>
            <p className="mt-2 font-mono text-[11px] text-faint uppercase tracking-[0.1em]">
              {skill.note}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
