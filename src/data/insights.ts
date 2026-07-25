import type { Insight } from '@/types';

/**
 * Fachbeiträge für die Insights-Seite.
 *
 * Neu geschrieben — die alte Website hatte nur zwei Platzhalter-News ("Neue
 * Website", "Noch eine News"). Tonfall und Haltung folgen den bestehenden
 * Seitentexten: nüchtern, in der Wir-Form, ohne Superlative.
 */
export const insights: Insight[] = [
  {
    slug: 'ki-im-entwurf',
    titel: 'KI im Entwurf: Werkzeug, nicht Autor',
    lead: 'Generative Werkzeuge liefern in Minuten hunderte Varianten. Die eigentliche Arbeit beginnt danach – bei der Frage, welche davon trägt.',
    kategorie: 'Digitalisierung',
    datum: '2026-06-18',
    lesezeit: 6,
    bild: '/images/insights/ki-entwurf.png',
    abschnitte: [
      {
        titel: 'Was die Werkzeuge heute leisten',
        absaetze: [
          'Generative Software durchsucht Lösungsräume schneller, als es von Hand möglich wäre. Bei Volumenstudien, Belegungsvarianten oder der Optimierung von Fensterflächen gegen Wärmeeinträge ist das ein echter Gewinn: Wir sehen früher, welche Richtungen sich lohnen und welche nicht.',
          'Auch in der Ausführungsplanung hilft Automatisierung. Kollisionsprüfungen zwischen Tragwerk und Haustechnik, Mengenauszüge, Varianten von Detailanschlüssen – Aufgaben mit klaren Regeln und prüfbarem Ergebnis. Wir nutzen diese Werkzeuge dort, wo sie Zeit freispielen für die Fragen, die Urteilsvermögen brauchen.',
        ],
      },
      {
        titel: 'Wo die Grenze liegt',
        absaetze: [
          'Ein Modell kennt keinen Ort. Es weiss nicht, dass der Nachbar sein Wohnzimmer nach Süden hat, dass die Gemeinde bei der Firsthöhe empfindlich ist oder dass die Bauherrschaft in fünf Jahren eine Generation mehr im Haus unterbringen möchte. Es optimiert, was messbar ist, und übersieht, was zählt.',
          'Der zweite Punkt ist Verantwortung. Für ein Bauwerk haftet ein Mensch mit Namen und Berufsregister-Eintrag. Ein Vorschlag aus einem Modell ist ein Vorschlag – bis jemand ihn prüft, anpasst und unterschreibt. Diese Prüfung ist keine Formalie, sondern der Kern des Berufs.',
        ],
      },
      {
        titel: 'Wie wir damit arbeiten',
        absaetze: [
          'Wir setzen generative Werkzeuge in der frühen Phase ein, um Varianten zu erzeugen, und bewerten sie anschliessend an denselben Kriterien wie jeden anderen Entwurf: Fügt sich das Volumen in den Kontext? Sind die Grundrisse in zwanzig Jahren noch brauchbar? Stimmt das Verhältnis von Aufwand und Wirkung?',
          'Was bleibt, ist unsere Handschrift und unsere Verantwortung. Die Werkzeuge verkürzen den Weg zur Auswahl. Die Auswahl selbst treffen wir.',
        ],
      },
    ],
    fragen: [
      {
        frage: 'Entwerfen Sie unsere Projekte mit KI?',
        antwort:
          'Wir nutzen generative Werkzeuge für Variantenstudien und rechenintensive Prüfungen. Der Entwurf, die Auswahl und die Verantwortung für das Ergebnis liegen bei uns – jedes Projekt wird von einem Architekten verantwortet, der es unterschreibt.',
      },
      {
        frage: 'Wird Planung dadurch günstiger?',
        antwort:
          'Teilweise. Bei Aufgaben mit klaren Regeln sparen wir Zeit, und das kommt bei umfangreichen Projekten im Honorar an. Die Phasen, die Abstimmung und Urteilsvermögen brauchen, werden dadurch nicht kürzer – sie sind der eigentliche Wert unserer Arbeit.',
      },
      {
        frage: 'Was passiert mit unseren Projektdaten?',
        antwort:
          'Projektbezogene Unterlagen geben wir nicht in öffentliche KI-Dienste. Wo wir Werkzeuge einsetzen, die Daten verarbeiten, klären wir Speicherort und Zweck vorab und halten das im Planungsvertrag fest.',
      },
      {
        frage: 'Können wir Varianten sehen, bevor wir uns entscheiden?',
        antwort:
          'Ja. Wir zeigen in der Vorprojektphase mehrere Ansätze mit ihren Vor- und Nachteilen – anhand von Modellen, Schnitten und Kostenrahmen. Sie entscheiden auf einer nachvollziehbaren Grundlage, nicht auf ein Bild hin.',
      },
    ],
  },
  {
    slug: 'kreislauffaehig-bauen',
    titel: 'Kreislauffähig bauen: Der Bestand ist die Ressource',
    lead: 'Der grösste Hebel für weniger Emissionen liegt nicht im Neubau, sondern in dem, was schon steht. Was das für ein konkretes Projekt bedeutet.',
    kategorie: 'Nachhaltigkeit',
    datum: '2026-04-29',
    lesezeit: 7,
    bild: '/images/insights/kreislauf-bauen.jpg',
    abschnitte: [
      {
        titel: 'Graue Energie entscheidet mit',
        absaetze: [
          'Ein gut gedämmter Neubau verbraucht im Betrieb wenig. Doch bevor er bezogen wird, stecken Jahre an Emissionen in Beton, Stahl und Transport. Bei einem Wohnbau nach heutigem Standard macht diese graue Energie über den Lebenszyklus einen erheblichen Teil der Gesamtbilanz aus.',
          'Daraus folgt eine einfache Reihenfolge: erhalten, wo es geht. Umbauen, wo Erhalt allein nicht reicht. Neu bauen, wo es sachlich begründet ist. Diese Reihenfolge stellen wir am Anfang jedes Projekts zur Diskussion – auch wenn die Anfrage anders lautet.',
        ],
      },
      {
        titel: 'Was Kreislauffähigkeit praktisch heisst',
        absaetze: [
          'Kreislauffähig zu bauen beginnt bei der Fügung. Verschraubt statt verklebt, Schichten trennbar, Materialien sortenrein – das klingt technisch, entscheidet aber darüber, ob ein Bauteil in dreissig Jahren wiederverwendet oder entsorgt wird.',
          'Dazu kommt die Nutzungsoffenheit. Eine Geschosshöhe, die auch ein Büro erlaubt. Ein Tragwerk, das eine Wand versetzen lässt. Ein Grundriss, der geteilt werden kann, wenn ein Haushalt kleiner wird. Gebäude, die sich anpassen lassen, werden nicht abgerissen.',
        ],
      },
      {
        titel: 'Der wirtschaftliche Teil',
        absaetze: [
          'Kreislauffähigkeit ist kein Aufpreis für ein gutes Gewissen. Trennbare Konstruktionen senken Rückbaukosten, nutzungsoffene Grundrisse verlängern die Vermietbarkeit, und Bauteile aus dem Bestand ersparen Neubeschaffung.',
          'Wir rechnen das im Vorprojekt durch, statt es zu behaupten: Lebenszykluskosten neben Erstellungskosten, mit den Annahmen offengelegt. So ist entscheidbar, welche Massnahmen sich tragen und welche nicht.',
        ],
      },
    ],
    fragen: [
      {
        frage: 'Lohnt sich ein Umbau gegenüber einem Neubau?',
        antwort:
          'Oft ja, aber nicht immer. Es hängt vom Zustand der Tragstruktur, der Schadstoffsituation und Ihren Nutzungsanforderungen ab. Wir prüfen das in einer Vorstudie mit Kostenrahmen für beide Wege, damit die Entscheidung auf Zahlen beruht.',
      },
      {
        frage: 'Ist nachhaltiges Bauen teurer?',
        antwort:
          'In der Erstellung teils, über den Lebenszyklus meist nicht. Entscheidend ist, früh zu planen: Wer Nachhaltigkeit ab dem Vorprojekt mitdenkt, zahlt deutlich weniger als wer sie später nachrüstet.',
      },
      {
        frage: 'Können wir wiederverwendete Bauteile einsetzen?',
        antwort:
          'Ja, mit Vorlauf. Verfügbarkeit und Nachweise brauchen Zeit, deshalb klären wir früh, welche Bauteile in Frage kommen – häufig Tragwerkselemente, Fassadenplatten oder Innenausbau. Für tragende Teile ist ein Nachweis der Eigenschaften erforderlich.',
      },
      {
        frage: 'Was ist mit Fördermitteln?',
        antwort:
          'Für energetische Sanierungen bestehen kantonale und kommunale Programme, die sich regelmässig ändern. Wir prüfen zu Projektbeginn, was für Ihr Vorhaben in Frage kommt, und berücksichtigen die Fristen in der Terminplanung.',
      },
    ],
  },
  {
    slug: 'warum-architekten',
    titel: 'Warum es Architekten weiterhin braucht',
    lead: 'Software plant Details, Portale liefern Typenhäuser, Modelle erzeugen Bilder. Was ein Architekt beiträgt, wird dadurch nicht kleiner – nur sichtbarer.',
    kategorie: 'Haltung',
    datum: '2026-02-11',
    lesezeit: 5,
    bild: '/images/insights/rolle-architekt.png',
    abschnitte: [
      {
        titel: 'Die Aufgabe stellen, nicht nur lösen',
        absaetze: [
          'Bauherrschaften kommen mit einer Frage: vier Wohnungen auf diesem Grundstück. Nach dem ersten Gespräch ist es oft eine andere: fünf kleinere Einheiten, weil der Markt sie sucht, oder drei mit einer Option auf Aufstockung.',
          'Diese Verschiebung ist die eigentliche Leistung. Wer nur die gestellte Aufgabe löst, löst manchmal die falsche. Ein Werkzeug optimiert, was man ihm vorgibt – es fragt nicht zurück.',
        ],
      },
      {
        titel: 'Widersprüche aushalten',
        absaetze: [
          'Ein Bauprojekt besteht aus Anforderungen, die sich gegenseitig ausschliessen: Budget gegen Qualität, Ausnutzung gegen Nachbarschaft, Termin gegen Sorgfalt. Diese Konflikte lassen sich nicht wegrechnen, sie müssen gewichtet werden.',
          'Gewichten heisst entscheiden – und Entscheidungen brauchen jemanden, der sie begründet, vor der Bauherrschaft, der Behörde und in zehn Jahren auch vor sich selbst.',
        ],
      },
      {
        titel: 'Durch das Verfahren führen',
        absaetze: [
          'Zwischen Entwurf und Schlüsselübergabe liegen Baugesuch, Einsprachefristen, Vergaben, ein Dutzend Fachplaner und die Baustelle. Hier entscheidet sich, ob aus einer guten Idee ein gutes Haus wird.',
          'Wir vertreten dabei die Interessen der Bauherrschaft – gegenüber Unternehmern, in Behördengesprächen, bei Nachträgen. Das ist unspektakulär und macht am Ende den Unterschied in Kosten, Terminen und Qualität.',
        ],
      },
      {
        titel: 'Der Wert bleibt sichtbar',
        absaetze: [
          'Ein sorgfältig geplantes Gebäude vermietet sich besser, hält länger und lässt sich anpassen. Diese Qualität entsteht nicht durch mehr Rechenleistung, sondern durch jemanden, der zuhört, abwägt und Verantwortung übernimmt.',
          'Genau darin sehen wir unsere Aufgabe – heute wie vor zwanzig Jahren, nur mit besseren Werkzeugen.',
        ],
      },
    ],
    fragen: [
      {
        frage: 'Ab wann sollten wir einen Architekten einbeziehen?',
        antwort:
          'Vor dem Grundstückskauf, wenn möglich. Ausnutzung, Erschliessung und Baulinien bestimmen, was realistisch ist. Eine kurze Machbarkeitsprüfung kostet wenig und verhindert Fehlentscheide im sechsstelligen Bereich.',
      },
      {
        frage: 'Was kostet die Planung?',
        antwort:
          'Das Honorar richtet sich nach Umfang und Schwierigkeit, üblicherweise nach den SIA-Ordnungen als Prozentsatz der Baukosten oder nach Aufwand. Wir legen die Grundlage im Angebot offen und rechnen sie phasenweise ab, damit sie nachvollziehbar bleibt.',
      },
      {
        frage: 'Können wir einzelne Phasen beauftragen?',
        antwort:
          'Ja. Viele Bauherrschaften beginnen mit Vorstudie und Vorprojekt und entscheiden danach über die Fortsetzung. Wir halten die Phasen so ab, dass ein Wechsel möglich bleibt – auch wenn durchgehende Begleitung meist das bessere Ergebnis bringt.',
      },
      {
        frage: 'Wie läuft die Zusammenarbeit ab?',
        antwort:
          'Mit einem Gespräch über Ihr Vorhaben, den Ort und Ihr Budget. Danach schlagen wir das Vorgehen vor, mit Phasen, Terminen und Honorar. Während des Projekts gibt es feste Termine und einen festen Ansprechpartner.',
      },
      {
        frage: 'Arbeiten Sie auch bei kleineren Vorhaben?',
        antwort:
          'Ja. Umbauten, Aufstockungen und Sanierungen gehören zu unserem Alltag. Bei kleineren Aufgaben stimmen wir den Leistungsumfang so ab, dass der Planungsaufwand zum Vorhaben passt.',
      },
    ],
  },
];

export function getInsight(slug: string): Insight | undefined {
  return insights.find((i) => i.slug === slug);
}

export function getWeitereInsights(currentSlug: string, count = 2): Insight[] {
  return insights.filter((i) => i.slug !== currentSlug).slice(0, count);
}
