---
name: weisheit
description: Trägt einen neuen Leitsatz von Alisami Aljili in WEISHEITEN.md ein. Anwenden, wenn Alisami einen Spruch sagt wie „das Geld liegt auf der Strasse", „merk dir das", „schreib das zu meinen Weisheiten", „das ist meine Philosophie", oder wenn er /weisheit aufruft. Auch anwenden, wenn im Gespräch beiläufig ein Leitsatz fällt, den er als seine Haltung bezeichnet.
---

# Weisheit eintragen

Du ergänzst `WEISHEITEN.md` im Projektstamm um einen Leitsatz von Alisami
Aljili. Die Datei ist Teil der Kommandozentrale (`CLAUDE.md`) und wird von
jeder Sitzung gelesen.

## Ablauf

1. `WEISHEITEN.md` lesen. Prüfen, ob der Spruch schon drin steht. Wenn ja:
   nicht doppelt anlegen, sondern beim bestehenden Eintrag „Was er damit
   meint" oder „Wo es greift" ergänzen.
2. Den Spruch wörtlich übernehmen. Nur Schreibweise bereinigen, nicht
   umformulieren. Schweizer Rechtschreibung (ss statt ß).
3. Nächste freie Nummer vergeben. Nummern werden nie neu vergeben oder
   umsortiert.
4. Eintrag nach diesem Muster anhängen:

   ```markdown
   ## <Nr>. „<Spruch wörtlich>"

   **Gesagt:** <Datum JJJJ-MM-TT>

   **Was er damit meint:** <nur aus dem, was er dazu gesagt hat; sonst
   `noch offen`>

   **Wo es greift:** <Skills, Seiten, Entscheidungen, in denen der Satz
   wirkt; sonst `noch offen`>
   ```

5. Wenn er zum Spruch eine Frage gestellt hat („kannst du damit etwas
   anfangen", „wo könnte man ansetzen"), die Antwort als eigenen Absatz
   unter dem Eintrag festhalten. Ehrlich bleiben: Was am Satz stimmt und
   was nicht, gehört dazu.
6. Nichts erfinden. Keine Bedeutung unterstellen, die er nicht gesagt hat.
   Bei Unklarheit nachfragen.
7. HANDBUCH.md aktualisieren, falls sich Ablauf oder Ablageort geändert
   haben.
8. Committen mit Nachricht `Weisheit <Nr> ergänzt: <Kurzform>` und
   pushen. Dann kurz zusammenfassen, was eingetragen wurde.

## Regeln

- Name immer „Alisami Aljili" (Vorname Alisami, Nachname Aljili, bestätigt
  in `src/data/firma.ts`).
- Die Weisheiten sind interne Leitsätze. Sie gehören nicht auf die
  Website, ausser Alisami sagt es ausdrücklich.
