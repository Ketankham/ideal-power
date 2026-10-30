import Link from "next/link";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import CompanyRail from "@/components/CompanyRail";
import Footprints from "@/components/Footprints";
import Spotlight from "@/components/Spotlight";
import GroupWebsites from "@/components/GroupWebsites";
import { SkylineBand } from "@/components/Art";
import { GhostButton, GoldButton, KnowMore, SectionHeading } from "@/components/ui";
import { news, sectors, site } from "@/lib/site";

const quickCards = [
  {
    title: "Investor Relations",
    body: "Access investor information, disclosures and statutory updates.",
    href: "/investors",
  },
  {
    title: "Media & Disclosures",
    body: "View official announcements, disclosures and public communications.",
    href: "/newsroom",
  },
  {
    title: "Strategic Partnerships",
    body: "Engage with Ideal Engineering to explore collaboration opportunities.",
    href: "/contact",
  },
];

const toneMap = {
  gold: "from-gold-500 to-gold-600",
  navy: "from-navy-700 to-navy-800",
  ember: "from-ember-500 to-ember-600",
} as const;

export default function Home() {
  return (
    <>
      <Hero />

      {/* ── At a glance ─────────────────────────────────────────────── */}
      <section className="relative bg-mist pb-24 pt-20 md:pb-28 md:pt-24">
        <div className="container-x">
          <div className="rounded-3xl bg-white/70 p-8 backdrop-blur-sm md:p-12 lg:p-14">
            <Reveal className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
              <h2 className="display-2 text-navy-900">
                {site.short}
                <br />
                at a Glance
              </h2>
              <p className="text-[1.02rem] leading-[1.8] text-ink/68">
                {site.legal} is a listed infrastructure company operating across the Energy, Urban
                Infrastructure and Transportation sectors — including power generation, smart energy
                initiatives, and surface transport projects in India and select international
                markets.
              </p>
            </Reveal>

            <ul className="mt-12 grid gap-6 md:grid-cols-3">
              {quickCards.map((c, i) => (
                <Reveal as="li" key={c.title} delay={i * 110}>
                  <Link
                    href={c.href}
                    className="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-gradient-to-br from-navy-700 to-navy-900 p-7 text-white transition-transform duration-400 hover:-translate-y-1.5"
                  >
                    <span
                      className="pointer-events-none absolute inset-0 opacity-25 transition-opacity duration-500 group-hover:opacity-45"
                      style={{
                        backgroundImage:
                          "radial-gradient(circle at 80% 15%, rgba(245,184,65,0.55), transparent 55%), radial-gradient(circle at 15% 90%, rgba(42,111,181,0.6), transparent 60%)",
                      }}
                      aria-hidden
                    />
                    <span className="relative text-[1.12rem] font-semibold">{c.title}</span>
                    <span className="relative mt-3 flex-1 text-[0.9rem] leading-relaxed text-white/72">
                      {c.body}
                    </span>
                    <span className="relative mt-6 inline-flex items-center gap-1.5 text-[0.9rem] font-semibold text-gold-400">
                      Know More
                      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 6l6 6-6 6" />
                      </svg>
                    </span>
                  </Link>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Presence across sectors ─────────────────────────────────── */}
      <section className="bg-white pt-20 md:pt-28">
        <div className="container-x">
          <Reveal>
            <SectionHeading
              align="center"
              title="Presence Across Energy, Transportation and Urban Infra"
              body="We operate across the Energy, Transportation and Urban Infrastructure sectors, with activities spanning power generation, smart energy initiatives, surface transport projects and related infrastructure developed under long-term operating frameworks."
            />
          </Reveal>

          <ul className="mt-14 grid gap-6 md:grid-cols-3">
            {sectors.map((s, i) => (
              <Reveal as="li" key={s.name} delay={i * 120}>
                <Link
                  href={s.href}
                  className={`group relative flex h-full flex-col overflow-hidden rounded-2xl bg-gradient-to-br p-8 text-white transition-all duration-400 hover:-translate-y-2 hover:shadow-[0_36px_60px_-32px_rgba(10,37,64,0.6)] ${toneMap[s.tone]}`}
                >
                  <span
                    className="pointer-events-none absolute -right-8 -top-8 h-48 w-48 rotate-12 opacity-25"
                    style={{
                      backgroundImage:
                        "repeating-linear-gradient(135deg, rgba(255,255,255,0.5) 0 2px, transparent 2px 12px)",
                    }}
                    aria-hidden
                  />
                  <h3 className="relative display-3">{s.name}</h3>
                  <p className="relative mt-4 flex-1 text-[0.95rem] leading-relaxed text-white/82">
                    {s.body}
                  </p>
                  <div className="relative mt-7 border-t border-white/25 pt-5">
                    <p className="text-2xl font-bold">{s.stat}</p>
                    <p className="mt-1 text-[0.8rem] uppercase tracking-[0.12em] text-white/70">
                      {s.statLabel}
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </ul>
        </div>

        <Reveal>
          <SkylineBand className="mt-16 w-full" />
        </Reveal>
      </section>

      {/* ── Our companies ───────────────────────────────────────────── */}
      <section className="bg-cream py-20 md:py-28">
        <div className="container-x">
          <Reveal>
            <SectionHeading
              eyebrow="Our Companies"
              title="A portfolio built around long-lived assets"
              body="The portfolio comprises core companies across Energy, Highways, Transmission and Urban Infrastructure, aligned to group-level governance and long-term strategic objectives."
            />
          </Reveal>
          <Reveal className="mt-12" delay={120}>
            <CompanyRail />
          </Reveal>
        </div>
      </section>

      {/* ── Footprints ──────────────────────────────────────────────── */}
      <Footprints />

      {/* ── Featured divisions (Institute / Sustainability / Communities / People) ── */}
      <Spotlight />

      {/* ── Governance ──────────────────────────────────────────────── */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-x grid gap-10 lg:grid-cols-2">
          <Reveal className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy-800 via-navy-900 to-navy-950 p-9 text-white md:p-12">
            <span className="hairline-grid pointer-events-none absolute inset-0 opacity-70" aria-hidden />
            <span className="eyebrow relative text-gold-400">Governance &amp; Responsibility</span>
            <h2 className="relative mt-5 display-2">
              ESG aligned.
              <br />
              Strong governance framework.
            </h2>
            <p className="relative mt-6 max-w-lg text-[1rem] leading-[1.8] text-white/72">
              Responsible infrastructure ownership sits at the centre of how we create long-term
              value. We emphasise regulatory compliance, risk management, safety and transparent
              governance across the portfolio — and integrate sustainability considerations into
              investment and operating decisions.
            </p>
            <div className="relative mt-9 flex flex-wrap gap-3">
              <GoldButton href="/sustainability">Learn More</GoldButton>
              <GhostButton href="/investors#governance" tone="light">
                Board &amp; Committees
              </GhostButton>
            </div>
          </Reveal>

          <div className="flex flex-col gap-6">
            <Reveal className="rounded-3xl border border-navy-900/10 bg-sand p-9 md:p-10" delay={100}>
              <p className="eyebrow text-ember-500">Newsroom</p>
              <ul className="mt-6 divide-y divide-navy-900/8">
                {news.slice(0, 3).map((n) => (
                  <li key={n.title} className="py-4 first:pt-0 last:pb-0">
                    <Link href="/newsroom" className="group block">
                      <p className="text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-ink/45">
                        {new Date(n.date).toLocaleDateString("en-IN", {
                          day: "2-digit",
                          month: "short",
                          year: "numeric",
                        })}{" "}
                        · {n.tag}
                      </p>
                      <p className="mt-1.5 text-[1rem] font-medium leading-snug text-navy-900 transition-colors group-hover:text-ember-500">
                        {n.title}
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <KnowMore href="/newsroom" label="All announcements" tone="navy" />
              </div>
            </Reveal>

            <Reveal className="rounded-3xl border border-navy-900/10 bg-gold-100/70 p-9 md:p-10" delay={180}>
              <p className="eyebrow text-navy-800">Careers</p>
              <h3 className="mt-4 display-3 text-navy-900">
                Build the infrastructure India runs on
              </h3>
              <p className="mt-4 text-[0.95rem] leading-relaxed text-ink/68">
                Engineers, operators and planners across 11 states — with graduate programmes at
                every operating site.
              </p>
              <div className="mt-6">
                <KnowMore href="/careers" label="See open roles" tone="navy" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Closing CTA ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-navy-950 py-20 text-white md:py-24">
        <span className="hairline-grid pointer-events-none absolute inset-0 opacity-60" aria-hidden />
        <span
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 82% 20%, rgba(245,184,65,0.22), transparent 55%)",
          }}
          aria-hidden
        />
        <div className="container-x relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p className="eyebrow text-gold-400">Explore the group</p>
            <h2 className="mt-4 display-2 max-w-2xl">
              Access information on the wider portfolio and corporate initiatives
            </h2>
          </div>
          <GoldButton href="/about-us" className="shrink-0">
            Visit About Us
          </GoldButton>
        </div>
      </section>

      {/* ── Group websites ──────────────────────────────────────────── */}
      <GroupWebsites />
    </>
  );
}
