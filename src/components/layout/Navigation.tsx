import Link from 'next/link';
import { navigation } from '@/data/navigation';
import { cn } from '@/lib/utils';

interface NavigationProps {
  className?: string;
  linkClassName?: string;
  onNavigate?: () => void;
}

export default function Navigation({
  className,
  linkClassName,
  onNavigate,
}: NavigationProps) {
  return (
    <nav className={className} aria-label="Hauptnavigation">
      <ul className="flex flex-col md:flex-row gap-8 md:gap-10">
        {navigation.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              onClick={onNavigate}
              className={cn(
                'text-sm uppercase tracking-widest text-ink hover:text-stone transition-colors',
                linkClassName
              )}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
