import type { Metadata } from 'next';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import ProjektCard from '@/components/projekte/ProjektCard';
import { getFeaturedProjekte } from '@/data/projekte';

export const metadata: Metadata = {
  title: 'Expertise',
  description:
    'Architektur und Innenarchitektur mit Klarheit und Verantwortung. Wir verbinden ökologische, ökonomische und soziokulturelle Anforderungen zu nachhaltigen Konzepten.',
};

/**
 * Leistungsschwerpunkte. Texte wörtlich von der alten Expertise-Seite
 * (Post 162), inklusive des Abschlusses mit drei Referenzen
 * (dort der Shortcode `[referenzen limit="3"]`).
 */
const schwerpunkte = [
  {
    titel: 'Funktion, Gestaltung und Nachhaltigkeit im Einklang',
    text: 'Ob Architektur oder Innenarchitektur – wir verbinden ökologische, ökonomische und soziokulturelle Anforderungen zu einem nachhaltigen Ganzen. Räume werden zu Orten, die heutige Bedürfnisse erfüllen, inspirieren und begeistern. Bestehende Gebäude revitalisieren wir nach den Prinzipien des zirkulären Bauens und machen sie zukunftsfähig.',
  },
  {
    titel: 'Für Menschen gedacht und gebaut',
    text: 'Als Strategie- und Planungsbüro gestalten wir kommerzielle Räume mit klarem Konzept. Zu Projektbeginn analysieren wir die Bedürfnisse der Menschen, die Nutzung des Raums und die Anforderungen des Marktes. Die gewonnenen Erkenntnisse fliessen in die Customer Journey, den Designprozess und die Architektur ein.',
  },
];

export default function ExpertisePage() {
  const referenzen = getFeaturedProjekte().slice(0, 3);

  return (
    <div className="pt-32 md:pt-40">
      <Container>
        <div className="max-w-3xl mb-16 md:mb-24">
          <p className="text-xs uppercase tracking-widest text-stone mb-4">Expertise</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-ink leading-tight">
            Architektur mit Klarheit
            <br />
            und Verantwortung
          </h1>
          <p className="mt-10 text-lg md:text-xl text-graphite leading-relaxed">
            Neue Lebensstile, Arbeitsformen und der Klimawandel verlangen, die gebaute
            Welt neu zu denken. Wir übersetzen diese Anforderungen in Architektur und
            Innenräume, die funktional, nachhaltig und auf die Bedürfnisse der Menschen
            zugeschnitten sind.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 border-t border-mist pt-16">
          {schwerpunkte.map((s) => (
            <div key={s.titel}>
              <h2 className="text-xl md:text-2xl font-light text-ink leading-snug mb-5">
                {s.titel}
              </h2>
              <p className="text-graphite leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-32 md:mt-40 border-t border-mist pt-16">
          <h2 className="text-2xl md:text-3xl font-light text-ink mb-12">
            Unsere Expertise zeigt sich in unseren Projekten.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {referenzen.map((projekt) => (
              <ProjektCard key={projekt.slug} projekt={projekt} />
            ))}
          </div>
          <div className="mt-16">
            <Button href="/projekte" variant="text">
              alle Projekte ansehen
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
