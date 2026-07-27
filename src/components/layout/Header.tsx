'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Container from '@/components/ui/Container';
import MobileMenu from './MobileMenu';
import Logo from './Logo';
import { cn } from '@/lib/utils';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const isHome = usePathname() === '/';

  useEffect(() => {
    // Schwelle 50px wie im alten Theme (header.php: `window.scrollY > 50`).
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Bei offenem Mobilmenü bleibt die Wortmarke stehen — sonst kollabiert das
  // Logo mitten im Menü, ohne dass gescrollt wurde.
  const collapsed = scrolled && !mobileOpen;

  // Nur die Startseite hat den dunklen Hero hinter dem transparenten Header.
  // Sobald der Header weiss wird (scrolled/Menü offen), gilt wieder Schwarz.
  const onDark = isHome && !scrolled && !mobileOpen;

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
          'fixed top-0 left-0 right-0 transition-all duration-300',
          // Bei offenem Menü über das Overlay (z-40) heben, damit Logo und
          // Burger sichtbar und bedienbar bleiben; sonst darunter.
          mobileOpen ? 'z-50' : 'z-30',
          scrolled || mobileOpen
            ? 'bg-white/95 backdrop-blur border-b border-mist py-4'
            : 'bg-transparent py-6',
          // Logo und Navigation erben diese Farbe via `text-current`.
          onDark ? 'text-white' : 'text-ink'
        )}
      >
        <Container className="flex items-center justify-between">
          <Link
            href="/"
            aria-label="Atelier AA Architekten – Startseite"
            className={cn(
              'block transition-all duration-300',
              // Höhe wie im alten Theme: 61px Logo, beim Scrollen auf 35px.
              collapsed ? 'h-[35px]' : 'h-[44px] md:h-[52px]'
            )}
          >
            <Logo collapsed={collapsed} />
          </Link>

          {/* Burger, der beim Öffnen zum Schliessen-Kreuz wird. Liegt mit z-50
              über dem Menü-Overlay (z-40) und ist damit auch im offenen Zustand
              bedienbar — deshalb braucht das Overlay kein eigenes X.
              Die äusseren Linien wandern um genau ihren Abstand zur Mitte
              (gap 6px + 1px Linie = 7px) und kreuzen sich dort exakt.
              Auf allen Breiten sichtbar — es gibt keine horizontale
              Desktop-Navigation mehr, nur noch das Burger-Menü. */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="relative z-50 -mr-2 flex h-11 w-11 flex-col items-center justify-center gap-1.5"
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
        </Container>
      </header>
      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
