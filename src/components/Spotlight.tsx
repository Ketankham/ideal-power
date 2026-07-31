import Link from "next/link";
import Reveal from "./Reveal";
import { Chevron, SectionHeading } from "./ui";
import { spotlights, type SpotlightIcon } from "@/lib/site";

const tones = [
  "from-navy-700 to-navy-900",
  "from-ember-500 to-ember-600",
  "from-navy-800 to-navy-950",
  "from-gold-600 to-ember-600",
];

const common = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

function SpotlightIconGlyph({ id, className = "h-5.5 w-5.5" }: { id: SpotlightIcon; className?: string }) {
  switch (id) {
    case "institute":
      return (
        <svg {...common} className={className}>
          <path d="M2 9.5 12 4l10 5.5-10 5.5-10-5.5Z" />
          <path d="M6 11.6v5c0 1.7 2.7 3.1 6 3.1s6-1.4 6-3.1v-5" />
          <path d="M20.5 10v6" />
        </svg>
      );
    case "leaf":
      return (
        <svg {...common} className={className}>
          <path d="M4 14.5C4 8 8.5 4 19 4c-1.3 9.5-7 15-15 15H4Z" />
          <path d="M5 19c3-4 6.5-7.5 12-11" />
        </svg>
      );
    case "community":
      return (
        <svg {...common} className={className}>
          <circle cx="9" cy="8" r="3.4" />
          <path d="M2.6 20c0-3.5 2.9-6.3 6.4-6.3s6.4 2.8 6.4 6.3" />
          <circle cx="17.3" cy="8.7" r="2.7" />
          <path d="M15.8 13.9c2.7.5 4.6 2.8 4.6 5.9" />
        </svg>
      );
    case "people":
      return (
        <svg {...common} className={className}>
          <circle cx="12" cy="8" r="4.6" />
          <path d="M8 12.4 6.4 21l5.6-3.2 5.6 3.2-1.6-8.6" />
        </svg>
      );
  }
}

/** Featured-divisions style grid — training, sustainability, community and people cards. */
export default function Spotlight() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container-x">
        <Reveal>
          <SectionHeading
            eyebrow="Beyond the Balance Sheet"
            title="Building capability, communities and careers"
            body="Alongside the assets we build and operate, we invest in the people and places around every site — training, sustainability and community programmes run in parallel with construction and operations."
          />
        </Reveal>

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {spotlights.map((s, i) => (
            <Reveal as="li" key={s.title} delay={i * 100}>
              <Link
                href={s.href}
                className={`group relative flex h-full flex-col overflow-hidden rounded-2xl bg-gradient-to-br p-7 text-white transition-all duration-400 hover:-translate-y-1.5 hover:shadow-[0_30px_55px_-28px_rgba(10,37,64,0.55)] ${tones[i % tones.length]}`}
              >
                <span
                  className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl"
                  aria-hidden
                />
                <span className="relative grid h-11 w-11 place-items-center rounded-xl bg-white/15">
                  <SpotlightIconGlyph id={s.icon} />
                </span>
                <p className="relative mt-6 text-[0.72rem] font-bold uppercase tracking-[0.14em] text-white/70">
                  {s.kicker}
                </p>
                <h3 className="relative mt-2 text-[1.08rem] font-semibold leading-snug">{s.title}</h3>
                <p className="relative mt-3 flex-1 text-[0.86rem] leading-relaxed text-white/75">{s.body}</p>
                <div className="relative mt-6 border-t border-white/20 pt-4">
                  <p className="text-xl font-bold">{s.stat}</p>
                  <p className="mt-0.5 text-[0.74rem] text-white/65">{s.statLabel}</p>
                </div>
                <span className="relative mt-4 inline-flex items-center gap-1.5 text-[0.82rem] font-semibold text-white">
                  Know More
                  <Chevron className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
