'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import Navigation from './Navigation';
import MobileMenu from './MobileMenu';
import { cn } from '@/lib/utils';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

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
            : 'bg-transparent py-6'
        )}
      >
        <Container className="flex items-center justify-between">
          <Link href="/" aria-label="Atelier AA Architekten – Startseite" className="flex items-center">
            <span className="text-xl md:text-2xl font-light tracking-wider text-ink">
              Atelier AA
            </span>
          </Link>

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
                'block w-6 h-px bg-ink transition-transform duration-300',
                mobileOpen && 'rotate-45 translate-y-2'
              )}
            />
            <span
              className={cn(
                'block w-6 h-px bg-ink transition-opacity duration-300',
                mobileOpen && 'opacity-0'
              )}
            />
            <span
              className={cn(
                'block w-6 h-px bg-ink transition-transform duration-300',
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
