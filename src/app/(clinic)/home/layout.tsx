import type { Metadata } from "next";
import { Fraunces, Instrument_Serif, Manrope, Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import ThemeSwitcher from "@/components/clinic/ThemeSwitcher";
import { clinic } from "@/lib/clinic";

// Theme 1
const fraunces = Fraunces({ variable: "--font-fraunces", subsets: ["latin"], axes: ["opsz", "SOFT"], display: "swap" });
const manrope = Manrope({ variable: "--font-manrope", subsets: ["latin"], display: "swap" });
// Theme 2
const jakarta = Plus_Jakarta_Sans({ variable: "--font-jakarta", subsets: ["latin"], display: "swap" });
// Theme 3
const grotesk = Space_Grotesk({ variable: "--font-grotesk", subsets: ["latin"], display: "swap" });
const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

const favicon =
  "data:image/svg+xml," +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect width="32" height="32" rx="9" fill="#0a3a34"/><circle cx="16" cy="16" r="7" fill="none" stroke="#cfe3db" stroke-width="2.2"/><circle cx="16" cy="16" r="2.4" fill="#ef7a5a"/></svg>`
  );

export const metadata: Metadata = {
  title: { absolute: `${clinic.name} | Chest Physician in ${clinic.city}` },
  description:
    "Specialist care for asthma, allergy, COPD, pneumonia, TB and interstitial lung disease from Dr. Vivek Patil, a chest physician in Navi Mumbai with more than 30 years of practice.",
  openGraph: {
    type: "website",
    siteName: clinic.name,
    title: `${clinic.name}, ${clinic.city}`,
    description: "Protocol-driven, long-term care for asthma, allergy and chest conditions since 2005.",
  },
  icons: { icon: [{ url: favicon, type: "image/svg+xml" }] },
};

export default function ClinicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`${fraunces.variable} ${manrope.variable} ${jakarta.variable} ${grotesk.variable} ${instrument.variable} flex-1 pt-9`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-12 focus:z-[100] focus:rounded-lg focus:bg-black focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>
      <ThemeSwitcher />
      {children}
    </div>
  );
}
