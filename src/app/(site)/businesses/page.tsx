import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { SceneArt } from "@/components/Art";
import { KnowMore, SectionHeading } from "@/components/ui";
import { companies, sectors } from "@/lib/site";

export const metadata: Metadata = {
  title: "Businesses",
  description:
    "Energy, transmission, highways, smart metering and industrial districts — the operating companies of Ideal Engineering & Infrastructure Limited.",
};

export default function BusinessesPage() {
  return (
    <>
      <PageHero
        eyebrow="Businesses"
        title="Five operating companies, one balance sheet"
        body="Each business owns and operates its own assets under sector-specific regulation, while sharing group-level governance, treasury and engineering standards."
        art="energy"
        crumbs={[{ label: "Businesses", href: "/businesses" }]}
      />

      <section className="bg-white py-20 md:py-28">
        <div className="container-x">
          <Reveal>
            <SectionHeading
              eyebrow="Sectors"
              title="Where we operate"
              body="Activities span power generation, smart energy initiatives, surface transport projects and related infrastructure developed under long-term operating frameworks."
            />
          </Reveal>

          <ul className="mt-12 grid gap-6 md:grid-cols-3">
            {sectors.map((s, i) => (
              <Reveal as="li" key={s.name} delay={i * 100}>
                <Link
                  href={s.href}
                  className="group flex h-full flex-col rounded-2xl border border-navy-900/10 bg-sand p-8 transition-all duration-400 hover:-translate-y-1.5 hover:border-ember-500/30 hover:bg-white hover:shadow-[0_30px_60px_-34px_rgba(10,37,64,0.5)]"
                >
                  <p className="text-2xl font-bold text-ember-500">{s.stat}</p>
                  <p className="mt-1 text-[0.78rem] uppercase tracking-[0.14em] text-ink/45">
                    {s.statLabel}
                  </p>
                  <h3 className="mt-6 display-3 text-navy-900">{s.name}</h3>
                  <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-ink/65">{s.body}</p>
                  <span className="mt-6">
                    <KnowMore href={s.href} label="Explore" tone="navy" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-cream py-20 md:py-28">
        <div className="container-x">
          <Reveal>
            <SectionHeading eyebrow="Group companies" title="The operating entities" />
          </Reveal>

          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {companies.map((c, i) => (
              <Reveal as="li" key={c.slug} delay={i * 90}>
                <Link
                  href={`/businesses/${c.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-[0_10px_30px_-22px_rgba(10,37,64,0.4)] transition-all duration-400 hover:-translate-y-1.5 hover:shadow-[0_34px_60px_-32px_rgba(10,37,64,0.5)]"
                >
                  <div className="relative h-40 overflow-hidden">
                    <SceneArt
                      id={`biz-${c.slug}`}
                      variant={c.art}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <span className="absolute inset-0 bg-gradient-to-t from-navy-950/60 to-transparent" />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-[1.1rem] font-semibold leading-snug text-navy-900">
                      {c.name}
                    </h3>
                    <p className="mt-3 flex-1 text-[0.9rem] leading-relaxed text-ink/62">{c.body}</p>
                    <span className="mt-5">
                      <KnowMore href={`/businesses/${c.slug}`} label="View Entity Overview" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
