import Link from "next/link";
import { NAV } from "@/lib/nav";
import { Container } from "@/components/ui/container";
import { AuraLogo } from "./aura-logo";

export function SiteFooter() {
  return (
    <footer className="section-dark relative">
      <Container size="wide" className="relative py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2fr]">
          <div>
            <Link href="/" className="flex items-center gap-2.5">
              <AuraLogo className="h-11" />
              <span className="font-display text-3xl font-semibold text-milk">AURA</span>
            </Link>
            <p className="mt-4 max-w-sm font-display text-xl leading-snug text-milk/80">
              Milk is quiet. Infection is not.
            </p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-milk/50">
              A student-led iGEM project proposing an inline BioFET sensor that detects a
              mastitis-associated microRNA in milk and sends an electronic alert. A
              diagnostic-support concept - not a replacement for veterinary diagnosis.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
            {NAV.map((group) => (
              <div key={group.label}>
                <p className="text-sm text-milk/45">
                  {group.label}
                </p>
                <ul className="mt-3 space-y-2">
                  {group.links.map((l) => (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        className="text-sm text-milk/70 transition-colors hover:text-signal"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-milk/10 pt-6 text-xs text-milk/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} AURA · iGEM 2026. Built by students.</p>
          <p className="font-mono">
            Content on this wiki reflects a proof-of-concept in progress. Pending data is marked as such.
          </p>
        </div>
      </Container>
    </footer>
  );
}
