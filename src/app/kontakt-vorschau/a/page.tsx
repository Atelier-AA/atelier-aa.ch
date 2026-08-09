import type { Metadata } from 'next';
import Container from '@/components/ui/Container';
import KontaktformularEinfach from '@/components/kontakt/KontaktformularEinfach';

export const metadata: Metadata = { robots: { index: false, follow: false } };

/** Vorschau A: Formular links, Karte rechts. Temporäre Vorschau-Seite,
 * nicht im Menü verlinkt — nach der Entscheidung wieder entfernen. */
export default function VorschauA() {
  return (
    <div className="pt-24 pb-20 md:pt-28 md:pb-28">
      <Container>
        <div className="mb-10 bg-ink px-6 py-3 text-center text-sm text-white">
          Vorschau A — Formular links, Karte rechts (nicht die Live-Seite)
        </div>
        <h1 className="mb-12 text-4xl font-normal leading-tight text-ink md:text-5xl">
          Kontakt
        </h1>
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          <KontaktformularEinfach />
          <div className="relative aspect-[4/3] w-full bg-mist lg:aspect-auto">
            <iframe
              src="https://www.google.com/maps?q=Atelier+AA+Architekten+GmbH,+Bachstrasse+39,+8912+Obfelden&output=embed"
              title="Standort der Atelier AA Architekten GmbH auf Google Maps"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 h-full w-full grayscale"
              style={{ border: 0 }}
            />
          </div>
        </div>
      </Container>
    </div>
  );
}
