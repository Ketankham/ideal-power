"use client";

import { useState } from "react";
import { clinic } from "@/lib/clinic";

const reasons = ["Asthma", "Allergy", "Persistent cough", "Breathlessness", "COPD", "TB", "Sleep / snoring", "Other"];

const field =
  "w-full rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3 text-[0.95rem] text-white placeholder:text-white/35 outline-none transition focus:border-sage-200/60 focus:bg-white/[0.09]";

export default function AppointmentForm() {
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
        <label className="grid gap-2 text-sm text-white/70">
          Full name
          <input name="name" required autoComplete="name" placeholder="Your name" className={field} />
        </label>
        <label className="grid gap-2 text-sm text-white/70">
          Phone
          <input name="phone" type="tel" required autoComplete="tel" placeholder="+91" className={field} />
        </label>
      </div>
      <label className="grid gap-2 text-sm text-white/70">
        Preferred date
        <input name="date" type="date" className={`${field} [color-scheme:dark]`} />
      </label>

      <fieldset>
        <legend className="mb-2 text-sm text-white/70">Reason for visit</legend>
        <div className="flex flex-wrap gap-2">
          {reasons.map((r) => (
            <button
              key={r}
              type="button"
              onClick={() => setReason(r)}
              aria-pressed={reason === r}
              className={`rounded-full px-4 py-2 text-sm transition ${
                reason === r ? "bg-sage-100 font-semibold text-pine-950" : "bg-white/[0.06] text-white/75 hover:bg-white/[0.12]"
              }`}
            >
              {r}
            </button>
          ))}
        </div>
      </fieldset>

      <label className="grid gap-2 text-sm text-white/70">
        Anything we should know? (optional)
        <textarea name="notes" rows={3} className={`${field} resize-none`} />
      </label>

      <button
        type="submit"
        className="mt-2 rounded-full bg-coral-500 px-7 py-3.5 font-semibold text-white transition hover:bg-coral-600"
      >
        Request appointment
      </button>
      <p className="text-center text-xs text-white/45" aria-live="polite">
        {sent
          ? "Your mail app should now be open with the request. If it isn't, please call us."
          : `We confirm every request by phone. Open ${clinic.hours.days}, ${clinic.hours.time}.`}
      </p>
    </form>
  );
}
