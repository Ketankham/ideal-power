import AppointmentForm from "@/components/clinic/AppointmentForm";
import MobileActionBar from "@/components/clinic/MobileActionBar";
import OpenStatus from "@/components/clinic/OpenStatus";
import { airBand, getAir } from "@/lib/air";
import { approach, clinic, conditions, faqs, firstVisit, reviewsHref, telHref } from "@/lib/clinic";

export const revalidate = 1800;

const yearsOfPractice = new Date().getFullYear() - clinic.doctor.specialisedIn;

const nav = [
  { label: "Conditions", href: "#conditions" },
  { label: "Our doctor", href: "#doctor" },
  { label: "Your visit", href: "#visit" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#book" },
];

/* Line icons keyed by condition, drawn on a 24px grid. */
const icons: Record<string, React.ReactNode> = {
  Asthma: <path d="M12 3v7m0 0c-1 1.5-2.5 2-4 2m4-2c1 1.5 2.5 2 4 2M9 6C6 6 4 9.5 4 14c0 3 1 5.5 3.5 5.5S10 17 10 14V8m5-2c3 0 5 3.5 5 8 0 3-1 5.5-3.5 5.5S14 17 14 14V8" />,
  Allergies: <path d="M12 21c-4-3-7-6.5-7-10.5a4 4 0 017-2.6 4 4 0 017 2.6c0 4-3 7.5-7 10.5zM9 3l1 2m5-2l-1 2" />,
  COPD: <path d="M3 12h4l2-5 3 10 2-5h7" />,
  Pneumonia: <path d="M12 4a8 8 0 100 16 8 8 0 000-16zm0 4v4l3 2" />,
  Tuberculosis: <path d="M7 4h10M7 20h10M8 4c0 5 8 5 8 8s-8 3-8 8m8-16c0 5-8 5-8 8" />,
  "Interstitial lung disease": <path d="M4 7h16M4 12h16M4 17h16M8 4v16m8-16v16" />,
  "Sleep disorders": <path d="M20 14.5A8 8 0 019.5 4a8 8 0 1010.5 10.5z" />,
  "Pleurisy & chest pain": <path d="M12 20s-7-4.5-7-10a4 4 0 017-2.5A4 4 0 0119 10c0 5.5-7 10-7 10zM8 11h2l1-2 2 4 1-2h2" />,
};

function Icon({ name, className = "size-6" }: { name: string; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      {icons[name]}
    </svg>
  );
}

function Logo() {
  return (
    <a href="#top" className="flex items-center gap-3" aria-label={`${clinic.name} home`}>
      <span className="grid size-10 place-items-center rounded-2xl bg-gradient-to-br from-blue-600 to-sky-500 text-white shadow-lg shadow-blue-600/25" aria-hidden>
        <Icon name="Asthma" className="size-5" />
      </span>
      <span className="leading-tight">
        <span className="block text-[1.05rem] font-extrabold tracking-tight text-slate-900">Chest &amp; Allergy Clinic</span>
        <span className="block text-xs font-medium text-slate-500">Dr. Vivek Patil · {clinic.city}</span>
      </span>
    </a>
  );
}

function Header() {
  return (
    <header className="sticky top-9 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
      <div className="hidden border-b border-slate-100 bg-slate-50 md:block">
        <div className="mx-auto flex h-9 max-w-7xl items-center justify-between px-6 text-xs text-slate-600">
          <OpenStatus className="font-semibold text-slate-800" />
          <span className="flex gap-6">
            <span>{clinic.hours.days} · {clinic.hours.time}</span>
            <a href={`mailto:${clinic.emails.info}`} className="hover:text-blue-700">{clinic.emails.info}</a>
          </span>
        </div>
      </div>
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-6 px-5 py-3 sm:px-6">
        <Logo />
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="rounded-lg px-3.5 py-2 text-sm font-semibold text-slate-600 transition hover:bg-slate-100 hover:text-slate-900">
              {n.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a href={telHref(clinic.phones[0])} className="hidden text-right leading-tight md:block">
            <span className="block text-[0.68rem] font-semibold uppercase tracking-wider text-slate-400">Call us</span>
            <span className="block text-sm font-bold text-slate-900">{clinic.phones[0]}</span>
          </a>
          <a href="#book" className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-blue-600/25 transition hover:bg-blue-700">
            Book appointment
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-gradient-to-b from-sky-50 via-white to-white">
      <div
        className="absolute inset-0 -z-10 opacity-60 [mask-image:radial-gradient(ellipse_at_top_right,black,transparent_70%)]"
        style={{ backgroundImage: "radial-gradient(#cbd5e1 1px, transparent 1px)", backgroundSize: "22px 22px" }}
        aria-hidden
      />
      <div className="absolute -right-40 -top-40 -z-10 size-[36rem] rounded-full bg-blue-200/40 blur-3xl" aria-hidden />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-16 pt-14 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:pb-24 lg:pt-20">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-1.5 text-xs font-bold text-blue-700 ring-1 ring-blue-100">
            <span className="rounded-full bg-blue-600 px-2 py-0.5 text-[0.65rem] text-white">Since {clinic.established}</span>
            Navi Mumbai&apos;s chest &amp; allergy specialists
          </p>
          <h1 className="mt-6 text-[clamp(2.5rem,5.6vw,4.4rem)] font-extrabold leading-[1.04] tracking-[-0.035em] text-slate-900">
            Specialist care for <span className="bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">every breath</span> you take.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
            Diagnosis and long-term treatment for asthma, allergies, COPD, TB and other lung conditions, from a chest
            physician with {yearsOfPractice}+ years of experience.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#book" className="rounded-xl bg-blue-600 px-7 py-4 font-bold text-white shadow-xl shadow-blue-600/25 transition hover:bg-blue-700">
              Book an appointment
            </a>
            <a href="#conditions" className="rounded-xl bg-white px-7 py-4 font-bold text-slate-800 ring-1 ring-slate-200 transition hover:ring-slate-300">
              Conditions we treat
            </a>
          </div>
          <ul className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm font-semibold text-slate-600">
            {["Protocol-driven treatment", "In-clinic diagnostics", "Long-term follow-up"].map((t) => (
              <li key={t} className="flex items-center gap-2">
                <svg viewBox="0 0 20 20" className="size-5 text-emerald-500" fill="currentColor" aria-hidden>
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.7-9.3a1 1 0 00-1.4-1.4L9 10.6 7.7 9.3a1 1 0 00-1.4 1.4l2 2a1 1 0 001.4 0l4-4z" />
                </svg>
                {t}
              </li>
            ))}
          </ul>
        </div>

        {/* Practical "visit card": what most patients want first. */}
        <aside className="rounded-3xl bg-white p-7 shadow-2xl shadow-slate-900/10 ring-1 ring-slate-200/70 sm:p-8">
          <div className="flex items-center justify-between">
            <p className="text-sm font-bold text-slate-900">Clinic hours</p>
            <OpenStatus className="rounded-full bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700" />
          </div>
          <ul className="mt-5 divide-y divide-slate-100 text-sm">
            {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((d) => (
              <li key={d} className="flex justify-between py-2.5">
                <span className="font-medium text-slate-600">{d}</span>
                <span className={d === "Sun" ? "font-semibold text-rose-500" : "font-semibold text-slate-900"}>
                  {d === "Sun" ? "Closed" : clinic.hours.time}
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-6 grid gap-2.5">
            <a href={telHref(clinic.phones[0])} className="rounded-xl bg-slate-900 py-3.5 text-center text-sm font-bold text-white transition hover:bg-slate-800">
              Call {clinic.phones[0]}
            </a>
            <a href="#book" className="rounded-xl bg-blue-50 py-3.5 text-center text-sm font-bold text-blue-700 transition hover:bg-blue-100">
              Request appointment online
            </a>
          </div>
        </aside>
      </div>
    </section>
  );
}

async function QuickTiles() {
  const air = await getAir();
  const band = air ? airBand(air.aqi) : null;
  const tiles = [
    { title: "Book a visit", body: "Request a slot in under a minute", href: "#book", icon: "Pneumonia" },
    { title: "Call the clinic", body: clinic.phones.join(" · "), href: telHref(clinic.phones[0]), icon: "Pleurisy & chest pain" },
    { title: "New patient?", body: "What to bring and what to expect", href: "#visit", icon: "Tuberculosis" },
  ];
  return (
    <section className="relative z-10 mx-auto -mt-2 max-w-7xl px-5 sm:px-6">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {tiles.map((t) => (
          <a key={t.title} href={t.href} className="group flex items-start gap-4 rounded-2xl bg-white p-5 ring-1 ring-slate-200 transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-slate-900/5 hover:ring-blue-200">
            <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
              <Icon name={t.icon} className="size-5" />
            </span>
            <span>
              <span className="block font-bold text-slate-900">{t.title}</span>
              <span className="mt-0.5 block text-sm text-slate-500">{t.body}</span>
            </span>
          </a>
        ))}
        <div className="flex items-start gap-4 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 p-5 text-white">
          <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-white/10 text-lg font-extrabold">
            {air ? air.aqi : "–"}
          </span>
          <span>
            <span className="block font-bold">Air today · AQI</span>
            <span className="mt-0.5 block text-sm text-slate-300">{band ? band.label : "Reading unavailable"}</span>
          </span>
        </div>
      </div>
      {band && (
        <p className="mt-3 text-center text-xs text-slate-500">
          Navi Mumbai air quality (US AQI, via Open-Meteo): {band.advice}
        </p>
      )}
    </section>
  );
}

function SectionHead({ eyebrow, title, body }: { eyebrow: string; title: string; body?: string }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="text-sm font-bold uppercase tracking-[0.14em] text-blue-600">{eyebrow}</p>
      <h2 className="mt-3 text-[clamp(1.9rem,3.6vw,2.8rem)] font-extrabold leading-tight tracking-[-0.03em] text-slate-900">{title}</h2>
      {body && <p className="mt-4 text-lg leading-relaxed text-slate-600">{body}</p>}
    </div>
  );
}

function Conditions() {
  return (
    <section id="conditions" className="scroll-mt-36 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <SectionHead
          eyebrow="Conditions we treat"
          title="Expert care for chest and allergy conditions"
          body="From a cough that won't go away to complex lung disease, every patient gets a careful diagnosis and a clear plan."
        />
        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {conditions.map((c) => (
            <li key={c.title} className="group rounded-2xl bg-white p-6 ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-900/10 hover:ring-blue-200">
              <span className="grid size-12 place-items-center rounded-2xl bg-gradient-to-br from-blue-50 to-sky-50 text-blue-600 ring-1 ring-blue-100">
                <Icon name={c.title} />
              </span>
              <h3 className="mt-5 text-lg font-bold text-slate-900">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{c.body}</p>
              <a href="#book" className="mt-5 inline-flex items-center gap-1 text-sm font-bold text-blue-600">
                Book a consult <span className="transition group-hover:translate-x-0.5">→</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Doctor() {
  const { doctor } = clinic;
  return (
    <section id="doctor" className="scroll-mt-36 bg-slate-50 py-24 sm:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-6 lg:grid-cols-2">
        <div className="relative">
          <div className="absolute -inset-4 -z-10 rotate-2 rounded-[2rem] bg-gradient-to-br from-blue-600 to-sky-400 opacity-90" aria-hidden />
          <div className="rounded-[1.75rem] bg-white p-8 sm:p-10">
            <div className="flex items-center gap-5">
              <div className="grid size-20 place-items-center rounded-2xl bg-blue-600 text-2xl font-extrabold text-white">VP</div>
              <div>
                <p className="text-2xl font-extrabold tracking-tight text-slate-900">{doctor.name}</p>
                <p className="font-semibold text-blue-600">{doctor.role}</p>
              </div>
            </div>
            <dl className="mt-8 grid grid-cols-3 gap-3 text-center">
              {[
                { k: `${yearsOfPractice}+`, v: "Years practising" },
                { k: "9", v: "Years at GTB Hospitals" },
                { k: `${clinic.established}`, v: "Clinic founded" },
              ].map((s) => (
                <div key={s.v} className="rounded-xl bg-slate-50 px-2 py-4">
                  <dd className="text-2xl font-extrabold text-slate-900">{s.k}</dd>
                  <dt className="mt-1 text-xs text-slate-500">{s.v}</dt>
                </div>
              ))}
            </dl>
            <p className="mt-8 text-sm font-bold text-slate-900">Special interests</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {doctor.interests.map((t) => (
                <li key={t} className="rounded-lg bg-blue-50 px-3 py-1.5 text-sm font-semibold text-blue-700">{t}</li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-blue-600">Meet your doctor</p>
          <h2 className="mt-3 text-[clamp(1.9rem,3.6vw,2.8rem)] font-extrabold leading-tight tracking-[-0.03em] text-slate-900">
            Hospital-grade experience, personal attention.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            {doctor.name} spent nine years at GTB Hospitals in Mumbai before starting his own practice in Navi Mumbai.
            Every consultation brings that depth of experience, with the time and continuity only a dedicated clinic
            can give.
          </p>
          <ol className="mt-9 grid gap-4 sm:grid-cols-2">
            {approach.map((a) => (
              <li key={a.step} className="rounded-2xl bg-white p-5 ring-1 ring-slate-200">
                <p className="text-sm font-extrabold text-blue-600">{a.step}</p>
                <p className="mt-1 font-bold text-slate-900">{a.title}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{a.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function YourVisit() {
  return (
    <section id="visit" className="scroll-mt-36 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <SectionHead eyebrow="Your first visit" title="Four simple steps to better breathing" />
        <ol className="mt-14 grid gap-5 md:grid-cols-4">
          {firstVisit.map((f, i) => (
            <li key={f.title} className="relative rounded-2xl bg-gradient-to-b from-sky-50 to-white p-6 ring-1 ring-sky-100">
              <span className="grid size-10 place-items-center rounded-full bg-blue-600 text-sm font-extrabold text-white shadow-lg shadow-blue-600/30">{i + 1}</span>
              <h3 className="mt-5 font-bold text-slate-900">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{f.body}</p>
            </li>
          ))}
        </ol>
        <div className="mt-10 flex flex-col items-center justify-between gap-5 rounded-2xl bg-slate-900 px-7 py-6 text-white sm:flex-row">
          <p className="font-semibold">See what patients say about Dr. Patil on Google.</p>
          <a href={reviewsHref} target="_blank" rel="noopener noreferrer" className="rounded-xl bg-white px-5 py-3 text-sm font-bold text-slate-900 transition hover:bg-blue-50">
            Read patient reviews ↗
          </a>
        </div>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section id="faq" className="scroll-mt-36 bg-slate-50 py-24 sm:py-28">
      <div className="mx-auto max-w-3xl px-5 sm:px-6">
        <SectionHead eyebrow="FAQ" title="Frequently asked questions" />
        <div className="mt-12 space-y-3">
          {faqs.map((f) => (
            <details key={f.q} className="group rounded-2xl bg-white p-6 ring-1 ring-slate-200 open:ring-blue-200 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-bold text-slate-900">
                {f.q}
                <svg viewBox="0 0 20 20" className="size-5 shrink-0 text-blue-600 transition group-open:rotate-180" fill="currentColor" aria-hidden>
                  <path fillRule="evenodd" d="M5.2 7.2a1 1 0 011.4 0L10 10.6l3.4-3.4a1 1 0 111.4 1.4l-4.1 4.1a1 1 0 01-1.4 0L5.2 8.6a1 1 0 010-1.4z" />
                </svg>
              </summary>
              <p className="mt-3 leading-relaxed text-slate-600">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Book() {
  return (
    <section id="book" className="scroll-mt-36 py-24 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-blue-600">Book an appointment</p>
          <h2 className="mt-3 text-[clamp(1.9rem,3.6vw,2.8rem)] font-extrabold leading-tight tracking-[-0.03em] text-slate-900">
            We&apos;re here to help you breathe easier.
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl bg-slate-50 p-5">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Phone</p>
              {clinic.phones.map((p) => (
                <a key={p} href={telHref(p)} className="mt-1 block font-bold text-slate-900 hover:text-blue-600">{p}</a>
              ))}
            </div>
            <div className="rounded-2xl bg-slate-50 p-5">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Hours</p>
              <p className="mt-1 font-bold text-slate-900">{clinic.hours.days}</p>
              <p className="text-sm text-slate-600">{clinic.hours.time} · Closed {clinic.hours.closed}</p>
            </div>
          </div>
          <div className="mt-4 overflow-hidden rounded-2xl ring-1 ring-slate-200">
            <iframe
              title={`Map showing ${clinic.name}`}
              src={`https://www.google.com/maps?q=${encodeURIComponent(clinic.mapQuery)}&output=embed`}
              className="h-72 w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
        <div className="rounded-3xl bg-white p-7 shadow-2xl shadow-slate-900/10 ring-1 ring-slate-200 sm:p-9">
          <p className="text-xl font-extrabold text-slate-900">Request an appointment</p>
          <p className="mb-7 mt-1 text-sm text-slate-500">We&apos;ll call you to confirm your time.</p>
          <AppointmentForm tone="light" submitClass="rounded-xl! bg-blue-600 text-white shadow-lg shadow-blue-600/25 hover:bg-blue-700" />
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 px-5 py-10 text-sm text-slate-500 sm:px-6 md:flex-row md:items-center">
        <Logo />
        <p>
          © {new Date().getFullYear()} {clinic.name}. This website does not replace medical advice.
        </p>
      </div>
    </footer>
  );
}

export default function ThemeTwo() {
  return (
    <div className="bg-white font-t2 text-slate-900 selection:bg-blue-100">
      <Header />
      <main id="main" className="pb-20 md:pb-0">
        <Hero />
        <QuickTiles />
        <Conditions />
        <Doctor />
        <YourVisit />
        <Faq />
        <Book />
      </main>
      <Footer />
      <MobileActionBar barClass="border-slate-200 bg-white/90" callClass="text-slate-900 ring-slate-200" bookClass="bg-blue-600 text-white" />
    </div>
  );
}
