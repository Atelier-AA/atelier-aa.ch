import type { Metadata } from 'next';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import { firma } from '@/data/firma';

export const metadata: Metadata = {
  title: 'Impressum',
  description:
    'Impressum von Atelier AA Architekten GmbH, Bachstrasse 39, 8912 Obfelden. UID CHE-237.040.294.',
};

export default function ImpressumPage() {
  return (
    <div className="pt-32 md:pt-40 pb-20 md:pb-28">
      <Container>
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-widest text-stone mb-4">
            Rechtliches
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-ink mb-16">
            Impressum
          </h1>

          <div className="space-y-10 text-graphite leading-relaxed">
            <section>
              <h2 className="text-xs uppercase tracking-widest text-stone mb-3">
                Firma
              </h2>
              <address className="not-italic text-ink text-lg">
                {firma.name}
                <br />
                {firma.strasse}
                <br />
                {firma.plz} {firma.ort}
                <br />
                {firma.land}
              </address>
            </section>

            <section>
              <h2 className="text-xs uppercase tracking-widest text-stone mb-3">
                Kontakt
              </h2>
              <p className="text-ink text-lg">
                <a href={`tel:${firma.telefonHref}`} className="hover:text-graphite">
                  {firma.telefon}
                </a>
                <br />
                <a href={`mailto:${firma.email}`} className="hover:text-graphite">
                  {firma.email}
                </a>
                <br />
                www.atelier-aa.ch
              </p>
            </section>

            <section>
              <h2 className="text-xs uppercase tracking-widest text-stone mb-3">
                Unternehmensdaten
              </h2>
              <dl className="grid grid-cols-1 sm:grid-cols-[max-content_1fr] gap-x-8 gap-y-2 text-ink">
                <dt className="text-stone">Rechtsform:</dt>
                <dd>Gesellschaft mit beschränkter Haftung</dd>
                <dt className="text-stone">UID:</dt>
                <dd>{firma.uid}</dd>
                <dt className="text-stone">Handelsregister:</dt>
                <dd>Kanton Zürich, eingetragen seit {firma.gruendung}</dd>
                <dt className="text-stone">Vertretungsberechtigt:</dt>
                <dd>{firma.vertretungsberechtigt}</dd>
              </dl>
            </section>

            <section>
              <h2 className="mb-3 text-xs uppercase tracking-widest text-stone">
                Zweck der Gesellschaft
              </h2>
              <p>
                Projektentwicklung, Konzeption, Entwurf, Planung und Realisierung von
                Bauvorhaben aller Art, Kauf, Verkauf, Verwaltung und Vermittlung von
                Immobilien sowie das Erbringen von Immobiliendienstleistungen aller Art.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xs uppercase tracking-widest text-stone">
                Aufsicht und Berufsausübung
              </h2>
              <p>
                Die Berufsbezeichnung «Architekt» ist in der Schweiz kantonal geregelt.
                Wir erbringen unsere Leistungen nach den Ordnungen des Schweizerischen
                Ingenieur- und Architektenvereins (SIA), insbesondere SIA 102 für
                Leistungen und Honorare der Architektinnen und Architekten.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xs uppercase tracking-widest text-stone">
                Haftungsausschluss
              </h2>
              <p>
                Die Inhalte dieser Website werden mit grösstmöglicher Sorgfalt erstellt.
                Für die Richtigkeit, Vollständigkeit und Aktualität übernehmen wir jedoch
                keine Gewähr. Angaben zu Kosten, Fristen und Verfahren sind
                Erfahrungswerte und keine Zusicherung; verbindlich sind allein
                Angebote und Verträge im Einzelfall.
              </p>
              <p className="mt-4">
                Haftungsansprüche wegen Schäden materieller oder immaterieller Art, die
                aus dem Zugriff auf oder der Nutzung dieser Website entstehen, sind
                ausgeschlossen, soweit nicht Vorsatz oder grobe Fahrlässigkeit vorliegt.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xs uppercase tracking-widest text-stone">
                Urheberrecht
              </h2>
              <p>
                Alle Inhalte dieser Website — Texte, Bilder, Pläne, Visualisierungen und
                das Logo — sind urheberrechtlich geschützt. Eine Verwendung,
                Vervielfältigung oder Weitergabe bedarf der vorherigen schriftlichen
                Zustimmung der {firma.name}.
              </p>
              <p className="mt-4">
                Die Rechte an den abgebildeten Projektfotografien liegen bei der
                {' '}{firma.name} beziehungsweise bei den jeweiligen Fotografinnen und
                Fotografen.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xs uppercase tracking-widest text-stone">
                Hinweis zu KI-unterstützten Inhalten
              </h2>
              <p>
                Bei der Erstellung von Texten auf dieser Website haben wir unterstützend
                KI-Werkzeuge eingesetzt. Alle Inhalte wurden von der {firma.name} inhaltlich
                geprüft, freigegeben und verantwortet.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xs uppercase tracking-widest text-stone">
                Datenschutz
              </h2>
              <p>
                Informationen zur Bearbeitung Ihrer Personendaten finden Sie in unserer{' '}
                <Link
                  href="/datenschutzerklaerung"
                  className="underline underline-offset-4 transition-colors hover:text-ink"
                >
                  Datenschutzerklärung
                </Link>
                .
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xs uppercase tracking-widest text-stone">
                Anwendbares Recht und Gerichtsstand
              </h2>
              <p>
                Es gilt ausschliesslich schweizerisches Recht. Gerichtsstand ist der Sitz
                der Gesellschaft in {firma.ort}, soweit keine zwingenden gesetzlichen
                Bestimmungen entgegenstehen.
              </p>
            </section>
          </div>
        </div>
      </Container>
    </div>
  );
}
