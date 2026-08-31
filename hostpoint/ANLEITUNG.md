# Website auf Hostpoint aufschalten

Stand 31. August 2026. Reihenfolge einhalten — die Schritte 1 bis 4 lassen
sich vorbereiten, ohne dass die alte Website ausfällt.

## Was erzeugt wird

    ./werkzeuge/export-hostpoint.sh

Das Skript legt die serverseitigen Teile beiseite, baut die Website statisch,
legt die Hostpoint-Dateien bei und stellt danach alles wieder her. Ergebnis
ist der Ordner `out/` mit **214 Seiten** und rund **230 MB**.

Geprüft vor der Auslieferung: 601 Adressen durchgecrawlt, kein defekter
Link, alle 166 Sitemap-Adressen vorhanden, alle Canonicals auf
`atelier-aa.ch` ohne www.

## 1. Postfach anlegen

Im Hostpoint Control Panel zwei Adressen als **echte Postfächer**, nicht als
Weiterleitung ins Leere:

- `info@atelier-aa.ch` — Empfänger des Kontaktformulars
- `news@atelier-aa.ch` — Absender des Newsletters

Warum echte Postfächer: Rückläufer, Abwesenheitsmeldungen und Antworten von
Leuten, die auf «Antworten» drücken, landen dort. Sieht niemand hinein,
merkt man nicht, wenn Adressen abprallen.

## 2. PHP-Version prüfen

Control Panel → Websites → PHP-Konfiguration. Nötig ist mindestens
**PHP 8.1**; Hostpoint bietet 8.1 bis 8.5. Der Code verwendet Sprachmittel,
die es erst ab 8.1 gibt.

## 3. Dateien hochladen

Der Document Root heisst bei Hostpoint **`www`** (bei Domains von vor
September 2007 `public_html`). Die genaue Angabe steht im Control Panel
unter Websites in der Spalte Document-Root.

Per SFTP den **gesamten Inhalt** von `out/` in dieses Verzeichnis, nicht den
Ordner `out` selbst. Enthalten sind auch drei Dateien, die mit einem Punkt
beginnen — viele SFTP-Programme verstecken solche Dateien, versteckte
Dateien also einschalten:

    .htaccess     Weiterleitungen, Sicherheits-Header, HTTPS-Zwang
    .user.ini     Absenderadresse für PHP-Mails
    kontakt.php   Kontaktformular

Die alte WordPress-Installation vorher **sichern**, dann entfernen. Bleiben
alte Dateien liegen, kann `wp-config.php` weiterhin öffentlich erreichbar
sein.

## 4. Mailer einrichten (optional)

Im Ordner `mailer-php`:

1. `konfig.beispiel.php` nach `konfig.php` kopieren
2. Brevo-Schlüssel eintragen (Brevo → SMTP & API → API-Keys)
3. Geheimnis erzeugen: `openssl rand -base64 48`
4. Beide Dateien hochladen

Erreichbar unter `https://atelier-aa.ch/mailer-php/`, Anmeldung über einen
Einmal-Link an `aljili@atelier-aa.ch`.

**Ehrlicher Hinweis:** Brevo kann Listenimport, HTML einfügen, Testmail und
Versand auch selbst. Für eine einzige Mail pro Jahr ist der Weg über
brevo.com der geringere Aufwand.

## 5. Vor dem Umschalten testen

Solange die Domain noch auf die alte Website zeigt, lässt sich die neue über
die Vorschauadresse von Hostpoint prüfen (Control Panel → Websites). Zu
kontrollieren:

- [ ] Startseite, Projekte, Büro, Leistungen, Journal, Kontakt laden
- [ ] **Kontaktformular abschicken und prüfen, ob die Mail bei
      `info@atelier-aa.ch` ankommt** — das ist der wichtigste Test
- [ ] Ein PDF öffnet sich
- [ ] Das Video auf `/leistungen` läuft
- [ ] Eine Weiterleitung greift, etwa `/expertise`
- [ ] Die Adresse `/gibt-es-nicht` zeigt die Fehlerseite
- [ ] Cookie-Hinweis erscheint, Ablehnen funktioniert

## 6. Domain umschalten

Erst wenn Schritt 5 durch ist. Die Website liegt dann schon am richtigen
Ort, es ändert sich nur, welches Verzeichnis die Domain bedient.

Nach dem Umschalten sofort prüfen:

- [ ] `https://atelier-aa.ch` zeigt die neue Website
- [ ] `http://atelier-aa.ch` leitet auf https
- [ ] `https://www.atelier-aa.ch` leitet auf ohne www
- [ ] `https://atelier-aa.ch/robots.txt` und `/sitemap.xml` erreichbar
- [ ] Kontaktformular noch einmal von aussen testen

## 7. Nach dem Umschalten

- Sitemap in der Google Search Console einreichen:
  `https://atelier-aa.ch/sitemap.xml`
- Search Console auf Fehler beobachten, besonders 404
- HSTS in der `.htaccess` ist auf ein Jahr gesetzt. Browser merken sich das
  und lassen danach kein http mehr zu — die Zeile erst aktiv lassen, wenn
  HTTPS zuverlässig läuft.

## Was gegenüber Vercel verloren geht

**Bildoptimierung.** Bilder gehen in Originalgrösse raus. Das ist Ihre
Entscheidung und vertretbar: 376 von 428 Bildern sind ohnehin 1000 bis 2000
Pixel breit, und Bilder unterhalb des Bildschirmrands werden weiterhin erst
beim Scrollen geladen. Die schwersten Seiten laden 4 bis 7 MB.

**Der Next.js-Mailer.** Ersetzt durch die PHP-Fassung in `mailer-php`.

**Die Vorschauseiten** unter `/vorschau` sind nicht im Export. Zum
Vergleichen der Menüvarianten bleiben sie auf der Vercel-Adresse.

## Bei einer Änderung

Am Code arbeiten wie bisher, dann:

    ./werkzeuge/export-hostpoint.sh

und den Inhalt von `out/` erneut hochladen. Beim zweiten Mal genügen die
geänderten Dateien; `_next` gehört immer dazu, weil die Dateinamen dort
einen Inhaltsstempel tragen.
