import Image from 'next/image';
import type { Studie } from '@/types';

interface StudienSectionProps {
  ort: string;
  studien: Studie[];
}

const KATEGORIE_TEXT: Record<Studie['kategorie'], string> = {
  Machbarkeitsstudie: 'Machbarkeitsstudie',
  Konzeptstudie: 'Konzeptstudie',
  Wettbewerbsbeitrag: 'Wettbewerbsbeitrag',
  Bauherrenvertretung: 'Bauherrenvertretung',
};

function StudieCard({ studie }: { studie: Studie }) {
  const adresse = [studie.strasse, studie.parzelle ? `Parzelle ${studie.parzelle}` : null]
    .filter(Boolean)
    .join(' · ');

  return (
    <article className="border-t border-mist pt-12 first:border-t-0 first:pt-0">
      <div className="mb-6 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
        <div>
          <p className="mb-2 text-xs font-medium uppercase tracking-widest text-stone">
            {KATEGORIE_TEXT[studie.kategorie]}
            {studie.datum ? ` · ${studie.datum}` : ''}
          </p>
          <h3 className="text-2xl font-medium leading-tight text-ink md:text-3xl">
            {studie.ort}
            {adresse ? <span className="text-graphite">, {adresse}</span> : null}
          </h3>
        </div>
      </div>

      {studie.luftbild && studie.katasterplan ? (
        <div className="mb-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
          <figure>
            <Image
              src={studie.luftbild}
              alt={`Luftbild des Grundstücks in ${studie.ort}, Atelier AA Architekten`}
              width={800}
              height={800}
              className="h-auto w-full bg-mist"
            />
            <figcaption className="mt-2 text-xs uppercase tracking-widest text-stone">
              Luftbild
            </figcaption>
          </figure>
          <figure>
            <Image
              src={studie.katasterplan}
              alt={`Amtlicher Katasterplan des Grundstücks in ${studie.ort}, Atelier AA Architekten`}
              width={800}
              height={800}
              className="h-auto w-full bg-mist"
            />
            <figcaption className="mt-2 text-xs uppercase tracking-widest text-stone">
              Amtlicher Katasterplan
            </figcaption>
          </figure>
        </div>
      ) : studie.luftbild || studie.katasterplan || studie.projektbild ? (
        <div className="mb-8">
          <Image
            src={(studie.luftbild ?? studie.katasterplan ?? studie.projektbild) as string}
            alt={`${KATEGORIE_TEXT[studie.kategorie]} in ${studie.ort}, Atelier AA Architekten`}
            width={1200}
            height={800}
            className="h-auto w-full bg-mist"
          />
        </div>
      ) : null}

      <p className="mb-8 max-w-3xl leading-relaxed text-graphite">{studie.analyse}</p>

      {studie.kennzahlen.length > 0 && (
        <dl className="grid max-w-xl grid-cols-1 gap-3 sm:grid-cols-2">
          {studie.kennzahlen.map((k) => (
            <div key={k.label} className="flex gap-4">
              <dt className="w-36 shrink-0 text-sm text-stone">{k.label}</dt>
              <dd className="text-sm text-ink">{k.wert}</dd>
            </div>
          ))}
        </dl>
      )}
    </article>
  );
}

/**
 * Frühphasige Vorabklärungen (Machbarkeitsstudien, Konzeptstudien,
 * Wettbewerbsbeiträge) für einen Ort — getrennt von den gebauten/projektierten
 * Referenzen in `ProjektGrid`. Wird auf den Regionen-Seiten nur gerendert,
 * wenn für den Ort mindestens eine Studie vorliegt.
 */
export default function StudienSection({ ort, studien }: StudienSectionProps) {
  if (studien.length === 0) return null;

  return (
    <section className="border-t border-mist pt-16">
      <p className="mb-4 text-xs uppercase tracking-widest text-stone">Vorabklärung</p>
      <h2 className="mb-10 max-w-2xl text-3xl font-medium leading-tight tracking-tight text-ink md:text-4xl">
        Machbarkeitsstudien in {ort}
      </h2>
      <div className="space-y-16">
        {studien.map((s) => (
          <StudieCard key={s.slug} studie={s} />
        ))}
      </div>
    </section>
  );
}
