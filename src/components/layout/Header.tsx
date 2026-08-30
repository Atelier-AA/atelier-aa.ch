'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Container from '@/components/ui/Container';
import MobileMenu from './MobileMenu';
import Logo from './Logo';
import { cn } from '@/lib/utils';
import { navigation } from '@/data/navigation';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    // Schwelle 50px wie im alten Theme (header.php: `window.scrollY > 50`).
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Beim Seitenwechsel das Menü schliessen — sonst bleibt das Overlay über
  // der neuen Seite stehen.
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Bei offenem Menü immer die volle Wortmarke zeigen, unabhängig vom
  // Scroll-Zustand — kein Sprung mehr, weil die Höhe des Logo-Bereichs
  // konstant ist (nur die Breite ändert sich innerhalb von Logo.tsx).
  const collapsed = scrolled && !mobileOpen;

  // Vergleichsseite für die dunkle Menü-Variante. Reine Entwurfsroute, per
  // robots.txt gesperrt — die Ausnahme steht hier, damit der echte Burger
  // dasselbe Menü öffnet und der Vergleich nicht an einem Nachbau hängt.
  const menueVariante = pathname === '/vorschau/menu-dunkel' ? 'dunkel' : 'hell';

  // Nur die Startseite hat den dunklen Hero hinter dem transparenten Header.
  // Bei offenem Menü liegt die HELLE Fläche des Overlays darunter (siehe
  // MobileMenu.tsx, umgekehrte Farbgebung) — Logo, Kurznavigation und das
  // Schliesskreuz müssen dort also dunkel sein, auch auf der Startseite.
  // Bei der dunklen Variante gilt das Umgekehrte: dort wieder Weiss.
  const onDark = mobileOpen
    ? menueVariante === 'dunkel'
    : isHome && !scrolled;

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:bg-ink focus:text-white focus:px-4 focus:py-2"
      >
        Zum Inhalt springen
      </a>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 transition-all duration-500',
          // Bei offenem Menü über das Overlay (z-40) heben, damit Logo und
          // Burger sichtbar und bedienbar bleiben; sonst darunter.
          mobileOpen ? 'z-50' : 'z-30',
          // Bei offenem Menü bleibt die Kopfzeile durchsichtig: Die helle
          // Fläche des Menüs liegt ohnehin dahinter, ein Streifen mit
          // Trennlinie darüber würde sie zerschneiden.
          mobileOpen
            ? 'bg-transparent pt-6 pb-4 lg:py-4'
            : scrolled
              ? 'bg-white/95 backdrop-blur border-b border-mist pt-6 pb-4 lg:py-4'
              : 'bg-transparent pt-10 pb-4 lg:py-6',
          // Logo und Navigation erben diese Farbe via `text-current`.
          onDark ? 'text-white' : 'text-ink'
        )}
      >
        <Container className="flex items-center justify-between">
          {/* Höhe bleibt beim Scrollen und beim Öffnen des Menüs konstant —
              wie bei elindo.ch. Nur die Breite ändert sich innerhalb von
              Logo (Wortmarke blendet aus), das Signet bleibt dadurch exakt
              gleich groß und an derselben Stelle, egal in welchem Zustand. */}
          <Link
            href="/"
            aria-label="Atelier AA Architekten: Startseite"
            className="block h-[44px] md:h-[52px]"
          >
            <Logo collapsed={collapsed} />
          </Link>

          <div className="flex items-center gap-8">
            {/* Projekte und Kontakt direkt erreichbar, ohne Umweg über das
                Burger-Menü, schon ab sm — das sind die zwei meistgesuchten
                Ziele. Ab lg ist genug Platz, um auch Leistungen und Über uns
                direkt zu zeigen, statt sie auf Desktop-Breite unnötig hinter
                dem Burger zu verstecken. Alle übrigen Menüpunkte bleiben dort. */}
            {/* Ab lg stehen alle Punkte offen — der Burger entfällt dort
                ganz. Unter lg bleiben nur die zwei meistgesuchten Ziele
                sichtbar, der Rest liegt hinter dem Burger: sechs Punkte
                passen auf einem 375px-Bildschirm nicht in eine Zeile. */}
            <nav
              aria-label="Hauptnavigation"
              className="hidden items-center gap-6 text-sm uppercase tracking-widest sm:flex lg:gap-8"
            >
              {navigation.map((item) => {
                // Unter lg nur Projekte und Kontakt, sonst wird die Zeile
                // auf dem Handy zu lang.
                const immerSichtbar = item.href === '/projekte' || item.href === '/kontakt';
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      'rounded-sm transition-opacity hover:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[currentColor]',
                      immerSichtbar ? 'inline' : 'hidden lg:inline'
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* Burger, der beim Öffnen zum Schliessen-Kreuz wird. Liegt mit z-50
                über dem Menü-Overlay (z-40) und ist damit auch im offenen Zustand
                bedienbar — deshalb braucht das Overlay kein eigenes X. Die
                äusseren Linien wandern um genau ihren Abstand zur Mitte
                (gap 6px + 1px Linie = 7px) und kreuzen sich dort exakt. Gleiche
                Grösse auf allen Bildschirmbreiten. */}
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="relative z-50 -mr-2 flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[currentColor] lg:hidden"
              aria-label={mobileOpen ? 'Menü schliessen' : 'Menü öffnen'}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
            >
              <span
                className={cn(
                  'block h-px w-6 bg-current transition-transform duration-300 ease-out',
                  mobileOpen && 'translate-y-[7px] rotate-45'
                )}
              />
              <span
                className={cn(
                  'block h-px w-6 bg-current transition-opacity duration-300 ease-out',
                  mobileOpen && 'opacity-0'
                )}
              />
              <span
                className={cn(
                  'block h-px w-6 bg-current transition-transform duration-300 ease-out',
                  mobileOpen && '-translate-y-[7px] -rotate-45'
                )}
              />
            </button>
          </div>
        </Container>
      </header>
      <MobileMenu
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        variante={menueVariante}
      />
    </>
  );
}
