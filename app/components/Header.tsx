'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-bold text-primary">
            Atelier AA
          </Link>
        </div>
        <ul className="flex gap-8">
          <li>
            <Link href="/" className="text-secondary hover:text-primary transition">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-secondary hover:text-primary transition">
              About
            </Link>
          </li>
          <li>
            <Link href="/services" className="text-secondary hover:text-primary transition">
              Services
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-secondary hover:text-primary transition">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
