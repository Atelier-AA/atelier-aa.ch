import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import { ortMitKanton } from '@/lib/utils';
import type { Projekt } from '@/types';

interface WeitereProjekteProps {
  projekte: Projekt[];
}

/**
 * 4 schmale, hohe Kacheln (aspect-[3/4]) statt der quadratischen
 * Standardkarten — gleiches Bildformat wie bei Machbarkeitsstudie,
 * Projektentwicklung und den Insights auf der Startseite.
 */
export default function WeitereProjekte({ projekte }: WeitereProjekteProps) {
  if (projekte.length === 0) return null;

  return (
    <section className="py-20 md:py-28 border-t border-mist mt-20">
      <Container>
        <h2 className="text-xs uppercase tracking-widest text-stone mb-12">
          Weitere Projekte
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {projekte.map((projekt, idx) => (
            <Link
              key={projekt.slug}
              href={`/referenzen/${projekt.slug}`}
              className="group block min-w-0"
              aria-label={`Zum Projekt ${projekt.title} in ${ortMitKanton(projekt)}`}
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-mist">
                <Image
                  src={projekt.thumbnail}
                  alt={`${projekt.title}, ${ortMitKanton(projekt)}, Atelier AA Architekten`}
                  fill
                  priority={idx < 2}
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.05]"
                  sizes="(max-width: 600px) 100vw, (max-width: 1280px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/0 to-ink/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute inset-x-4 bottom-4 translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="truncate text-lg font-medium leading-tight text-white">
                    {projekt.title}
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-[0.1em] text-white/70">
                    {ortMitKanton(projekt)}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
