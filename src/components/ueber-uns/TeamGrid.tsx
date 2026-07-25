import TeamMember from './TeamMember';
import type { TeamMember as TeamMemberType } from '@/types';

interface TeamGridProps {
  members: TeamMemberType[];
}

export default function TeamGrid({ members }: TeamGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
      {members.map((member) => (
        <TeamMember key={member.name} member={member} />
      ))}
    </div>
  );
}
