import type { Metadata } from 'next';
import Container from '@/components/ui/Container';
import KontaktformularEinfach from '@/components/kontakt/KontaktformularEinfach';
import { firma } from '@/data/firma';

export const metadata: Metadata = {
  title: 'Kontakt',
  description:
    'Atelier AA Architekten GmbH, Bachstrasse 39, 8912 Obfelden, Kanton Zürich. Telefon +41 44 770 05 06, info@atelier-aa.ch. Erstgespräch für Neubau, Umbau und Sanierung.',
  alternates: { canonical: '/kontakt' },
};

export default function KontaktPage() {
  return (
    <div className="pt-24 md:pt-28 pb-20 md:pb-28">
      <Container className="mt-16 md:mt-24">
        {/* Links Text/Adresse, rechts Formular. */}
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-widest text-stone mb-4">
              Kontakt
            </p>
            <h1 className="text-4xl font-normal leading-tight text-ink mb-10 max-w-lg md:text-5xl lg:text-6xl">
              Der erste <span className="font-semibold">Schritt</span> ist ein{' '}
              <span className="font-semibold">Gespräch.</span>
            </h1>
            <p className="text-lg text-graphite leading-relaxed max-w-md">
              Wir stehen für einen offenen, direkten Austausch und freuen uns über
              neue Projekte, spannende Aufgaben und anspruchsvolle Fragestellungen.
              Schreiben Sie uns oder rufen Sie an – wir melden uns verlässlich zurück.
            </p>

            <address className="not-italic text-lg text-ink leading-relaxed mt-8 max-w-md">
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
            </a>{' '}
            <a
              href={`mailto:${firma.email}`}
              className="mt-4 inline-block text-lg font-medium text-ink transition-colors hover:text-graphite"
            >
              {firma.email}
            </a>
          </div>

          <div className="w-full lg:w-4/5 lg:pt-1">
            <KontaktformularEinfach />
          </div>
        </div>
      </Container>
    </div>
  );
}
