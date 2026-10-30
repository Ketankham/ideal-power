import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { GoldButton, KnowMore, SectionHeading } from "@/components/ui";
import { openRoles } from "@/lib/site";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Engineering, operations and corporate roles across power plants, highway corridors and industrial districts at Ideal Engineering.",
};

const benefits = [
  { title: "Site-first engineering", body: "Graduate engineers spend their first eighteen months at an operating asset, not in a corporate office." },
  { title: "Structured progression", body: "Defined technical and managerial tracks, with annual competency reviews at every grade." },
  { title: "Family support", body: "Township housing, schooling assistance and medical cover for dependants at all plant locations." },
  { title: "Continuous learning", body: "Sponsored certifications and rotations through the Ideal Skills Institute." },
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Build the infrastructure India runs on"
        body="Around 4,850 people operate our plants, corridors and districts. Most of them work where the assets are — in Rajasthan, Maharashtra, Jharkhand, Tamil Nadu and eight other states."
        art="energy"
        crumbs={[{ label: "Careers", href: "/careers" }]}
      />

      <section className="bg-white py-20 md:py-24">
        <div className="container-x">
          <Reveal>
            <SectionHeading eyebrow="Why here" title="What working here actually looks like" />
          </Reveal>
          <ul className="mt-12 grid gap-6 sm:grid-cols-2">
            {benefits.map((b, i) => (
              <Reveal
                as="li"
                key={b.title}
                delay={i * 95}
                className="rounded-2xl border border-navy-900/10 bg-sand p-8"
              >
                <span className="mb-5 block h-1 w-10 rounded-full bg-ember-500" />
                <h3 className="text-[1.12rem] font-semibold text-navy-900">{b.title}</h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-ink/65">{b.body}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section id="roles" className="scroll-mt-28 bg-cream py-20 md:py-24">
        <div className="container-x">
          <Reveal>
            <SectionHeading
              eyebrow="Open roles"
              title="Current openings"
              body="Applications are reviewed on a rolling basis. Shortlisted candidates are contacted within three weeks."
            />
          </Reveal>

          <ul className="mt-12 space-y-4">
            {openRoles.map((r, i) => (
              <Reveal as="li" key={r.title} delay={i * 70}>
                <article className="group grid gap-4 rounded-2xl bg-white p-7 transition-all duration-400 hover:-translate-y-1 hover:shadow-[0_30px_60px_-38px_rgba(10,37,64,0.55)] md:grid-cols-[1.5fr_1fr_0.7fr_auto] md:items-center">
                  <div>
                    <p className="eyebrow text-ember-500">{r.fn}</p>
                    <h3 className="mt-2 text-[1.1rem] font-semibold leading-snug text-navy-900">
                      {r.title}
                    </h3>
                  </div>
                  <p className="flex items-center gap-2 text-[0.92rem] text-ink/65">
                    <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0 text-navy-900/35" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 21s7-6.4 7-11a7 7 0 10-14 0c0 4.6 7 11 7 11z" />
                      <circle cx="12" cy="10" r="2.5" />
                    </svg>
                    {r.location}
                  </p>
                  <p className="text-[0.85rem] font-semibold uppercase tracking-[0.1em] text-navy-700">
                    {r.type}
                  </p>
                  <div className="md:justify-self-end">
                    <KnowMore href="/contact" label="Apply" tone="navy" />
                  </div>
                </article>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-navy-950 py-20 text-white md:py-24">
        <div className="container-x flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p className="eyebrow text-gold-400">Graduate programme</p>
            <h2 className="mt-4 display-2 max-w-2xl">
              Applications for the 2027 Graduate Engineer Trainee intake open in October
            </h2>
          </div>
          <GoldButton href="/contact" className="shrink-0">
            Register interest
          </GoldButton>
        </div>
      </section>
    </>
  );
}
