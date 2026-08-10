import Link from 'next/link';
import Container from '@/components/ui/Container';
import { navigation, footerLegal } from '@/data/navigation';
import { firma } from '@/data/firma';

export const metadata = { robots: { index: false, follow: false } };

/**
 * Vorschau: Menü-Variante B — "zwei klare Ebenen".
 * Team steht als kleines Inline-Tag direkt neben "Atelier" statt als
 * eigene Zeile darunter — keine dritte Grössenstufe, dafür bewusst nur
 * zwei: gross (Projekte, Atelier) und einheitlich klein (der Rest).
 */
export default function MenuVorschauB() {
  return (
    <div className="min-h-screen bg-ink text-white">
      <div className="bg-white px-6 py-3 text-center text-sm text-ink">
        Vorschau B — Team als Inline-Tag neben "Atelier", nur zwei Grössenstufen
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
                  <li key={item.href} className="border-b border-white/10 py-3">
                    <div className="flex items-baseline justify-end gap-4">
                      {item.unterlink && (
                        <Link
                          href={item.unterlink.href}
                          className="rounded-full border border-white/25 px-3 py-1 text-xs uppercase tracking-[0.1em] text-white/70 transition-colors hover:border-white/60 hover:text-white"
                        >
                          {item.unterlink.label}
                        </Link>
                      )}
                      <Link
                        href={item.href}
                        className={
                          item.stufe === 1
                            ? 'block text-[1.75rem] font-medium leading-tight md:text-[3rem]'
                            : 'block text-[1.375rem] font-medium leading-tight md:text-[1.875rem]'
                        }
                      >
                        {item.label}
                      </Link>
                    </div>
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
