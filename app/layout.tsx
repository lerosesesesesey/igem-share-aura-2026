import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { SiteNav } from "@/components/site/site-nav";
import { SiteFooter } from "@/components/site/site-footer";
import { ScrollProgress } from "@/components/motion/scroll-progress";
import { BackToTop } from "@/components/site/back-to-top";
import { SketchDefs } from "@/components/viz/sketch";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://2026.igem.wiki"),
  title: {
    default: "AURA - iGEM 2026 · Milk is quiet. Infection is not.",
    template: "%s · AURA - iGEM 2026",
  },
  description:
    "AURA is an iGEM 2026 project proposing an inline BioFET sensor that detects a mastitis-associated microRNA in milk and sends an electronic alert.",
  keywords: [
    "iGEM 2026",
    "AURA",
    "mastitis",
    "biosensor",
    "synthetic biology",
    "dairy",
    "early detection",
    "somatic cell count",
  ],
  authors: [{ name: "AURA iGEM 2026 Team" }],
  openGraph: {
    title: "AURA - iGEM 2026",
    description: "Milk is quiet. Infection is not. Inline microRNA sensing for earlier mastitis alerts.",
    type: "website",
    siteName: "AURA - iGEM 2026",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-milk text-ink">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-ink focus:px-5 focus:py-2.5 focus:text-sm focus:font-medium focus:text-milk"
        >
          Skip to content
        </a>
        <SketchDefs />
        <ScrollProgress />
        <SiteNav />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
        <BackToTop />
      </body>
    </html>
  );
}
