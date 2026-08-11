# Portfolio

A single-page, responsive React portfolio with a side navigation rail, dark
theme, and smooth-scrolling sections: Home, About Me, Skills, Expertise,
Projects, and Contact.

## Design

- **Palette** — near-black background (`#0a0a0a`), warm off-white text
  (`#e8e6e1`), and a single rust/copper accent (`#c9803d`) instead of the
  usual neon-on-black look.
- **Type** — Fraunces (display serif) for headlines, Inter for body copy,
  JetBrains Mono for nav labels and index numbers.
- **Signature element** — the desktop sidebar has a vertical progress rail
  next to the nav list. The filled segment moves to match whichever section
  is currently in view, so the nav doubles as a reading-position indicator.
- **Layout** — fixed side nav on desktop (`lg:` breakpoint and up); on
  smaller screens it collapses into a top bar with a full-screen menu
  overlay.

## Tech

- React (plain `.jsx`, no TypeScript), default Create React App file
  structure (`public/`, `src/`).
- Tailwind CSS loaded via the **CDN script** in `public/index.html` — no
  Tailwind install, config file, or build step required.
- No icon libraries — all icons (Facebook, Instagram, mail, menu, close,
  arrow) are hand-written inline SVGs in `src/components/Icons.jsx`.
- No animation libraries — transitions use plain CSS (`transition-*`
  classes) and respect `prefers-reduced-motion`.

## Running it

```bash
npm install
npm start
```

This installs only React + `react-scripts` (Tailwind itself comes from the
CDN, so there's nothing else to install). The app runs at
`http://localhost:3000`.

To build for production:

```bash
npm run build
```

## Personalizing it

Almost everything you'd want to change lives in one file:

`src/data/portfolioData.js`

- `PROFILE` — your name, initials, role, location, tagline, and summary.
- `SOCIALS` — your Facebook, Instagram, and Gmail links.
- `SKILLS` — the skill cards shown in the Skills section.
- `EXPERTISE` — the four expertise rows.
- `PROJECTS` — your project cards (title, year, description, tech stack,
  link).

The nav menu itself (`NAV_ITEMS`) is also defined there — the sidebar,
mobile menu, and section IDs all read from the same list, so relabeling or
reordering sections only needs to happen in one place.

## File structure

```
public/
  index.html          Tailwind CDN + Google Fonts + root div
src/
  index.js            React entry point
  index.css           Small set of global styles (scrollbar, focus ring, grid texture)
  App.jsx             Composes the sidebar + all sections
  data/
    portfolioData.js  All editable content
  components/
    Sidebar.jsx        Side nav (desktop) + overlay menu (mobile), scrollspy rail
    Icons.jsx           Hand-written inline SVG icons
    sections/
      Home.jsx
      About.jsx
      Skills.jsx
      Expertise.jsx
      Projects.jsx
      Contact.jsx
```
# myPortfolio
