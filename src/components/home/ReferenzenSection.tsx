import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { SignetIcon } from '@/components/layout/Logo';
import ProjektCard from '@/components/projekte/ProjektCard';
import { getFeaturedProjekte } from '@/data/projekte';
import { ortMitKanton } from '@/lib/utils';

/**
 * Drei ausgewählte Referenzprojekte auf der Startseite.
 *
 * Statt drei gleich grosser Kacheln ein grosses Leitprojekt links, die
 * beiden anderen kleiner gestapelt rechts daneben — setzt eine Rangfolge,
 * statt alle drei gleich zu behandeln.
 */
export default function ReferenzenSection() {
  const [featured, ...weitere] = getFeaturedProjekte().slice(0, 3);

  return (
    <section className="py-16 md:py-20 border-t border-mist">
      <Container>
        <div className="mb-10 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-widest text-stone mb-4">Referenzen</p>
            <h2 className="text-3xl md:text-4xl font-medium text-ink leading-tight">
              Ausgewählte Projekte
            </h2>
          </div>
          <Button href="/projekte" variant="text" className="shrink-0">
            alle Projekte ansehen
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {featured && (
            <Link
              href={`/referenzen/${featured.slug}`}
              className="group flex flex-col lg:h-full"
              aria-label={`Zum Projekt ${featured.title} in ${ortMitKanton(featured)}`}
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-mist lg:aspect-auto lg:flex-1">
                <Image
                  src={featured.thumbnail}
                  alt={`${featured.title}, ${ortMitKanton(featured)}`}
                  fill
                  priority
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 z-10 flex items-end justify-start bg-black/50 p-6 opacity-0 transition-opacity duration-[400ms] ease-out group-hover:opacity-100">
                  <SignetIcon className="h-[88px] translate-y-[10px] text-white transition-transform duration-[400ms] ease-out group-hover:translate-y-0 md:h-[104px]" />
                </div>
              </div>
              <h3 className="mt-5 text-[1.75rem] font-medium leading-tight text-ink transition-colors group-hover:text-graphite md:text-[2.25rem]">
                {featured.title}
              </h3>
              <p className="mt-1 uppercase tracking-[0.1em] text-stone">
                {ortMitKanton(featured)}
              </p>
            </Link>
          )}

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-1">
            {weitere.map((p) => (
              <ProjektCard key={p.slug} projekt={p} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
