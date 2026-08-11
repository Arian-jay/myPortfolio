import React from "react";
import { EXPERTISE } from "../../data/portfolioData.js";

export default function Expertise() {
  return (
    <section
      id="expertise"
      className="min-h-screen flex flex-col justify-center px-6 sm:px-10 lg:px-16 py-24 border-t border-line"
    >
      <div className="flex items-center gap-4 mb-10">
        <span className="font-mono text-xs text-rust tnum">04</span>
        <span className="font-mono text-xs uppercase tracking-[0.25em] text-faint">
          Expertise
        </span>
        <span className="flex-1 h-px bg-line" />
      </div>

      <h2 className="font-display font-light text-3xl sm:text-4xl md:text-5xl text-paper max-w-2xl mb-14">
        Where I spend most of my time.
      </h2>

      <div className="flex flex-col">
        {EXPERTISE.map((item, i) => (
          <div
            key={item.title}
            className="group grid sm:grid-cols-[80px_1fr] gap-4 sm:gap-10 py-8 border-t border-line last:border-b hover:bg-panel transition-colors px-2 -mx-2"
          >
            <span className="font-mono text-xs text-rustdim tnum">
              0{i + 1}
            </span>
            <div>
              <h3 className="font-display text-2xl text-paper">
                {item.title}
              </h3>
              <p className="mt-2 text-faint text-sm sm:text-base leading-relaxed max-w-xl">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
