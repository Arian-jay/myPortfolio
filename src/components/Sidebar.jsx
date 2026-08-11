import React, { useEffect, useRef, useState } from "react";
import { NAV_ITEMS, SOCIALS, PROFILE } from "../data/portfolioData.js";
import { SOCIAL_ICONS, MenuIcon, CloseIcon } from "./Icons.jsx";

/**
 * Smoothly scrolls to a section by id, then closes the mobile overlay if open.
 */
function scrollToSection(id, closeMenu) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  if (closeMenu) closeMenu();
}

export default function Sidebar() {
  const [activeId, setActiveId] = useState(NAV_ITEMS[0].id);
  const [isOpen, setIsOpen] = useState(false);
  const railRef = useRef(null);

  // Scrollspy: track which section is currently in the "reading band" of the viewport.
  useEffect(() => {
    const sections = NAV_ITEMS.map((item) => document.getElementById(item.id)).filter(
      Boolean
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // Lock body scroll while the mobile overlay is open.
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const activeIndex = NAV_ITEMS.findIndex((item) => item.id === activeId);

  return (
    <>
      {/* ---------- Mobile top bar ---------- */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-40 flex h-16 items-center justify-between border-b border-line bg-ink/95 px-4 backdrop-blur sm:px-5">
        <button
          onClick={() => scrollToSection("home")}
          className="flex min-w-0 items-center gap-3 text-left"
        >
          <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-full border border-line/80 bg-paper">
            <img
              src={PROFILE.profilePic}
              alt={PROFILE.name}
              className="h-full w-full object-cover object-center"
            />
          </span>
          <span className="flex min-w-0 flex-col">
            <span className="font-display text-sm tracking-tight text-paper">
              {PROFILE.name}
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-faint">
              {PROFILE.role}
            </span>
          </span>
        </button>
        <button
          onClick={() => setIsOpen(true)}
          aria-label="Open navigation menu"
          aria-expanded={isOpen}
          className="p-2 -mr-2 text-paper"
        >
          <MenuIcon className="w-6 h-6" />
        </button>
      </header>

      {/* ---------- Mobile full-screen overlay ---------- */}
      <div
       className={`lg:hidden fixed inset-0 z-50 flex flex-col bg-ink transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        role="dialog"
        aria-modal="true"
      >
       <div className="flex h-16 items-center justify-between border-b border-line px-4 sm:px-5">
         <span className="font-mono text-sm uppercase tracking-[0.18em] text-faint">menu</span>
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close navigation menu"
            className="p-2 -mr-2 text-paper"
          >
            <CloseIcon className="w-6 h-6" />
          </button>
        </div>

       <div className="flex-1 overflow-y-auto px-6 py-6 sm:px-8 sm:py-8">
         <div className="mb-8 flex items-center gap-4 rounded-2xl border border-line/70 bg-white/[0.03] p-4">
           <span className="inline-flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-full border border-line/80 bg-paper">
             <img
               src={PROFILE.profilePic}
               alt={PROFILE.name}
               className="h-full w-full object-cover object-center"
             />
           </span>
           <div className="min-w-0">
             <p className="font-display text-xl tracking-tight text-paper">{PROFILE.name}</p>
             <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-faint">
               {PROFILE.role}
             </p>
           </div>
         </div>

         <nav className="flex flex-col gap-1">
           {NAV_ITEMS.map((item, i) => (
             <button
               key={item.id}
               onClick={() => scrollToSection(item.id, () => setIsOpen(false))}
               className={`group flex items-baseline gap-4 border-b border-line/60 py-3 text-left ${
                 activeId === item.id ? "text-paper" : "text-faint"
               }`}
             >
               <span className="font-mono text-xs tnum text-rustdim transition-colors group-hover:text-rust">
                 0{i + 1}
               </span>
               <span className="font-display text-2xl">{item.label}</span>
             </button>
           ))}
         </nav>
        </div>

       <div className="border-t border-line px-6 py-6 sm:px-8">
         <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
           {SOCIALS.map((social) => {
             const Icon = SOCIAL_ICONS[social.icon];
             return (
               <a
                 key={social.id}
                 href={social.href}
                 target={social.icon === "mail" ? undefined : "_blank"}
                 rel="noreferrer"
                 aria-label={social.label}
                 className="flex h-10 w-10 items-center justify-center rounded-full text-faint transition-colors hover:bg-rust/10 hover:text-rust"
               >
                 <Icon className="h-5 w-5" />
               </a>
             );
           })}
         </div>
       </div>
      </div>

      {/* ---------- Desktop sidebar ---------- */}
      <aside className="hidden lg:flex flex-col fixed top-0 left-0 h-screen w-64 border-r border-line px-6 py-8 xl:w-72 xl:px-8 z-30">
        <div className="flex min-h-0 flex-1 flex-col">
          <div className="flex flex-1 items-center justify-center py-4">
            <button
              onClick={() => scrollToSection("home")}
              className="flex w-full flex-col items-center text-center"
            >
              <span className="mb-6 inline-flex h-40 w-40 items-center justify-center overflow-hidden rounded-full border border-line/80 bg-paper shadow-[0_0_0_6px_rgba(201,128,61,0.12)] sm:h-44 sm:w-44 xl:h-48 xl:w-48">
                <img
                  src={PROFILE.profilePic}
                  alt={PROFILE.name}
                  className="h-full w-full object-cover object-center"
                />
              </span>
              <span className="block font-display text-[22px] leading-tight tracking-tight text-paper">
                {PROFILE.name}
              </span>
              <span className="mt-1 block font-mono text-[11px] uppercase tracking-[0.18em] text-faint">
                {PROFILE.role}
              </span>
            </button>
          </div>
 
          {/* Signature element: a vertical progress rail that tracks reading position,
              not just decoration — the filled segment marks the section in view. */}
          <nav className="relative shrink-0 py-5">
          <div
            ref={railRef}
            className="absolute left-[7px] top-1 bottom-1 w-px bg-line"
            aria-hidden="true"
          >
            <div
              className="absolute left-0 w-px bg-rust transition-all duration-500 ease-out"
              style={{
                top: `${(activeIndex / NAV_ITEMS.length) * 100}%`,
                height: `${100 / NAV_ITEMS.length}%`,
              }}
            />
          </div>

          <ul className="flex flex-col gap-1 pl-6">
            {NAV_ITEMS.map((item, i) => {
              const isActive = activeId === item.id;
              return (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="group flex items-baseline gap-3 py-2.5 w-full text-left"
                  >
                    <span
                      className={`font-mono text-[11px] tnum transition-colors ${
                        isActive ? "text-rust" : "text-rustdim group-hover:text-rust"
                      }`}
                    >
                      0{i + 1}
                    </span>
                    <span
                      className={`font-body text-[15px] transition-colors ${
                        isActive
                          ? "text-paper"
                          : "text-faint group-hover:text-paper"
                      }`}
                    >
                      {item.label}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="mt-auto border-t border-line pt-2">
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 ">
            {SOCIALS.map((social) => {
              const Icon = SOCIAL_ICONS[social.icon];
              return (
                <a
                  key={social.id}
                  href={social.href}
                  target={social.icon === "mail" ? undefined : "_blank"}
                  rel="noreferrer"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full text-faint transition-colors hover:bg-rust/10 hover:text-rust"
                >
                  <Icon className="h-[22px] w-[22px]" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
      </aside>
    </>
  );
}
