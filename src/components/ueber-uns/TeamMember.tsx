import Image from 'next/image';
import type { TeamMember as TeamMemberType } from '@/types';

interface TeamMemberProps {
  member: TeamMemberType;
}

export default function TeamMember({ member }: TeamMemberProps) {
  return (
    <div>
      <div className="relative aspect-[3/4] bg-mist overflow-hidden mb-5">
        <Image
          src={member.bild}
          alt={`Porträt von ${member.name}`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
      </div>
      <h3 className="text-lg font-light text-ink mb-1">{member.name}</h3>
      <p className="text-sm text-stone">{member.rolle}</p>
    </div>
  );
}
