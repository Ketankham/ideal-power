import { ClinicMark } from "@/components/clinic/ClinicHeader";
import SymptomCheck from "@/components/clinic/SymptomCheck";
import AppointmentForm from "@/components/clinic/AppointmentForm";
import { approach, clinic, conditions, faqs, telHref } from "@/lib/clinic";

const yearsOfPractice = new Date().getFullYear() - clinic.doctor.specialisedIn;

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className={`inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] ${
        light ? "text-sage-200" : "text-pine-700"
      }`}
    >
      <span className={`size-1.5 rounded-full ${light ? "bg-coral-500" : "bg-coral-500"}`} aria-hidden />
      {children}
    </p>
  );
}

/* Concentric rings that slowly expand and settle, like a calm breath. */
function BreathArt() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[30rem]" aria-hidden>
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-sage-200 via-sage-100 to-transparent blur-2xl" />
      {[0, 1, 2, 3].map((i) => (
        <span
          key={i}
          className="absolute rounded-full border border-pine-700/15 animate-breathe"
          style={{ inset: `${i * 11}%`, animationDelay: `${i * 0.6}s` }}
        />
      ))}
      <div className="absolute inset-[30%] grid place-items-center rounded-full bg-pine-900 shadow-[0_40px_80px_-30px_rgb(6_42_38/0.8)] animate-breathe [animation-duration:7s]">
        <svg viewBox="0 0 120 120" className="w-[62%] text-sage-100" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
          <path d="M60 18v40" />
          <path d="M60 58c-6 7-13 10-20 10" />
          <path d="M60 58c6 7 13 10 20 10" />
          <path d="M46 36C30 33 18 50 18 74c0 15 6 26 17 26 13 0 15-13 15-27V44" />
          <path d="M74 36c16-3 28 14 28 38 0 15-6 26-17 26-13 0-15-13-15-27V44" />
          <path d="M30 70c4-3 9-4 14-3M90 70c-4-3-9-4-14-3M32 84c4-2 8-2 12 0M88 84c-4-2-8-2-12 0" strokeWidth="1.6" opacity="0.6" />
        </svg>
      </div>

      <div className="absolute left-0 top-[14%] animate-float rounded-2xl bg-white/90 px-4 py-3 shadow-[0_20px_50px_-25px_rgb(6_42_38/0.5)] ring-1 ring-pine-900/5 backdrop-blur sm:-left-4">
        <p className="font-clinic-serif text-2xl leading-none text-pine-950">{yearsOfPractice}+</p>
        <p className="mt-1 text-[0.7rem] uppercase tracking-[0.16em] text-pine-900/55">years in chest medicine</p>
      </div>
      <div className="absolute bottom-[12%] right-0 animate-float rounded-2xl bg-white/90 px-4 py-3 shadow-[0_20px_50px_-25px_rgb(6_42_38/0.5)] ring-1 ring-pine-900/5 backdrop-blur [animation-delay:-4s] sm:-right-2">
        <p className="flex items-center gap-2 text-sm font-semibold text-pine-950">
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-pine-500 opacity-60" />
            <span className="relative inline-flex size-2 rounded-full bg-pine-500" />
          </span>
          Open Mon–Sat
        </p>
        <p className="mt-0.5 text-xs text-pine-900/55">{clinic.hours.time}</p>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="relative isolate overflow-hidden pb-20 pt-32 sm:pt-40">
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "radial-gradient(60rem 40rem at 85% -10%, rgb(207 227 219 / 0.9), transparent 60%), radial-gradient(40rem 30rem at -10% 110%, rgb(239 122 90 / 0.12), transparent 60%)",
        }}
        aria-hidden
      />
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <Eyebrow>Chest physician · {clinic.city} · Since {clinic.established}</Eyebrow>
          <h1 className="mt-6 font-clinic-serif text-[clamp(2.7rem,6.4vw,5rem)] font-light leading-[1.02] tracking-[-0.02em] text-pine-950">
            Breathe easy,
            <br />
            <em className="font-normal italic text-pine-700">every single day.</em>
          </h1>
          <p className="mt-7 max-w-lg text-[1.08rem] leading-[1.75] text-pine-900/70">
            Long-term specialist care for asthma, allergy and chest conditions, led by {clinic.doctor.name}. He has
            more than three decades of experience helping Navi Mumbai breathe better.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#book"
              className="group inline-flex items-center gap-2 rounded-full bg-pine-900 py-3.5 pl-7 pr-5 font-semibold text-white shadow-[0_20px_40px_-20px_rgb(6_42_38/0.9)] transition hover:bg-pine-700"
            >
              Book an appointment
              <span className="grid size-7 place-items-center rounded-full bg-white/15 transition group-hover:translate-x-0.5">→</span>
            </a>
            <a
              href={telHref(clinic.phones[0])}
              className="rounded-full px-6 py-3.5 font-semibold text-pine-900 ring-1 ring-pine-900/15 transition hover:bg-white"
            >
              Call {clinic.phones[0]}
            </a>
          </div>

          <dl className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-pine-900/10 pt-8">
            {[
              { k: `${yearsOfPractice}+`, v: "Years of practice" },
              { k: `${clinic.established}`, v: "Clinic founded" },
              { k: "6", v: "Days a week" },
            ].map((s) => (
              <div key={s.v}>
                <dt className="sr-only">{s.v}</dt>
                <dd className="font-clinic-serif text-3xl text-pine-950">{s.k}</dd>
                <dd className="mt-1 text-xs text-pine-900/55">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>
        <BreathArt />
      </div>
    </section>
  );
}

function Marquee() {
  const items = [...conditions.map((c) => c.title), "Protocol-driven care", "In-clinic diagnostics"];
  return (
    <div className="overflow-hidden border-y border-pine-900/10 bg-pine-950 py-5 text-sage-100" aria-hidden>
      <div className="flex w-max animate-marquee gap-10 whitespace-nowrap">
        {[...items, ...items].map((t, i) => (
          <span key={i} className="flex items-center gap-10 font-clinic-serif text-2xl font-light italic">
            {t}
            <span className="size-1.5 rounded-full bg-coral-500" />
          </span>
        ))}
      </div>
    </div>
  );
}

function CheckSection() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <div>
          <Eyebrow>Could it be asthma?</Eyebrow>
          <h2 className="mt-5 font-clinic-serif text-[clamp(2rem,4vw,3.1rem)] font-light leading-[1.08] tracking-[-0.015em]">
            Many people live with asthma for years without knowing it.
          </h2>
          <p className="mt-5 max-w-md leading-[1.75] text-pine-900/65">
            Asthma often looks like a cough that won&apos;t go away or breathlessness you put down to being unfit.
            Tick the symptoms that sound like you.
          </p>
        </div>
        <SymptomCheck />
      </div>
    </section>
  );
}

function Conditions() {
  return (
    <section id="conditions" className="scroll-mt-24 bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Eyebrow>What we treat</Eyebrow>
            <h2 className="mt-5 max-w-xl font-clinic-serif text-[clamp(2rem,4vw,3.1rem)] font-light leading-[1.08] tracking-[-0.015em]">
              Every condition that affects the way you breathe.
            </h2>
          </div>
          <p className="max-w-sm leading-[1.75] text-pine-900/65">
            From everyday allergies to complex lung disease, each one is diagnosed carefully and managed over the
            long term.
          </p>
        </div>

        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {conditions.map((c, i) => {
            const featured = i === 0;
            return (
              <li
                key={c.title}
                className={`group relative flex flex-col overflow-hidden rounded-[1.75rem] p-7 transition duration-500 hover:-translate-y-1 ${
                  featured
                    ? "bg-pine-900 text-white sm:col-span-2 lg:row-span-2"
                    : "bg-linen ring-1 ring-pine-900/5 hover:bg-sage-100"
                }`}
              >
                {featured && (
                  <span
                    className="absolute -right-24 -top-24 size-72 rounded-full border border-white/10 animate-breathe"
                    aria-hidden
                  />
                )}
                <span
                  className={`w-fit rounded-full px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.16em] ${
                    featured ? "bg-white/10 text-sage-200" : "bg-white text-pine-700"
                  }`}
                >
                  {c.tag}
                </span>
                <h3
                  className={`mt-auto pt-12 font-clinic-serif font-light leading-tight ${
                    featured ? "text-[clamp(2.2rem,4vw,3.4rem)]" : "text-[1.6rem]"
                  }`}
                >
                  {c.title}
                </h3>
                <p className={`mt-3 text-[0.93rem] leading-relaxed ${featured ? "max-w-sm text-white/70" : "text-pine-900/65"}`}>
                  {c.body}
                </p>
                {featured && (
                  <a href="#book" className="mt-8 w-fit rounded-full bg-coral-500 px-5 py-2.5 text-sm font-semibold transition hover:bg-coral-600">
                    Start an asthma plan
                  </a>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

function Doctor() {
  const { doctor } = clinic;
  return (
    <section id="about" className="scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl gap-14 px-5 lg:grid-cols-2 lg:items-center">
        <div className="relative">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-pine-800 to-pine-950 p-10 text-white sm:p-14">
            <span className="absolute -bottom-32 -right-32 size-96 rounded-full border border-white/10" aria-hidden />
            <span className="absolute -bottom-16 -right-16 size-64 rounded-full border border-white/10" aria-hidden />
            <div className="grid size-24 place-items-center rounded-full bg-sage-100 font-clinic-serif text-4xl text-pine-900">
              VP
            </div>
            <p className="mt-10 font-clinic-serif text-4xl font-light">{doctor.name}</p>
            <p className="mt-2 text-sage-200">{doctor.role}</p>
            <ul className="mt-10 flex flex-wrap gap-2">
              {doctor.interests.map((t) => (
                <li key={t} className="rounded-full bg-white/[0.08] px-3.5 py-1.5 text-sm text-white/80 ring-1 ring-white/10">
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <Eyebrow>Meet your physician</Eyebrow>
          <h2 className="mt-5 font-clinic-serif text-[clamp(2rem,4vw,3.1rem)] font-light leading-[1.08] tracking-[-0.015em]">
            Three decades of listening to lungs.
          </h2>
          <p className="mt-5 leading-[1.75] text-pine-900/65">
            {doctor.name} trained in chest medicine and spent nearly a decade at one of Mumbai&apos;s busiest hospitals
            before opening his own practice. Today his clinic brings together hospital-grade experience and
            unhurried, personal care.
          </p>

          <ol className="relative mt-10 space-y-6 border-l border-pine-900/15 pl-7">
            {doctor.timeline.map((t) => (
              <li key={t.year} className="relative">
                <span className="absolute -left-[2.06rem] top-1.5 size-3 rounded-full border-2 border-linen bg-pine-700" aria-hidden />
                <p className="text-sm font-semibold text-pine-700">{t.year}</p>
                <p className="mt-0.5 text-pine-950">{t.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function Approach() {
  return (
    <section id="approach" className="scroll-mt-24 relative isolate overflow-hidden bg-pine-950 py-24 text-white sm:py-32">
      <div
        className="absolute inset-0 -z-10 opacity-70"
        style={{ backgroundImage: "radial-gradient(50rem 30rem at 100% 0%, rgb(46 139 124 / 0.35), transparent 60%)" }}
        aria-hidden
      />
      <div className="mx-auto max-w-6xl px-5">
        <Eyebrow light>Our approach</Eyebrow>
        <h2 className="mt-5 max-w-2xl font-clinic-serif text-[clamp(2rem,4vw,3.1rem)] font-light leading-[1.08] tracking-[-0.015em]">
          Not a quick fix. <em className="italic text-sage-200">A plan that lasts.</em>
        </h2>

        <ol className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {approach.map((a) => (
            <li
              key={a.step}
              className="group rounded-[1.75rem] bg-white/[0.04] p-7 ring-1 ring-white/10 backdrop-blur transition duration-500 hover:bg-white/[0.08]"
            >
              <p className="font-clinic-serif text-5xl font-light text-coral-500/90">{a.step}</p>
              <h3 className="mt-10 text-xl font-semibold">{a.title}</h3>
              <p className="mt-3 text-[0.93rem] leading-relaxed text-white/60">{a.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section id="faq" className="scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <Eyebrow>Good to know</Eyebrow>
          <h2 className="mt-5 font-clinic-serif text-[clamp(2rem,4vw,3.1rem)] font-light leading-[1.08] tracking-[-0.015em]">
            Questions patients often ask.
          </h2>
          <p className="mt-5 max-w-sm leading-[1.75] text-pine-900/65">
            Have a question that isn&apos;t answered here? Call us during clinic hours.
          </p>
        </div>
        <div className="divide-y divide-pine-900/10 rounded-[2rem] bg-white px-6 ring-1 ring-pine-900/5 sm:px-9">
          {faqs.map((f) => (
            <details key={f.q} className="group py-6 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-[1.05rem] font-semibold text-pine-950">
                {f.q}
                <span className="grid size-8 shrink-0 place-items-center rounded-full bg-sage-100 text-pine-900 transition duration-300 group-open:rotate-45 group-open:bg-pine-900 group-open:text-white">
                  +
                </span>
              </summary>
              <p className="mt-3 max-w-xl leading-[1.75] text-pine-900/65">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Visit() {
  return (
    <section id="visit" className="scroll-mt-24 px-3 pb-3 sm:px-5 sm:pb-5">
      <div id="book" className="scroll-mt-24 mx-auto max-w-[90rem] overflow-hidden rounded-[2.5rem] bg-pine-900 text-white">
        <div className="mx-auto grid max-w-6xl gap-14 px-5 py-20 sm:py-28 lg:grid-cols-2">
          <div>
            <Eyebrow light>Book a visit</Eyebrow>
            <h2 className="mt-5 font-clinic-serif text-[clamp(2.2rem,4.5vw,3.6rem)] font-light leading-[1.05] tracking-[-0.015em]">
              Take the first step to <em className="italic text-sage-200">breathing easier.</em>
            </h2>

            <dl className="mt-12 grid gap-8 sm:grid-cols-2">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-white/45">Clinic hours</dt>
                <dd className="mt-2 text-lg">{clinic.hours.days}</dd>
                <dd className="text-white/70">{clinic.hours.time}</dd>
                <dd className="mt-1 text-sm text-coral-500">Closed {clinic.hours.closed}</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-white/45">Call us</dt>
                {clinic.phones.map((p) => (
                  <dd key={p}>
                    <a href={telHref(p)} className="text-lg transition hover:text-sage-200">
                      {p}
                    </a>
                  </dd>
                ))}
              </div>
              <div className="sm:col-span-2">
                <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-white/45">Email</dt>
                <dd className="mt-2">
                  <a href={`mailto:${clinic.emails.info}`} className="text-lg transition hover:text-sage-200">
                    {clinic.emails.info}
                  </a>
                </dd>
              </div>
            </dl>

            <div className="mt-10 overflow-hidden rounded-3xl ring-1 ring-white/10">
              <iframe
                title={`Map showing ${clinic.name}`}
                src={`https://www.google.com/maps?q=${encodeURIComponent(clinic.mapQuery)}&output=embed`}
                className="h-64 w-full grayscale-[60%] invert-[0.9] hue-rotate-180"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="rounded-[2rem] bg-white/[0.04] p-6 ring-1 ring-white/10 sm:p-9">
            <p className="font-clinic-serif text-2xl">Request an appointment</p>
            <p className="mt-1.5 mb-7 text-sm text-white/55">Takes less than a minute.</p>
            <AppointmentForm />
          </div>
        </div>

        <footer className="border-t border-white/10">
          <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-5 py-8 text-sm text-white/50 md:flex-row md:items-center">
            <ClinicMark light />
            <p>
              © {new Date().getFullYear()} {clinic.name}. The information on this site is not a substitute for
              medical advice.
            </p>
          </div>
        </footer>
      </div>
    </section>
  );
}

export default function ClinicHome() {
  return (
    <>
      <Hero />
      <Marquee />
      <CheckSection />
      <Conditions />
      <Doctor />
      <Approach />
      <Faq />
      <Visit />
    </>
  );
}
