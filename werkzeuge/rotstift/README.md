# Rotstift

Bildschirmfoto-Werkzeug für den Mac, gebaut für die Planprüfung im
Architekturbüro. Aufnehmen, sofort beschriften, weitergeben — ohne Umweg über
Schreibtisch, Finder und Vorschau, und ohne dass das Bild dabei skaliert wird.

## Stand

| | |
|---|---|
| Phase | Recherche abgeschlossen, Konzept steht |
| Programmcode | noch nicht begonnen |
| Zielsystem | macOS, Swift, nativ |

## Unterlagen

| Datei | Inhalt |
|---|---|
| [`RECHERCHE.md`](RECHERCHE.md) | Was der Mac heute macht und was daran stört, Marktübersicht, was aus der Planprüfung übernommen wird, technische Grundlagen, Entscheidungen, Risiken, Quellen |
| [`KONZEPT.md`](KONZEPT.md) | Leitgedanke, Ablauf, Werkzeugkasten, Fensteraufbau, Export, Ausbaustufen, Abgrenzung |

## Nächste Schritte

1. Werkzeugumfang für Stufe 1 bestätigen (`KONZEPT.md`, Abschnitt „Ausbaustufen")
2. Bauumgebung auf dem Mac klären — Command Line Tools genügen, Xcode ist nicht nötig
3. Programmgerüst und Bauskript anlegen
4. Stufe 1 umsetzen, auf dem Mac bauen und ausprobieren

## Hinweis zur Entwicklung

Dieses Verzeichnis gehört nicht zur Website. Es liegt nur im selben Ablageort,
damit alles an einem Platz bleibt. `npm run build` der Website fasst es nicht an.
