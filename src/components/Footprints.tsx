"use client";

import { useState } from "react";
import { footprints, locations } from "@/lib/site";
import { IndiaMap } from "./Art";
import Counter from "./Counter";

/** Map + stat rail, in the spirit of an "Our Footprints" section. */
export default function Footprints() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="relative overflow-hidden bg-sand py-20 md:py-28">
      <div className="container-x grid items-center gap-14 lg:grid-cols-[1.15fr_1fr]">
        {/* map */}
        <div className="relative mx-auto w-full max-w-[34rem]">
          <IndiaMap className="w-full drop-shadow-[0_20px_40px_rgba(214,138,74,0.22)]" />

          {locations.map((loc, i) => (
            <button
              key={loc.name}
              type="button"
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
              onFocus={() => setActive(i)}
              onBlur={() => setActive(null)}
              className="absolute -translate-x-1/2 -translate-y-1/2 focus-visible:outline-none"
              style={{ left: `${loc.x}%`, top: `${loc.y}%` }}
              aria-label={`${loc.name} — ${loc.type}`}
            >
              <span className="relative grid h-3.5 w-3.5 place-items-center">
                <span
                  className="absolute inset-0 rounded-full bg-navy-800/45"
                  style={{ animation: `ie-pulse-dot 3s ease-in-out ${i * 0.22}s infinite` }}
                />
                <span className="relative h-2.5 w-2.5 rounded-full border-2 border-white bg-navy-800" />
              </span>

              <span
                className={`pointer-events-none absolute bottom-full left-1/2 z-10 mb-2 w-max max-w-[13rem] -translate-x-1/2 rounded-lg bg-navy-900 px-3 py-2 text-left text-[0.72rem] leading-tight text-white shadow-lg transition-all duration-200 ${
                  active === i ? "opacity-100" : "opacity-0"
                }`}
              >
                <span className="block font-semibold">{loc.name}</span>
                <span className="block text-gold-400">{loc.type}</span>
              </span>
            </button>
          ))}
        </div>

        {/* stats */}
        <div>
          <p className="eyebrow mb-4 flex items-center gap-3 text-ember-500">
            <span className="h-px w-8 bg-current opacity-60" />
            Our Footprints
          </p>
          <h2 className="display-2 text-navy-900">Assets across 11 states</h2>
          <p className="mt-5 max-w-lg text-[1.02rem] leading-[1.75] text-ink/68">
            Generation, transmission, highways and industrial districts operated under long-term
            frameworks — connected to the utilities, ports and manufacturing corridors they serve.
          </p>

          <dl className="mt-9 space-y-3">
            {footprints.map((f) => (
              <div
                key={f.label}
                className="flex items-baseline gap-4 rounded-xl border border-navy-900/8 bg-white/70 px-6 py-5 backdrop-blur-sm transition-colors hover:border-ember-500/40"
              >
                <dt className="sr-only">{f.label}</dt>
                <dd className="text-2xl font-bold text-ember-500 md:text-[1.75rem]">
                  <Counter value={f.value} />
                  <span className="ml-1 text-[0.95em]">{f.unit}</span>
                </dd>
                <p className="text-[0.92rem] text-ink/65">{f.label}</p>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
