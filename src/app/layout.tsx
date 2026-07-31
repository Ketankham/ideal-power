import type { Metadata } from "next";
import { Red_Hat_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuickLinks from "@/components/QuickLinks";
import { site } from "@/lib/site";

const redHat = Red_Hat_Display({
  variable: "--font-red-hat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const favicon =
  "data:image/svg+xml," +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect width="32" height="32" rx="7" fill="#0f3a6b"/><path d="M9 25 L16 6 L20 6 L13 25Z" fill="#f5b841"/><path d="M18 25 L25 6 L29 6 L22 25Z" fill="#e8622c"/></svg>`
  );

export const metadata: Metadata = {
  metadataBase: new URL("https://www.idealengineering.in"),
  title: {
    default: `${site.name} | ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description:
    "Ideal Engineering & Infrastructure Limited develops and operates power plants, highways, transmission networks and planned industrial districts across India.",
  openGraph: {
    type: "website",
    siteName: site.name,
    title: `${site.name} | ${site.tagline}`,
    description:
      "Power generation, highways, transmission and industrial districts, operated under long-term frameworks across 11 Indian states.",
  },
  icons: { icon: [{ url: favicon, type: "image/svg+xml" }] },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${redHat.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-navy-900 focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <QuickLinks />
      </body>
    </html>
  );
}
