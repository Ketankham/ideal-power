"use client";

import { useState } from "react";
import { clinic } from "@/lib/clinic";

const reasons = ["Asthma", "Allergy", "Persistent cough", "Breathlessness", "COPD", "TB", "Sleep / snoring", "Other"];

// Each theme passes its own palette: "dark" (theme 1), "light" (theme 2), "night" (theme 3).
const tones = {
  dark: {
    label: "text-white/70",
    field:
      "border-white/10 bg-white/[0.06] text-white placeholder:text-white/35 focus:border-sage-200/60 focus:bg-white/[0.09] [color-scheme:dark]",
    chipOn: "bg-sage-100 font-semibold text-pine-950",
    chipOff: "bg-white/[0.06] text-white/75 hover:bg-white/[0.12]",
    note: "text-white/45",
  },
  light: {
    label: "text-slate-600",
    field: "border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10",
    chipOn: "bg-blue-600 font-semibold text-white",
    chipOff: "bg-slate-100 text-slate-700 hover:bg-slate-200",
    note: "text-slate-500",
  },
  night: {
    label: "text-zinc-400",
    field:
      "border-white/10 bg-white/[0.04] text-white placeholder:text-zinc-500 focus:border-emerald-300/60 focus:bg-white/[0.07] [color-scheme:dark]",
    chipOn: "bg-emerald-300 font-semibold text-zinc-950",
    chipOff: "bg-white/[0.05] text-zinc-300 hover:bg-white/[0.1]",
    note: "text-zinc-500",
  },
};

export default function AppointmentForm({
  tone = "dark",
  submitClass = "bg-coral-500 text-white hover:bg-coral-600",
}: {
  tone?: keyof typeof tones;
  submitClass?: string;
}) {
  const t = tones[tone];
  const field = `w-full rounded-xl border px-4 py-3 text-[0.95rem] outline-none transition ${t.field}`;
  const [reason, setReason] = useState(reasons[0]);
  const [sent, setSent] = useState(false);

  // No booking backend yet: hand the request to the patient's mail app, addressed to the clinic.
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const body = [
      `Name: ${data.get("name")}`,
      `Phone: ${data.get("phone")}`,
      `Preferred date: ${data.get("date") || "Any"}`,
      `Reason: ${reason}`,
      "",
      String(data.get("notes") || ""),
    ].join("\n");
    window.location.href = `mailto:${clinic.emails.enquiry}?subject=${encodeURIComponent(
      `Appointment request: ${data.get("name")}`
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className={`grid gap-2 text-sm ${t.label}`}>
          Full name
          <input name="name" required autoComplete="name" placeholder="Your name" className={field} />
        </label>
        <label className={`grid gap-2 text-sm ${t.label}`}>
          Phone
          <input name="phone" type="tel" required autoComplete="tel" placeholder="+91" className={field} />
        </label>
      </div>
      <label className={`grid gap-2 text-sm ${t.label}`}>
        Preferred date
        <input name="date" type="date" className={field} />
      </label>

      <fieldset>
        <legend className={`mb-2 text-sm ${t.label}`}>Reason for visit</legend>
        <div className="flex flex-wrap gap-2">
          {reasons.map((r) => (
            <button
              key={r}
              type="button"
              onClick={() => setReason(r)}
              aria-pressed={reason === r}
              className={`rounded-full px-4 py-2 text-sm transition ${
                reason === r ? t.chipOn : t.chipOff
              }`}
            >
              {r}
            </button>
          ))}
        </div>
      </fieldset>

      <label className={`grid gap-2 text-sm ${t.label}`}>
        Anything we should know? (optional)
        <textarea name="notes" rows={3} className={`${field} resize-none`} />
      </label>

      <button
        type="submit"
        className={`mt-2 rounded-full px-7 py-3.5 font-semibold transition ${submitClass}`}
      >
        Request appointment
      </button>
      <p className={`text-center text-xs ${t.note}`} aria-live="polite">
        {sent
          ? "Your mail app should now be open with the request. If it isn't, please call us."
          : `We confirm every request by phone. Open ${clinic.hours.days}, ${clinic.hours.time}.`}
      </p>
    </form>
  );
}
