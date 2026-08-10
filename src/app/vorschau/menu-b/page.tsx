import type { Metadata } from 'next';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import { navigation, footerLegal } from '@/data/navigation';
import { firma } from '@/data/firma';

export const metadata: Metadata = { robots: { index: false, follow: false } };

/**
 * Vorschau: Menü-Variante D — "Ein Gewicht, eine Zeile".
 * Zweiter Anlauf: statt unterschiedlicher Grössen trägt hier ausschliesslich
 * die Schriftstärke (kräftig vs. normal) die Rangfolge — alle Zeilen exakt
 * dieselbe Grösse, kein Sprung mehr, der "nicht stimmig" wirken könnte.
 * Team ist ein eigener kleiner Menüpunkt mit Punkt-Marker, sauber unter
 * "Atelier" eingerückt.
 */
export default function MenuVorschauD() {
  return (
    <div className="min-h-screen bg-ink text-white">
      <div className="bg-white px-6 py-3 text-center text-sm text-ink">
        Vorschau D — ein Gewicht, eine Zeile, Rang nur über Schriftstärke
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
                {navigation.map((item) => (
                  <li key={item.href} className="border-b border-white/10 py-3.5">
                    <Link
                      href={item.href}
                      className={
                        item.stufe === 1
                          ? 'block text-[2.1rem] font-semibold leading-tight tracking-tight transition-colors hover:text-white/70 md:text-[2.9rem]'
                          : 'block text-[2.1rem] font-normal leading-tight tracking-tight text-white/85 transition-colors hover:text-white md:text-[2.9rem]'
                      }
                    >
                      {item.label}
                    </Link>
                    {item.unterlink && (
                      <Link
                        href={item.unterlink.href}
                        className="mt-1.5 flex items-center justify-end gap-2 text-base text-white/50 transition-colors hover:text-white"
                      >
                        {item.unterlink.label}
                        <span aria-hidden="true" className="h-1 w-1 rounded-full bg-white/50" />
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
