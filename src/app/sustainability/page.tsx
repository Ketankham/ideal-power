import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";
import { GoldButton, SectionHeading } from "@/components/ui";
import { esgPillars } from "@/lib/site";

export const metadata: Metadata = {
  title: "Sustainability",
  description:
    "ESG profile, environmental performance, community programmes and safety record of Ideal Engineering & Infrastructure Limited.",
};

const targets = [
  { value: "42", unit: "%", label: "Emissions intensity reduction vs FY20" },
  { value: "3.4", unit: "x", label: "Water replenishment target by 2030" },
  { value: "310", unit: "K", label: "People reached by community programmes" },
  { value: "1,842", unit: "MW", label: "Renewable capacity in the portfolio" },
];

const anchors: Record<string, string> = {
  Environment: "environment",
  Social: "social",
  Governance: "governance",
};

export default function SustainabilityPage() {
  return (
    <>
      <PageHero
        eyebrow="Sustainability"
        title="Responsible ownership of long-lived assets"
        body="Infrastructure we build today will still be running in forty years. That timeframe is what shapes how we treat emissions, water, land and the communities around every site."
        art="grid"
        crumbs={[{ label: "Sustainability", href: "/sustainability" }]}
      />

      <section className="bg-white py-20 md:py-24">
        <div className="container-x">
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {targets.map((t, i) => (
              <Reveal
                as="li"
                key={t.label}
                delay={i * 90}
                className="rounded-2xl border border-navy-900/10 bg-sand p-7"
              >
                <p className="text-[2rem] font-bold text-ember-500">
                  <Counter value={t.value} />
                  <span className="ml-0.5">{t.unit}</span>
                </p>
                <p className="mt-2 text-[0.9rem] leading-snug text-ink/62">{t.label}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {esgPillars.map((p, i) => (
        <section
          key={p.title}
          id={anchors[p.title]}
          className={`scroll-mt-28 py-20 md:py-24 ${i % 2 === 0 ? "bg-cream" : "bg-white"}`}
        >
          <div className="container-x grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <Reveal>
              <SectionHeading eyebrow={`0${i + 1} — Pillar`} title={p.title} body={p.body} />
            </Reveal>
            <Reveal delay={110}>
              <ul className="space-y-4">
                {p.points.map((pt) => (
                  <li
                    key={pt}
                    className="flex items-start gap-4 rounded-2xl bg-white/80 p-6 shadow-[0_10px_30px_-26px_rgba(10,37,64,0.5)]"
                  >
                    <span className="mt-1.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-gold-500">
                      <svg viewBox="0 0 24 24" className="h-3 w-3 text-navy-900" fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <p className="text-[1rem] leading-relaxed text-navy-900">{pt}</p>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>
      ))}

      <section id="safety" className="scroll-mt-28 bg-navy-950 py-20 text-white md:py-28">
        <span className="sr-only">Safety</span>
        <div className="container-x grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <SectionHeading
              tone="light"
              eyebrow="Safety"
              title="Everyone who starts a shift goes home"
              body="Safety performance is reported to the board every quarter alongside financial results. Contractor crews are held to the same standard as employees, with pre-mobilisation training mandatory at every site."
            />
            <div className="mt-9">
              <GoldButton href="/contact">Request the ESG report</GoldButton>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <dl className="grid gap-4 sm:grid-cols-2">
              {[
                { k: "0", v: "Lost-time injuries, last 3 quarters" },
                { k: "1.2 M", v: "Safe person-hours in FY26" },
                { k: "100%", v: "Sites with ISO 45001 certification" },
                { k: "18,400", v: "Trainees through the Ideal Skills Institute" },
              ].map((s) => (
                <div key={s.v} className="rounded-2xl border border-white/12 bg-white/5 p-7">
                  <dt className="text-[1.75rem] font-bold text-gold-400">{s.k}</dt>
                  <dd className="mt-1.5 text-[0.88rem] leading-snug text-white/65">{s.v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>
    </>
  );
}
