import type { ArtKey } from "./site";

export type Business = {
  slug: string;
  name: string;
  sector: string;
  art: ArtKey;
  lead: string;
  intro: string[];
  stats: { value: string; label: string }[];
  capabilities: { title: string; body: string }[];
  assets: { name: string; location: string; detail: string }[];
};

export const businesses: Business[] = [
  {
    slug: "ideal-energy",
    name: "Ideal Energy Limited",
    sector: "Energy",
    art: "energy",
    lead: "Renewable and conventional generation, contracted under long-term power purchase agreements.",
    intro: [
      "Ideal Energy Limited anchors the group's energy portfolio across renewable and conventional power generation. The company owns 6,410 MW of operating and under-construction capacity across coal, gas, hydro, wind and solar, with 84% of generation contracted under long-term power purchase agreements with state distribution utilities.",
      "The fleet is managed from a central operations centre in Rajahmundry, with standardised maintenance planning, condition monitoring and spares pooling across stations. Plant availability across the thermal fleet averaged 89.4% in FY26.",
      "Capital allocation is weighted toward firm renewable capacity — solar and wind paired with storage — that can be dispatched against the same round-the-clock obligations the thermal fleet serves today.",
    ],
    stats: [
      { value: "6,410 MW", label: "Operating & under construction" },
      { value: "89.4%", label: "Thermal plant availability, FY26" },
      { value: "1,842 MW", label: "Renewable capacity" },
      { value: "84%", label: "Capacity under long-term PPAs" },
    ],
    capabilities: [
      { title: "Thermal generation", body: "Supercritical and subcritical coal units with integrated fuel logistics and ash utilisation." },
      { title: "Gas & hydro", body: "Combined-cycle gas turbines and run-of-river hydro providing flexible balancing capacity." },
      { title: "Renewables", body: "Utility-scale solar, wind clusters and battery storage delivered on group-owned land banks." },
      { title: "Trading & scheduling", body: "Day-ahead scheduling, merchant sales and open-access supply to industrial consumers." },
    ],
    assets: [
      { name: "Kawai Thermal", location: "Rajasthan", detail: "1,320 MW · coal · commissioned 2013" },
      { name: "Udupi Thermal", location: "Karnataka", detail: "1,200 MW · coal · commissioned 2012" },
      { name: "Tiroda Thermal", location: "Maharashtra", detail: "1,100 MW · coal · commissioned 2014" },
      { name: "Rajahmundry CCGT", location: "Andhra Pradesh", detail: "768 MW · natural gas · commissioned 2003" },
      { name: "Jaisalmer Solar Park", location: "Rajasthan", detail: "450 MW + 180 MWh storage · commissioned 2026" },
      { name: "Bhuj Wind Cluster", location: "Gujarat", detail: "212 MW · wind · commissioned 2020" },
    ],
  },
  {
    slug: "ideal-highways",
    name: "Ideal Highways Limited",
    sector: "Transportation",
    art: "highway",
    lead: "Concession-based road corridors linking manufacturing clusters to ports and consumption centres.",
    intro: [
      "Ideal Highways Limited oversees the group's road and highway assets, focused on long-term concession-based connectivity infrastructure. The portfolio spans 1,284 lane-kilometres across build-operate-transfer, hybrid-annuity and annuity structures.",
      "Every corridor is operated with electronic tolling, incident-response patrols and structural health monitoring on major bridges. Average toll plaza throughput improved 22% after the 2024 migration to multi-lane free-flow gantries.",
      "New bids are screened against traffic elasticity, freight-mix stability and the presence of anchor industrial demand along the route — the corridors we own tend to serve ports, mines or the group's own industrial districts.",
    ],
    stats: [
      { value: "1,284 km", label: "Lane-kilometres operated" },
      { value: "4", label: "Active concessions" },
      { value: "22%", label: "Throughput gain post MLFF rollout" },
      { value: "18 yrs", label: "Weighted average residual concession life" },
    ],
    capabilities: [
      { title: "Concession development", body: "Bid structuring, land acquisition support and financial close for NHAI and state authority projects." },
      { title: "Construction management", body: "Six-lane and four-lane widening delivered through fixed-price EPC packages." },
      { title: "Tolling & ITS", body: "Multi-lane free-flow tolling, ANPR enforcement and integrated traffic management." },
      { title: "Asset maintenance", body: "Pavement management systems, bridge health monitoring and routine corridor upkeep." },
    ],
    assets: [
      { name: "Rajahmundry–Kakinada Expressway", location: "Andhra Pradesh", detail: "74 km · six-lane BOT · opened 2026" },
      { name: "Tiroda–Nagpur Corridor", location: "Maharashtra", detail: "168 km · four-lane HAM · opened 2022" },
      { name: "Guwahati Ring Road", location: "Assam", detail: "121 km · four-lane BOT · opened 2024" },
      { name: "Chennai Outer Freight Link", location: "Tamil Nadu", detail: "96 km · annuity · opened 2021" },
    ],
  },
  {
    slug: "ideal-industrial-districts",
    name: "Ideal Industrial Districts Limited",
    sector: "Urban Infrastructure",
    art: "urban",
    lead: "Planned industrial estates with power, water, roads and worker housing delivered as one package.",
    intro: [
      "Ideal Industrial Districts Limited leads planned urban and integrated infrastructure development. The company holds 8,400 acres of contiguous, notified industrial land across Tamil Nadu, Andhra Pradesh and Gujarat.",
      "Districts are master-planned before the first plot is sold: internal roads, dedicated feeders, water treatment, common effluent handling, logistics yards and worker housing are built to a fixed programme so that anchor tenants can commission plants without waiting on external utilities.",
      "The Krishnagiri district signed three anchor manufacturing tenants in 2026, together committing to 1.9 million sq ft of built-up space and an estimated 6,200 direct jobs.",
    ],
    stats: [
      { value: "8,400 acres", label: "Notified land bank" },
      { value: "3", label: "Districts under development" },
      { value: "1.9 M sq ft", label: "Anchor tenant commitments" },
      { value: "6,200", label: "Direct jobs contracted" },
    ],
    capabilities: [
      { title: "Master planning", body: "Land assembly, notification, zoning and phased infrastructure programming." },
      { title: "Common infrastructure", body: "Internal roads, dedicated power feeders, water supply and effluent treatment." },
      { title: "Built-to-suit", body: "Shell and core industrial buildings delivered against tenant specifications." },
      { title: "Estate operations", body: "Single-window facility management, security and utility billing for tenants." },
    ],
    assets: [
      { name: "Krishnagiri Industrial District", location: "Tamil Nadu", detail: "4,100 acres · phase 2 under construction" },
      { name: "Kakinada Port Estate", location: "Andhra Pradesh", detail: "2,600 acres · logistics and processing" },
      { name: "Bhuj Manufacturing Park", location: "Gujarat", detail: "1,700 acres · renewable-powered estate" },
    ],
  },
  {
    slug: "ideal-smart-metering",
    name: "Ideal Smart Metering Limited",
    sector: "Energy",
    art: "metering",
    lead: "Prepaid smart meter deployment and metering-as-a-service for state distribution utilities.",
    intro: [
      "Ideal Smart Metering Limited leads the group's smart metering business through large-scale prepaid smart meter deployment. The company holds mandates covering 4.2 million consumer connections across three state utilities, scheduled over 27 months.",
      "Contracts are structured as metering-as-a-service: the company funds, installs, communicates and maintains the meter for the full contract term, and is paid a per-meter monthly service charge linked to uptime and read-success rates.",
      "The head-end and meter data management systems are operated in-house, with an integration layer that pushes validated reads into each utility's billing environment.",
    ],
    stats: [
      { value: "4.2 M", label: "Meters under contract" },
      { value: "3", label: "State utilities served" },
      { value: "99.2%", label: "Read success rate" },
      { value: "27 mo", label: "Deployment programme" },
    ],
    capabilities: [
      { title: "Deployment at scale", body: "Survey, installation and consumer indexing through trained field crews." },
      { title: "Communications", body: "RF mesh and cellular backhaul with redundant network operations." },
      { title: "Head-end & MDM", body: "In-house meter data management with validated reads pushed to utility billing." },
      { title: "Consumer experience", body: "Prepaid recharge, balance alerts and outage notification through a utility-branded app." },
    ],
    assets: [
      { name: "Southern utility programme", location: "Tamil Nadu", detail: "1.8 M meters · deployment in progress" },
      { name: "Eastern utility programme", location: "Jharkhand", detail: "1.4 M meters · deployment in progress" },
      { name: "Western utility programme", location: "Gujarat", detail: "1.0 M meters · survey stage" },
    ],
  },
  {
    slug: "ideal-transmission",
    name: "Ideal Transmission Limited",
    sector: "Energy",
    art: "grid",
    lead: "Extra-high-voltage transmission lines and substations under availability-based tariffs.",
    intro: [
      "Ideal Transmission Limited builds and operates extra-high-voltage transmission lines and substations won through tariff-based competitive bidding. Revenue is availability-linked rather than volume-linked, which makes the segment the most predictable earnings stream in the portfolio.",
      "The company operates 1,960 circuit-kilometres at 400 kV and 220 kV, together with six substations totalling 7,200 MVA of transformation capacity.",
      "Line availability has stayed above 99.7% for eleven consecutive quarters, supported by helicopter-assisted patrolling on the longest spans and a dedicated emergency restoration store.",
    ],
    stats: [
      { value: "1,960 ckm", label: "Transmission lines operated" },
      { value: "7,200 MVA", label: "Transformation capacity" },
      { value: "99.7%", label: "Line availability" },
      { value: "6", label: "EHV substations" },
    ],
    capabilities: [
      { title: "TBCB projects", body: "Competitive bid transmission projects delivered from award to commissioning." },
      { title: "Substation engineering", body: "400 kV and 220 kV air-insulated and gas-insulated substation design and build." },
      { title: "Line operations", body: "Patrolling, live-line maintenance and emergency restoration capability." },
      { title: "Grid interfaces", body: "Connectivity works for renewable pooling stations and industrial consumers." },
    ],
    assets: [
      { name: "Jaisalmer Pooling Station", location: "Rajasthan", detail: "400 kV · 2,400 MVA · renewable evacuation" },
      { name: "Tiroda–Nagpur Line", location: "Maharashtra", detail: "400 kV · 310 ckm" },
      { name: "Godda Evacuation System", location: "Jharkhand", detail: "400 kV · 480 ckm" },
      { name: "Krishnagiri Substation", location: "Tamil Nadu", detail: "220 kV · 1,200 MVA · district supply" },
    ],
  },
];

export function getBusiness(slug: string) {
  return businesses.find((b) => b.slug === slug);
}
