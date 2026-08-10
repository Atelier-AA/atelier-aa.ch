import Container from '@/components/ui/Container';
import TeamGrid from '@/components/ueber-uns/TeamGrid';
import OffeneStellen from '@/components/ueber-uns/OffeneStellen';
import { team } from '@/data/team';

export const metadata = { robots: { index: false, follow: false } };

/**
 * Vorschau D3, Teil 2: reine Team-Seite, losgelöst von der Firmenphilosophie
 * auf /vorschau/ueber-uns-firma.
 */
export default function UeberUnsTeamVorschau() {
  return (
    <>
      <div className="pt-24 md:pt-28">
        <Container>
          <div className="mb-10 bg-ink px-6 py-3 text-center text-sm text-white">
            Vorschau D3 (2/2, überarbeitet) — Team-Seite mit kurzem Einleitungstext (nicht die Live-Seite)
          </div>
          <p className="mb-10 text-xs uppercase tracking-widest text-stone">Team</p>
          <h1 className="mb-6 max-w-2xl text-4xl font-normal leading-[1.1] tracking-tight text-ink md:text-5xl">
            Die Menschen hinter <span className="font-semibold">Atelier AA.</span>
          </h1>
          <p className="mb-14 max-w-xl text-lg leading-relaxed text-graphite">
            Ein kleines, eingespieltes Team mit klaren Rollen — von der ersten
            Machbarkeitsstudie bis zur Bauleitung begleiten Sie dieselben
            Ansprechpersonen durch Ihr Projekt.
          </p>
          <TeamGrid members={team.slice(0, 2)} lgCols={3} />
          <div className="mt-8 md:mt-10">
            <TeamGrid members={team.slice(2)} lgCols={3} />
          </div>
        </Container>
      </div>
      <div className="mt-16 md:mt-20">
        <OffeneStellen />
      </div>
    </>
  );
}
