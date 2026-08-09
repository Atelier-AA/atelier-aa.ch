import type { Metadata } from 'next';
import Container from '@/components/ui/Container';
import KontaktformularEinfach from '@/components/kontakt/KontaktformularEinfach';
import { firma } from '@/data/firma';

export const metadata: Metadata = { robots: { index: false, follow: false } };

/** Vorschau D: Text/Adresse links, Formular rechts. Temporäre
 * Vorschau-Seite, nicht im Menü verlinkt — nach der Entscheidung entfernen. */
export default function VorschauD() {
  return (
    <div className="pt-24 pb-20 md:pt-28 md:pb-28">
      <Container>
        <div className="mb-10 bg-ink px-6 py-3 text-center text-sm text-white">
          Vorschau D — Text links, Formular rechts (nicht die Live-Seite)
        </div>
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          <div>
            <p className="mb-4 text-xs uppercase tracking-widest text-stone">Kontakt</p>
            <h1 className="mb-10 max-w-lg text-4xl font-normal leading-tight text-ink md:text-5xl">
              Der erste <span className="font-semibold">Schritt</span> ist ein{' '}
              <span className="font-semibold">Gespräch.</span>
            </h1>
            <p className="max-w-md text-lg leading-relaxed text-graphite">
              Wir stehen für einen offenen, direkten Austausch und freuen uns über
              neue Projekte, spannende Aufgaben und anspruchsvolle Fragestellungen.
              Schreiben Sie uns oder rufen Sie an – wir melden uns verlässlich zurück.
            </p>

            <address className="mt-8 max-w-md not-italic text-lg leading-relaxed text-ink">
              {firma.name}
              <br />
              {firma.strasse}
              <br />
              {firma.plz} {firma.ort}
            </address>
            <a
              href={`tel:${firma.telefonHref}`}
              className="mt-8 block text-4xl font-semibold leading-none tracking-tight text-ink transition-opacity hover:opacity-70 md:text-5xl"
            >
              {firma.telefon}
            </a>
            <a
              href={`mailto:${firma.email}`}
              className="mt-4 inline-block text-lg font-medium text-ink transition-colors hover:text-graphite"
            >
              {firma.email}
            </a>
          </div>

          <div className="lg:pt-1">
            <KontaktformularEinfach />
          </div>
        </div>
      </Container>
    </div>
  );
}
