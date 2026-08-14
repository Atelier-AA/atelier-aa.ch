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
    <div className="pt-32 pb-20 md:pb-28 md:pt-40">
      <Container>
        {/* Eyebrow steht über beiden Spalten, wie auf /ueber-uns. */}
        <p className="text-xs uppercase tracking-widest text-stone mb-8">Kontakt</p>

        {/* Auf Mobile zuerst Text/Adresse, danach das Formular; ab lg wie
            gehabt Formular links, Text rechts. */}
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-28">
          <div className="order-2 w-full lg:order-1 lg:pt-1">
            <KontaktformularEinfach />
          </div>

          <div className="order-1 lg:order-2">
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
        </div>
      </Container>
    </div>
  );
}
