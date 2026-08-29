import React from "react";
import { EDUCATION } from "../../data/portfolioData.js";

export default function Education() {
  return (
    <section
      id="education"
      className="min-h-screen flex flex-col justify-center px-6 sm:px-10 lg:px-16 py-24 border-t border-line"
    >
      <div className="flex items-center gap-4 mb-10">
        <span className="font-mono text-xs text-rust tnum">04</span>
        <span className="font-mono text-xs uppercase tracking-[0.25em] text-faint">
          Education
        </span>
        <span className="flex-1 h-px bg-line" />
      </div>

      <h2 className="font-display font-light text-3xl sm:text-4xl md:text-5xl text-paper max-w-2xl mb-14">
        My academic background.
      </h2>

      <div className="flex flex-col gap-6">
        {EDUCATION.map((item, i) => (
          <div
            key={item.title}
            className="group border border-line bg-panel/60 p-6 sm:p-8 hover:bg-panel transition-colors"
          >
            <div className="mb-4 flex items-center justify-between gap-4">
              <div className="flex items-center gap-4 flex-1 min-w-0">
                <span className="font-mono text-xs text-rustdim tnum">
                  0{i + 1}
                </span>
                <span className="h-px flex-1 bg-line" />
              </div>
              <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-faint tnum">
                {item.year}
              </span>
            </div>

            <h3 className="font-display text-2xl text-paper">{item.title}</h3>
            <p className="mt-2 text-rust text-sm uppercase tracking-[0.12em] font-mono">
              {item.subtitle}
            </p>
            <p className="mt-4 text-faint text-sm sm:text-base leading-relaxed max-w-4xl">
              {item.detail}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
