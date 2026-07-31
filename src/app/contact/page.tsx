import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { SectionHeading } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Corporate and registered office addresses, investor grievance channels and general enquiries for Ideal Engineering & Infrastructure Limited.",
};

const offices = [
  {
    title: "Corporate Office",
    lines: [site.address.line1, site.address.line2, site.address.state],
    phone: site.phone,
    email: site.email,
  },
  {
    title: "Registered Office",
    lines: [site.regd.line1, site.regd.line2, site.regd.state],
    phone: "+91 883 246 8800",
    email: "regd.office@idealengineering.in",
  },
];

const desks = [
  { title: "Investor relations", email: site.investorEmail, note: "Results, disclosures and analyst enquiries" },
  { title: "Media", email: "media@idealengineering.in", note: "Press, interviews and image requests" },
  { title: "Procurement", email: "vendors@idealengineering.in", note: "Supplier registration and tenders" },
  { title: "Careers", email: "careers@idealengineering.in", note: "Applications and campus programmes" },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Talk to the right team directly"
        body="Offices in Mumbai and Rajahmundry, with site teams at every operating asset. Use the desk addresses below to reach the right group first time."
        art="metering"
        crumbs={[{ label: "Contact", href: "/contact" }]}
      />

      <section className="bg-white py-20 md:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:items-start">
          <div>
            <Reveal>
              <SectionHeading eyebrow="Offices" title="Where to find us" />
            </Reveal>

            <ul className="mt-10 space-y-6">
              {offices.map((o, i) => (
                <Reveal
                  as="li"
                  key={o.title}
                  delay={i * 100}
                  className="rounded-2xl border border-navy-900/10 bg-sand p-7"
                >
                  <h3 className="eyebrow text-ember-500">{o.title}</h3>
                  <address className="mt-4 not-italic text-[0.97rem] leading-relaxed text-ink/70">
                    {o.lines.map((l) => (
                      <span key={l} className="block">
                        {l}
                      </span>
                    ))}
                  </address>
                  <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-[0.92rem]">
                    <a href={`tel:${o.phone.replace(/\s/g, "")}`} className="font-semibold text-navy-700 hover:text-ember-500">
                      {o.phone}
                    </a>
                    <a href={`mailto:${o.email}`} className="font-semibold text-navy-700 hover:text-ember-500">
                      {o.email}
                    </a>
                  </div>
                </Reveal>
              ))}
            </ul>

            <Reveal delay={220} className="mt-6">
              <ul className="grid gap-3 sm:grid-cols-2">
                {desks.map((d) => (
                  <li key={d.title} className="rounded-xl border border-navy-900/10 p-5">
                    <p className="text-[0.9rem] font-semibold text-navy-900">{d.title}</p>
                    <a href={`mailto:${d.email}`} className="mt-1 block text-[0.85rem] font-medium text-ember-500 hover:underline">
                      {d.email}
                    </a>
                    <p className="mt-1.5 text-[0.8rem] leading-snug text-ink/55">{d.note}</p>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={120}>
            <h2 className="display-3 text-navy-900">Send an enquiry</h2>
            <p className="mt-3 max-w-lg text-[0.97rem] leading-relaxed text-ink/65">
              Fill in the form and we will route your message to the relevant desk.
            </p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Grievances */}
      <section id="grievances" className="scroll-mt-28 bg-mist py-20 md:py-24">
        <div className="container-x grid gap-10 lg:grid-cols-2">
          <Reveal>
            <SectionHeading
              eyebrow="Shareholder grievances"
              title="Escalation path for investors"
              body="Grievances are acknowledged within two working days. If a complaint is not resolved to your satisfaction, it can be escalated through the SEBI SCORES platform or the Smart ODR portal."
            />
          </Reveal>

          <Reveal delay={110}>
            <ol className="space-y-4">
              {[
                {
                  step: "Registrar",
                  body: "KFin Technologies Limited — for transfers, transmission, dematerialisation and dividend queries.",
                },
                {
                  step: "Compliance Officer",
                  body: `Company Secretary & Compliance Officer — ${site.investorEmail}`,
                },
                {
                  step: "SEBI SCORES / Smart ODR",
                  body: "If unresolved after 21 days, escalate through the SEBI complaint redress platforms.",
                },
              ].map((s, i) => (
                <li key={s.step} className="flex gap-5 rounded-2xl bg-white p-6">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-navy-800 text-[0.85rem] font-bold text-white">
                    {i + 1}
                  </span>
                  <div>
                    <p className="text-[1.02rem] font-semibold text-navy-900">{s.step}</p>
                    <p className="mt-1.5 text-[0.92rem] leading-relaxed text-ink/65">{s.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>
    </>
  );
}
