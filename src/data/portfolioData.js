// Edit this file to personalize the portfolio — nothing else needs to change.
import PROFILE_PIC from "./images/PROFILEPIC-CIRCLE.png";

export const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About Me" },
  { id: "skills", label: "Skills" },
  { id: "expertise", label: "Expertise" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export const SOCIALS = [
  {
    id: "facebook",
    label: "Facebook",
    href: "https://www.facebook.com/arian.jay.368627",
    icon: "facebook",
  },
  {
    id: "instagram",
    label: "Instagram",
    href: "https://www.instagram.com/ari_ariannnn",
    icon: "instagram",
  },
  {
    id: "gmail",
    label: "Gmail",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=ajeprisco@gmail.com",
    icon: "mail",
  },
];

export const PROFILE = {
  profilePic: PROFILE_PIC,
  name: "Arian Jay E. Prisco",
  initials: "AJEP",
  role: "Web Developer",
  location: "Based in the Philippines",
  tagline: "I build things for the web — carefully, and from scratch.",
  summary:
    "I'm a developer who enjoys taking an idea from a blank file to something people actually use. I care about clean structure, honest interfaces, and code that's still readable a year from now.",
  resumeHref: "#contact",
};

export const SKILLS = [
  { name: "JavaScript", note: "ES6+, async patterns" },
  { name: "React", note: "hooks, component design" },
  { name: "HTML & CSS", note: "semantic, responsive" },
  { name: "Tailwind CSS", note: "utility-first styling" },
  { name: "Node.js", note: "APIs, server logic" },
  { name: "Git & GitHub", note: "version control" },
  { name: "laravel", note: "MVC framework for PHP"},
  { name: "MySQL, Supabase, PostgreSQL", note: "Database management system"},
];

export const EXPERTISE = [
  {
    title: "Frontend Engineering",
    desc: "Turning designs into fast, accessible interfaces that hold up on every screen size.",
  },
  {
    title: "UI / Interaction Design",
    desc: "Thinking through layout, type, and motion before a single line of code is written.",
  },
  {
    title: "API Integration",
    desc: "Connecting apps to real data — REST endpoints, auth flows, and error states that make sense.",
  },
  {
    title: "Performance & Structure",
    desc: "Organizing components and state so a project stays easy to change six months later.",
  },
];

export const PROJECTS = [
  {
    title: "Project One",
    year: "2025",
    desc: "A short, honest description of what this project does and the problem it solves.",
    stack: ["React", "Tailwind", "Node.js"],
    href: "#",
  },
  {
    title: "Project Two",
    year: "2024",
    desc: "A short, honest description of what this project does and the problem it solves.",
    stack: ["JavaScript", "Express", "MongoDB"],
    href: "#",
  },
  {
    title: "Project Three",
    year: "2024",
    desc: "A short, honest description of what this project does and the problem it solves.",
    stack: ["React", "REST API"],
    href: "#",
  },
];
