import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import MehrLesen from '@/components/ui/MehrLesen';
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
    text: 'Gestaltung, Kosten, Termine, Bewilligungsfähigkeit und Ausführung müssen zusammen gedacht werden — nicht nur der Entwurf.',
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

        <h1 className="max-w-4xl text-3xl font-normal leading-[1.15] tracking-tight text-ink md:text-5xl lg:text-6xl">
          Wir entwerfen nicht für den <span className="font-semibold">Moment.</span> Wir
          schaffen Orte mit <span className="font-semibold">Bestand.</span>
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-graphite">
          Atelier AA Architekten GmbH ist ein Architekturbüro mit Sitz in Obfelden im
          Kanton Zürich. Wir planen und realisieren Einfamilienhäuser,
          Mehrfamilienhäuser und Wohnüberbauungen sowie Generalplanungsmandate in
          Zürich, Aargau und Zug, von der Machbarkeitsstudie über Baugesuch und
          Ausführungsplanung bis zur Bauleitung.
        </p>
      </Container>

      {/* Haltung: wörtlich Alisamis eigener Text. */}
      {haltung && (
        <div className="mt-24 border-t border-mist pt-16 md:mt-32">
          <Container>
            <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-[1fr_2fr]">
              <p className="text-xs uppercase tracking-widest text-stone">Haltung</p>
              <div className="max-w-2xl text-lg leading-relaxed text-graphite">
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
          <h2 className="mb-10 max-w-xl text-3xl font-normal leading-tight text-ink md:text-4xl">
            Vier Ansätze, die <span className="font-semibold">jedes Projekt</span> tragen.
          </h2>
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2">
            {ANSAETZE.map((a) => (
              <div key={a.titel}>
                <h3 className="text-base font-medium text-ink">{a.titel}</h3>
                <p className="mt-3 text-sm text-graphite leading-relaxed">{a.text}</p>
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
          <p className="mb-4 text-xs uppercase tracking-widest text-stone">Weiterentwicklung</p>
          <h2 className="max-w-3xl text-3xl font-normal leading-tight text-ink md:text-4xl">
            Wir hinterfragen nicht nur, wie Architektur{' '}
            <span className="font-semibold">aussieht</span>, sondern auch, wie sie{' '}
            <span className="font-semibold">entsteht.</span>
          </h2>
          <div className="mt-8 max-w-2xl space-y-5 text-lg leading-relaxed text-graphite">
            <p>
              Die Qualität eines Projekts entscheidet sich nicht allein im Entwurf. Sie wird
              ebenso davon geprägt, wie früh Wissen zusammenkommt, wie Entscheidungen getroffen
              werden und wie eng Planung, Wirtschaftlichkeit und Ausführung miteinander
              verbunden sind.
            </p>
            <p>
              Deshalb haben wir uns bei Atelier AA intensiv mit integrierten
              Projektabwicklungsmodellen wie Design-Build auseinandergesetzt. In einem
              aktuellen Projekt haben wir bereits begonnen, zentrale Prinzipien daraus
              anzuwenden: Wir bringen Planung, Ausführung und wirtschaftliche Überlegungen
              früher zusammen, beziehen relevantes Fachwissen gezielter in den Prozess ein und
              schaffen damit eine breitere Grundlage für Entscheidungen.
            </p>
            <p>
              Uns interessiert dabei nicht, ein neues Modell einfach zu übernehmen.{' '}
              <span className="font-medium text-ink">
                Wir wollen verstehen, welche Prinzipien ein Projekt tatsächlich besser machen.
              </span>{' '}
              Design-Build verstehen wir deshalb nicht als starres Schema, sondern als einen
              Ansatz, den wir weiterdenken und projektbezogen einsetzen — denn auch die Art,
              wie ein Projekt entsteht, ist für uns Teil der Architektur.
            </p>
            <p className="pt-2 text-2xl font-medium leading-snug text-ink">
              Bevor wir gestalten, wollen wir verstehen. Bevor wir entscheiden, wollen wir das
              relevante Wissen zusammenbringen.
            </p>
          </div>
          <div className="mt-8">
            <Link
              href="/insights/design-build-projektabwicklung"
              className="text-sm text-ink underline decoration-stone underline-offset-4 hover:decoration-ink"
            >
              Mehr dazu im Journal →
            </Link>
          </div>
        </Container>
      </div>

      {/* Echte Bürofotos statt des entfernten Videos, plus Link zur
          Team-Seite — ohne die Geschichte-Erzählung, die hier zu viel war.
          Drei statt nur ein Bild, aber als schlanker Streifen statt einer
          grossen Galerie; alle drei in Schwarzweiss wie die Team-Fotos. */}
      <div className="mt-24 border-t border-mist pt-16 md:mt-32">
        <Container>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {[
              '/images/kontakt/kontakt-buero.jpg',
              '/images/buero/buero-1.jpg',
              '/images/buero/buero-2.jpg',
            ].map((src) => (
              <div key={src} className="relative aspect-[4/3] w-full overflow-hidden bg-mist">
                <Image
                  src={src}
                  alt="Das Atelier von Atelier AA Architekten in Obfelden"
                  fill
                  className="object-cover grayscale"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Button href="/ueber-uns/team" variant="text">
              Das Team kennenlernen
            </Button>
          </div>
        </Container>
      </div>

      {/* Trennstrich ausserhalb des Container, randvoll über die ganze
          Fensterbreite, wie auf der Startseite. */}
      <div className="mt-24 border-t border-mist pt-16 pb-20 md:mt-32 md:pb-28">
        <Container>
          <div className="max-w-3xl">
            <p className="mb-4 text-xs uppercase tracking-widest text-stone">Nächster Schritt</p>
            <h2 className="mb-6 text-4xl font-normal leading-tight text-ink md:text-5xl">
              Sie haben ein <span className="font-semibold">Vorhaben?</span>
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-graphite">
              Sprechen wir über Ihr Projekt, offen, konkret und unverbindlich.
            </p>
            <Button href="/kontakt" variant="text">
              Kontaktieren Sie uns
            </Button>
          </div>
        </Container>
      </div>
    </div>
  );
}
