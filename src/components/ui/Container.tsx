import { cn } from '@/lib/utils';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: 'div' | 'section' | 'article' | 'main' | 'header' | 'footer';
  /** Überschreibt `max-w-content` (1440px) für einzelne Abschnitte, z. B.
   *  die etwas breitere Startseite — ohne die Standardbreite auf anderen
   *  Seiten zu verändern. */
  maxWidth?: string;
}

export default function Container({
  children,
  className,
  as: Tag = 'div',
  maxWidth = 'max-w-content',
}: ContainerProps) {
  return (
    <Tag className={cn('mx-auto w-full px-6 md:px-10 lg:px-16', maxWidth, className)}>
      {children}
    </Tag>
  );
}
