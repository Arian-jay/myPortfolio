import React from "react";
import { PROJECTS } from "../../data/portfolioData.js";
import { ArrowIcon } from "../Icons.jsx";

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col justify-center px-6 sm:px-10 lg:px-16 py-24 pt-2 border-t border-line"
    >
      <div className="flex items-center gap-4 mb-10">
        <span className="font-mono text-xs text-rust tnum">05</span>
        <span className="font-mono text-xs uppercase tracking-[0.25em] text-faint">
          Projects
        </span>
        <span className="flex-1 h-px bg-line" />
      </div>

      <h2 className="font-display font-light text-3xl sm:text-4xl md:text-5xl text-paper max-w-2xl mb-14">
        A few things I've built.
      </h2>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {PROJECTS.map((project) => (
          <a
            key={project.title}
            href={project.href}
            target="_blank"
            rel="noreferrer"
            className="group flex flex-col justify-between border border-line p-7 hover:border-rust transition-colors min-h-[240px]"
          >
            <div>
              <div className="flex items-start justify-between">
                <span className="font-mono text-[11px] text-faint tnum">
                  {project.year}
                </span>
                <ArrowIcon className="w-4 h-4 text-faint group-hover:text-rust group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>
              <h3 className="mt-4 font-display text-2xl text-paper">
                {project.title}
              </h3>
              <p className="mt-3 text-faint text-sm leading-relaxed">
                {project.desc}
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-[10px] uppercase tracking-[0.1em] text-rustdim border border-line px-2 py-1"
                >
                  {tech}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
