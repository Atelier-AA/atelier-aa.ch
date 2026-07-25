'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Container from '@/components/ui/Container';
import Navigation from './Navigation';
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
          'fixed top-0 left-0 right-0 z-30 transition-all duration-300',
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

          {/* Links erben die Farbe vom Header — weiss über dem Hero, sonst schwarz,
              wie `.page-id-861 .site-header.has-menu .menu-item a` im alten Theme. */}
          <Navigation className="hidden md:block" />

          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden relative z-50 flex flex-col gap-1.5 p-2"
            aria-label={mobileOpen ? 'Menü schliessen' : 'Menü öffnen'}
            aria-expanded={mobileOpen}
          >
            <span
              className={cn(
                'block w-6 h-px bg-current transition-transform duration-300',
                mobileOpen && 'rotate-45 translate-y-2'
              )}
            />
            <span
              className={cn(
                'block w-6 h-px bg-current transition-opacity duration-300',
                mobileOpen && 'opacity-0'
              )}
            />
            <span
              className={cn(
                'block w-6 h-px bg-current transition-transform duration-300',
                mobileOpen && '-rotate-45 -translate-y-2'
              )}
            />
          </button>
        </Container>
      </header>
      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
