import React from "react";

export function FacebookIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M15 8.5h2V5.5h-2c-2.2 0-4 1.8-4 4v2H9v3h2V19h3v-4.5h2.2l.8-3H14v-1.5c0-.55.45-1.5 1-1.5Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <rect
        x="4"
        y="4"
        width="16"
        height="16"
        rx="4.5"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <circle cx="12" cy="12" r="3.4" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="16.2" cy="7.8" r="0.9" fill="currentColor" />
    </svg>
  );
}

export function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <rect
        x="4"
        y="6"
        width="16"
        height="12"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path
        d="M5 7.5 12 13l7-5.5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function MenuIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4 7h16M4 12h16M4 17h16"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function CloseIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M6 6l12 12M18 6 6 18"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function ArrowIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M7 17 17 7M9 7h8v8"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function GithubIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M12 3.5a8.5 8.5 0 0 0-2.69 16.56c.43.08.58-.19.58-.42v-1.64c-2.36.51-2.86-1.01-2.86-1.01-.39-.99-.95-1.25-.95-1.25-.77-.53.06-.52.06-.52.85.06 1.3.88 1.3.88.76 1.3 2 0.92 2.49.7.08-.55.3-.92.54-1.13-1.88-.21-3.85-.94-3.85-4.18 0-.92.33-1.67.88-2.26-.09-.22-.38-1.07.08-2.23 0 0 .72-.23 2.35.86A8.16 8.16 0 0 1 12 7.57c.73 0 1.47.1 2.16.29 1.63-1.1 2.35-.86 2.35-.86.46 1.16.17 2.01.08 2.23.55.59.88 1.34.88 2.26 0 3.25-1.98 3.96-3.86 4.17.31.27.58.8.58 1.62v2.4c0 .23.15.5.59.42A8.5 8.5 0 0 0 12 3.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

export const SOCIAL_ICONS = {
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  mail: MailIcon,
  github: GithubIcon,
};
