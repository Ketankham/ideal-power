"use client";

import { useState } from "react";
import { symptoms } from "@/lib/clinic";

export default function SymptomCheck() {
  const [picked, setPicked] = useState<Set<number>>(new Set());
  const count = picked.size;

  const toggle = (i: number) =>
    setPicked((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });

  const verdict =
    count === 0
      ? { title: "Tap anything that sounds familiar", body: "This is a quick self-check. It is not a diagnosis." }
      : count < 3
        ? {
            title: "Worth keeping an eye on",
            body: "If these symptoms last more than a few weeks or keep coming back, have your chest checked.",
          }
        : {
            title: "Time to see a chest physician",
            body: "Several of these together often point to asthma or an allergy. Both respond well to the right plan.",
          };

  return (
    <div className="rounded-[2rem] bg-white p-6 shadow-[0_30px_80px_-40px_rgb(6_42_38/0.45)] ring-1 ring-pine-900/5 sm:p-9">
      <div className="flex items-center justify-between gap-4">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-pine-700">Self-check</p>
        <p className="text-sm tabular-nums text-pine-900/60">
          {count} / {symptoms.length} selected
        </p>
      </div>

      <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
        {symptoms.map((s, i) => {
          const on = picked.has(i);
          return (
            <li key={s}>
              <button
                type="button"
                onClick={() => toggle(i)}
                aria-pressed={on}
                className={`flex w-full items-center gap-3 rounded-2xl px-4 py-3.5 text-left text-[0.93rem] transition-all duration-300 ${
                  on
                    ? "bg-pine-900 text-white shadow-[0_12px_30px_-14px_rgb(6_42_38/0.8)]"
                    : "bg-linen text-pine-950 hover:bg-sage-100"
                }`}
              >
                <span
                  className={`grid size-5 shrink-0 place-items-center rounded-full border transition ${
                    on ? "border-coral-500 bg-coral-500" : "border-pine-900/25"
                  }`}
                  aria-hidden
                >
                  {on && (
                    <svg viewBox="0 0 12 12" className="size-3 text-white" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M2.5 6.2l2.3 2.3 4.7-5" />
                    </svg>
                  )}
                </span>
                {s}
              </button>
            </li>
          );
        })}
      </ul>

      <div className="mt-6 h-1.5 overflow-hidden rounded-full bg-sage-100" aria-hidden>
        <div
          className="h-full rounded-full bg-gradient-to-r from-pine-500 to-coral-500 transition-all duration-500"
          style={{ width: `${(count / symptoms.length) * 100}%` }}
        />
      </div>

      <div className="mt-6 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between" aria-live="polite">
        <div>
          <p className="font-clinic-serif text-2xl text-pine-950">{verdict.title}</p>
          <p className="mt-1.5 max-w-md text-[0.93rem] leading-relaxed text-pine-900/65">{verdict.body}</p>
        </div>
        {count >= 3 && (
          <a
            href="#book"
            className="shrink-0 rounded-full bg-coral-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-coral-600"
          >
            Book a consultation
          </a>
        )}
      </div>
    </div>
  );
}
