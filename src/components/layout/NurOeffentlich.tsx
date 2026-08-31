'use client';

import { usePathname } from 'next/navigation';

/**
 * Blendet Kopfzeile, Fusszeile und Cookie-Hinweis im internen Mailing-Bereich
 * aus.
 *
 * Grund: Das Root-Layout gilt für alle Seiten, also auch für /mailer. Ohne
 * diese Hülle bekäme der interne Bereich die Navigation und den Footer der
 * öffentlichen Website — mit Links, die dort nichts zu suchen haben.
 *
 * `usePathname` steht in Client-Komponenten schon beim Serverrendern zur
 * Verfügung. Die ausgeblendeten Teile landen deshalb gar nicht im HTML, es
 * gibt kein kurzes Aufblitzen.
 */
export default function NurOeffentlich({ children }: { children: React.ReactNode }) {
  const pfad = usePathname();
  if (pfad?.startsWith('/mailer')) return null;
  return <>{children}</>;
}
