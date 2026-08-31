import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import ProjektGrid from '@/components/projekte/ProjektGrid';
import StudienGrid from '@/components/studien/StudienGrid';
import { alleKantone, getOrtBySlug, orteInKanton } from '@/lib/regionen';
import { breadcrumbSchema } from '@/lib/schema';

interface PageProps {
  params: Promise<{ kanton: string; ort: string }>;
}

/**
 * Gebäudetyp mit korrektem unbestimmtem Artikel im Akkusativ.
 *
 * Die frühere Fassung setzte pauschal `ein {typ.toLowerCase()}` und erzeugte
 * damit gleich drei Fehler: Kleinschreibung eines Substantivs, falsches
 * Geschlecht ("ein Wohnüberbauung", "ein Gewerbebau") und einen
 * Singular-Artikel vor einem Plural ("ein Reiheneinfamilienhäuser").
 * Plural-Typen bekommen gar keinen Artikel.
 */
/**
 * Aus dem `jahr`-Feld einen grammatikalisch und sachlich richtigen Satzteil
 * bilden. Das Feld enthält entweder eine Jahreszahl oder einen Status
 * ("im Bau", "baubewilligt", "nicht realisiert"). Vorher wurden nur zwei
 * Statuswerte abgefangen, alle anderen landeten in `realisiert (…)` — die
 * Gemeindeseite behauptete dadurch "realisiert (nicht realisiert)" und
 * "realisiert (baubewilligt)".
 */
function statusSatz(jahr: string): string {
  if (/^\d{4}$/.test(jahr)) return `realisiert (${jahr})`;
  switch (jahr) {
    case 'im Bau':
    case 'in Realisierung':
      return 'geplant, das Projekt ist im Bau';
    case 'baubewilligt':
      return 'geplant, das Projekt ist baubewilligt';
    case 'in Planung':
      return 'projektiert';
    case 'nicht realisiert':
      return 'projektiert, gebaut wurde es nicht';
    default:
      return `projektiert (${jahr})`;
  }
}

function mitArtikel(typ: string): string {
  const artikel: Record<string, string> = {
    Doppeleinfamilienhaus: 'ein',
    Einfamilienhaus: 'ein',
    Mehrfamilienhaus: 'ein',
    Gewerbebau: 'einen',
    Wohnüberbauung: 'eine',
  };
  const a = artikel[typ];
  return a ? `${a} ${typ}` : typ;
}

export function generateStaticParams() {
  return alleKantone().flatMap((k) =>
    orteInKanton(k.kuerzel).map((o) => ({ kanton: k.slug, ort: o.slug }))
  );
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { kanton: kantonSlug, ort: ortSlug } = await params;
  const treffer = getOrtBySlug(kantonSlug, ortSlug);
  if (!treffer) return { title: 'Seite nicht gefunden' };

  const { kanton, ort } = treffer;
  const erstesProjekt = ort.projekte[0];
  const beschreibung = erstesProjekt
    ? `Atelier AA Architekten GmbH in ${ort.ort} (Kanton ${kanton.name}): ${erstesProjekt.typ}${
        ort.projekte.length > 1 ? ` und ${ort.projekte.length - 1} weitere Bauvorhaben` : ''
      }.`
    : `Atelier AA Architekten GmbH in ${ort.ort} (Kanton ${kanton.name}): Machbarkeitsstudie${
        ort.studien.length > 1 ? 'n' : ''
      } für ein Bauvorhaben.`;
  return {
    title: `Architekt in ${ort.ort}`,
    description: beschreibung,
    alternates: { canonical: `/regionen/${kanton.slug}/${ort.slug}` },
    /*
     * Gemeinden, hinter denen nur eine Studie steht, gehen nicht in den
     * Index — sie bleiben erreichbar und intern verlinkt (`follow`).
     *
     * Grund: Von rund 53 Wörtern je Gemeindeseite sind über die Hälfte auf
     * allen Seiten zeichengleich. Ein Vergleich aller Paare ergab 963 über
     * 90 % Textähnlichkeit, das ähnlichste Paar bei 98 %. Solche
     * Beinahe-Duplikate nimmt Google in der Regel ohnehin nicht auf; sie
     * jetzt anzubieten, schadet beim Neustart mehr, als sie nützen.
     *
     * Die Gemeinden mit einem realisierten Projekt bleiben indexiert: Dort
     * trägt der Text eine eigene Aussage. Sobald die übrigen Seiten
     * inhaltlich ausgebaut sind, faellt diese Sperre von selbst weg.
     */
    ...(ort.projekte.length === 0 ? { robots: { index: false, follow: true } } : {}),
  };
}

export default async function OrtPage({ params }: PageProps) {
  const { kanton: kantonSlug, ort: ortSlug } = await params;
  const treffer = getOrtBySlug(kantonSlug, ortSlug);
  if (!treffer) notFound();

  const { kanton, ort } = treffer;
  const mehrere = ort.projekte.length > 1;
  const hatProjekte = ort.projekte.length > 0;

  const breadcrumb = breadcrumbSchema([
    { name: 'Startseite', pfad: '/' },
    { name: `Kanton ${kanton.name}`, pfad: `/regionen/${kanton.slug}` },
    { name: ort.ort, pfad: `/regionen/${kanton.slug}/${ort.slug}` },
  ]);

  return (
    <div className="pt-32 pb-20 md:pb-28 md:pt-40">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <Container>
        <div className="mb-16 max-w-3xl md:mb-24">
          <Link
            href={`/regionen/${kanton.slug}`}
            className="mb-4 inline-block text-xs uppercase tracking-widest text-stone hover:text-ink"
          >
            ← Kanton {kanton.name}
          </Link>
          <h1 className="text-h2 font-normal leading-[1.1] tracking-tight text-ink md:text-h1">
            Architekt in <span className="font-semibold">{ort.ort}</span>
          </h1>
          <p className="mt-10 text-lg leading-relaxed text-graphite md:text-xl">
            {hatProjekte ? (
              mehrere ? (
                <>
                  In {ort.ort} ({kanton.name}) haben wir {ort.projekte.length} Bauvorhaben
                  realisiert oder projektiert:{' '}
                  {ort.projekte.map((p) => p.title).join(', ').replace(/, ([^,]*)$/, ' und $1')}.
                </>
              ) : (
                <>
                  In {ort.ort} ({kanton.name}) haben wir{' '}
                  {ort.projekte[0].regionSatz ??
                    `${mitArtikel(ort.projekte[0].typ)} ${statusSatz(ort.projekte[0].jahr)}`}
                  .
                </>
              )
            ) : ort.studien.length > 1 ? (
              <>
                In {ort.ort} ({kanton.name}) haben wir {ort.studien.length} Machbarkeitsstudien
                durchgeführt: die Grundlage, bevor aus einem Grundstück ein konkretes Bauprojekt
                wird.
              </>
            ) : (
              <>
                In {ort.ort} ({kanton.name}) haben wir eine Machbarkeitsstudie durchgeführt: die
                Grundlage, bevor aus einem Grundstück ein konkretes Bauprojekt wird.
              </>
            )}
          </p>
        </div>

        {hatProjekte && (
          <div className="mb-16 md:mb-24">
            <ProjektGrid projekte={ort.projekte} />
          </div>
        )}

        {ort.studien.length > 0 && (
          <div className="mb-16 md:mb-24">
            <h2 className="mb-8 text-xs uppercase tracking-widest text-stone">
              Machbarkeitsstudien in {ort.ort}
            </h2>
            <StudienGrid studien={ort.studien} />
          </div>
        )}

      </Container>

      {/* Trennstrich ausserhalb des Container, randvoll über die ganze
          Fensterbreite, wie auf der Startseite. */}
      <div className="mt-16 border-t border-mist pt-16 md:mt-20">
        <Container>
          <div className="max-w-3xl">
            <p className="mb-4 text-xs uppercase tracking-widest text-stone">
              Nächster Schritt
            </p>
            <h2 className="mb-6 max-w-[18ch] text-h2 font-medium leading-tight tracking-tight text-ink md:text-h1">
              Sie bauen in {ort.ort}?
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-graphite">
              Sprechen Sie mit uns über Ihr Vorhaben: wir kennen die Bauordnung und die
              Abläufe vor Ort.
            </p>
            <Button href="/kontakt" variant="text">
              Kontakt aufnehmen
            </Button>
          </div>
        </Container>
      </div>
    </div>
  );
}
