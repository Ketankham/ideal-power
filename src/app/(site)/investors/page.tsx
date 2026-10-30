import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { GoldButton, KnowMore, SectionHeading } from "@/components/ui";
import { quarterlies, reports, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Investor Relations",
  description:
    "Financial results, annual reports, shareholder information and corporate governance disclosures for Ideal Engineering & Infrastructure Limited.",
};

const shareData = [
  { label: "Listed on", value: "NSE · BSE" },
  { label: "Ticker", value: "IDEALENGG" },
  { label: "ISIN", value: "INE0IE001019" },
  { label: "Face value", value: "₹5 per share" },
  { label: "Financial year end", value: "31 March" },
  { label: "Registrar", value: "KFin Technologies Limited" },
];

const governanceDocs = [
  "Code of Conduct for Directors and Senior Management",
  "Policy on Related Party Transactions",
  "Whistle-blower and Vigil Mechanism Policy",
  "Policy on Materiality of Events and Disclosures",
  "Nomination and Remuneration Policy",
  "Risk Management Policy",
  "Familiarisation Programme for Independent Directors",
  "Terms of Appointment of Independent Directors",
];

const disclosures = [
  { reg: "Regulation 30", label: "Disclosure of material events and information" },
  { reg: "Regulation 33", label: "Quarterly and annual financial results" },
  { reg: "Regulation 34", label: "Annual report and business responsibility statement" },
  { reg: "Regulation 46", label: "Website disclosure of statutory information" },
  { reg: "Regulation 62", label: "Disclosures for listed non-convertible securities" },
];

export default function InvestorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Investor Relations"
        title="Disclosure, results and shareholder information"
        body="Everything required under SEBI (Listing Obligations and Disclosure Requirements) Regulations, alongside the reports and presentations we publish each quarter."
        art="metering"
        crumbs={[{ label: "Investors", href: "/investors" }]}
      />

      {/* Quick tiles */}
      <section className="bg-white py-16 md:py-20">
        <div className="container-x grid gap-6 md:grid-cols-3">
          {[
            { t: "Financials & Reports", d: "Quarterly results, annual reports and investor presentations.", h: "#financials" },
            { t: "Shareholders' Information", d: "Share data, registrar details, dividends and unclaimed amounts.", h: "#shareholders" },
            { t: "Corporate Governance", d: "Board composition, committees and published policies.", h: "#governance" },
          ].map((c, i) => (
            <Reveal key={c.t} delay={i * 100}>
              <Link
                href={c.h}
                className="group flex h-full flex-col rounded-2xl bg-gradient-to-br from-navy-700 to-navy-900 p-8 text-white transition-transform duration-400 hover:-translate-y-1.5"
              >
                <h2 className="text-[1.15rem] font-semibold">{c.t}</h2>
                <p className="mt-3 flex-1 text-[0.92rem] leading-relaxed text-white/72">{c.d}</p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-[0.9rem] font-semibold text-gold-400">
                  Know More
                  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 6l6 6-6 6" />
                  </svg>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Financials */}
      <section id="financials" className="scroll-mt-28 bg-cream py-20 md:py-24">
        <div className="container-x">
          <Reveal>
            <SectionHeading
              eyebrow="Financials & Reports"
              title="Results at a glance"
              body="Consolidated results as reported to the exchanges. Full statements, limited review reports and earnings presentations are published with each announcement."
            />
          </Reveal>

          <Reveal delay={100} className="mt-10 overflow-x-auto">
            <table className="w-full min-w-[38rem] border-collapse text-left">
              <thead>
                <tr className="border-b-2 border-navy-900/15">
                  {["Period", "Revenue", "EBITDA", "PAT", ""].map((h) => (
                    <th key={h} scope="col" className="py-4 pr-6 text-[0.72rem] font-bold uppercase tracking-[0.14em] text-ink/45">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {quarterlies.map((q) => (
                  <tr key={q.period} className="border-b border-navy-900/8 transition-colors hover:bg-white/70">
                    <th scope="row" className="py-5 pr-6 text-left text-[1rem] font-semibold text-navy-900">
                      {q.period}
                    </th>
                    <td className="py-5 pr-6 text-[0.95rem] tabular-nums text-ink/70">{q.revenue}</td>
                    <td className="py-5 pr-6 text-[0.95rem] tabular-nums text-ink/70">{q.ebitda}</td>
                    <td className="py-5 pr-6 text-[0.95rem] font-semibold tabular-nums text-ember-500">
                      {q.pat}
                    </td>
                    <td className="py-5">
                      <KnowMore href="/contact" label="Download" tone="navy" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>

          <div className="mt-14">
            <h3 className="display-3 text-navy-900">Annual reporting</h3>
            <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {reports.map((r, i) => (
                <Reveal as="li" key={r.year} delay={i * 80} className="rounded-2xl bg-white p-7 shadow-[0_10px_30px_-26px_rgba(10,37,64,0.5)]">
                  <p className="text-[0.75rem] font-bold uppercase tracking-[0.15em] text-ember-500">
                    {r.year}
                  </p>
                  <ul className="mt-4 space-y-3">
                    {r.items.map((it) => (
                      <li key={it}>
                        <Link
                          href="/contact"
                          className="group flex items-start gap-2 text-[0.9rem] leading-snug text-ink/68 transition-colors hover:text-ember-500"
                        >
                          <svg viewBox="0 0 24 24" className="mt-0.5 h-4 w-4 shrink-0 text-navy-900/30 transition-colors group-hover:text-ember-500" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 4v12M7 12l5 5 5-5M5 20h14" />
                          </svg>
                          {it}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Shareholders */}
      <section id="shareholders" className="scroll-mt-28 bg-white py-20 md:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <SectionHeading
              eyebrow="Shareholders' Information"
              title="Share and registrar details"
              body="For transfers, transmissions, dematerialisation and unclaimed dividends, write to the registrar with your folio or DP-ID and client-ID."
            />
            <div className="mt-8">
              <GoldButton href="/contact#grievances">Raise a grievance</GoldButton>
            </div>
          </Reveal>

          <Reveal delay={110}>
            <dl className="divide-y divide-navy-900/10 rounded-2xl border border-navy-900/10">
              {shareData.map((s) => (
                <div key={s.label} className="flex items-baseline justify-between gap-6 px-7 py-5">
                  <dt className="text-[0.9rem] text-ink/55">{s.label}</dt>
                  <dd className="text-right text-[1rem] font-semibold text-navy-900">{s.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* Governance */}
      <section id="governance" className="scroll-mt-28 bg-mist py-20 md:py-24">
        <div className="container-x">
          <Reveal>
            <SectionHeading
              eyebrow="Corporate Governance"
              title="Board, committees and policies"
              body="The board comprises ten directors, six of whom are independent. Audit, Nomination & Remuneration, Stakeholders' Relationship, CSR and Risk & ESG committees each operate under published terms of reference."
            />
          </Reveal>

          <ul className="mt-10 grid gap-3 sm:grid-cols-2">
            {governanceDocs.map((d, i) => (
              <Reveal as="li" key={d} delay={i * 55}>
                <Link
                  href="/contact"
                  className="group flex items-center gap-4 rounded-xl bg-white px-6 py-5 transition-all hover:-translate-y-0.5 hover:shadow-[0_20px_40px_-30px_rgba(10,37,64,0.6)]"
                >
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-gold-100 text-navy-800">
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7 3h7l5 5v13H7zM14 3v5h5" />
                    </svg>
                  </span>
                  <span className="text-[0.95rem] leading-snug text-navy-900">{d}</span>
                  <svg viewBox="0 0 24 24" className="ml-auto h-4 w-4 shrink-0 text-navy-900/25 transition-transform group-hover:translate-x-1 group-hover:text-ember-500" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 6l6 6-6 6" />
                  </svg>
                </Link>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Disclosures */}
      <section id="disclosures" className="scroll-mt-28 bg-white py-20 md:py-24">
        <div className="container-x">
          <Reveal>
            <SectionHeading
              eyebrow="Regulatory Disclosures"
              title="Disclosures under SEBI LODR"
              body="Information published in compliance with the Listing Obligations and Disclosure Requirements Regulations, 2015."
            />
          </Reveal>

          <ul className="mt-10 divide-y divide-navy-900/10 border-y border-navy-900/10">
            {disclosures.map((d, i) => (
              <Reveal as="li" key={d.reg} delay={i * 65}>
                <Link href="/contact" className="group flex items-center gap-6 py-6">
                  <span className="w-32 shrink-0 text-[0.8rem] font-bold uppercase tracking-[0.13em] text-ember-500">
                    {d.reg}
                  </span>
                  <span className="flex-1 text-[1rem] text-navy-900 transition-colors group-hover:text-ember-500">
                    {d.label}
                  </span>
                  <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0 text-navy-900/25 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 6l6 6-6 6" />
                  </svg>
                </Link>
              </Reveal>
            ))}
          </ul>

          <p className="mt-10 max-w-3xl text-[0.9rem] leading-relaxed text-ink/55">
            For any clarification on the disclosures published here, contact the Company Secretary
            and Compliance Officer at{" "}
            <a href={`mailto:${site.investorEmail}`} className="font-semibold text-navy-700 hover:text-ember-500">
              {site.investorEmail}
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
