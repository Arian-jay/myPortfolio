import React, { useState } from "react";
import { PROJECTS } from "../../data/portfolioData.js";
import { ArrowIcon } from "../Icons.jsx";

function ProjectCard({ project }) {
  const [expanded, setExpanded] = useState(false);
  const needsToggle = project.desc.length > 90;

  return (
    <article className="group flex flex-col border border-line hover:border-rust transition-colors duration-300 overflow-hidden">
      <a
        href={project.href}
        target="_blank"
        rel="noreferrer"
        className="block border-b border-line bg-ink/40"
      >
        <div className="aspect-[16/10] flex items-center justify-center overflow-hidden">
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="h-full w-full object-contain p-4 transition-transform duration-500 group-hover:scale-[1.02]"
            />
          ) : (
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-faint">
              No preview
            </span>
          )}
        </div>
      </a>

      <div className="flex flex-1 flex-col gap-4 p-6 sm:p-7">
        <div className="flex items-start justify-between gap-4">
          <div>
            <span className="font-mono text-[11px] text-faint tnum">
              {project.year}
            </span>
            <h3 className="mt-1 font-display text-2xl text-paper">
              {project.title}
            </h3>
          </div>
          <a
            href={project.href}
            target="_blank"
            rel="noreferrer"
            aria-label={`Open ${project.title}`}
            className="shrink-0 pt-1 text-faint transition-all hover:text-rust hover:translate-x-0.5 hover:-translate-y-0.5"
          >
            <ArrowIcon className="h-4 w-4" />
          </a>
        </div>

        <div>
          <p
            className={`text-faint text-sm leading-relaxed ${
              expanded ? "" : "line-clamp-2"
            }`}
          >
            {project.desc}
          </p>
          {needsToggle && (
            <button
              type="button"
              onClick={() => setExpanded((prev) => !prev)}
              className="mt-2 font-mono text-[11px] uppercase tracking-[0.12em] text-rust transition-colors hover:text-paper"
            >
              {expanded ? "Show less" : "Show more"}
            </button>
          )}
        </div>

        <div className="mt-auto flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="font-mono text-[10px] uppercase tracking-[0.1em] text-rustdim border border-line px-2 py-1"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col justify-center px-6 sm:px-10 lg:px-16 py-24 border-t border-line"
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
