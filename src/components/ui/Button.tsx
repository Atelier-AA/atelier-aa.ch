import Link from 'next/link';
import Arrow from './Arrow';
import { cn } from '@/lib/utils';

interface ButtonProps {
  href?: string;
  children: React.ReactNode;
  variant?: 'primary' | 'outline' | 'text';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
}

const base =
  'inline-flex items-center justify-center gap-2 text-sm uppercase tracking-widest font-medium transition-colors duration-300';

const variants = {
  primary: 'bg-ink text-white px-8 py-4 hover:bg-graphite',
  outline: 'border border-ink text-ink px-8 py-4 hover:bg-ink hover:text-white',
  // Pfeil-Link wie im alten Theme (`.wp-block-button__link`): kein Rahmen,
  // Pfeil vorangestellt, Schrift 1.125rem/500/uppercase mit 0.1em Laufweite.
  text: 'group text-ink py-3 gap-4 text-[1.125rem] tracking-[0.1em] hover:text-graphite',
};

export default function Button({
  href,
  children,
  variant = 'primary',
  className,
  onClick,
  type = 'button',
}: ButtonProps) {
  const classes = cn(base, variants[variant], className);

  // `translateX(0.2em)` beim Hover, 0.3s — exakt wie
  // `.wp-block-button .wp-block-button__link:hover:before` im alten Theme.
  const content =
    variant === 'text' ? (
      <>
        <Arrow className="w-[50px] h-[15px] transition-transform duration-300 ease-out group-hover:translate-x-[0.2em]" />
        {children}
      </>
    ) : (
      children
    );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }
  return (
    <button type={type} onClick={onClick} className={classes}>
      {content}
    </button>
  );
}
