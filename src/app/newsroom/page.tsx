import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { KnowMore, SectionHeading } from "@/components/ui";
import { news } from "@/lib/site";

export const metadata: Metadata = {
  title: "Newsroom",
  description:
    "Press releases, results announcements and public communications from Ideal Engineering & Infrastructure Limited.",
};

const fmt = (d: string) =>
  new Date(d).toLocaleDateString("en-IN", { day: "2-digit", month: "long", year: "numeric" });

const tagTone: Record<string, string> = {
  "Press Release": "bg-gold-100 text-navy-800",
  Results: "bg-mist text-navy-700",
  Announcement: "bg-cream text-ember-600",
  Sustainability: "bg-emerald-50 text-emerald-700",
};

export default function NewsroomPage() {
  const [lead, ...rest] = news;

  return (
    <>
      <PageHero
        eyebrow="Newsroom"
        title="Announcements and media resources"
        body="Official releases, results announcements and public communications. Media enquiries are handled by the corporate communications team."
        art="urban"
        crumbs={[{ label: "Newsroom", href: "/newsroom" }]}
      />

      {/* Lead story */}
      <section className="bg-white py-16 md:py-20">
        <div className="container-x">
          <Reveal>
            <Link
              href="/newsroom"
              className="group grid gap-8 overflow-hidden rounded-3xl border border-navy-900/10 bg-sand p-8 transition-all duration-400 hover:shadow-[0_36px_70px_-40px_rgba(10,37,64,0.55)] md:grid-cols-[1.1fr_0.9fr] md:p-12"
            >
              <div>
                <span className={`inline-block rounded-full px-3.5 py-1.5 text-[0.7rem] font-bold uppercase tracking-[0.12em] ${tagTone[lead.tag] ?? "bg-mist text-navy-700"}`}>
                  {lead.tag}
                </span>
                <p className="mt-5 text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-ink/45">
                  {fmt(lead.date)}
                </p>
                <h2 className="mt-3 display-2 text-navy-900 transition-colors group-hover:text-ember-500">
                  {lead.title}
                </h2>
                <p className="mt-5 max-w-xl text-[1.02rem] leading-[1.75] text-ink/68">{lead.body}</p>
                <span className="mt-7 inline-block">
                  <KnowMore href="/newsroom" label="Read the release" tone="navy" />
                </span>
              </div>
              <div className="relative min-h-[14rem] overflow-hidden rounded-2xl bg-gradient-to-br from-navy-700 to-navy-950">
                <span className="hairline-grid absolute inset-0 opacity-70" aria-hidden />
                <span
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 70% 25%, rgba(245,184,65,0.4), transparent 55%)",
                  }}
                  aria-hidden
                />
                <span className="absolute bottom-6 left-6 text-[0.75rem] font-bold uppercase tracking-[0.16em] text-white/60">
                  Latest
                </span>
              </div>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Archive */}
      <section className="bg-cream py-20 md:py-24">
        <div className="container-x">
          <Reveal>
            <SectionHeading eyebrow="Archive" title="All announcements" />
          </Reveal>

          <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((n, i) => (
              <Reveal as="li" key={n.title} delay={i * 85}>
                <Link
                  href="/newsroom"
                  className="group flex h-full flex-col rounded-2xl bg-white p-7 transition-all duration-400 hover:-translate-y-1.5 hover:shadow-[0_32px_60px_-36px_rgba(10,37,64,0.5)]"
                >
                  <span className={`self-start rounded-full px-3 py-1 text-[0.68rem] font-bold uppercase tracking-[0.12em] ${tagTone[n.tag] ?? "bg-mist text-navy-700"}`}>
                    {n.tag}
                  </span>
                  <p className="mt-4 text-[0.78rem] font-semibold uppercase tracking-[0.13em] text-ink/45">
                    {fmt(n.date)}
                  </p>
                  <h3 className="mt-2 text-[1.08rem] font-semibold leading-snug text-navy-900 transition-colors group-hover:text-ember-500">
                    {n.title}
                  </h3>
                  <p className="mt-3 flex-1 text-[0.9rem] leading-relaxed text-ink/62">{n.body}</p>
                  <span className="mt-5">
                    <KnowMore href="/newsroom" label="Read more" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-navy-950 py-16 text-white">
        <div className="container-x flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <p className="eyebrow text-gold-400">Media enquiries</p>
            <p className="mt-3 text-[1.15rem]">
              Corporate Communications ·{" "}
              <a href="mailto:media@idealengineering.in" className="font-semibold text-gold-400 hover:underline">
                media@idealengineering.in
              </a>
            </p>
          </div>
          <p className="max-w-md text-[0.9rem] leading-relaxed text-white/60">
            Logos, plant photography and executive biographies are available to accredited media on
            request.
          </p>
        </div>
      </section>
    </>
  );
}
