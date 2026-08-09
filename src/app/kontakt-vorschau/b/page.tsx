import type { Metadata } from 'next';
import Container from '@/components/ui/Container';
import KontaktformularEinfach from '@/components/kontakt/KontaktformularEinfach';

export const metadata: Metadata = { robots: { index: false, follow: false } };

/** Vorschau B: nur das Formular, kein Bild, keine Karte — bewusst sehr
 * schlicht. Temporäre Vorschau-Seite, nach der Entscheidung entfernen. */
export default function VorschauB() {
  return (
    <div className="pt-24 pb-20 md:pt-28 md:pb-28">
      <Container>
        <div className="mb-10 bg-ink px-6 py-3 text-center text-sm text-white">
          Vorschau B — nur Formular, kein Bild/keine Karte (nicht die Live-Seite)
        </div>
        <div className="mx-auto max-w-xl">
          <h1 className="mb-12 text-center text-4xl font-normal leading-tight text-ink md:text-5xl">
            Kontakt
          </h1>
          <KontaktformularEinfach />
        </div>
      </Container>
    </div>
  );
}
