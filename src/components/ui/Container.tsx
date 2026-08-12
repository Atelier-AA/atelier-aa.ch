import { cn } from '@/lib/utils';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: 'div' | 'section' | 'article' | 'main' | 'header' | 'footer';
  id?: string;
}

export default function Container({
  children,
  className,
  as: Tag = 'div',
  id,
}: ContainerProps) {
  return (
    <Tag id={id} className={cn('mx-auto w-full max-w-content px-6 md:px-10 lg:px-16', className)}>
      {children}
    </Tag>
  );
}
