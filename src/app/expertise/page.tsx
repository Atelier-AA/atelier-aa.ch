import type { Metadata } from 'next';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import ProjektCard from '@/components/projekte/ProjektCard';
import FragenAntworten from '@/components/insights/FragenAntworten';
import { getFeaturedProjekte } from '@/data/projekte';
import {
  leistungsbereiche,
  bauaufgaben,
  planungsphasen,
  expertiseFragen,
} from '@/data/expertise';

export const metadata: Metadata = {
  title: 'Leistungen',
  description:
    'Leistungen von Atelier AA Architekten GmbH: Neubau, Umbau und Sanierung, Verdichtung, Projektentwicklung, Innenarchitektur, Bauleitung und Generalplanung für Wohnen, Arbeitswelt, öffentliche, Bildungs- und Gesundheitsbauten in den Kantonen Zürich, Aargau und Zug.',
};

export default function ExpertisePage() {
  const referenzen = getFeaturedProjekte().slice(0, 3);

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': 'https://www.atelier-aa.ch/expertise#faq',
    inLanguage: 'de-CH',
    mainEntity: expertiseFragen.map((f) => ({
      '@type': 'Question',
      name: f.frage,
      acceptedAnswer: { '@type': 'Answer', text: f.antwort },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="pt-32 md:pt-40">
        <Container>
          <div className="mb-16 max-w-3xl md:mb-24">
            <p className="mb-4 text-xs uppercase tracking-widest text-stone">Leistungen</p>
            <h1 className="text-4xl font-light leading-tight text-ink md:text-5xl lg:text-6xl">
              Architektur mit Klarheit
              <br />
              und Verantwortung
            </h1>
            <p className="mt-10 text-lg leading-relaxed text-graphite md:text-xl">
              Das Atelier AA bietet den gesamten Planungsprozess an – von der ersten Idee
              bis zur hochwertigen Ausführung, auf Wunsch auch im Generalplaner-Mandat.
              Wir übersetzen die Anforderungen von Menschen, Nutzung und Ort in
              Architektur, die funktional, nachhaltig und wirtschaftlich trägt – in den
              Kantonen Zürich, Aargau und Zug.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-graphite md:text-xl">
              Nachhaltigkeit ist für uns eine Rechenaufgabe: Wir rechnen
              Lebenszykluskosten neben den Erstellungskosten und legen offen, welche
              Massnahmen sich über die Nutzungsdauer tragen. Wo Bauland knapp ist, prüfen
              wir zuerst, welcher Weg trägt – Aufstockung, Anbau oder Ersatzneubau – bevor
              gestaltet wird.
            </p>
          </div>
        </Container>

        {/* Leistungen im Detail */}
        <section className="border-t border-mist py-20 md:py-28">
          <Container>
            <div className="mb-14 max-w-3xl">
              <p className="mb-4 text-xs uppercase tracking-widest text-stone">
                Im Detail
              </p>
              <h2 className="text-3xl font-light leading-tight text-ink md:text-4xl">
                Konkrete Leistungen
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
              {leistungsbereiche.map((l) => (
                <div key={l.titel}>
                  <h3 className="mb-3 text-xl font-light text-ink">{l.titel}</h3>
                  <p className="leading-relaxed text-graphite">{l.text}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Bauaufgaben — bewusst nicht sichtbar dargestellt, aber im HTML
            vorhanden: `sr-only` blendet den Abschnitt visuell aus, ohne ihn
            aus dem DOM zu entfernen. Suchmaschinen und KI-Systeme lesen den
            Text weiterhin, Screenreader ebenfalls — nur auf dem Bildschirm
            nimmt er keinen Platz mehr weg. */}
        <section className="sr-only">
          <h2>Bauaufgaben — wofür wir Erfahrung mitbringen</h2>
          <div>
            {bauaufgaben.map((b) => (
              <div key={b.kategorie}>
                <h3>{b.kategorie}</h3>
                <p>{b.beispiele}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Planungsphasen */}
        <section className="border-t border-mist bg-mist py-20 md:py-28">
          <Container>
            <div className="mb-14 max-w-3xl">
              <p className="mb-4 text-xs uppercase tracking-widest text-stone">
                Planungsphasen
              </p>
              <h2 className="text-3xl font-light leading-tight text-ink md:text-4xl">
                Von der ersten Frage zum fertigen Haus
              </h2>
              <p className="mt-6 leading-relaxed text-graphite">
                Wir begleiten Ihr Projekt durch alle Phasen — einzeln oder als
                durchgehendes Mandat.
              </p>
            </div>
            <ol className="grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-4">
              {planungsphasen.map((phase) => (
                <li key={phase.nummer}>
                  <p className="mb-4 text-sm tracking-[0.1em] text-stone">
                    {phase.nummer}
                  </p>
                  <h3 className="mb-3 text-lg font-light text-ink">{phase.titel}</h3>
                  <p className="leading-relaxed text-graphite">{phase.text}</p>
                </li>
              ))}
            </ol>
          </Container>
        </section>

        {/* Referenzen */}
        <section className="border-t border-mist py-20 md:py-28">
          <Container>
            <h2 className="mb-12 text-2xl font-light text-ink md:text-3xl">
              Unsere Leistungen zeigen sich in unseren Projekten.
            </h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {referenzen.map((projekt) => (
                <ProjektCard key={projekt.slug} projekt={projekt} />
              ))}
            </div>
            <div className="mt-16">
              <Button href="/projekte" variant="text">
                alle Projekte ansehen
              </Button>
            </div>
          </Container>
        </section>

        <Container>
          <div className="max-w-3xl">
            <FragenAntworten fragen={expertiseFragen} titel="Häufige Fragen" />
          </div>

          <div className="mt-20 max-w-3xl border-t border-mist pt-16">
            <h2 className="mb-6 text-2xl font-light text-ink md:text-3xl">
              Sie möchten bauen?
            </h2>
            <p className="mb-8 leading-relaxed text-graphite">
              Ob Neubau, Sanierung oder Verdichtung – sprechen Sie mit uns über Ihr
              Projekt. In einem ersten Gespräch klären wir Potenzial, Rahmenbedingungen
              und die nächsten Schritte, unverbindlich und auf Ihre Situation
              zugeschnitten.
            </p>
            <Button href="/kontakt" variant="text">
              Kontakt aufnehmen
            </Button>
          </div>
        </Container>
      </div>
    </>
  );
}
