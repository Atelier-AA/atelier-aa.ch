import { cn } from '@/lib/utils';

/**
 * Pfeil-Icon des alten WordPress-Themes.
 *
 * 1:1 übernommen aus `wp-content/themes/aaelindo/assets/icons/arrow.svg`
 * (schwarz, 40×15) bzw. `arrow_white.svg` (weiss, 76×30). Beide zeichnen die
 * gleiche Form; hier eine Komponente, die die Farbe vom Elternelement erbt.
 */

type ArrowProps = {
  className?: string;
};

export default function Arrow({ className }: ArrowProps) {
  return (
    <svg
      viewBox="0 0 40 15"
      aria-hidden="true"
      focusable="false"
      className={cn('shrink-0 fill-current', className)}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M33.3431 0.292893L39.7071 6.65685C40.0976 7.04738 40.0976 7.68054 39.7071 8.07107L33.3431 14.435C32.9526 14.8256 32.3195 14.8256 31.9289 14.435C31.5384 14.0445 31.5384 13.4113 31.9289 13.0208L36.5858 8.36396H0V6.36396H36.5858L31.9289 1.70711C31.5384 1.31658 31.5384 0.683418 31.9289 0.292893C32.3195 -0.0976311 32.9526 -0.0976311 33.3431 0.292893Z"
      />
    </svg>
  );
}
