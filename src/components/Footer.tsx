import Link from "next/link";
import Logo from "./Logo";
import { site } from "@/lib/site";
import { Chevron } from "./ui";

const columns = [
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about-us" },
      { label: "Leadership", href: "/about-us#leadership" },
      { label: "Milestones", href: "/about-us#milestones" },
      { label: "Newsroom", href: "/newsroom" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Investors",
    links: [
      { label: "Overview", href: "/investors" },
      { label: "Financials & Reports", href: "/investors#financials" },
      { label: "Shareholders' Information", href: "/investors#shareholders" },
      { label: "Corporate Governance", href: "/investors#governance" },
      { label: "Disclosures under SEBI LODR", href: "/investors#disclosures" },
      { label: "Investor Grievances", href: "/contact#grievances" },
    ],
  },
  {
    title: "Businesses",
    links: [
      { label: "Ideal Energy Limited", href: "/businesses/ideal-energy" },
      { label: "Ideal Highways Limited", href: "/businesses/ideal-highways" },
      { label: "Ideal Industrial Districts Limited", href: "/businesses/ideal-industrial-districts" },
      { label: "Ideal Smart Metering Limited", href: "/businesses/ideal-smart-metering" },
      { label: "Ideal Transmission Limited", href: "/businesses/ideal-transmission" },
    ],
  },
  {
    title: "Sustainability",
    links: [
      { label: "ESG Profile", href: "/sustainability" },
      { label: "Environment", href: "/sustainability#environment" },
      { label: "Communities", href: "/sustainability#social" },
      { label: "Safety", href: "/sustainability#safety" },
      { label: "Projects", href: "/projects" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-white">
      {/* navy identity band */}
      <div className="bg-navy-800">
        <div className="container-x flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between">
          <Logo variant="light" />
          <div className="flex items-center gap-3">
            <Social label="LinkedIn" href="https://www.linkedin.com">
              <path d="M6.5 9v8M6.5 6.2v.1M11 17v-4.4c0-1.2.9-2.1 2.1-2.1s2.1.9 2.1 2.1V17M11 9v8" />
            </Social>
            <Social label="Facebook" href="https://www.facebook.com">
              <path d="M14.5 7.5H13c-.8 0-1.5.7-1.5 1.5v9M9.5 12.5h5" />
            </Social>
            <Social label="YouTube" href="https://www.youtube.com">
              <rect x="4" y="7" width="16" height="10" rx="3" />
              <path d="M11 10.5l3.5 1.9L11 14.3z" />
            </Social>
            <Link
              href="/businesses"
              className="ml-1 inline-flex items-center gap-2.5 rounded-lg bg-gold-500 px-5 py-2.5 text-sm font-semibold text-navy-900 transition-colors hover:bg-gold-400"
            >
              Group Sites
              <span className="grid h-5 w-5 place-items-center rounded bg-navy-900 text-white">
                <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* link columns */}
      <div className="container-x grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4 lg:py-16">
        {columns.map((col) => (
          <div key={col.title}>
            <h3 className="eyebrow mb-5 text-navy-900">{col.title}</h3>
            <ul className="space-y-2.5">
              {col.links.map((l) => (
                <li key={l.href + l.label}>
                  <Link
                    href={l.href}
                    className="group inline-flex items-center gap-1.5 text-[0.9rem] text-ink/65 transition-colors hover:text-ember-500"
                  >
                    {l.label}
                    <Chevron className="h-3 w-3 opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* addresses */}
      <div className="border-t border-navy-900/8">
        <div className="container-x grid gap-8 py-10 md:grid-cols-3">
          <div>
            <p className="eyebrow mb-3 text-ember-500">Corporate Office</p>
            <p className="text-[0.9rem] leading-relaxed text-ink/65">
              {site.address.line1}
              <br />
              {site.address.line2}
              <br />
              {site.address.state}
            </p>
          </div>
          <div>
            <p className="eyebrow mb-3 text-ember-500">Registered Office</p>
            <p className="text-[0.9rem] leading-relaxed text-ink/65">
              {site.regd.line2}
              <br />
              {site.regd.state}
              <br />
              CIN: {site.regd.cin}
            </p>
          </div>
          <div>
            <p className="eyebrow mb-3 text-ember-500">Reach Us</p>
            <p className="text-[0.9rem] leading-relaxed text-ink/65">
              <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="hover:text-ember-500">
                {site.phone}
              </a>
              <br />
              <a href={`mailto:${site.email}`} className="hover:text-ember-500">
                {site.email}
              </a>
              <br />
              <a href={`mailto:${site.investorEmail}`} className="hover:text-ember-500">
                {site.investorEmail}
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="bg-navy-950">
        <div className="container-x flex flex-col gap-3 py-5 text-[0.8rem] text-white/55 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {site.legal}. All rights reserved.</p>
          <nav className="flex flex-wrap items-center gap-x-5 gap-y-2" aria-label="Legal">
            <Link href="/contact" className="hover:text-white">Sitemap</Link>
            <Link href="/contact" className="hover:text-white">Privacy Notice</Link>
            <Link href="/contact" className="hover:text-white">Cookie Policy</Link>
            <Link href="/contact" className="hover:text-white">Legal Disclaimer</Link>
            <Link href="/contact" className="hover:text-white">Terms &amp; Conditions</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}

function Social({
  label,
  href,
  children,
}: {
  label: string;
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noreferrer noopener"
      className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/12 text-white transition-colors hover:bg-white/25"
    >
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        {children}
      </svg>
    </a>
  );
}
