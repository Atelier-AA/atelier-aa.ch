import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import MehrLesen from '@/components/ui/MehrLesen';
import VorhabenCta from '@/components/ui/VorhabenCta';
import { getTeamMember } from '@/data/team';

export const metadata: Metadata = {
  title: 'Büro',
  description:
    'Atelier AA Architekten GmbH in Obfelden ZH: Architekturbüro für Neubau, Umbau, Sanierung, Projektentwicklung und Generalplanung in Zürich, Aargau und Zug.',
  alternates: { canonical: '/ueber-uns' },
};

/**
 * Die vier Ansätze sind keine eigene Erfindung, sondern Kernsätze aus
 * Alisamis Haltungstext (unten, wörtlich) auf einen Titel verdichtet — sie
 * dürfen sich nicht mit den fünf Leistungen (src/data/expertise.ts,
 * Beratung/Analyse/Planung/Realisierung/Generalplanung) überschneiden: die
 * Leistungen sind Prozessschritte, die Ansätze sind die Haltung dahinter.
 */
const ANSAETZE = [
  {
    titel: 'Zuhören vor Entwerfen',
    text: 'Unsere Aufgabe ist es, genau zuzuhören, die richtigen Fragen zu stellen und daraus eine Lösung zu entwickeln, die gestalterisch überzeugt und gleichzeitig realisierbar bleibt.',
  },
  {
    titel: 'Keine Architektur nach Schema',
    text: 'Jedes Projekt hat andere Voraussetzungen: einen anderen Ort, eine andere Bauherrschaft, ein anderes Budget und andere Ziele.',
  },
  {
    titel: 'Entwurf als Prozess',
    text: 'Architektur entwickelt sich. Man analysiert, entwirft, hinterfragt, verwirft und präzisiert, bis aus unterschiedlichen Anforderungen eine klare Antwort entsteht.',
  },
  {
    titel: 'Verantwortung für den gesamten Prozess',
    text: 'Gestaltung, Kosten, Termine, Bewilligungsfähigkeit und Ausführung müssen zusammen gedacht werden, nicht nur der Entwurf.',
  },
];

/**
 * Reine Firmenseite: Leitbild, Haltung, Ansätze, Geschichte, Region. Die
 * Team-Galerie steht auf einer eigenen Seite (/ueber-uns/team). Der
 * Haltungstext stand vorher zusätzlich auf Alisamis persönlicher Profilseite
 * — das erzeugte einen Widerspruch (derselbe Text an zwei Stellen), deshalb
 * steht er jetzt nur noch hier, als Haltung des Büros statt als private
 * Meinung.
 */
export default function UeberUnsPage() {
  const gruender = getTeamMember('alisami-aljili');
  const haltung = gruender?.editorial;

  return (
    <div className="pt-32 md:pt-40">
      <Container>
        <p className="text-xs uppercase tracking-widest text-stone mb-8">Büro</p>

        {/* Zwei Spalten, Text links, Bild rechts. Die Seite hat dadurch
            durchgehend zweispaltige Abschnitte mit wechselnder Seite
            (Einstieg Text links, Haltung Bild links, Weiterentwicklung Text
            links) — vorher stand alles untereinander über die volle Breite
            und wirkte deshalb textlastig. */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[3fr_2fr] lg:gap-16">
          <div>
            <h1 className="text-h2 font-normal leading-[1.15] tracking-tight text-ink md:text-h1">
              Wir entwerfen nicht für den <span className="font-semibold">Moment.</span> Wir
              schaffen Orte mit <span className="font-semibold">Bestand.</span>
            </h1>
            <p className="mt-8 max-w-lesbar text-lg leading-relaxed text-graphite">
              Atelier AA Architekten GmbH ist ein Architekturbüro mit Sitz in Obfelden im
              Kanton Zürich. Wir planen und realisieren Einfamilienhäuser,
              Mehrfamilienhäuser und Wohnüberbauungen, auf Wunsch auch im
              Generalplanermandat — von der Machbarkeitsstudie über Baugesuch und
              Ausführungsplanung bis zur Bauleitung.
            </p>
          </div>
          <div className="relative aspect-[4/3] w-full overflow-hidden bg-mist">
            <Image
              src="/images/buero/atelier-aa-buero-1.jpg"
              alt="Das Atelier von Atelier AA Architekten in Obfelden"
              fill
              priority
              className="object-cover grayscale"
              sizes="(max-width: 1100px) 100vw, 40vw"
            />
          </div>
        </div>
      </Container>

      {/* Haltung: wörtlich Alisamis eigener Text. */}
      {haltung && (
        <div className="mt-24 border-t border-mist pt-16 md:mt-32">
          <Container>
            <div className="grid grid-cols-1 items-center gap-x-16 gap-y-10 lg:grid-cols-[2fr_3fr]">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-mist">
                <Image
                  src="/images/kontakt/atelier-aa-kontakt-buero.jpg"
                  alt="Das Atelier von Atelier AA Architekten in Obfelden"
                  fill
                  className="object-cover grayscale"
                  sizes="(max-width: 1100px) 100vw, 40vw"
                />
              </div>
              <div className="text-lg leading-relaxed text-graphite">
                <p className="mb-6 text-xs uppercase tracking-widest text-stone">Haltung</p>
                <p>{haltung.absaetze[0]}</p>
                <MehrLesen className="mt-5 space-y-5">
                  {haltung.absaetze.slice(1).map((absatz) => (
                    <p key={absatz.slice(0, 40)}>{absatz}</p>
                  ))}
                  <p className="pt-2 text-2xl font-medium leading-snug text-ink">
                    {haltung.schlusszeile}
                  </p>
                </MehrLesen>
                <p className="mt-5 text-sm text-stone">
                  {gruender?.name}, {gruender?.rolle}
                </p>
              </div>
            </div>
          </Container>
        </div>
      )}

      {/* Ansätze: aus dem Haltungstext oben verdichtet, nicht neu erfunden. */}
      <div className="mt-24 border-t border-mist pt-16 md:mt-32">
        <Container>
          <p className="mb-4 text-xs uppercase tracking-widest text-stone">Ansätze</p>
          <h2 className="mb-10 max-w-xl text-h2 font-normal leading-tight text-ink md:text-h2">
            Vier Ansätze, die <span className="font-semibold">jedes Projekt</span> tragen.
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {ANSAETZE.map((a) => (
              <div key={a.titel} className="bg-mist p-8">
                <h3 className="text-h3 text-ink">{a.titel}</h3>
                <p className="mt-3 max-w-lesbar text-karte leading-relaxed text-graphite">{a.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* Weiterentwicklung der Haltung: nicht nur wie Architektur aussieht,
          sondern wie sie entsteht. Bewusst als Fortführung der Ansätze oben
          platziert, nicht als eigenständiges neues Leistungsversprechen —
          deshalb keine eigene Nav, kein "Design-Build"-Menüpunkt. */}
      <div className="mt-24 border-t border-mist pt-16 md:mt-32">
        <Container>
          <div className="grid grid-cols-1 items-center gap-x-14 gap-y-10 lg:grid-cols-2">
          <div>
          <p className="mb-4 text-xs uppercase tracking-widest text-stone">Weiterentwicklung</p>
          <h2 className="text-h2 font-normal leading-tight text-ink md:text-h2">
            Wir hinterfragen nicht nur, wie Architektur{' '}
            <span className="font-semibold">aussieht</span>, sondern auch, wie sie{' '}
            <span className="font-semibold">entsteht.</span>
          </h2>
          <p className="mt-8 max-w-lesbar text-lg leading-relaxed text-graphite">
            Die Qualität eines Projekts entscheidet sich nicht allein im Entwurf, sondern
            auch davon, wie früh Wissen zusammenkommt und wie eng Planung, Wirtschaftlichkeit
            und Ausführung miteinander verbunden sind. Deshalb haben wir uns mit integrierten
            Projektabwicklungsmodellen wie Design-Build auseinandergesetzt und wenden in
            einem aktuellen Projekt bereits zentrale Prinzipien daraus an.
          </p>

          <div className="mt-10">
            <Link
              href="/insights/design-build-projektabwicklung"
              className="text-karte text-ink underline decoration-stone underline-offset-4 hover:decoration-ink"
            >
              Mehr dazu im Journal →
            </Link>
          </div>
          </div>

          {/* Die drei Kacheln untereinander in der rechten Spalte — dieselbe
              Behandlung wie die Ansätze darüber, aber mit weniger Innenabstand:
              Sonst wird die Spalte deutlich höher als der Text daneben. Der
              frühere Abschluss ist entfallen, er wiederholte mit "Bevor wir
              gestalten, wollen wir verstehen" wörtlich die Überschrift des
              Büro-Abschnitts auf der Startseite. */}
          <div className="flex flex-col gap-4">
            <div className="bg-mist p-6">
              <h3 className="text-h3 text-ink">Wissen früher zusammenbringen</h3>
              <p className="mt-3 text-karte leading-relaxed text-graphite">
                Relevantes Fachwissen fliesst gezielter in den Prozess ein, statt erst nach
                der Planung eingeholt zu werden.
              </p>
            </div>
            <div className="bg-mist p-6">
              <h3 className="text-h3 text-ink">Entscheidungen früher treffen</h3>
              <p className="mt-3 text-karte leading-relaxed text-graphite">
                Technische und wirtschaftliche Konsequenzen werden sichtbar, bevor der Entwurf
                feststeht.
              </p>
            </div>
            <div className="bg-mist p-6">
              <h3 className="text-h3 text-ink">Planung und Ausführung verbinden</h3>
              <p className="mt-3 text-karte leading-relaxed text-graphite">
                Planung, Ausführung und wirtschaftliche Überlegungen werden früher
                zusammengebracht, statt strikt nacheinander gedacht.
              </p>
            </div>
          </div>

          </div>
        </Container>
      </div>

      <div className="mt-24 md:mt-32">
        <VorhabenCta />
      </div>
    </div>
  );
}
