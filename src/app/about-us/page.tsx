import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";
import { SkylineBand } from "@/components/Art";
import { GoldButton, SectionHeading } from "@/components/ui";
import { footprints, leadership, milestones, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Ideal Engineering & Infrastructure Limited — a listed infrastructure company operating power, transmission, highways and industrial district assets across India.",
};

const values = [
  {
    title: "Engineering discipline",
    body: "Design, procurement and construction judged on availability over decades, not on handover dates.",
  },
  {
    title: "Operating rigour",
    body: "Standardised O&M practice across every station, corridor and substation in the portfolio.",
  },
  {
    title: "Long-term frameworks",
    body: "Concessions, PPAs and availability contracts that align our returns with public outcomes.",
  },
  {
    title: "Responsible ownership",
    body: "Safety, environmental performance and community consent treated as licence conditions.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Infrastructure that works as an engine of growth"
        body={`${site.legal} develops, owns and operates generation, transmission, highway and industrial-district assets — built to run reliably for decades, under long-term contractual frameworks.`}
        art="urban"
        crumbs={[{ label: "About Us", href: "/about-us" }]}
      />

      {/* Intro */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-x grid gap-14 lg:grid-cols-[1fr_1.1fr]">
          <Reveal>
            <SectionHeading
              eyebrow="Who we are"
              title="A listed infrastructure owner-operator"
            />
          </Reveal>
          <Reveal delay={120} className="space-y-5 text-[1.02rem] leading-[1.85] text-ink/70">
            <p>
              Founded in 1996 as a power engineering contractor in Rajahmundry, Ideal Engineering
              today operates a portfolio of thermal, hydro and renewable generation, extra-high-voltage
              transmission, tolled highway corridors and planned industrial districts across eleven
              Indian states.
            </p>
            <p>
              The company was listed on the NSE and BSE in 2021 following the demerger of the group&apos;s
              infrastructure businesses. Roughly four-fifths of consolidated revenue is contracted
              under long-term power purchase agreements, availability-based transmission tariffs and
              highway concessions — giving the business a predictable cash profile against which new
              capacity is funded.
            </p>
            <p>
              Our operating philosophy is straightforward: build assets that hold up, run them at high
              availability, and remain accountable to the communities and utilities that depend on
              them.
            </p>
          </Reveal>
        </div>

        <div className="container-x mt-16">
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {footprints.map((f, i) => (
              <Reveal
                as="li"
                key={f.label}
                delay={i * 90}
                className="rounded-2xl border border-navy-900/10 bg-sand p-7"
              >
                <p className="text-3xl font-bold text-ember-500">
                  <Counter value={f.value} />
                  <span className="ml-1 text-[0.9em]">{f.unit}</span>
                </p>
                <p className="mt-2 text-[0.9rem] text-ink/62">{f.label}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <SkylineBand className="w-full" />

      {/* Values */}
      <section className="bg-cream py-20 md:py-28">
        <div className="container-x">
          <Reveal>
            <SectionHeading
              eyebrow="How we operate"
              title="Four commitments that shape every decision"
            />
          </Reveal>
          <ul className="mt-12 grid gap-6 md:grid-cols-2">
            {values.map((v, i) => (
              <Reveal
                as="li"
                key={v.title}
                delay={i * 100}
                className="group rounded-2xl bg-white p-8 shadow-[0_10px_30px_-22px_rgba(10,37,64,0.4)] transition-transform duration-400 hover:-translate-y-1"
              >
                <span className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gold-100 text-[0.95rem] font-bold text-navy-800">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-[1.15rem] font-semibold text-navy-900">{v.title}</h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-ink/65">{v.body}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Milestones */}
      <section id="milestones" className="scroll-mt-28 bg-white py-20 md:py-28">
        <div className="container-x">
          <Reveal>
            <SectionHeading eyebrow="Milestones" title="Three decades, one direction" />
          </Reveal>

          <ol className="relative mt-14 border-l border-navy-900/12 pl-8 md:pl-12">
            {milestones.map((m, i) => (
              <Reveal as="li" key={m.year} delay={i * 70} className="relative pb-10 last:pb-0">
                <span className="absolute -left-[2.55rem] top-1.5 grid h-4 w-4 place-items-center md:-left-[3.55rem]">
                  <span className="h-4 w-4 rounded-full border-4 border-white bg-gold-500 shadow-[0_0_0_2px_rgba(15,58,107,0.15)]" />
                </span>
                <p className="text-[0.85rem] font-bold uppercase tracking-[0.16em] text-ember-500">
                  {m.year}
                </p>
                <p className="mt-2 max-w-2xl text-[1.05rem] leading-relaxed text-navy-900">
                  {m.text}
                </p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Leadership */}
      <section id="leadership" className="scroll-mt-28 bg-mist py-20 md:py-28">
        <div className="container-x">
          <Reveal>
            <SectionHeading
              eyebrow="Leadership"
              title="Board and executive management"
              body="An independent-majority board oversees strategy, risk and capital allocation, supported by an executive team drawn from utilities, EPC and project finance."
            />
          </Reveal>

          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {leadership.map((p, i) => (
              <Reveal
                as="li"
                key={p.name}
                delay={i * 80}
                className="group overflow-hidden rounded-2xl bg-white transition-shadow duration-400 hover:shadow-[0_30px_60px_-34px_rgba(10,37,64,0.55)]"
              >
                <div className="relative grid h-44 place-items-center bg-gradient-to-br from-navy-700 to-navy-900">
                  <span className="text-4xl font-bold text-white/85">
                    {p.name
                      .split(" ")
                      .map((w) => w[0])
                      .slice(0, 2)
                      .join("")}
                  </span>
                  <span className="absolute inset-x-0 bottom-0 h-1.5 bg-gold-500" />
                </div>
                <div className="p-6">
                  <h3 className="text-[1.08rem] font-semibold text-navy-900">{p.name}</h3>
                  <p className="mt-1 text-[0.9rem] font-medium text-ember-500">{p.role}</p>
                  <p className="mt-2 text-[0.85rem] text-ink/55">{p.tenure}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-navy-950 py-20 text-white">
        <div className="container-x flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <h2 className="display-2 max-w-2xl">Looking for investor or partnership information?</h2>
          <GoldButton href="/contact" className="shrink-0">
            Get in touch
          </GoldButton>
        </div>
      </section>
    </>
  );
}
