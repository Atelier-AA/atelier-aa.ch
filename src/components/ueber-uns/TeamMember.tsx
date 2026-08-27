import Image from 'next/image';
import Link from 'next/link';
import Arrow from '@/components/ui/Arrow';
import type { TeamMember as TeamMemberType } from '@/types';

interface TeamMemberProps {
  member: TeamMemberType;
}

/**
 * Porträtkachel im Team-Raster.
 *
 * Hover-Verhalten wie bei den Projektkacheln, aber zurückhaltender: Das Bild
 * wird leicht vergrössert, ein dezentes Feld mit Pfeil legt sich darüber. Das
 * Overlay ist mit 35 % schwächer als bei den Projekten (50 %) und der Pfeil
 * sitzt unten links statt mittig — Gesichter sollen nicht verdeckt werden.
 */
export default function TeamMember({ member }: TeamMemberProps) {
  return (
    <Link
      href={`/ueber-uns/${member.slug}`}
      className="group block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
      aria-label={`Mehr über ${member.name}, ${member.rolle}`}
    >
      <div className="relative mb-5 aspect-[3/4] overflow-hidden bg-mist">
        <Image
          src={member.bild}
          alt={member.bildAlt ?? `Porträt von ${member.name}, ${member.rolle} bei Atelier AA Architekten`}
          fill
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02] group-focus-visible:scale-[1.02]"
          style={member.bildPosition ? { objectPosition: member.bildPosition } : undefined}
          sizes="(max-width: 768px) 100vw, (max-width: 1100px) 50vw, 25vw"
        />
        <div className="absolute inset-0 z-10 flex items-end justify-start bg-black/35 p-5 opacity-0 transition-opacity duration-[400ms] ease-out group-hover:opacity-100 group-focus-visible:opacity-100">
          <Arrow className="h-[15px] w-[50px] -translate-x-[10px] text-white transition-transform duration-[400ms] ease-out group-hover:translate-x-0 group-focus-visible:translate-x-0" />
        </div>
      </div>
      <h3 className="text-lg font-medium text-ink transition-colors group-hover:text-graphite group-focus-visible:text-graphite">
        {member.name}
      </h3>
      <p className="mt-1 text-sm text-stone">{member.rolle}</p>
    </Link>
  );
}
