'use client';

import { useCallback, useEffect, useState } from 'react';

const KEY = 'atelier-aa-maps-consent';
const EVENT = 'atelier-aa-maps-consent-change';

/**
 * Einfache, sitegweite Zustimmung für die Google-Maps-Einbettung — die
 * einzige Stelle auf der Seite, die aktuell ein Cookie von Drittanbietern
 * setzen könnte. Kein Kategorien-Banner, weil es sonst nichts gibt, wofür
 * eine Einwilligung nötig wäre.
 */
export function useMapsConsent() {
  const [consent, setConsent] = useState(false);

  useEffect(() => {
    setConsent(window.localStorage.getItem(KEY) === '1');
    const onChange = () => setConsent(window.localStorage.getItem(KEY) === '1');
    window.addEventListener(EVENT, onChange);
    return () => window.removeEventListener(EVENT, onChange);
  }, []);

  const grant = useCallback(() => {
    window.localStorage.setItem(KEY, '1');
    window.dispatchEvent(new Event(EVENT));
  }, []);

  return { consent, grant };
}
