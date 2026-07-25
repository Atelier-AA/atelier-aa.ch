'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { navigation, footerLegal } from '@/data/navigation';

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

/**
 * Vollbild-Menü für Mobile und Tablet.
 *
 * Nachbau von `.primary-navigation-open .primary-menu-container` im alten
 * Theme: weisses Overlay über die volle Höhe, Menü vertikal zentriert und
 * linksbündig, Einträge in 2.25rem (`--global--font-size-xl`). Der Breakpoint
 * liegt wie dort bei 960px, nicht bei Tailwinds md (768px).
 */
export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  // Escape schliesst das Menü — im Original nicht vorhanden, aber für ein
  // modales Overlay erwartet.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-40 bg-white lg:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Hauptnavigation"
    >
      <div className="flex h-full flex-col justify-center">
        <nav className="mx-auto w-full max-w-content px-6 md:px-10">
          <ul className="flex flex-col gap-4">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="block text-[1.5rem] md:text-[2.25rem] font-light leading-tight text-ink transition-colors hover:text-stone"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <ul className="mt-14 flex flex-col gap-3">
            {footerLegal.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="text-xs uppercase tracking-[0.1em] text-stone transition-colors hover:text-ink"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
