import type { NextConfig } from 'next';

/**
 * Konfiguration für den statischen Export nach Hostpoint.
 *
 * Hostpoint Webhosting kann kein Node.js, also fällt der Next-Server weg.
 * Was das bedeutet und wie es ersetzt wird:
 *
 * - API-Routen (`/api/*`) und der Mailer werden vor dem Export beiseite
 *   gelegt; das Kontaktformular läuft danach über `kontakt.php`.
 * - Weiterleitungen aus `next.config.ts` funktionieren nicht mehr. Sie
 *   stehen als echte 301 in der `.htaccess`, was auf Apache sogar besser
 *   ist als die 308 von Vercel.
 * - Sicherheits-Header setzt sonst Vercel. Auch die stehen jetzt in der
 *   `.htaccess`, sonst wären sie nach dem Umzug verloren.
 * - Bildoptimierung entfällt. Bewusste Entscheidung des Kunden: Die Bilder
 *   liegen bereits in Webgrösse vor, 376 von 428 sind 1000–2000 px breit.
 *   Bilder unterhalb des sichtbaren Bereichs werden weiterhin verzögert
 *   geladen, `loading="lazy"` bleibt erhalten.
 */
const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true },
  // Jede Seite wird als <Pfad>/index.html abgelegt. Damit liefert Apache
  // sie ohne jede Rewrite-Regel aus — DirectoryIndex genuegt, und das
  // koennen alle Webhostings.
  //
  // Der erste Versuch arbeitete mit <Pfad>.html und einer Rewrite-Regel plus
  // DirectorySlash Off. Das war die Schwachstelle: Zu ueber-uns, leistungen
  // und insights gibt es Datei UND Ordner mit gleichem Namen, und wenn die
  // .htaccess fehlt oder eine Direktive nicht erlaubt ist, sind genau diese
  // Seiten nicht erreichbar. Genau das ist auf dem Server passiert.
  trailingSlash: true,
};

export default nextConfig;
