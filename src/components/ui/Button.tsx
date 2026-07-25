import Link from 'next/link';
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
  text: 'text-ink py-2 border-b border-ink hover:text-graphite hover:border-graphite',
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

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }
  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
