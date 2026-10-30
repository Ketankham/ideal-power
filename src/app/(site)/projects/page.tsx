import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import Footprints from "@/components/Footprints";
import { SectionHeading } from "@/components/ui";
import { projects } from "@/lib/site";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Operational and upcoming power plants, highway corridors and industrial districts developed by Ideal Engineering & Infrastructure Limited.",
};

const groups = [
  {
    id: "operational",
    eyebrow: "Operational",
    title: "Power plants in operation",
    body: "Thermal, gas, hydro and renewable stations currently dispatching into the grid.",
    rows: projects.operational,
    headers: ["Plant", "Location", "Capacity", "Fuel", "Commissioned"],
    accent: "bg-gold-500",
  },
  {
    id: "upcoming",
    eyebrow: "Upcoming",
    title: "Capacity under construction",
    body: "Projects that have reached financial close and are being built against a fixed commissioning programme.",
    rows: projects.upcoming,
    headers: ["Project", "Location", "Capacity", "Type", "Target"],
    accent: "bg-ember-500",
  },
  {
    id: "highways",
    eyebrow: "Transportation",
    title: "Highway corridors",
    body: "Tolled and annuity corridors operated under long-term concession agreements.",
    rows: projects.highways,
    headers: ["Corridor", "Location", "Length", "Structure", "Opened"],
    accent: "bg-navy-700",
  },
];

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="Assets in operation and under construction"
        body="A complete view of the generation, transmission and transport assets in the portfolio — with the capacity, structure and commissioning date of each."
        art="highway"
        crumbs={[{ label: "Projects", href: "/projects" }]}
      />

      {groups.map((g, gi) => (
        <section
          key={g.id}
          id={g.id}
          className={`scroll-mt-28 py-20 md:py-24 ${gi % 2 === 0 ? "bg-white" : "bg-cream"}`}
        >
          <div className="container-x">
            <Reveal>
              <SectionHeading eyebrow={g.eyebrow} title={g.title} body={g.body} />
            </Reveal>

            <Reveal delay={100} className="mt-10 overflow-x-auto">
              <table className="w-full min-w-[46rem] border-collapse text-left">
                <thead>
                  <tr className="border-b-2 border-navy-900/15">
                    {g.headers.map((h) => (
                      <th
                        key={h}
                        scope="col"
                        className="py-4 pr-6 text-[0.72rem] font-bold uppercase tracking-[0.14em] text-ink/45"
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {g.rows.map((r) => (
                    <tr
                      key={r.name}
                      className="group border-b border-navy-900/8 transition-colors hover:bg-mist/45"
                    >
                      <th
                        scope="row"
                        className="py-5 pr-6 text-left text-[1rem] font-semibold text-navy-900"
                      >
                        <span className="flex items-center gap-3">
                          <span className={`h-2 w-2 shrink-0 rounded-full ${g.accent}`} />
                          {r.name}
                        </span>
                      </th>
                      <td className="py-5 pr-6 text-[0.92rem] text-ink/65">{r.location}</td>
                      <td className="py-5 pr-6 text-[0.92rem] font-semibold text-ember-500">
                        {r.capacity}
                      </td>
                      <td className="py-5 pr-6 text-[0.92rem] text-ink/65">{r.fuel}</td>
                      <td className="py-5 text-[0.92rem] tabular-nums text-ink/65">{r.year}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Reveal>
          </div>
        </section>
      ))}

      <Footprints />
    </>
  );
}
