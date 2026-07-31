"use client";

import { useState } from "react";

const subjects = [
  "General enquiry",
  "Investor relations",
  "Media enquiry",
  "Supplier / vendor registration",
  "Careers",
  "Shareholder grievance",
];

type Status = "idle" | "sending" | "sent";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    // No mail transport is wired up yet — swap this for a server action or
    // API route when the messaging provider is chosen.
    await new Promise((r) => setTimeout(r, 700));
    setStatus("sent");
    e.currentTarget.reset();
  }

  if (status === "sent") {
    return (
      <div className="rounded-2xl border border-navy-900/10 bg-white p-10 text-center">
        <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-gold-100">
          <svg viewBox="0 0 24 24" className="h-6 w-6 text-navy-800" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 13l4 4L19 7" />
          </svg>
        </span>
        <h3 className="mt-6 display-3 text-navy-900">Thank you</h3>
        <p className="mx-auto mt-3 max-w-sm text-[0.95rem] leading-relaxed text-ink/65">
          Your enquiry has been recorded. The relevant team will respond within two working days.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-7 text-[0.9rem] font-semibold text-navy-700 underline-offset-4 hover:text-ember-500 hover:underline"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-2xl border border-navy-900/10 bg-white p-7 md:p-9"
      noValidate={false}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="name" label="Full name" required />
        <Field id="org" label="Organisation" />
        <Field id="email" label="Email address" type="email" required />
        <Field id="phone" label="Phone" type="tel" />
      </div>

      <div className="mt-5">
        <label htmlFor="subject" className="mb-2 block text-[0.8rem] font-semibold uppercase tracking-[0.1em] text-ink/55">
          Subject <span className="text-ember-500">*</span>
        </label>
        <select
          id="subject"
          name="subject"
          required
          defaultValue=""
          className="w-full rounded-lg border border-navy-900/15 bg-white px-4 py-3 text-[0.95rem] text-navy-900 outline-none transition-colors focus:border-gold-500 focus:ring-2 focus:ring-gold-500/25"
        >
          <option value="" disabled>
            Select a subject
          </option>
          {subjects.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-5">
        <label htmlFor="message" className="mb-2 block text-[0.8rem] font-semibold uppercase tracking-[0.1em] text-ink/55">
          Message <span className="text-ember-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full resize-y rounded-lg border border-navy-900/15 bg-white px-4 py-3 text-[0.95rem] text-navy-900 outline-none transition-colors focus:border-gold-500 focus:ring-2 focus:ring-gold-500/25"
          placeholder="Tell us how we can help."
        />
      </div>

      <label className="mt-5 flex items-start gap-3 text-[0.85rem] leading-relaxed text-ink/60">
        <input
          type="checkbox"
          name="consent"
          required
          className="mt-0.5 h-4 w-4 shrink-0 rounded border-navy-900/25 accent-gold-500"
        />
        I consent to Ideal Engineering storing the details above in order to respond to this
        enquiry.
      </label>

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-7 inline-flex items-center gap-2.5 rounded-lg bg-gold-500 px-8 py-3.5 text-[0.95rem] font-semibold text-navy-900 transition-colors hover:bg-gold-400 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Submit enquiry"}
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h13M12 5l7 7-7 7" />
        </svg>
      </button>
    </form>
  );
}

function Field({
  id,
  label,
  type = "text",
  required = false,
}: {
  id: string;
  label: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-[0.8rem] font-semibold uppercase tracking-[0.1em] text-ink/55">
        {label} {required && <span className="text-ember-500">*</span>}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        className="w-full rounded-lg border border-navy-900/15 bg-white px-4 py-3 text-[0.95rem] text-navy-900 outline-none transition-colors focus:border-gold-500 focus:ring-2 focus:ring-gold-500/25"
      />
    </div>
  );
}
