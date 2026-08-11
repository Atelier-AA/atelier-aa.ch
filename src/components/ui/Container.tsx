import { cn } from '@/lib/utils';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: 'div' | 'section' | 'article' | 'main' | 'header' | 'footer';
}

export default function Container({
  children,
  className,
  as: Tag = 'div',
}: ContainerProps) {
  return (
    <Tag className={cn('mx-auto w-full max-w-content px-6 md:px-10 lg:px-16', className)}>
      {children}
    </Tag>
  );
}
