import type { Metadata } from 'next';
import Image from 'next/image';
import Container from '@/components/ui/Container';
import KontaktformularEinfach from '@/components/kontakt/KontaktformularEinfach';

export const metadata: Metadata = { robots: { index: false, follow: false } };

/** Vorschau C: Formular links, Bürofoto rechts (statt Karte). Temporäre
 * Vorschau-Seite, nach der Entscheidung entfernen. */
export default function VorschauC() {
  return (
    <div className="pt-24 pb-20 md:pt-28 md:pb-28">
      <Container>
        <div className="mb-10 bg-ink px-6 py-3 text-center text-sm text-white">
          Vorschau C — Formular links, Bürofoto rechts (nicht die Live-Seite)
        </div>
        <h1 className="mb-12 text-4xl font-normal leading-tight text-ink md:text-5xl">
          Kontakt
        </h1>
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          <KontaktformularEinfach />
          <div className="relative aspect-square w-full bg-mist">
            <Image
              src="/images/kontakt/kontakt-buero.jpg"
              alt="Atelier AA Architekten Büro an der Bachstrasse"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </Container>
    </div>
  );
}
