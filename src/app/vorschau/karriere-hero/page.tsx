import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { firma } from '@/data/firma';

export const metadata: Metadata = { robots: { index: false, follow: false } };

/**
 * Vorschau, Variante "Zwei Porträts": zwei Team-Fotos nebeneinander statt
 * eines einzelnen Video-/Bildblocks — persönlicher für eine Recruiting-
 * Seite, bewusst anderes Muster als Machbarkeitsstudie (Banner) und
 * Projektentwicklung (Kennzahl + schmales Bild).
 */
export default function KarriereHeroVorschau() {
  return (
    <div className="pt-32 pb-20 md:pb-28 md:pt-40">
      <div className="border-b border-mist bg-[#fffbe6] py-3 text-center text-sm text-ink">
        Entwurf — nicht live. Nur zum Vergleich, nicht verlinkt.
      </div>

      <Container className="mt-16">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="mb-4 text-xs uppercase tracking-widest text-stone">Karriere</p>
            <h1 className="mb-8 text-4xl font-normal leading-tight tracking-tight text-ink md:text-5xl">
              Wir suchen <span className="font-semibold">Architekt:innen</span>, die mit
              uns <span className="font-semibold">gestalten</span> wollen.
            </h1>
            <p className="text-lg leading-relaxed text-graphite">
              Wir verstärken unser Team in Obfelden und suchen eine Persönlichkeit, die
              Entwurf, Projektentwicklung oder Bauleitung mit Sorgfalt und Eigeninitiative
              vorantreibt — für Projekte in der ganzen Schweiz.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="relative aspect-[3/4] w-full overflow-hidden bg-mist">
              <Image
                src="/images/team/ejup-bajrami.jpg"
                alt="Ejup Bajrami, Projektleiter bei Atelier AA Architekten"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1100px) 50vw, 25vw"
              />
            </div>
            <div className="relative aspect-[3/4] w-full overflow-hidden bg-mist">
              <Image
                src="/images/team/yakup-uslu.jpg"
                alt="Yakup Uslu, Projektleiter bei Atelier AA Architekten"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1100px) 50vw, 25vw"
              />
            </div>
          </div>
        </div>

        <div className="max-w-3xl">
          <div className="mt-14 border-t border-mist pt-10">
            <h2 className="mb-5 text-xs uppercase tracking-widest text-stone">
              Was du mitbringst
            </h2>
            <ul className="space-y-3 text-ink">
              <li>Abgeschlossenes Studium oder Ausbildung als Architekt:in</li>
              <li>Erfahrung in Entwurf, Baueingabe oder Bauleitung</li>
              <li>Sicherer Umgang mit gängiger Planungssoftware</li>
              <li>Selbstständige, sorgfältige Arbeitsweise im Team</li>
            </ul>
          </div>

          <div className="mt-14 border-t border-mist pt-10">
            <h2 className="mb-5 text-xs uppercase tracking-widest text-stone">
              So bewirbst du dich
            </h2>
            <p className="text-graphite leading-relaxed">
              Schick uns deine Bewerbung mit den üblichen Unterlagen an{' '}
              <Link
                href={`mailto:${firma.email}`}
                className="text-ink underline underline-offset-4 transition-colors hover:text-graphite"
              >
                {firma.email}
              </Link>
              . Wir melden uns verlässlich zurück.
            </p>
            <div className="mt-8">
              <Button href="/kontakt" variant="text">
                Kontakt aufnehmen
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
