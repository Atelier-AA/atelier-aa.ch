import type { Metadata } from 'next';
import Container from '@/components/ui/Container';
import TeamGrid from '@/components/ueber-uns/TeamGrid';
import OffeneStellen from '@/components/ueber-uns/OffeneStellen';
import WeiterLink from '@/components/ui/WeiterLink';
import { team } from '@/data/team';

export const metadata: Metadata = {
  title: 'Über uns',
  description:
    'Das Team von Atelier AA Architekten GmbH in Obfelden ZH. Geführt von Aljili Aljisami, Dipl. Architekt. Wir planen Wohn- und Gewerbebauten mit Fokus auf Nachhaltigkeit und langfristigen Wert.',
};

export default function UeberUnsPage() {
  return (
    <>
      <div className="pt-24 md:pt-28">
        <Container className="mt-16 md:mt-24">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-widest text-stone mb-4">
              Über uns
            </p>
            {/* Überschrift und Absätze wörtlich von der alten Seite (Post 2);
                tragende Begriffe fett, der Rest der Zeile normal. */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal text-ink leading-[1.1] tracking-tight mb-10 border-l-[3px] border-ink pl-6 md:pl-8">
              Wir gestalten <span className="font-semibold">Architektur</span> mit
              Verantwortung – für Menschen, Orte und{' '}
              <span className="font-semibold">Zukunft.</span>
            </h1>
            <div className="space-y-6 text-graphite leading-relaxed">
              <p className="text-lg">
                Jedes Projekt beginnt mit dem Zuhören. Aus den Anforderungen der Aufgabe,
                dem Charakter des Ortes und den Bedürfnissen der Nutzenden entwickeln wir
                individuelle Lösungen mit klarer Haltung und präziser Gestaltung.
              </p>
              <p>
                Wir führen das Atelier AA mit dieser Haltung — mit einem engagierten,
                fachlich qualifizierten Team und zeitgemässen Werkzeugen wie der
                3D-Planung, die unsere Prozesse unterstützen, ohne unsere Grundhaltung zu
                ersetzen.
              </p>
              <p>
                Wir verbinden Architektur, Funktion und Wirtschaftlichkeit zu
                nachhaltigen Konzepten mit langfristigem Mehrwert. Dabei denken wir
                Ressourcen, Konstruktion und Lebenszyklus von Anfang an mit. Im engen
                Dialog mit Bauherrschaften und Planungspartnern entstehen Gebäude und
                Räume, die sich selbstverständlich in ihren Kontext einfügen und
                zugleich eine eigene Identität schaffen.
              </p>
              <p>
                Wir waren über mehrere Jahre Mitglied im Gewerbeverein Obfelden und im
                Gewerbeverein Affoltern am Albis — die Verbundenheit mit der Region, in
                der wir arbeiten, war und ist uns wichtig.
              </p>
              <p className="text-lg text-ink">
                Wir entwerfen nicht für den Moment. Wir schaffen Orte mit Bestand.
              </p>
            </div>
          </div>
        </Container>

        <Container className="mt-20 md:mt-28">
          <p className="text-xs uppercase tracking-widest text-stone mb-10">
            Team
          </p>
          {/* Geschäftsleitung (2) in der ersten Zeile, das übrige Team (3)
              darunter. Beide Reihen mit lgCols=3, damit die Porträts gleich
              gross bleiben — die erste Reihe lässt den dritten Platz frei,
              statt die Bilder auf 2 Spalten zu vergrössern. */}
          <TeamGrid members={team.slice(0, 2)} lgCols={3} />
          <div className="mt-8 md:mt-10">
            <TeamGrid members={team.slice(2)} lgCols={3} />
          </div>
        </Container>
      </div>

      <OffeneStellen />

      <WeiterLink
        text="Wie wir arbeiten: von der Machbarkeitsstudie bis zur Bauleitung."
        href="/leistungen"
        linkText="Leistungen"
      />
    </>
  );
}
