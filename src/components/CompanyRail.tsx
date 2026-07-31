"use client";

import Link from "next/link";
import { useRef } from "react";
import { companies } from "@/lib/site";
import { SceneArt } from "./Art";
import { KnowMore } from "./ui";

export default function CompanyRail() {
  const rail = useRef<HTMLUListElement>(null);

  const scrollBy = (dir: 1 | -1) => {
    const el = rail.current;
    if (!el) return;
    const card = el.querySelector("li");
    const step = card ? card.clientWidth + 24 : 360;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <div>
      <ul
        ref={rail}
        className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {companies.map((c) => (
          <li
            key={c.slug}
            className="w-[85vw] shrink-0 snap-start sm:w-[22rem] lg:w-[24rem]"
          >
            <article className="group h-full overflow-hidden rounded-2xl border border-navy-900/8 bg-white shadow-[0_10px_30px_-20px_rgba(10,37,64,0.4)] transition-all duration-400 hover:-translate-y-1.5 hover:shadow-[0_34px_60px_-30px_rgba(10,37,64,0.5)]">
              <div className="relative h-44 overflow-hidden">
                <SceneArt
                  id={`co-${c.slug}`}
                  variant={c.art}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 to-transparent" />
              </div>
              <div className="flex h-[calc(100%-11rem)] flex-col p-6">
                <h3 className="text-[1.12rem] font-semibold leading-snug text-navy-900">
                  {c.name}
                </h3>
                <p className="mt-3 flex-1 text-[0.9rem] leading-relaxed text-ink/62">{c.body}</p>
                <div className="mt-5">
                  <KnowMore href={`/businesses/${c.slug}`} label="View Entity Overview" />
                </div>
              </div>
            </article>
          </li>
        ))}
      </ul>

      <div className="mt-8 flex items-center gap-3">
        <button
          type="button"
          onClick={() => scrollBy(-1)}
          aria-label="Previous companies"
          className="grid h-12 w-12 place-items-center rounded-xl border border-gold-500/70 text-navy-900 transition-colors hover:bg-gold-500"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 5l-7 7 7 7" />
          </svg>
        </button>
        <button
          type="button"
          onClick={() => scrollBy(1)}
          aria-label="Next companies"
          className="grid h-12 w-12 place-items-center rounded-xl bg-gold-500 text-navy-900 transition-colors hover:bg-gold-400"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
        <Link
          href="/businesses"
          className="ml-auto hidden text-[0.9rem] font-semibold text-navy-700 underline-offset-4 hover:text-ember-500 hover:underline sm:block"
        >
          View all businesses
        </Link>
      </div>
    </div>
  );
}
