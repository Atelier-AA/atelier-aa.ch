import Link from 'next/link';
import { navigation } from '@/data/navigation';
import { cn } from '@/lib/utils';

interface NavigationProps {
  className?: string;
  linkClassName?: string;
  onNavigate?: () => void;
  /** Schriftgrösse der Einträge; im Mobilmenü deutlich grösser. */
  variant?: 'desktop' | 'mobile';
}

export default function Navigation({
  className,
  linkClassName,
  onNavigate,
  variant = 'desktop',
}: NavigationProps) {
  return (
    <nav className={className} aria-label="Hauptnavigation">
      <ul
        className={cn(
          'flex',
          variant === 'mobile' ? 'flex-col gap-4' : 'flex-row gap-10'
        )}
      >
        {navigation.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              onClick={onNavigate}
              // Die Farbe erbt vom Container (`text-ink`/`text-white` am
              // Header), damit sie über dem dunklen Hero umgeschaltet werden
              // kann, ohne dass sich zwei gleich spezifische Tailwind-Klassen
              // überlagern.
              className={cn(
                'group inline-block text-current transition-opacity',
                variant === 'mobile'
                  ? 'text-[1.5rem] md:text-[2.25rem] font-light leading-tight'
                  : 'text-sm uppercase tracking-widest',
                linkClassName
              )}
            >
              {item.label}
              {/* Unterstreichung, die beim Hover von 0 auf volle Breite wächst —
                  1:1 aus dem alten Theme
                  (`.primary-navigation .menu-wrapper>.menu-item>a:after`):
                  1.5px hoch, 0.15rem Abstand, 0.3s. `origin-left` sorgt dafür,
                  dass die Linie von links wächst statt aus der Mitte. */}
              <span
                aria-hidden="true"
                className="mt-[0.15rem] block h-[1.5px] w-full origin-left scale-x-0 bg-current transition-transform duration-300 ease-out group-hover:scale-x-100"
              />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
