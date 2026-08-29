// Edit this file to personalize the portfolio — nothing else needs to change.
import PROFILE_PIC from "./images/PROFILEPIC-CIRCLE.png";
import charmafaWeb from "./images/projects/charmafaWeb.png";
import charmafaMobile from "./images/projects/charmafaMobile.png";
import portfolioImg from "./images/projects/portfolio.png";
import ojtTrackerImg from "./images/projects/ojtTracker.png";

export const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About Me" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "expertise", label: "Expertise" },
  { id: "projects", label: "Projects" },
  { id: "certifications", label: "Certifications" },
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
  location: "Philippines",
  tagline: "I build things for the web — carefully, and from scratch.",
  summary:
    "I'm a developer who enjoys taking an idea from a blank file to something people actually use. I care about clean structure, honest interfaces, and code that's still readable a year from now.",
  resumeHref: "#home",
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

export const EDUCATION = [
  {
    title: "Caraga State University",
    subtitle: "Bachelor of Science in Information Technology",
    year: "2022 - 2026",
    detail: "Graduated with a degree in Information Technology, where I developed practical skills in software development, web and mobile application development, database management, and system design. I also gained hands-on experience through academic projects, research, and industry internship.",
  },
  {
    title: "Libertad National High School",
    subtitle: "STEM",
    year: "2020 - 2022",
    detail: "Graduated with honors from the STEM strand, where I developed my interest in technology while building strong skills in mathematics, science, research, and problem-solving.",
  },
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

export const CERTIFICATIONS = [
  "TOPCIT Level 2 Certification (IITP, Republic of Korea).",
  "PAGSANYOG 2025 Pre-Incubation Workshop Certificate.",
  "Oral Presenter, 9th International Artificial Intelligence and Data Processing Symposium (IDAP'25).",
  "SCII-Com'26 Participant Certificate.",
  "Best Poster Award, SCII-Com'26 – Awarded for outstanding research poster presentation.",
];

export const PROJECTS = [
  {
    title: "CHARMAFA Web App",
    year: "2025-2026",
    desc: "A web-based water billing and collection system for managing members, meter readings, billing records, payments, and administrative operations.",
    stack: ["Laravel", "Nuxt", "SQLite", "Tailwind CSS"],
    href: "#",
    image: charmafaWeb,
  },
  {
    title: "CHARMAFA Mobile App",
    year: "2025-2026",
    desc: "An offline-first mobile app for field collectors to record meter readings, manage billing data, process payments, and print receipts through Bluetooth.",
    stack: ["Flutter", "Dart", "SQLite"],
    href: "#",
    image: charmafaMobile,
  },
  {
    title: "Portfolio",
    year: "2026",
    desc: "A personal portfolio showcasing my projects, technical skills, experience, and background as an IT graduate and developer.",
    stack: ["React", "Tailwind CSS", "Emailjs", "React Bits"],
    href: "https://ajep-portfolio.vercel.app",
    image: portfolioImg,
  },
  {
    title: "OJT Time Tracker",
    year: "2026",
    desc: "A web-based time tracking system for recording OJT hours, monitoring attendance, and tracking progress toward required internship hours.",
    stack: ["Next.js", "Tailwind CSS", "Supabase", "Shadcn/UI"],
    href: "https://ojtime.vercel.app",
    image: ojtTrackerImg,
  },
];
