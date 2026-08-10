import type { Metadata } from 'next';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import { navigation, footerLegal } from '@/data/navigation';
import { firma } from '@/data/firma';

export const metadata: Metadata = { robots: { index: false, follow: false } };

/**
 * Vorschau: Menü-Variante A — "sanfterer Grössenverlauf".
 * Kleinere grösste Stufe, grössere kleinste Stufe, der Team-Unterpunkt ist
 * deutlich lesbarer statt fast unsichtbar klein. Statische Kopie des echten
 * Vollbild-Menüs (ohne Animation/Fokus-Logik) nur zum optischen Vergleich.
 */
export default function MenuVorschauA() {
  return (
    <div className="min-h-screen bg-ink text-white">
      <div className="bg-white px-6 py-3 text-center text-sm text-ink">
        Vorschau A — sanfterer Grössenverlauf zwischen den Menüstufen
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
                  <li key={item.href} className="border-b border-white/10">
                    <Link
                      href={item.href}
                      className={
                        item.stufe === 1
                          ? 'block py-2.5 text-[1.5rem] font-medium leading-tight md:text-[2.4rem]'
                          : 'block py-2 text-[1.25rem] font-medium leading-tight md:text-[1.75rem]'
                      }
                    >
                      {item.label}
                    </Link>
                    {item.unterlink && (
                      <Link
                        href={item.unterlink.href}
                        className="block pb-3 text-base uppercase tracking-[0.1em] text-white/70 md:text-lg"
                      >
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
