# Was veröffentlicht werden darf — und was nicht

Kurzcheck vor jedem Upload. Gilt besonders für einen Upload per FTP zu
**Hostpoint**: Dort wird nicht automatisch gefiltert, sondern genau das
ausgeliefert, was hochgeladen wird.

## Nur das darf hoch

Ausschliesslich der Ordner `atelier-aa.ch/` — und daraus nur, was der Build
ausliefert (`public/` plus die erzeugten Seiten). Niemals der übergeordnete
Ordner `Webseite Atelier AA`.

## Das darf niemals hoch

| Was | Warum |
| --- | --- |
| `Projekte/`, `Studien Atelier AA/`, `Team/`, `Archiv/`, `Eigne Studie/`, `kleine Projekte/`, `Kleinprojekte Atelier AA/`, `Unsortiert/`, `Allgemein/`, `videos/` | Lokale Archivordner mit Originaldateien, Kundennamen und alten Projektständen |
| `Team/AA/00 Archiv/atelier-aa-team-*-ki-variante*.png` | KI-bearbeitete Porträtvarianten echter Personen. Auf der Website stehen die **Originalfotos** |
| `atelier-aa.ch/zurueckgestellt/` | Pläne noch nicht bewilligter Projekte (aktuell EFH Othmarsingen). Erst nach erteilter Baubewilligung zurück nach `public/` |
| `*.tar.gz`, `*.bundle`, `atelier-aa-v1/`, `atelier-aa-vorher/` | Sicherungen und Vorgängerversionen |
| Ordner mit Bauherrschaftsnamen, z. B. `kleine Projekte/22057 EFH Fritschen` | Kundennamen dürfen nicht öffentlich werden |

## Warum das hier steht

Bauherrschaftsnamen standen bis zum 31.08.2026 in sieben öffentlichen
Werkliste-Adressen und in fünfzehn Bilddateinamen — und damit in der Sitemap.
Das ist behoben (Strasse und Ort statt Name, mit Weiterleitungen). Ein
unbedachter Upload des ganzen Ordners würde denselben Fehler in grösserem
Umfang wiederholen.

Bei einem Deploy über Vercel ist das kein Thema: Dort wird nur ausgeliefert,
was im Build landet.
