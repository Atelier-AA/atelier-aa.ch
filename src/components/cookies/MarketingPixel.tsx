'use client';

import { useEffect, useState } from 'react';
import Script from 'next/script';
import { CONSENT_EVENT, ladeEinwilligung } from '@/lib/consent';

const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;

/**
 * Lädt den Meta-Werbepixel erst, wenn eine Kennung gesetzt ist UND die
 * Besucherin/der Besucher der Marketing-Kategorie zugestimmt hat. Ohne
 * NEXT_PUBLIC_META_PIXEL_ID (z. B. vor dem Live-Start) passiert nichts.
 */
export default function MarketingPixel() {
  const [erlaubt, setErlaubt] = useState(false);

  useEffect(() => {
    const pruefen = () => setErlaubt(ladeEinwilligung()?.marketing === true);
    pruefen();
    window.addEventListener(CONSENT_EVENT, pruefen);
    return () => window.removeEventListener(CONSENT_EVENT, pruefen);
  }, []);

  if (!META_PIXEL_ID || !erlaubt) return null;

  return (
    <Script id="meta-pixel" strategy="afterInteractive">
      {`
        !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
        n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
        document,'script','https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '${META_PIXEL_ID}');
        fbq('track', 'PageView');
      `}
    </Script>
  );
}
