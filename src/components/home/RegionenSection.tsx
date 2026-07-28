import Container from '@/components/ui/Container';
import { regionen, zahlen } from '@/data/startseite';

/**
 * Einsatzgebiet und Kennzahlen.
 *
 * Der wichtigste Abschnitt für die regionale Suche: Wer «Architekt Affoltern am
 * Albis» oder «Architekturbüro Baar» sucht — sei es bei Google oder über eine
 * KI —, findet nur, was diese Ortsnamen ausgeschrieben enthält. Die Liste ist
 * kein Keyword-Teppich, sondern die tatsächliche Aufzählung des Arbeitsgebiets.
 */
export default function RegionenSection() {
  return (
    <section className="py-20 md:py-28 border-t border-mist">
      <Container>
        <div className="max-w-3xl mb-14">
          <p className="text-xs uppercase tracking-widest text-stone mb-4">
            Einsatzgebiet
          </p>
          <h2 className="text-3xl md:text-4xl font-medium text-ink leading-tight">
            Architektur in Zürich, Aargau und Zug
          </h2>
          <p className="mt-8 text-lg text-graphite leading-relaxed">
            Unser Büro liegt in Obfelden, im Knonauer Amt an der Grenze der drei
            Kantone. Von dort erreichen wir unsere Projekte in kurzer Zeit — das ist
            keine Nebensache, sondern die Voraussetzung für eine Bauleitung, die
            regelmässig vor Ort ist.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          {regionen.map((r) => (
            <div key={r.kuerzel}>
              <h3 className="text-xl font-medium text-ink mb-4">{r.kanton}</h3>
              <p className="text-graphite leading-relaxed">{r.orte}</p>
            </div>
          ))}
        </div>

        <dl className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-mist pt-12">
          {zahlen.map((z) => (
            <div key={z.label}>
              <dt className="sr-only">{z.label}</dt>
              <dd>
                <span className="block text-3xl md:text-4xl font-medium text-ink">
                  {z.wert}
                </span>
                <span className="mt-2 block text-sm text-stone leading-snug">
                  {z.label}
                </span>
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
