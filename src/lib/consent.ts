export type CookieKategorie = 'statistik' | 'marketing';

export interface CookieEinwilligung {
  notwendig: true;
  statistik: boolean;
  marketing: boolean;
  /** Zeitstempel als ISO-String, damit die Zustimmung nachweisbar ist. */
  entschieden: string;
}

export const CONSENT_STORAGE_KEY = 'atelier-aa-cookie-consent';

/** Eigenes Event, damit Banner, Footer-Link und Analytics-Loader ohne
 * gemeinsamen State-Provider auf Änderungen reagieren können. */
export const CONSENT_EVENT = 'atelier-aa-cookie-consent-change';

export function ladeEinwilligung(): CookieEinwilligung | null {
  if (typeof window === 'undefined') return null;
  try {
    const roh = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!roh) return null;
    const wert = JSON.parse(roh) as CookieEinwilligung;
    if (typeof wert?.statistik !== 'boolean' || typeof wert?.marketing !== 'boolean') {
      return null;
    }
    return wert;
  } catch {
    return null;
  }
}

export function speichereEinwilligung(wahl: { statistik: boolean; marketing: boolean }): void {
  if (typeof window === 'undefined') return;
  const einwilligung: CookieEinwilligung = {
    notwendig: true,
    statistik: wahl.statistik,
    marketing: wahl.marketing,
    entschieden: new Date().toISOString(),
  };
  window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(einwilligung));
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT));
}
