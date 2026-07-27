import TeamMember from './TeamMember';
import type { TeamMember as TeamMemberType } from '@/types';
import { cn } from '@/lib/utils';

interface TeamGridProps {
  members: TeamMemberType[];
  /** Spalten ab lg (1100px); erlaubt z. B. eine 2er- über einer 3er-Zeile. */
  lgCols?: 2 | 3 | 4;
}

const lgColsClass = {
  2: 'lg:grid-cols-2',
  3: 'lg:grid-cols-3',
  4: 'lg:grid-cols-4',
};

export default function TeamGrid({ members, lgCols = 4 }: TeamGridProps) {
  return (
    <div className={cn('grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10', lgColsClass[lgCols])}>
      {members.map((member) => (
        <TeamMember key={member.name} member={member} />
      ))}
    </div>
  );
}
