'use client';

import { useEffect, useState } from 'react';
import Script from 'next/script';
import { CONSENT_EVENT, ladeEinwilligung } from '@/lib/consent';

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

/**
 * Lädt Google Analytics (gtag.js) erst, wenn eine Statistik-Kennung gesetzt
 * ist UND die Besucherin/der Besucher dieser Kategorie zugestimmt hat. Ohne
 * NEXT_PUBLIC_GA_MEASUREMENT_ID (z. B. vor dem Live-Start) passiert nichts.
 */
export default function GoogleAnalytics() {
  const [erlaubt, setErlaubt] = useState(false);

  useEffect(() => {
    const pruefen = () => setErlaubt(ladeEinwilligung()?.statistik === true);
    pruefen();
    window.addEventListener(CONSENT_EVENT, pruefen);
    return () => window.removeEventListener(CONSENT_EVENT, pruefen);
  }, []);

  if (!GA_ID || !erlaubt) return null;

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}', { anonymize_ip: true });
        `}
      </Script>
    </>
  );
}
