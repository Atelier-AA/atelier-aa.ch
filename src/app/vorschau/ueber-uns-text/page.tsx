import type { Metadata } from 'next';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

export const metadata: Metadata = { robots: { index: false, follow: false } };

/**
 * Reine Text-Vorschau für /ueber-uns — nur die fünf besprochenen Stellen
 * geändert (Eröffnungssatz, Bestand/Umbau ergänzt, Team-/3D-Satz, Rest
 * unverändert). Struktur, Video, CTA und "Nächster Schritt" bewusst 1:1
 * von der Live-Seite übernommen, damit nur der Text beurteilt wird.
 * Diese Route ist nicht verlinkt und wird nicht in der Sitemap geführt.
 */
export default function UeberUnsTextVorschau() {
  return (
    <div className="pt-32 md:pt-40">
      <div className="border-b border-mist bg-[#fffbe6] py-3 text-center text-sm text-ink">
        Entwurf — nicht live. Nur zum Textvergleich, nicht verlinkt.
      </div>

      <Container className="mt-16">
        <p className="text-xs uppercase tracking-widest text-stone mb-8">Über uns</p>

        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-normal text-ink leading-[1.1] tracking-tight mb-4">
              Wir beginnen beim <span className="font-semibold">Ort</span> — nicht beim{' '}
              <span className="font-semibold">Entwurf.</span>
            </h1>
            <div className="space-y-3 text-graphite leading-snug">
              <p className="text-lg text-ink">
                Atelier AA Architekten GmbH ist ein Architekturbüro mit Sitz in Obfelden im
                Kanton Zürich. Wir planen Neubauten, Umbauten und Sanierungen von
                Einfamilienhäusern, Mehrfamilienhäusern und Wohnüberbauungen im Bestand,
                dazu Generalplanungsmandate in Zürich, Aargau und Zug, von der
                Machbarkeitsstudie über Baugesuch und Ausführungsplanung bis zur
                Bauleitung.
              </p>
              <p>
                Zuhören heisst bei uns: ein Gespräch vor Ort führen, das Grundstück in
                seiner Umgebung verstehen, und die Fragen stellen, die sich im
                Projektverlauf sonst erst später ergeben. Erst danach beginnt der
                Entwurf, nie umgekehrt.
              </p>
              <p>
                Wir führen das Atelier AA Architekten mit dieser Haltung, mit einem
                eingespielten Team aus Architekt:innen und Bauleiter:innen. Räumliche
                Zusammenhänge klären wir früh in 3D, damit Sie Ihr Projekt erleben
                können, lange bevor der erste Bagger auffährt.
              </p>
              <p>
                Wir verbinden Architektur, Funktion und Wirtschaftlichkeit zu
                nachhaltigen Konzepten mit langfristigem Mehrwert. Dabei denken wir
                Ressourcen, Konstruktion und Lebenszyklus von Anfang an mit. Diese
                Haltung tragen wir seit der Gründung 2021 in jedes Projekt.
              </p>
            </div>
            <div className="mt-6">
              <Button href="/ueber-uns/team" variant="text">
                Unser Team ansehen
              </Button>
            </div>
          </div>

          <div className="relative aspect-video w-full overflow-hidden bg-mist lg:aspect-square">
            <video
              className="absolute inset-0 h-full w-full object-cover"
              src="/videos/ueber-uns-team.mp4"
              poster="/images/team/atelier-aa-ueber-uns-team-poster.jpg"
              aria-label="Das Team von Atelier AA Architekten im Büro in Obfelden"
              autoPlay
              muted
              loop
              playsInline
              preload="none"
            />
          </div>
        </div>
        {/* Haltung als vier eigenständige Grundsätze statt nur im Fliesstext
            erwähnt — mehr Substanz, ohne Kennzahlen zu erfinden, die es für
            ein junges Büro nicht gibt (anders als bei grossen Vorbildern mit
            mehreren Standorten). */}
        <div className="mt-20 border-t border-mist pt-16 md:mt-28">
          <p className="mb-4 text-xs uppercase tracking-widest text-stone">Haltung</p>
          <h2 className="mb-10 max-w-xl text-3xl font-normal leading-tight text-ink md:text-4xl">
            Vier Grundsätze, die <span className="font-semibold">jedes Projekt</span>{' '}
            tragen.
          </h2>
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2">
            <div>
              <h3 className="text-base font-medium text-ink">Zuhören vor Entwerfen</h3>
              <p className="mt-3 text-sm text-graphite leading-relaxed">
                Wir beginnen mit einem Gespräch vor Ort, nicht am Zeichentisch. Erst wenn
                wir das Grundstück und Ihre Bedürfnisse verstehen, beginnt der Entwurf.
              </p>
            </div>
            <div>
              <h3 className="text-base font-medium text-ink">Wirtschaftlichkeit von Anfang an</h3>
              <p className="mt-3 text-sm text-graphite leading-relaxed">
                Kosten, Mietzinsniveau und Wohnungsmix rechnen wir von der ersten Skizze
                an mit, nicht erst wenn der Entwurf steht — aus über fünfzehn Jahren
                eigener Bau- und Immobilienpraxis.
              </p>
            </div>
            <div>
              <h3 className="text-base font-medium text-ink">Verantwortung für den Bestand</h3>
              <p className="mt-3 text-sm text-graphite leading-relaxed">
                Neubau und Umbau sind für uns gleichwertig. Wo ein Gebäude bereits steht,
                fragen wir zuerst, was davon trägt, bevor wir neu planen.
              </p>
            </div>
            <div>
              <h3 className="text-base font-medium text-ink">Ein Team, ein Ansprechpartner</h3>
              <p className="mt-3 text-sm text-graphite leading-relaxed">
                Von der Machbarkeitsstudie bis zur Bauleitung begleiten Sie dieselben
                Personen durch Ihr Projekt — auch im Generalplaner-Mandat.
              </p>
            </div>
          </div>
        </div>

        {/* Kurze Gründungsgeschichte statt nur ein Nebensatz zum Jahr 2021 —
            konkret, aber ohne die Grösse des Büros zu übertreiben. */}
        <div className="mt-20 max-w-2xl border-t border-mist pt-16 md:mt-28">
          <p className="mb-4 text-xs uppercase tracking-widest text-stone">Geschichte</p>
          <h2 className="mb-6 text-3xl font-normal leading-tight text-ink md:text-4xl">
            Ein junges Büro mit <span className="font-semibold">langer Erfahrung.</span>
          </h2>
          <p className="text-lg leading-relaxed text-graphite">
            Atelier AA Architekten wurde 2021 in Obfelden gegründet — nach über
            fünfzehn Jahren, die Gründer Alisami Aljili zuvor in der Bau- und
            Immobilienpraxis gesammelt hatte. Diese Erfahrung prägt bis heute, wie wir
            arbeiten: Wir entwerfen nicht am Markt vorbei, sondern kennen die Zahlen,
            die über die Realisierbarkeit eines Projekts entscheiden. Seither ist das
            Team gewachsen, die Haltung ist gleich geblieben.
          </p>
        </div>
      </Container>

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
