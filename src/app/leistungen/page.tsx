import type { Metadata } from 'next';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import LeistungenPlates from '@/components/leistungen/LeistungenPlates';
import AblaufSection from '@/components/home/AblaufSection';
import { bauaufgaben } from '@/data/expertise';

export const metadata: Metadata = {
  title: 'Kompetenzen',
  description:
    'Leistungen von Atelier AA Architekten GmbH: Neubau, Umbau und Sanierung, Verdichtung, Projektentwicklung, Bauleitung und Generalplanung für Wohnen und Gewerbe — Schwerpunkt Zürich, Aargau, Zug, auf Anfrage in der ganzen Schweiz.',
  alternates: { canonical: '/leistungen' },
};

export default function LeistungenPage() {
  return (
    <div className="pt-32 md:pt-40">
      <Container>
        <div className="mb-16 max-w-3xl md:mb-24">
          <p className="mb-4 text-xs uppercase tracking-widest text-stone">Kompetenzen</p>
          {/* Tragende Begriffe fett, der Rest der Zeile normal. */}
          <h1 className="text-4xl font-normal leading-[1.1] tracking-tight text-ink md:text-5xl lg:text-6xl">
            <span className="font-semibold">Architektur</span> mit Klarheit
            <br />
            und <span className="font-semibold">Verantwortung.</span>
          </h1>
          <p className="mt-10 text-lg leading-relaxed text-graphite md:text-xl">
            Das Atelier AA bietet den gesamten Planungsprozess an – von der ersten Idee
            bis zur hochwertigen Ausführung, auf Wunsch auch im Generalplaner-Mandat.
            Wir übersetzen die Anforderungen von Menschen, Nutzung und Ort in
            Architektur, die funktional, nachhaltig und wirtschaftlich trägt – mit
            Schwerpunkt in den Kantonen Zürich, Aargau und Zug, für passende Aufgaben
            auch darüber hinaus. Wie das konkret aussieht, zeigen die folgenden fünf
            Kompetenzen.
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

      <AblaufSection />

      {/* Leistungsangebot auf der regulären Inhaltsbreite statt vollflächig
          über den Bildschirm — fügt sich damit ins übrige Seitenbild ein. */}
      <section className="border-t border-mist py-20 md:pt-28">
        <Container>
          <div className="mb-14 max-w-3xl">
            <p className="mb-4 text-xs uppercase tracking-widest text-stone">
              Angebot
            </p>
            <h2 className="text-3xl font-medium leading-tight text-ink md:text-4xl">
              Kompetenzen
            </h2>
          </div>
          <LeistungenPlates />
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

      <Container>
        <div className="max-w-3xl border-t border-mist pt-16">
          <p className="mb-4 text-xs uppercase tracking-widest text-stone">
            Nächster Schritt
          </p>
          <h2 className="mb-6 max-w-[18ch] text-4xl font-medium leading-tight tracking-tight text-ink md:text-5xl">
            Sie möchten bauen?
          </h2>
          <p className="mb-8 text-lg leading-relaxed text-graphite">
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
  );
}
