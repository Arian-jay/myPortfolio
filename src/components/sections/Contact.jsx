import React, { useState } from "react";
import { SOCIALS, PROFILE } from "../../data/portfolioData.js";
import { SOCIAL_ICONS } from "../Icons.jsx";

const CONTACT_WEBHOOK_URL = process.env.REACT_APP_CONTACT_WEBHOOK_URL;

const FIELD_LIMITS = {
  name: 50,
  email: 50,
  message: 5000,
};

export default function Contact() {
  const gmail = SOCIALS.find((s) => s.id === "gmail");

  const [form, setForm] = useState({
    name: "",
    email: "",

    message: "",
    company: "",
  });

  const [status, setStatus] = useState("idle");
  // idle | sending | sent | error

  const handleChange = (e) => {
    const { name, value } = e.target;

    const limitedValue =
      FIELD_LIMITS[name] !== undefined
        ? value.slice(0, FIELD_LIMITS[name])
        : value;

    setForm((prev) => ({
      ...prev,
      [name]: limitedValue,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check webhook configuration
    if (!CONTACT_WEBHOOK_URL) {
      console.error(
        "REACT_APP_CONTACT_WEBHOOK_URL is not configured."
      );
      setStatus("error");
      return;
    }

    // Honeypot protection.
    // Real users should never fill this field.
    if (form.company) {
      setStatus("sent");
      return;
    }

    setStatus("sending");

    try {
      const response = await fetch(CONTACT_WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          message: form.message.trim(),
          time: new Date().toLocaleString("en-PH", {
            timeZone: "Asia/Manila",
          }),
        }),
      });

      if (!response.ok) {
        throw new Error(`Webhook request failed: ${response.status}`);
      }

      setStatus("sent");

      setForm({
        name: "",
        email: "",
        message: "",
        company: "",
      });
    } catch (error) {
      console.error("Contact form error:", error);
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen border-t border-line px-6 py-24 sm:px-10 lg:px-16"
    >
      <div className="flex items-center gap-4 mb-10">
        <span className="font-mono text-xs text-rust tnum">08</span>

        <span className="font-mono text-xs uppercase tracking-[0.25em] text-faint">
          Contact
        </span>

        <span className="flex-1 h-px bg-line" />
      </div>

      <h2 className="font-display font-light text-4xl sm:text-5xl md:text-6xl text-paper max-w-2xl">
        Have a project in mind?
        <br />
        Let's talk.
      </h2>

      <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-line bg-white/[0.02] p-5 sm:p-7"
        >
          {/* Honeypot field */}
          <input
            type="text"
            name="company"
            value={form.company}
            onChange={handleChange}
            autoComplete="off"
            tabIndex={-1}
            className="hidden"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <label className="flex flex-col gap-2">
              <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-faint">
                Name
              </span>

              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                maxLength={FIELD_LIMITS.name}
                placeholder="Your name"
                className="h-11 rounded-lg border border-line bg-transparent px-3 text-paper placeholder:text-faint/70 focus:border-rust focus:outline-none"
              />
            </label>

            <label className="flex flex-col gap-2">
              <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-faint">
                Email
              </span>

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                maxLength={FIELD_LIMITS.email}
                placeholder="you@email.com"
                className="h-11 rounded-lg border border-line bg-transparent px-3 text-paper placeholder:text-faint/70 focus:border-rust focus:outline-none"
              />
            </label>
          </div>

          <label className="mt-4 flex flex-col gap-2">
            <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-faint">
              Message
            </span>

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={6}
              maxLength={FIELD_LIMITS.message}
              placeholder="Write your message..."
              className="resize-y rounded-lg border border-line bg-transparent px-3 py-3 text-paper placeholder:text-faint/70 focus:border-rust focus:outline-none"
            />
          </label>

          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <button
              type="submit"
              disabled={status === "sending"}
              className="inline-flex h-11 w-full items-center justify-center rounded-lg bg-rust px-6 font-mono text-sm uppercase tracking-[0.14em] text-ink transition-colors hover:bg-paper disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>

            {status === "sent" && (
              <p className="text-sm text-green-300">
                Message sent successfully. I'll get back to you soon.
              </p>
            )}

            {status === "error" && (
              <p className="text-sm text-red-300">
                Something went wrong. Please try again or{" "}
                <a
                  href={gmail?.href}
                  className="underline hover:text-paper"
                >
                  email me directly
                </a>
                .
              </p>
            )}
          </div>
        </form>

        <aside className="rounded-2xl border border-line bg-white/[0.02] p-5 sm:p-7">
          <h3 className="font-display text-2xl text-paper">
            Contact details
          </h3>

          <p className="mt-3 text-faint leading-relaxed">
            Send me a direct message using the form, or reach out through my
            social links.
          </p>

          <div className="mt-6 space-y-3">
            {SOCIALS.map((social) => {
              const Icon = SOCIAL_ICONS[social.icon];

              return (
                <a
                  key={social.id}
                  href={social.href}
                  target={social.icon === "mail" ? undefined : "_blank"}
                  rel="noreferrer"
                  className="flex items-center gap-3 rounded-lg border border-line/70 px-3 py-3 text-faint transition-colors hover:border-rust/60 hover:text-rust"
                >
                  <Icon className="h-[18px] w-[18px]" />

                  <span className="font-mono text-xs uppercase tracking-[0.1em]">
                    {social.label}
                  </span>
                </a>
              );
            })}
          </div>
        </aside>
      </div>

      <p className="mt-14 font-mono text-[11px] text-faint">
        ©{new Date().getFullYear()} {PROFILE.name} | Web Developer | QA Tester
      </p>
    </section>
  );
}
