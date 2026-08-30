import type { Metadata } from 'next';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import VorhabenCta from '@/components/ui/VorhabenCta';
import { breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Integrierte Projektabwicklung',
  description:
    'Atelier AA Architekten setzt sich mit integrierten Projektabwicklungsmodellen wie Design-Build auseinander und wendet in einem aktuellen Projekt bereits zentrale Prinzipien davon an.',
  alternates: { canonical: '/leistungen/integrierte-projektabwicklung' },
};

const PUNKTE = [
  {
    titel: 'Planung und Ausführung früher verbunden',
    text: 'Fachwissen aus der Ausführung fliesst früher in Entscheidungen ein, statt erst nach Abschluss der Planung.',
  },
  {
    titel: 'Unternehmerwissen in frühen Phasen',
    text: 'Technische und wirtschaftliche Konsequenzen werden sichtbar, bevor der Entwurf feststeht.',
  },
  {
    titel: 'Architektur, Kosten und Machbarkeit gemeinsam betrachtet',
    text: 'Gestaltung, Wirtschaftlichkeit und Realisierbarkeit werden zusammen geprüft, nicht nacheinander.',
  },
  {
    titel: 'Weniger unnötige Schnittstellen',
    text: 'Weniger Übergaben zwischen Planung und Ausführung bedeuten weniger Reibung und klarere Verantwortlichkeiten.',
  },
  {
    titel: 'Klarere Entscheidungswege',
    text: 'Wer eine Entscheidung trifft und auf welcher Grundlage, ist von Beginn an nachvollziehbar.',
  },
  {
    titel: 'Bessere Grundlage für Variantenentscheide',
    text: 'Varianten lassen sich früher gegenüberstellen, weil Kosten- und Ausführungsfragen schon einfliessen.',
  },
  {
    titel: 'Mehr Kontinuität zwischen Entwurf und Ausführung',
    text: 'Wer ein Projekt entwirft, bleibt näher an der Umsetzung dran, statt es nach der Planung zu übergeben.',
  },
];

/**
 * Eigene Seite statt eines Abschnitts auf /leistungen — bewusst kein
 * `Service`-Schema wie bei Machbarkeitsstudie/Projektentwicklung: das ist
 * keine abgeschlossene, buchbare Leistung, sondern eine Weiterentwicklung
 * der Arbeitsweise, die wir hier einordnen, nicht verkaufen. Von /leistungen
 * aus nur über eine schlanke Teaser-Kachel erreichbar, nicht als sechste
 * gleichrangige Leistung.
 */
export default function IntegrierteProjektabwicklungPage() {
  const breadcrumb = breadcrumbSchema([
    { name: 'Startseite', pfad: '/' },
    { name: 'Leistungen', pfad: '/leistungen' },
    { name: 'Integrierte Projektabwicklung', pfad: '/leistungen/integrierte-projektabwicklung' },
  ]);

  return (
    <div className="pt-32 pb-20 md:pb-28 md:pt-40">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <Container>
        <Link
          href="/leistungen"
          className="mb-4 inline-block text-xs uppercase tracking-widest text-stone hover:text-ink"
        >
          ← Leistungen
        </Link>
        <p className="mb-4 text-xs uppercase tracking-widest text-stone">Weiterentwicklung</p>
        <h1 className="max-w-2xl text-h2 font-normal leading-[1.1] tracking-tight text-ink md:text-h1">
          Integrierte Projektabwicklung
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-graphite">
          Wir haben uns intensiv mit integrierten Projektabwicklungsmodellen wie
          Design-Build auseinandergesetzt und wenden in einem aktuellen Projekt bereits
          zentrale Prinzipien daraus an, nicht als starres Schema, sondern
          projektbezogen, dort wo es ein Projekt tatsächlich besser macht.
        </p>

        <h2 className="sr-only">Was sich dadurch ändert</h2>
        <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-8 border-t border-mist pt-16 sm:grid-cols-2 md:mt-20">
          {PUNKTE.map((punkt) => (
            <div key={punkt.titel} className="border-t border-mist pt-5">
              <h3 className="text-base font-medium text-ink">{punkt.titel}</h3>
              <p className="mt-3 text-sm leading-relaxed text-graphite">{punkt.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <Link
            href="/insights/design-build-projektabwicklung"
            className="text-sm text-ink underline decoration-stone underline-offset-4 hover:decoration-ink"
          >
            Mehr dazu im Journal →
          </Link>
        </div>

      </Container>

      <div className="mt-24 md:mt-32">
        <VorhabenCta />
      </div>
    </div>
  );
}
