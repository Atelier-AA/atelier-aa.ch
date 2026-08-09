'use client';

import { COOKIE_SETTINGS_EVENT } from './CookieBanner';

interface CookieSettingsLinkProps {
  className?: string;
}

/** Öffnet den Cookie-Banner erneut im Einstellungen-Modus (siehe CookieBanner.tsx). */
export default function CookieSettingsLink({ className }: CookieSettingsLinkProps) {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new CustomEvent(COOKIE_SETTINGS_EVENT))}
      className={className}
    >
      Cookie-Einstellungen
    </button>
  );
}
