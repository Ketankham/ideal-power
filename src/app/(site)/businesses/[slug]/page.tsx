import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { GoldButton, KnowMore, SectionHeading } from "@/components/ui";
import { businesses, getBusiness } from "@/lib/businesses";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return businesses.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const b = getBusiness(slug);
  if (!b) return { title: "Business" };
  return { title: b.name, description: b.lead };
}

export default async function BusinessPage({ params }: Params) {
  const { slug } = await params;
  const b = getBusiness(slug);
  if (!b) notFound();

  const others = businesses.filter((x) => x.slug !== b.slug).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow={b.sector}
        title={b.name}
        body={b.lead}
        art={b.art}
        crumbs={[
          { label: "Businesses", href: "/businesses" },
          { label: b.name, href: `/businesses/${b.slug}` },
        ]}
      />

      {/* Stat strip */}
      <section className="bg-navy-800">
        <div className="container-x">
          <dl className="grid divide-y divide-white/12 md:grid-cols-4 md:divide-x md:divide-y-0">
            {b.stats.map((s) => (
              <div key={s.label} className="px-2 py-8 md:px-7">
                <dt className="sr-only">{s.label}</dt>
                <dd className="text-[1.75rem] font-bold text-gold-400">{s.value}</dd>
                <p className="mt-1.5 text-[0.85rem] leading-snug text-white/65">{s.label}</p>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Overview */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-x grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <SectionHeading eyebrow="Entity overview" title="What this business does" />
          </Reveal>
          <Reveal delay={110} className="space-y-5 text-[1.02rem] leading-[1.85] text-ink/70">
            {b.intro.map((p) => (
              <p key={p.slice(0, 40)}>{p}</p>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Capabilities */}
      <section className="bg-cream py-20 md:py-28">
        <div className="container-x">
          <Reveal>
            <SectionHeading eyebrow="Capabilities" title="How the work gets delivered" />
          </Reveal>
          <ul className="mt-12 grid gap-6 sm:grid-cols-2">
            {b.capabilities.map((c, i) => (
              <Reveal
                as="li"
                key={c.title}
                delay={i * 90}
                className="rounded-2xl bg-white p-8 shadow-[0_10px_30px_-24px_rgba(10,37,64,0.4)]"
              >
                <span className="mb-5 block h-1 w-10 rounded-full bg-gold-500" />
                <h3 className="text-[1.12rem] font-semibold text-navy-900">{c.title}</h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-ink/65">{c.body}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Assets */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-x">
          <Reveal>
            <SectionHeading eyebrow="Portfolio" title="Assets under this entity" />
          </Reveal>
          <ul className="mt-12 divide-y divide-navy-900/10 border-y border-navy-900/10">
            {b.assets.map((a, i) => (
              <Reveal
                as="li"
                key={a.name}
                delay={i * 60}
                className="group grid gap-2 py-6 md:grid-cols-[1.2fr_0.8fr_1fr] md:items-center md:gap-6"
              >
                <p className="text-[1.08rem] font-semibold text-navy-900 transition-colors group-hover:text-ember-500">
                  {a.name}
                </p>
                <p className="text-[0.9rem] font-medium text-ember-500">{a.location}</p>
                <p className="text-[0.92rem] text-ink/60">{a.detail}</p>
              </Reveal>
            ))}
          </ul>
          <div className="mt-10">
            <GoldButton href="/projects">See all projects</GoldButton>
          </div>
        </div>
      </section>

      {/* Other entities */}
      <section className="bg-mist py-20 md:py-24">
        <div className="container-x">
          <h2 className="display-3 text-navy-900">Other group companies</h2>
          <ul className="mt-8 grid gap-6 md:grid-cols-3">
            {others.map((o, i) => (
              <Reveal as="li" key={o.slug} delay={i * 90}>
                <Link
                  href={`/businesses/${o.slug}`}
                  className="group flex h-full flex-col rounded-2xl bg-white p-7 transition-all duration-400 hover:-translate-y-1.5 hover:shadow-[0_30px_60px_-34px_rgba(10,37,64,0.5)]"
                >
                  <p className="eyebrow text-ember-500">{o.sector}</p>
                  <h3 className="mt-3 text-[1.08rem] font-semibold leading-snug text-navy-900">
                    {o.name}
                  </h3>
                  <p className="mt-3 flex-1 text-[0.9rem] leading-relaxed text-ink/62">{o.lead}</p>
                  <span className="mt-5">
                    <KnowMore href={`/businesses/${o.slug}`} label="View Entity Overview" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
