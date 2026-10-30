import AppointmentForm from "@/components/clinic/AppointmentForm";
import MobileActionBar from "@/components/clinic/MobileActionBar";
import OpenStatus from "@/components/clinic/OpenStatus";
import { airBand, getAir } from "@/lib/air";
import { approach, clinic, conditions, faqs, firstVisit, reviewsHref, telHref } from "@/lib/clinic";

export const revalidate = 1800;

const yearsOfPractice = new Date().getFullYear() - clinic.doctor.specialisedIn;

const glass = "rounded-[1.75rem] bg-white/[0.035] ring-1 ring-white/[0.08] backdrop-blur-xl";

function Label({ children }: { children: React.ReactNode }) {
  return <p className="font-t3 text-[0.7rem] font-medium uppercase tracking-[0.24em] text-emerald-300/80">{children}</p>;
}

function Header() {
  return (
    <header className="fixed inset-x-0 top-9 z-50 px-3 pt-3 sm:px-5">
      <div className="mx-auto flex max-w-6xl items-center justify-between rounded-full bg-zinc-900/70 py-2 pl-5 pr-2 ring-1 ring-white/10 backdrop-blur-xl">
        <a href="#top" className="flex items-center gap-2.5" aria-label={`${clinic.name} home`}>
          <span className="relative grid size-7 place-items-center" aria-hidden>
            <span className="absolute inset-0 animate-breathe rounded-full bg-emerald-300/30" />
            <span className="size-3 rounded-full bg-emerald-300" />
          </span>
          <span className="font-t3 text-[0.95rem] font-semibold tracking-tight text-white">Chest &amp; Allergy</span>
        </a>
        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {[
            ["Care", "#care"],
            ["Doctor", "#doctor"],
            ["Process", "#process"],
            ["FAQ", "#faq"],
          ].map(([label, href]) => (
            <a key={href} href={href} className="rounded-full px-4 py-2 text-sm text-zinc-400 transition hover:bg-white/5 hover:text-white">
              {label}
            </a>
          ))}
        </nav>
        <a href="#book" className="rounded-full bg-emerald-300 px-5 py-2.5 text-sm font-semibold text-zinc-950 transition hover:bg-emerald-200">
          Book a visit
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden pb-16 pt-40 sm:pt-48">
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "radial-gradient(45rem 30rem at 70% 10%, rgb(110 231 183 / 0.16), transparent 60%), radial-gradient(30rem 25rem at 10% 80%, rgb(56 189 248 / 0.08), transparent 60%)",
        }}
        aria-hidden
      />
      <div
        className="absolute inset-0 -z-10 opacity-[0.15] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]"
        style={{
          backgroundImage: "linear-gradient(rgb(255 255 255 / 0.08) 1px, transparent 1px), linear-gradient(90deg, rgb(255 255 255 / 0.08) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
        aria-hidden
      />
      {/* Expanding rings: the visual metaphor of a calm breath. */}
      <div className="pointer-events-none absolute right-[-12rem] top-24 -z-10 size-[44rem] sm:right-[-6rem]" aria-hidden>
        {[0, 1, 2, 3, 4].map((i) => (
          <span
            key={i}
            className="absolute rounded-full border border-emerald-300/15 animate-breathe"
            style={{ inset: `${i * 9}%`, animationDelay: `${i * 0.5}s` }}
          />
        ))}
      </div>

      <div className="mx-auto max-w-6xl px-5">
        <OpenStatus className="rounded-full bg-white/5 px-3.5 py-1.5 font-t3 text-xs text-zinc-300 ring-1 ring-white/10" />
        <h1 className="mt-8 font-t3 text-[clamp(3.2rem,10vw,8.5rem)] font-medium leading-[0.9] tracking-[-0.055em] text-white">
          Breathe
          <br />
          <span className="font-t3-serif font-normal italic tracking-[-0.02em] text-emerald-300">better.</span>
        </h1>
        <div className="mt-10 flex flex-col justify-between gap-10 md:flex-row md:items-end">
          <p className="max-w-md text-lg leading-relaxed text-zinc-400">
            Modern, long-term care for asthma, allergy and lung disease, led by {clinic.doctor.name}, a chest physician
            with {yearsOfPractice}+ years of experience.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#book" className="group inline-flex items-center gap-3 rounded-full bg-white py-3 pl-6 pr-3 font-semibold text-zinc-950 transition hover:bg-emerald-200">
              Book a consultation
              <span className="grid size-8 place-items-center rounded-full bg-zinc-950 text-white transition group-hover:rotate-[-45deg]">→</span>
            </a>
            <a href={telHref(clinic.phones[0])} className="rounded-full px-6 py-3.5 font-semibold text-white ring-1 ring-white/15 transition hover:bg-white/5">
              {clinic.phones[0]}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

async function Bento() {
  const air = await getAir();
  const band = air ? airBand(air.aqi) : null;
  const pct = air ? Math.min(air.aqi / 300, 1) : 0;

  return (
    <section className="pb-24" aria-label="Clinic at a glance">
      <div className="mx-auto grid max-w-6xl gap-4 px-5 md:grid-cols-6 md:grid-rows-[auto_auto]">
        <div className={`${glass} relative overflow-hidden p-8 md:col-span-4 md:row-span-2`}>
          <span className="absolute -bottom-24 -right-24 size-80 rounded-full bg-emerald-300/10 blur-3xl" aria-hidden />
          <Label>Most treated</Label>
          <p className="mt-6 font-t3 text-[clamp(2.2rem,5vw,3.6rem)] font-medium leading-none tracking-[-0.04em] text-white">
            Asthma, <span className="font-t3-serif italic text-emerald-300">under control.</span>
          </p>
          <p className="mt-5 max-w-md leading-relaxed text-zinc-400">
            Most people with asthma can live without frequent attacks. We use protocol-driven treatment, check your
            inhaler technique and review you regularly.
          </p>
          <ul className="mt-8 flex flex-wrap gap-2">
            {["Wet cough", "Breathlessness", "Wheezing", "Night cough", "Chest tightness"].map((s) => (
              <li key={s} className="rounded-full bg-white/5 px-3.5 py-1.5 text-sm text-zinc-300 ring-1 ring-white/10">{s}</li>
            ))}
          </ul>
          <a href="#book" className="mt-10 inline-block text-sm font-semibold text-emerald-300 underline-offset-4 hover:underline">
            Recognise these? Book an assessment →
          </a>
        </div>

        <div className={`${glass} p-7 md:col-span-2`}>
          <Label>Air today · Navi Mumbai</Label>
          {air && band ? (
            <>
              <div className="mt-5 flex items-end gap-3">
                <p className="font-t3 text-6xl font-medium leading-none tracking-tight text-white">{air.aqi}</p>
                <p className="pb-1 text-xs text-zinc-500">US AQI</p>
              </div>
              <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/10" aria-hidden>
                <div className="h-full rounded-full bg-gradient-to-r from-emerald-300 via-amber-300 to-rose-400" style={{ width: `${pct * 100}%` }} />
              </div>
              <p className="mt-3 text-sm font-semibold text-white">{band.label}</p>
              <p className="mt-1 text-sm leading-relaxed text-zinc-400">{band.advice}</p>
            </>
          ) : (
            <p className="mt-5 text-sm text-zinc-400">Live reading unavailable right now.</p>
          )}
        </div>

        <div className={`${glass} p-7 md:col-span-2`}>
          <Label>Experience</Label>
          <p className="mt-5 font-t3 text-6xl font-medium leading-none tracking-tight text-white">{yearsOfPractice}+</p>
          <p className="mt-2 text-sm text-zinc-400">years in chest medicine, including 9 at GTB Hospitals, Mumbai.</p>
        </div>

        <div className={`${glass} p-7 md:col-span-3`}>
          <Label>Hours</Label>
          <p className="mt-5 font-t3 text-3xl font-medium tracking-tight text-white">{clinic.hours.time}</p>
          <p className="mt-1 text-zinc-400">
            {clinic.hours.days} · Closed {clinic.hours.closed}
          </p>
        </div>
        <a href={reviewsHref} target="_blank" rel="noopener noreferrer" className={`${glass} group flex items-center justify-between p-7 transition hover:bg-white/[0.06] md:col-span-3`}>
          <div>
            <Label>Patient reviews</Label>
            <p className="mt-5 font-t3 text-3xl font-medium tracking-tight text-white">Read them on Google</p>
            <p className="mt-1 text-zinc-400">Real feedback from real patients.</p>
          </div>
          <span className="grid size-12 place-items-center rounded-full bg-white/5 text-xl text-white ring-1 ring-white/10 transition group-hover:bg-emerald-300 group-hover:text-zinc-950">↗</span>
        </a>
      </div>
    </section>
  );
}

function Care() {
  return (
    <section id="care" className="scroll-mt-28 border-t border-white/[0.06] py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid gap-6 md:grid-cols-[1fr_2fr]">
          <Label>What we treat</Label>
          <h2 className="font-t3 text-[clamp(2rem,4.5vw,3.4rem)] font-medium leading-[1.02] tracking-[-0.04em] text-white">
            Everything that affects <span className="font-t3-serif italic text-emerald-300">the way you breathe.</span>
          </h2>
        </div>
        <ul className="mt-16 border-t border-white/10">
          {conditions.map((c, i) => (
            <li key={c.title} className="group border-b border-white/10">
              <a href="#book" className="grid items-baseline gap-2 py-7 transition md:grid-cols-[4rem_1fr_1.4fr_2rem] md:gap-8">
                <span className="font-t3 text-sm text-zinc-600">{String(i + 1).padStart(2, "0")}</span>
                <span className="font-t3 text-2xl font-medium tracking-tight text-white transition group-hover:translate-x-2 group-hover:text-emerald-300 md:text-3xl">
                  {c.title}
                </span>
                <span className="text-zinc-400">{c.body}</span>
                <span className="hidden text-zinc-600 transition group-hover:text-emerald-300 md:block">→</span>
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
    <section id="doctor" className="scroll-mt-28 py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl gap-6 px-5 lg:grid-cols-2">
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-emerald-300 to-teal-500 p-10 text-zinc-950 sm:p-12">
          <span className="absolute -right-20 -top-20 size-72 rounded-full border border-zinc-950/10" aria-hidden />
          <span className="absolute -right-8 -top-8 size-48 rounded-full border border-zinc-950/10" aria-hidden />
          <p className="font-t3 text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-zinc-950/60">Your physician</p>
          <p className="mt-24 font-t3 text-[clamp(2.4rem,5vw,3.6rem)] font-medium leading-[0.95] tracking-[-0.045em]">{doctor.name}</p>
          <p className="mt-3 font-t3-serif text-2xl italic">{doctor.role}</p>
          <ul className="mt-8 flex flex-wrap gap-2">
            {doctor.interests.map((t) => (
              <li key={t} className="rounded-full bg-zinc-950/10 px-3.5 py-1.5 text-sm font-medium">{t}</li>
            ))}
          </ul>
        </div>
        <div className={`${glass} p-10 sm:p-12`}>
          <Label>Journey</Label>
          <ol className="mt-8 space-y-8">
            {doctor.timeline.map((t) => (
              <li key={t.year} className="grid grid-cols-[6rem_1fr] gap-4">
                <span className="font-t3 text-lg font-medium text-emerald-300">{t.year}</span>
                <span className="text-lg text-zinc-300">{t.text}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section id="process" className="scroll-mt-28 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid gap-6 md:grid-cols-[1fr_2fr]">
          <Label>How care works</Label>
          <h2 className="font-t3 text-[clamp(2rem,4.5vw,3.4rem)] font-medium leading-[1.02] tracking-[-0.04em] text-white">
            Not a quick fix. <span className="font-t3-serif italic text-emerald-300">A plan that lasts.</span>
          </h2>
        </div>
        <ol className="mt-16 grid gap-4 md:grid-cols-4">
          {approach.map((a) => (
            <li key={a.step} className={`${glass} group p-7 transition hover:bg-white/[0.06]`}>
              <span className="font-t3-serif text-5xl italic text-emerald-300/80">{a.step}</span>
              <h3 className="mt-12 font-t3 text-xl font-medium text-white">{a.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">{a.body}</p>
            </li>
          ))}
        </ol>
        <div className={`${glass} mt-4 grid gap-6 p-7 md:grid-cols-4`}>
          <p className="font-t3 text-lg font-medium text-white md:col-span-4">First visit checklist</p>
          {firstVisit.map((f) => (
            <div key={f.title}>
              <p className="flex items-center gap-2 font-semibold text-white">
                <span className="size-1.5 rounded-full bg-emerald-300" aria-hidden />
                {f.title}
              </p>
              <p className="mt-1.5 text-sm leading-relaxed text-zinc-400">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section id="faq" className="scroll-mt-28 py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-[1fr_2fr]">
        <div>
          <Label>Questions</Label>
          <h2 className="mt-6 font-t3 text-[clamp(2rem,4vw,3rem)] font-medium leading-[1.02] tracking-[-0.04em] text-white">
            Good to <span className="font-t3-serif italic text-emerald-300">know.</span>
          </h2>
        </div>
        <div className="border-t border-white/10">
          {faqs.map((f) => (
            <details key={f.q} className="group border-b border-white/10 py-6 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-t3 text-lg font-medium text-white">
                {f.q}
                <span className="grid size-8 shrink-0 place-items-center rounded-full ring-1 ring-white/15 transition duration-300 group-open:rotate-45 group-open:bg-emerald-300 group-open:text-zinc-950 group-open:ring-0">
                  +
                </span>
              </summary>
              <p className="mt-3 max-w-xl leading-relaxed text-zinc-400">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Book() {
  return (
    <section id="book" className="scroll-mt-28 px-3 pb-3 sm:px-5 sm:pb-5">
      <div className="relative mx-auto max-w-[90rem] overflow-hidden rounded-[2.5rem] bg-zinc-900 ring-1 ring-white/10">
        <span className="absolute -left-40 -top-40 size-[30rem] rounded-full bg-emerald-300/10 blur-3xl" aria-hidden />
        <div className="relative mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:py-28 lg:grid-cols-2">
          <div>
            <Label>Book a visit</Label>
            <h2 className="mt-6 font-t3 text-[clamp(2.4rem,5vw,4.2rem)] font-medium leading-[0.98] tracking-[-0.045em] text-white">
              Your next breath <span className="font-t3-serif italic text-emerald-300">starts here.</span>
            </h2>
            <dl className="mt-12 grid gap-6 sm:grid-cols-2">
              <div>
                <dt className="text-xs uppercase tracking-[0.2em] text-zinc-500">Call</dt>
                {clinic.phones.map((p) => (
                  <dd key={p}>
                    <a href={telHref(p)} className="font-t3 text-xl text-white hover:text-emerald-300">{p}</a>
                  </dd>
                ))}
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.2em] text-zinc-500">Email</dt>
                <dd>
                  <a href={`mailto:${clinic.emails.info}`} className="break-all font-t3 text-lg text-white hover:text-emerald-300">
                    {clinic.emails.info}
                  </a>
                </dd>
              </div>
            </dl>
            <div className="mt-10 overflow-hidden rounded-3xl ring-1 ring-white/10">
              <iframe
                title={`Map showing ${clinic.name}`}
                src={`https://www.google.com/maps?q=${encodeURIComponent(clinic.mapQuery)}&output=embed`}
                className="h-60 w-full invert-[0.92] hue-rotate-180 grayscale-[40%]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
          <div className={`${glass} p-6 sm:p-9`}>
            <p className="font-t3 text-2xl font-medium text-white">Request an appointment</p>
            <p className="mb-7 mt-1.5 text-sm text-zinc-500">It takes less than a minute.</p>
            <AppointmentForm tone="night" submitClass="bg-emerald-300 text-zinc-950 hover:bg-emerald-200" />
          </div>
        </div>

        <footer className="relative border-t border-white/10">
          <p className="pointer-events-none select-none overflow-hidden whitespace-nowrap px-5 pt-10 text-center font-t3 text-[clamp(3rem,13vw,11rem)] font-medium leading-none tracking-[-0.06em] text-white/[0.04]" aria-hidden>
            breathe better
          </p>
          <div className="mx-auto flex max-w-6xl flex-col justify-between gap-3 px-5 pb-8 pt-4 text-sm text-zinc-500 md:flex-row">
            <p>© {new Date().getFullYear()} {clinic.name}, {clinic.city}</p>
            <p>This website does not replace medical advice.</p>
          </div>
        </footer>
      </div>
    </section>
  );
}

export default function ThemeThree() {
  return (
    <div className="bg-zinc-950 font-t3 text-zinc-100 selection:bg-emerald-300 selection:text-zinc-950">
      <Header />
      <main id="main" className="pb-20 md:pb-0">
        <Hero />
        <Bento />
        <Care />
        <Doctor />
        <Process />
        <Faq />
        <Book />
      </main>
      <MobileActionBar barClass="border-white/10 bg-zinc-950/85" callClass="text-white ring-white/15" bookClass="bg-emerald-300 text-zinc-950" />
    </div>
  );
}
