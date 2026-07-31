import Link from "next/link";
import type { ArtKey } from "@/lib/site";
import { SceneArt } from "./Art";
import { Chevron } from "./ui";

export default function PageHero({
  eyebrow,
  title,
  body,
  art = "grid",
  crumbs = [],
}: {
  eyebrow?: string;
  title: string;
  body?: string;
  art?: ArtKey;
  crumbs?: { label: string; href: string }[];
}) {
  return (
    <section className="relative isolate overflow-hidden bg-navy-950 text-white">
      <SceneArt id={`ph-${title.slice(0, 12).replace(/\W/g, "")}`} variant={art} className="absolute inset-0 h-full w-full object-cover" />
      <span className="hairline-grid absolute inset-0 opacity-60" aria-hidden />
      <span className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/80 to-navy-950/25" aria-hidden />

      <div className="container-x relative pb-16 pt-36 md:pb-24 md:pt-44">
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex flex-wrap items-center gap-1.5 text-[0.78rem] text-white/55">
            <li>
              <Link href="/" className="transition-colors hover:text-gold-400">
                Home
              </Link>
            </li>
            {crumbs.map((c) => (
              <li key={c.href} className="flex items-center gap-1.5">
                <Chevron className="h-3 w-3 opacity-50" />
                <Link href={c.href} className="transition-colors hover:text-gold-400">
                  {c.label}
                </Link>
              </li>
            ))}
          </ol>
        </nav>

        {eyebrow && (
          <p className="eyebrow mb-4 flex items-center gap-3 text-gold-400">
            <span className="h-px w-8 bg-gold-400/70" />
            {eyebrow}
          </p>
        )}
        <h1 className="display-1 max-w-[18ch] text-balance">{title}</h1>
        {body && (
          <p className="mt-6 max-w-[58ch] text-[1.05rem] leading-[1.75] text-white/72">{body}</p>
        )}
      </div>
    </section>
  );
}
