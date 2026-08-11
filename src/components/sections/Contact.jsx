import React, { useMemo, useState } from "react";
import emailjs from "@emailjs/browser";
import { SOCIALS, PROFILE } from "../../data/portfolioData.js";
import { SOCIAL_ICONS } from "../Icons.jsx";

export default function Contact() {
  const FIELD_LIMITS = {
    name: 50,
    email: 50,
    subject: 100,
    message: 5000,
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const emailConfig = useMemo(
    () => ({
      serviceId:
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
      templateId:
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      publicKey:
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
    }),
    []
  );

  function handleInputChange(event) {
    const { name, value } = event.target;
    const limitedValue =
      FIELD_LIMITS[name] !== undefined
        ? value.slice(0, FIELD_LIMITS[name])
        : value;
    setFormData((prev) => ({ ...prev, [name]: limitedValue }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (
      !emailConfig.serviceId ||
      !emailConfig.templateId ||
      !emailConfig.publicKey
    ) {
      setStatus({
        type: "error",
        message:
          "Email service is not configured. Please check your EmailJS environment variables.",
      });
      return;
    }

    setIsSending(true);
    setStatus({ type: "", message: "" });

    try {
      await emailjs.send(
        emailConfig.serviceId,
        emailConfig.templateId,
        {
          name: formData.name.trim(),
          email: formData.email.trim(),
          subject: formData.subject.trim(),
          message: formData.message.trim(),
          time: new Date().toLocaleString("en-PH", { timeZone: "Asia/Manila" }),
          reply_to: formData.email.trim(),
        },
        { publicKey: emailConfig.publicKey }
      );

      setStatus({
        type: "success",
        message: "Message sent successfully. I will get back to you soon.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      const detail =
        error && typeof error === "object" && "text" in error
          ? ` (${String(error.text)})`
          : "";
      setStatus({
        type: "error",
        message: `Failed to send message. Please try again${detail}.`,
      });
    } finally {
      setIsSending(false);
    }
  }

  return (
    <section
      id="contact"
      className="min-h-screen border-t border-line px-6 py-24 sm:px-10 lg:px-16"
    >
      <div className="flex items-center gap-4 mb-10">
        <span className="font-mono text-xs text-rust tnum">06</span>
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
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <label className="flex flex-col gap-2">
              <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-faint">
                Name
              </span>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
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
                value={formData.email}
                onChange={handleInputChange}
                required
                maxLength={FIELD_LIMITS.email}
                placeholder="you@email.com"
                className="h-11 rounded-lg border border-line bg-transparent px-3 text-paper placeholder:text-faint/70 focus:border-rust focus:outline-none"
              />
            </label>
          </div>

          <label className="mt-4 flex flex-col gap-2">
            <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-faint">
              Subject
            </span>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              required
              maxLength={FIELD_LIMITS.subject}
              placeholder="Portfolio Contact"
              className="h-11 rounded-lg border border-line bg-transparent px-3 text-paper placeholder:text-faint/70 focus:border-rust focus:outline-none"
            />
          </label>

          <label className="mt-4 flex flex-col gap-2">
            <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-faint">
              Message
            </span>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
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
              disabled={isSending}
              className="inline-flex h-11 w-full items-center justify-center rounded-lg bg-rust px-6 font-mono text-sm uppercase tracking-[0.14em] text-ink transition-colors hover:bg-paper disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
            >
              {isSending ? "Sending..." : "Send Message"}
            </button>

            {status.message ? (
              <p
                className={`text-sm ${
                  status.type === "success" ? "text-green-300" : "text-red-300"
                }`}
              >
                {status.message}
              </p>
            ) : null}
          </div>
        </form>

        <aside className="rounded-2xl border border-line bg-white/[0.02] p-5 sm:p-7">
          <h3 className="font-display text-2xl text-paper">Contact details</h3>
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
                  // target={social.icon === "mail" ? undefined : "_blank"}
                  target="_blank"
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
        ©{new Date().getFullYear()} {PROFILE.name}. All rights reserved.
      </p>
      <p className="mt-2 font-mono text-[11px] text-faint">Built with React & Tailwind CSS.</p>
    </section>
  );
}
