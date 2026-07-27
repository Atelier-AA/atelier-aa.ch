'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { footerLegal } from '@/data/navigation';
import Navigation from './Navigation';

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

/**
 * Vollbild-Menü für alle Bildschirmgrössen (kein separates Desktop-Menü mehr).
 *
 * Nachbau von `.primary-navigation-open .primary-menu-container` im alten
 * Theme: weisses Overlay über die volle Höhe, Menü vertikal zentriert und
 * linksbündig, Einträge in 2.25rem (`--global--font-size-xl`).
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
      id="mobile-menu"
      className="fixed inset-0 z-40 bg-white"
      role="dialog"
      aria-modal="true"
      aria-label="Hauptnavigation"
    >
      <div className="flex h-full flex-col justify-center">
        <div className="mx-auto w-full max-w-content px-6 md:px-10 text-ink">
          {/* Dieselbe Navigation wie im Desktop-Header, nur in der grossen
              Variante — so gilt der Unterstreichungs-Effekt auch mobil. */}
          <Navigation variant="mobile" onNavigate={onClose} />

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
        </div>
      </div>
    </div>
  );
}
