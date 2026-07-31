export const site = {
  name: "Ideal Engineering",
  short: "IEL",
  legal: "Ideal Engineering & Infrastructure Limited",
  tagline: "Power, Highways and Industrial Districts",
  email: "connect@idealengineering.in",
  investorEmail: "investors@idealengineering.in",
  phone: "+91 22 6789 4000",
  address: {
    line1: "Ideal House, Plot 14, Bandra Kurla Complex",
    line2: "Bandra (East), Mumbai 400 051",
    state: "Maharashtra, India",
  },
  regd: {
    line1: "Ideal Engineering & Infrastructure Limited",
    line2: "Survey 118, Cheruvu Road, Rajahmundry 533 106",
    state: "Andhra Pradesh, India",
    cin: "L45201MH1996PLC104213",
  },
};

export type NavChild = { label: string; href: string; note?: string };
export type NavItem = { label: string; href: string; children?: NavChild[] };

export const nav: NavItem[] = [
  { label: "About Us", href: "/about-us" },
  {
    label: "Businesses",
    href: "/businesses",
    children: [
      {
        label: "Ideal Energy Limited",
        href: "/businesses/ideal-energy",
        note: "Thermal, hydro and renewable generation",
      },
      {
        label: "Ideal Highways Limited",
        href: "/businesses/ideal-highways",
        note: "Concession-based road corridors",
      },
      {
        label: "Ideal Industrial Districts Limited",
        href: "/businesses/ideal-industrial-districts",
        note: "Planned industrial and urban estates",
      },
      {
        label: "Ideal Smart Metering Limited",
        href: "/businesses/ideal-smart-metering",
        note: "Prepaid smart meter deployment",
      },
      {
        label: "Ideal Transmission Limited",
        href: "/businesses/ideal-transmission",
        note: "EHV transmission and substations",
      },
    ],
  },
  { label: "Projects", href: "/projects" },
  {
    label: "Investors",
    href: "/investors",
    children: [
      { label: "Overview", href: "/investors" },
      { label: "Financials & Reports", href: "/investors#financials" },
      { label: "Shareholders' Information", href: "/investors#shareholders" },
      { label: "Corporate Governance", href: "/investors#governance" },
      { label: "Disclosures under SEBI LODR", href: "/investors#disclosures" },
    ],
  },
  { label: "Sustainability", href: "/sustainability" },
  { label: "Newsroom", href: "/newsroom" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export type ArtKey = "energy" | "highway" | "urban" | "metering" | "grid";

export const heroSlides: {
  kicker?: string;
  title: string;
  body: string;
  href: string;
  cta: string;
  art: ArtKey;
}[] = [
  {
    title: "Power, Highways, and Industrial Districts",
    body: "Developing and operating infrastructure across **power plants**, **highways** and **industrial areas** that work as an **engine of growth for India**.",
    href: "/about-us",
    cta: "Know More",
    art: "energy",
  },
  {
    kicker: "Energy",
    title: "Conventional and Renewable Energy",
    body: "Generating electricity through **thermal and renewable plants** while expanding smart metering and energy services for the entire nation.",
    href: "/businesses/ideal-energy",
    cta: "Know More",
    art: "grid",
  },
  {
    kicker: "Transportation",
    title: "Highway Development and Operations",
    body: "Managing highway projects that improve **connectivity between cities**, support trade movement and make travel safer and more efficient.",
    href: "/businesses/ideal-highways",
    cta: "Know More",
    art: "highway",
  },
  {
    kicker: "Urban Infrastructure",
    title: "Industrial Hubs and Urban Projects",
    body: "Developing planned industrial areas and urban developments designed to support **manufacturing, employment and regional growth**.",
    href: "/businesses/ideal-industrial-districts",
    cta: "Know More",
    art: "urban",
  },
  {
    kicker: "Smart Metering Infrastructure",
    title: "Modernising Electricity Distribution at Scale",
    body: "Deploying **large-scale smart metering infrastructure** to support efficient distribution, remote monitoring and utility modernisation.",
    href: "/businesses/ideal-smart-metering",
    cta: "Know More",
    art: "metering",
  },
];

export const sectors = [
  {
    name: "Energy",
    href: "/businesses/ideal-energy",
    tone: "gold" as const,
    body: "Renewable and conventional power generation assets across India, with a growing focus on smart metering and clean energy infrastructure.",
    stat: "6,410 MW",
    statLabel: "Operating & under-construction capacity",
  },
  {
    name: "Transportation",
    href: "/businesses/ideal-highways",
    tone: "navy" as const,
    body: "Surface transport projects including expressways, highways and railway sidings that strengthen regional and national connectivity.",
    stat: "1,284 km",
    statLabel: "Highway concessions operated",
  },
  {
    name: "Urban Infrastructure",
    href: "/businesses/ideal-industrial-districts",
    tone: "ember" as const,
    body: "Planned industrial districts and urban estates supporting integrated development and structured project execution.",
    stat: "8,400 acres",
    statLabel: "Industrial land bank under development",
  },
];

export const companies = [
  {
    name: "Ideal Energy Limited",
    slug: "ideal-energy",
    body: "Ideal Energy Limited anchors the group's energy portfolio across renewable and conventional power generation, transmission and distribution.",
    art: "energy" as ArtKey,
  },
  {
    name: "Ideal Highways Limited",
    slug: "ideal-highways",
    body: "Ideal Highways Limited oversees the group's road and highway assets, focused on long-term concession-based connectivity infrastructure.",
    art: "highway" as ArtKey,
  },
  {
    name: "Ideal Industrial Districts Limited",
    slug: "ideal-industrial-districts",
    body: "Ideal Industrial Districts Limited leads planned urban and integrated industrial infrastructure development initiatives.",
    art: "urban" as ArtKey,
  },
  {
    name: "Ideal Smart Metering Limited",
    slug: "ideal-smart-metering",
    body: "Ideal Smart Metering Limited leads the smart metering business through large-scale prepaid smart meter deployment for state utilities.",
    art: "metering" as ArtKey,
  },
  {
    name: "Ideal Transmission Limited",
    slug: "ideal-transmission",
    body: "Ideal Transmission Limited builds and operates extra-high-voltage transmission lines and substations under long-term availability contracts.",
    art: "grid" as ArtKey,
  },
];

export const footprints = [
  { value: "6,410", unit: "MW", label: "Power generation capacity" },
  { value: "4,850", unit: "+", label: "Employees (FY25)" },
  { value: "38.6", unit: "Bn", label: "Units sold (FY25)" },
  { value: "1,284", unit: "km", label: "Highways operated" },
];

/** Coordinates are percentages within the map viewport (x from left, y from top). */
export const locations = [
  { name: "Bhuj, Gujarat", x: 17, y: 40, type: "Solar" },
  { name: "Mundra, Gujarat", x: 15, y: 47, type: "Thermal" },
  { name: "Jaisalmer, Rajasthan", x: 22, y: 30, type: "Wind" },
  { name: "Kawai, Rajasthan", x: 28, y: 36, type: "Thermal" },
  { name: "Singrauli, Madhya Pradesh", x: 51, y: 45, type: "Thermal" },
  { name: "Raigarh, Chhattisgarh", x: 57, y: 51, type: "Thermal" },
  { name: "Godda, Jharkhand", x: 66, y: 43, type: "Thermal" },
  { name: "Tiroda, Maharashtra", x: 45, y: 55, type: "Thermal" },
  { name: "Dahanu, Maharashtra", x: 27, y: 58, type: "Hydro" },
  { name: "Udupi, Karnataka", x: 32, y: 71, type: "Thermal" },
  { name: "Rajahmundry, Andhra Pradesh", x: 49, y: 66, type: "Gas" },
  { name: "Krishnagiri, Tamil Nadu", x: 40, y: 76, type: "Industrial District" },
  { name: "Chennai, Tamil Nadu", x: 46, y: 78, type: "Highways" },
  { name: "Guwahati, Assam", x: 80, y: 40, type: "Highways" },
];

export const milestones = [
  { year: "1996", text: "Incorporated as a power engineering contractor in Rajahmundry." },
  { year: "2003", text: "Commissioned the first 220 MW gas-based station in Andhra Pradesh." },
  { year: "2009", text: "Entered highway concessions with two NHAI BOT corridors." },
  { year: "2014", text: "Crossed 2,000 MW of operating generation capacity." },
  { year: "2018", text: "Won the first 1,200-acre industrial district mandate in Tamil Nadu." },
  { year: "2021", text: "Demerged infrastructure businesses; listed on NSE and BSE." },
  { year: "2024", text: "Awarded 4.2 million prepaid smart meters across three state utilities." },
  { year: "2026", text: "Renewable portfolio crosses 1,800 MW; net-zero roadmap published." },
];

export const leadership = [
  { name: "R. Venkataraman", role: "Chairman", tenure: "Board member since 1996" },
  { name: "Anjali Deshmukh", role: "Managing Director & CEO", tenure: "Board member since 2016" },
  { name: "Faisal Rahman", role: "Executive Director — Energy", tenure: "Board member since 2019" },
  { name: "Priya Nambiar", role: "Chief Financial Officer", tenure: "Appointed 2021" },
  { name: "S. Gopalakrishnan", role: "Independent Director", tenure: "Board member since 2021" },
  { name: "Meera Iyengar", role: "Independent Director", tenure: "Board member since 2022" },
];

export const news = [
  {
    date: "2026-07-14",
    tag: "Press Release",
    title: "Ideal Engineering commissions 450 MW solar-plus-storage park in Rajasthan",
    body: "The Jaisalmer facility pairs 450 MW of solar generation with a 180 MWh battery system contracted under a 25-year PPA.",
  },
  {
    date: "2026-06-02",
    tag: "Results",
    title: "Q1 FY27 results: consolidated revenue up 18% year on year",
    body: "Growth was led by higher plant availability in the thermal fleet and the first full quarter of smart metering revenue.",
  },
  {
    date: "2026-05-19",
    tag: "Announcement",
    title: "Krishnagiri industrial district signs three anchor manufacturing tenants",
    body: "The tenants together commit to 1.9 million sq ft of built-up space and an estimated 6,200 direct jobs.",
  },
  {
    date: "2026-04-08",
    tag: "Press Release",
    title: "Six-lane expansion of the Rajahmundry–Kakinada corridor opens to traffic",
    body: "The 74 km stretch cuts freight transit time to the deep-water port by an estimated 40 minutes.",
  },
  {
    date: "2026-03-11",
    tag: "Sustainability",
    title: "Ideal Engineering publishes its 2030 water positivity roadmap",
    body: "The roadmap targets zero liquid discharge across all thermal stations and 3.4x water replenishment by 2030.",
  },
  {
    date: "2026-02-04",
    tag: "Announcement",
    title: "4.2 million prepaid smart meters awarded across three state utilities",
    body: "Deployment is scheduled over 27 months under the national smart metering programme.",
  },
];

export const reports = [
  { year: "FY 2025-26", items: ["Annual Report", "Integrated Report", "Business Responsibility & Sustainability Report"] },
  { year: "FY 2024-25", items: ["Annual Report", "Integrated Report", "Business Responsibility & Sustainability Report"] },
  { year: "FY 2023-24", items: ["Annual Report", "Integrated Report", "Business Responsibility Report"] },
  { year: "FY 2022-23", items: ["Annual Report", "Business Responsibility Report"] },
];

export const quarterlies = [
  { period: "Q1 FY27", revenue: "₹3,182 Cr", ebitda: "₹1,046 Cr", pat: "₹412 Cr" },
  { period: "Q4 FY26", revenue: "₹3,058 Cr", ebitda: "₹987 Cr", pat: "₹366 Cr" },
  { period: "Q3 FY26", revenue: "₹2,844 Cr", ebitda: "₹918 Cr", pat: "₹331 Cr" },
  { period: "Q2 FY26", revenue: "₹2,691 Cr", ebitda: "₹871 Cr", pat: "₹298 Cr" },
];

export const projects = {
  operational: [
    { name: "Rajahmundry CCGT", location: "Andhra Pradesh", capacity: "768 MW", fuel: "Natural gas", year: "2003" },
    { name: "Kawai Thermal", location: "Rajasthan", capacity: "1,320 MW", fuel: "Coal", year: "2013" },
    { name: "Tiroda Thermal", location: "Maharashtra", capacity: "1,100 MW", fuel: "Coal", year: "2014" },
    { name: "Udupi Thermal", location: "Karnataka", capacity: "1,200 MW", fuel: "Coal", year: "2012" },
    { name: "Jaisalmer Solar Park", location: "Rajasthan", capacity: "450 MW", fuel: "Solar + storage", year: "2026" },
    { name: "Bhuj Wind Cluster", location: "Gujarat", capacity: "212 MW", fuel: "Wind", year: "2020" },
    { name: "Dahanu Small Hydro", location: "Maharashtra", capacity: "60 MW", fuel: "Hydro", year: "2011" },
  ],
  upcoming: [
    { name: "Godda Supercritical Unit 3", location: "Jharkhand", capacity: "800 MW", fuel: "Coal", year: "2028" },
    { name: "Krishnagiri Solar Rooftop Estate", location: "Tamil Nadu", capacity: "180 MW", fuel: "Solar", year: "2027" },
    { name: "Singrauli Battery Storage", location: "Madhya Pradesh", capacity: "320 MWh", fuel: "Storage", year: "2027" },
  ],
  highways: [
    { name: "Rajahmundry–Kakinada Expressway", location: "Andhra Pradesh", capacity: "74 km", fuel: "Six-lane BOT", year: "2026" },
    { name: "Tiroda–Nagpur Corridor", location: "Maharashtra", capacity: "168 km", fuel: "Four-lane HAM", year: "2022" },
    { name: "Guwahati Ring Road", location: "Assam", capacity: "121 km", fuel: "Four-lane BOT", year: "2024" },
    { name: "Chennai Outer Freight Link", location: "Tamil Nadu", capacity: "96 km", fuel: "Annuity", year: "2021" },
  ],
};

export const esgPillars = [
  {
    title: "Environment",
    body: "Emissions intensity reduction, zero liquid discharge, ash utilisation and biodiversity management across every operating site.",
    points: [
      "42% reduction in emissions intensity against a FY20 baseline",
      "100% ash utilisation at four of seven thermal stations",
      "3.4x water replenishment target by 2030",
    ],
  },
  {
    title: "Social",
    body: "Community infrastructure, skilling and safety programmes anchored around each plant and highway corridor.",
    points: [
      "310,000 people reached through community programmes",
      "18,400 trainees through the Ideal Skills Institute",
      "Zero lost-time injuries across three consecutive quarters",
    ],
  },
  {
    title: "Governance",
    body: "An independent-majority board, structured risk oversight and transparent disclosure under SEBI LODR.",
    points: [
      "6 of 10 directors are independent",
      "Board-level Risk & ESG committee since 2021",
      "Whistle-blower and anti-bribery policies group-wide",
    ],
  },
];

export type SpotlightIcon = "institute" | "leaf" | "community" | "people";

/** "Featured divisions" style cards — Adani-inspired counterpart to the sector cards. */
export const spotlights: {
  icon: SpotlightIcon;
  kicker: string;
  title: string;
  body: string;
  stat: string;
  statLabel: string;
  href: string;
}[] = [
  {
    icon: "institute",
    kicker: "Capability Building",
    title: "Ideal Skills Institute",
    body: "A dedicated training campus that builds site-ready engineers and technicians for every plant, corridor and district we operate.",
    stat: "18,400+",
    statLabel: "Trainees skilled to date",
    href: "/sustainability#social",
  },
  {
    icon: "leaf",
    kicker: "Environment",
    title: "Sustainability",
    body: "Emissions intensity reduction, water positivity and ash utilisation targets built into every operating site's roadmap.",
    stat: "42%",
    statLabel: "Lower emissions intensity vs FY20",
    href: "/sustainability",
  },
  {
    icon: "community",
    kicker: "Social Impact",
    title: "Communities",
    body: "Health, education and livelihood programmes anchored around every plant, corridor and industrial district we build.",
    stat: "310,000+",
    statLabel: "People reached through our programmes",
    href: "/sustainability#social",
  },
  {
    icon: "people",
    kicker: "Our People",
    title: "People of Ideal",
    body: "Engineers, operators and planners across 11 states, keeping the country's power, roads and industrial estates running.",
    stat: "4,850+",
    statLabel: "Employees across the group (FY25)",
    href: "/careers",
  },
];

/** Group-entity grid — Adani-style "Group Websites" wall linking the wider ecosystem. */
export const groupSites: { name: string; short: string; href: string }[] = [
  { name: "Ideal Energy Limited", short: "IE", href: "/businesses/ideal-energy" },
  { name: "Ideal Highways Limited", short: "IH", href: "/businesses/ideal-highways" },
  { name: "Ideal Industrial Districts Limited", short: "IID", href: "/businesses/ideal-industrial-districts" },
  { name: "Ideal Smart Metering Limited", short: "ISM", href: "/businesses/ideal-smart-metering" },
  { name: "Ideal Transmission Limited", short: "IT", href: "/businesses/ideal-transmission" },
  { name: "Ideal EPC & Projects", short: "EPC", href: "/projects" },
  { name: "Ideal Capital", short: "IC", href: "/investors" },
  { name: "Ideal Foundation", short: "IF", href: "/sustainability#social" },
  { name: "Ideal Skills Institute", short: "ISI", href: "/sustainability#social" },
  { name: "Ideal Group", short: "IG", href: "/about-us" },
];

export const openRoles = [
  { title: "Deputy General Manager — O&M, Thermal", location: "Kawai, Rajasthan", type: "Full time", fn: "Operations" },
  { title: "Senior Engineer — Solar EPC", location: "Jaisalmer, Rajasthan", type: "Full time", fn: "Projects" },
  { title: "Manager — Highway Tolling Systems", location: "Rajahmundry, Andhra Pradesh", type: "Full time", fn: "Operations" },
  { title: "Lead — Smart Metering Deployment", location: "Chennai, Tamil Nadu", type: "Full time", fn: "Technology" },
  { title: "Analyst — Investor Relations", location: "Mumbai, Maharashtra", type: "Full time", fn: "Finance" },
  { title: "Graduate Engineer Trainee 2027", location: "Multiple locations", type: "Trainee", fn: "Early careers" },
];
