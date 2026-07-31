import Link from "next/link";
import Reveal from "./Reveal";
import { Chevron } from "./ui";
import { groupSites } from "@/lib/site";

const badgeTones = [
  { bg: "bg-navy-800", text: "text-white" },
  { bg: "bg-ember-500", text: "text-white" },
  { bg: "bg-gold-500", text: "text-navy-900" },
  { bg: "bg-navy-700", text: "text-white" },
  { bg: "bg-ember-600", text: "text-white" },
];

/** Group-entity logo wall — Adani-style "explore the group" grid. */
export default function GroupWebsites() {
  return (
    <section className="border-t border-navy-900/8 bg-sand py-20 md:py-24">
      <div className="container-x">
        <Reveal className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow mb-4 flex items-center gap-3 text-ember-500">
              <span className="h-px w-8 bg-current opacity-60" />
              Our Ecosystem
            </p>
            <h2 className="display-2 max-w-xl text-navy-900">Explore the Ideal Group</h2>
          </div>
          <p className="max-w-sm text-[0.92rem] leading-relaxed text-ink/62">
            Operating companies, training institutes and group initiatives working together across
            the portfolio.
          </p>
        </Reveal>

        <ul className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {groupSites.map((g, i) => {
            const tone = badgeTones[i % badgeTones.length];
            return (
              <Reveal as="li" key={g.name} delay={(i % 5) * 70}>
                <Link
                  href={g.href}
                  className="group flex h-full flex-col gap-5 rounded-xl border border-navy-900/10 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-gold-500/60 hover:shadow-[0_18px_40px_-24px_rgba(10,37,64,0.45)]"
                >
                  <span
                    className={`grid h-10 w-10 place-items-center rounded-lg text-[0.72rem] font-extrabold ${tone.bg} ${tone.text}`}
                  >
                    {g.short}
                  </span>
                  <span className="mt-auto flex items-center justify-between gap-2">
                    <span className="text-[0.85rem] font-semibold leading-snug text-navy-900">
                      {g.name}
                    </span>
                    <Chevron className="h-3.5 w-3.5 shrink-0 text-navy-900/25 transition-all group-hover:translate-x-0.5 group-hover:text-ember-500" />
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
