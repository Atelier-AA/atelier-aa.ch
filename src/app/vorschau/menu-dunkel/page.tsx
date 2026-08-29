import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = { robots: { index: false, follow: false } };

/**
 * Vorschau: Menü mit dunkler Fläche statt heller.
 *
 * Kein Nachbau — diese Seite zeigt dasselbe `MobileMenu` wie die echte
 * Website, nur mit der Palette "dunkel" (siehe PALETTEN dort). Der Header
 * schaltet allein anhand dieser Route um, siehe Header.tsx. Dadurch sind
 * Aufbau, Verlauf, Animation und Abstände identisch zur hellen Fassung und
 * der Vergleich zeigt wirklich nur den Farbunterschied.
 *
 * Hinter dem Menü liegt dasselbe Hero-Bild wie auf der Startseite, damit der
 * durchsichtige linke Bereich dasselbe zeigt wie dort.
 */
export default function MenuDunkelVorschau() {
  return (
    <div className="relative min-h-screen">
      <Image
        src="/images/hero/atelier-aa-hero-hochwarting-2.jpg"
        alt="Mehrfamilienhaus Hochwarting, Atelier AA Architekten"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      {/* Wie auf der Startseite: leichte Abdunklung, damit die weisse
          Kopfzeile über dem Bild lesbar bleibt. */}
      <div aria-hidden="true" className="absolute inset-0 bg-black/30" />

      <div className="relative flex min-h-screen items-center justify-center px-6">
        <div className="max-w-md bg-white/95 p-8 text-ink backdrop-blur">
          <p className="text-xs uppercase tracking-widest text-stone">Vorschau</p>
          <h1 className="mt-4 text-2xl font-medium leading-tight">
            Menü mit dunkler Fläche
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-graphite">
            Oben rechts auf den Burger tippen. Es öffnet sich dasselbe Menü wie
            auf der Website, nur dunkel statt hell — gleicher Verlauf von rechts
            nach links, gleiche Animation, gleiche Abstände.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-graphite">
            Zum Vergleich die helle Fassung auf jeder normalen Seite, etwa der{' '}
            <Link
              href="/"
              className="underline decoration-stone underline-offset-4 hover:decoration-ink"
            >
              Startseite
            </Link>
            .
          </p>
          <p className="mt-6 text-xs leading-relaxed text-stone">
            Interne Entwurfsseite, für Suchmaschinen gesperrt.
          </p>
        </div>
      </div>
    </div>
  );
}
