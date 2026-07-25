'use client';

import { useEffect } from 'react';
import Navigation from './Navigation';
import { footerLegal } from '@/data/navigation';
import Link from 'next/link';

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-40 bg-white md:hidden" role="dialog" aria-modal="true">
      <div className="flex flex-col justify-between h-full pt-24 pb-10 px-6">
        <Navigation
          linkClassName="text-2xl tracking-wider"
          onNavigate={onClose}
        />
        <div className="border-t border-mist pt-6">
          <ul className="flex flex-col gap-3">
            {footerLegal.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="text-xs uppercase tracking-widest text-stone"
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
