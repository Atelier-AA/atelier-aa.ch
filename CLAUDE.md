# Kommandozentrale Atelier AA

Diese Datei liest jede Claude-Sitzung in diesem Projekt zuerst. Sie sagt,
was Atelier AA ist, wie gearbeitet wird und wo die Leitsätze von Alisami
Aljili stehen.

## Wer

Atelier AA Architekten GmbH, Bachstrasse 39, 8912 Obfelden. Gründer und
Geschäftsführer: Alisami Aljili. Angaben in `src/data/firma.ts`.
Immobilienpartner: Elindo Immobilien GmbH, Zug, rechtlich eigenständig.

## Leitsätze

Die Weisheiten von Alisami Aljili stehen in `WEISHEITEN.md`. Vor Akquise,
Angeboten und Geschäftsentscheidungen dort nachlesen. Sagt Alisami im
Gespräch einen Leitsatz oder bittet, etwas zu seinen Weisheiten zu
schreiben, den Skill `/weisheit` anwenden und die Liste nachführen.

## Arbeiten an der Website

- Anleitung für alle Änderungen: `HANDBUCH.md`. Inhalte in `src/data/`,
  Aussehen in `src/components/`.
- Vor jedem Push: `npm run type-check` und `npm run build`.
- Prüfbreiten: 390 px, 800 px, 1200 px.
- Veröffentlichen: `VEROEFFENTLICHEN.md`.
- Nichts erfinden: keine Kundenstimmen, Bauherrschaften, Zahlen oder
  Namen ohne Quelle. Fehlende Angaben bleiben leer oder `null`.
- Schweizer Rechtschreibung: ss statt ß.

## Geschäftskonzept

Wie aus Leitsatz 1 Einnahmen werden, steht in
`KONZEPT-GELD-AUF-DER-STRASSE.md`: drei Motoren (Aufträge, Vermittlung,
Abo), Zielgruppen, Zubringer, Angebote, Wochenroutine, 90-Tage-Plan.
Das Netzwerk dazu in `NETZWERK.md`. Beide Dateien sind intern und werden
nachgeführt, wenn Alisami Entscheide fällt oder Kontakte nennt.

## Akquise

Wiederkehrende Markt- und Auftragsbeobachtung läuft über den Skill
`akquise-radar`. Jede Runde endet mit Namen, Anlass und nächstem Schritt.
