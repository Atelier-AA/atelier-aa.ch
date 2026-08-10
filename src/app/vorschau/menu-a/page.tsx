import type { Metadata } from 'next';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import { navigation, footerLegal } from '@/data/navigation';
import { firma } from '@/data/firma';

export const metadata: Metadata = { robots: { index: false, follow: false } };

/**
 * Vorschau: Menü-Variante C — "Nummerierte Liste".
 * Zweiter Anlauf nach Kundenfeedback ("keine Variante gefällt mir, zu
 * grosser Sprung zwischen den Grössenstufen"): komplett einheitliche
 * Schriftgrösse für alle Hauptpunkte statt gross/klein-Sprung — Rhythmus
 * kommt von der Nummerierung, nicht von unterschiedlichen Grössen. Team
 * hängt als eigene, bewusst kleinere Zeile mit Gedankenstrich direkt unter
 * "Atelier" — liest sich als Kind, nicht als Zufallszusatz.
 */
export default function MenuVorschauC() {
  return (
    <div className="min-h-screen bg-ink text-white">
      <div className="bg-white px-6 py-3 text-center text-sm text-ink">
        Vorschau C — nummerierte Liste, einheitliche Grösse
      </div>
      <div className="flex min-h-[calc(100vh-44px)] items-end py-20">
        <Container>
          <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-[minmax(0,18rem)_1fr] lg:items-end">
            <div className="order-2 text-right lg:order-1">
              <div className="pt-6">
                <p className="text-xs uppercase tracking-widest text-white/60">Kontakt</p>
                <p className="mt-3 text-base">{firma.telefon}</p>
                <p className="text-base">{firma.email}</p>
              </div>
              <ul className="mt-6 flex flex-col">
                {footerLegal.map((item) => (
                  <li key={item.href}>
                    <span className="inline-flex min-h-[32px] items-center text-xs uppercase tracking-[0.1em] text-white/60">
                      {item.label}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <nav className="order-1 lg:order-2">
              <ul className="flex flex-col text-right">
                {navigation.map((item, idx) => (
                  <li key={item.href} className="border-b border-white/10 py-4">
                    <Link
                      href={item.href}
                      className="group flex items-baseline justify-end gap-4 text-[1.9rem] font-medium leading-none tracking-tight transition-colors hover:text-white/70 md:text-[3.1rem]"
                    >
                      <span className="font-mono text-[0.9rem] font-normal tabular-nums text-white/35 md:text-base">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      {item.label}
                    </Link>
                    {item.unterlink && (
                      <Link
                        href={item.unterlink.href}
                        className="mt-2 flex items-baseline justify-end gap-3 text-[1.05rem] text-white/55 transition-colors hover:text-white"
                      >
                        <span aria-hidden="true">—</span>
                        {item.unterlink.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </Container>
      </div>
    </div>
  );
}
