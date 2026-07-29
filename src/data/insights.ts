import type { Insight, InsightFrage } from '@/types';

/**
 * Fachbeiträge für die Insights-Seite.
 *
 * Neu geschrieben — die alte Website hatte nur zwei Platzhalter-News ("Neue
 * Website", "Noch eine News"). Tonfall und Haltung folgen den bestehenden
 * Seitentexten: nüchtern, in der Wir-Form, ohne Superlative.
 */
export const insights: Insight[] = [
  {
    slug: 'zusammenschluss-elindo-immobilien',
    titel: 'Partnerschaft mit Elindo Immobilien: Architektur und Vermarktung aus einer Hand',
    lead: 'Bauen und Verkaufen sind zwei Berufe. Wer beide zusammen denkt, trifft bessere Entscheide — deshalb arbeiten wir mit Elindo Immobilien in Zug zusammen.',
    kategorie: 'Partnerschaft',
    datum: '2026-07-10',
    lesezeit: 5,
    bild: '/images/insights/elindo-partnerschaft.webp',
    abschnitte: [
      {
        titel: 'Warum diese Zusammenarbeit',
        absaetze: [
          'Ein Architekturbüro plant Gebäude. Ein Immobilienunternehmen kennt den Markt, in dem diese Gebäude vermietet oder verkauft werden. Beide Perspektiven gehören früh zusammen — sonst entstehen Wohnungen, die gestalterisch überzeugen und sich schwer vermarkten lassen, oder solche, die den Markt treffen und ohne Anspruch gebaut sind.',
          'Atelier AA Architekten in Obfelden und Elindo Immobilien in Zug arbeiten deshalb projektbezogen zusammen. Wir übernehmen Entwurf, Bewilligung und Realisierung, Elindo bringt Marktkenntnis, Bewertung und Vermarktung ein.',
        ],
      },
      {
        titel: 'Was Elindo Immobilien mitbringt',
        absaetze: [
          'Elindo Immobilien GmbH ist ein inhabergeführtes Familienunternehmen mit Sitz an der Baarerstrasse 52 in Zug und über fünfzehn Jahren Erfahrung in Bau und Immobilien. Der Tätigkeitsschwerpunkt liegt im Grossraum Zug und Zürich sowie in der übrigen Deutschschweiz.',
          'Das Leistungsangebot umfasst Immobilienverkauf mit Bewertung und Vermarktung, Immobilienbewertung nach hedonischer Methode sowie Ertrags- und Realwertverfahren, die Vermarktung von Neubauprojekten, Off-Market-Vermittlungen und Beratung zum Thema Downsizing und Wohnen im Alter. Dazu kommen professionelle Fotografie, Homestaging, 360-Grad-Besichtigungen und Immobilienfilme.',
        ],
      },
      {
        titel: 'Was das für Bauherrschaften bedeutet',
        absaetze: [
          'Bei Renditeobjekten lohnt sich eine Marktbeurteilung, bevor der Wohnungsmix festgelegt wird. Welche Wohnungsgrössen werden in Ihrer Gemeinde tatsächlich gesucht? Welcher Ausbaustandard rechtfertigt welchen Mietzins? Diese Fragen entscheiden über die Rendite und lassen sich im Vorprojekt günstig klären — später nur noch teuer.',
          'Bei Neubauprojekten zum Verkauf beginnt die Vermarktung sinnvollerweise vor dem Baustart. Visualisierungen, Grundrissdarstellungen und Musterwohnungen entstehen dann aus demselben Modell, mit dem geplant wird.',
          'Wenn ein Grundstück durch Erbteilung oder Verkauf frei wird, ist die Reihenfolge umgekehrt: Erst die Bewertung und die Frage, was baulich möglich ist — dann die Entscheidung, ob verkauft oder entwickelt wird.',
        ],
      },
      {
        titel: 'Getrennte Unternehmen, gemeinsame Projekte',
        absaetze: [
          'Atelier AA Architekten GmbH und Elindo Immobilien GmbH sind rechtlich und wirtschaftlich eigenständige Unternehmen. Sie arbeiten projektbezogen zusammen, wo es der Sache dient.',
          'Sie können also unser Architekturmandat erteilen, ohne die Vermarktung mitzubeauftragen — und umgekehrt. Wo beides zusammenkommt, sprechen wir das transparent ab.',
        ],
      },
    ],
    fragen: [
      {
        frage: 'Müssen wir die Vermarktung über Elindo abwickeln, wenn Sie planen?',
        antwort:
          'Nein. Beide Unternehmen sind eigenständig und werden getrennt beauftragt. Wir stellen den Kontakt her, wenn es Ihrem Projekt nützt — die Entscheidung liegt bei Ihnen.',
      },
      {
        frage: 'Ab wann sollte die Vermarktung in die Planung einbezogen werden?',
        antwort:
          'Bei Renditeobjekten schon vor dem Wohnungsmix, also im Vorprojekt. Eine Marktbeurteilung zu diesem Zeitpunkt kostet wenig und verhindert, dass Wohnungsgrössen gebaut werden, die in Ihrer Gemeinde schwer vermietbar sind.',
      },
      {
        frage: 'Wir wollen ein Grundstück verkaufen — sollen wir vorher bauen lassen?',
        antwort:
          'Das hängt vom Verhältnis zwischen Landwert und realisierbarem Bauvolumen ab. Eine Machbarkeitsstudie zeigt, was möglich ist, eine Bewertung, was der Markt dafür zahlt. Erst mit beiden Zahlen ist die Frage entscheidbar.',
      },
      {
        frage: 'In welchen Regionen arbeiten Sie zusammen?',
        antwort:
          'Unsere Schwerpunkte überlappen sich in den Kantonen Zürich und Zug. Atelier AA realisiert Projekte in der ganzen Schweiz, Elindo ist schwerpunktmässig im Grossraum Zug und Zürich sowie der übrigen Deutschschweiz tätig.',
      },
    ],
  },
  {
    slug: 'verdichtung-innenentwicklung',
    titel: 'Verdichten statt neu bauen: Was auf Ihrem Grundstück möglich ist',
    lead: 'Bauland wird in Zürich, Aargau und Zug knapp. Der Bestand hält oft mehr aus, als seine Eigentümer vermuten — Aufstockung, Ersatzneubau oder Anbau.',
    kategorie: 'Verdichtung',
    datum: '2026-05-20',
    lesezeit: 7,
    bild: '/images/insights/verdichtung.webp',
    abschnitte: [
      {
        titel: 'Die Reserve liegt im Bestand',
        absaetze: [
          'Viele Einfamilienhaus-Parzellen in den Kantonen Zürich, Aargau und Zug stammen aus den Sechziger- und Siebzigerjahren. Sie nutzen ihre zulässige Ausnutzung häufig nur zur Hälfte aus. Wo damals ein Haus für vier Personen stand, wäre heute Wohnraum für drei Haushalte möglich.',
          'Das Raumplanungsgesetz verlangt seit der Revision Innenentwicklung vor Neueinzonung. Kantone und Gemeinden haben ihre Bau- und Nutzungsordnungen entsprechend angepasst — vielerorts wurden Ausnutzungsziffern erhöht oder Attikageschosse zugelassen. Diese Reserven kennen die Eigentümer meist nicht.',
        ],
      },
      {
        titel: 'Drei Wege der Verdichtung',
        absaetze: [
          'Die Aufstockung nutzt die vorhandene Struktur und ist der schnellste Weg. Voraussetzung ist ein Tragwerk, das die zusätzliche Last aufnimmt, und eine Gebäudehöhe, die die Bauordnung noch zulässt. Häufig lohnt sich eine Leichtbaukonstruktion in Holz, weil sie das Fundament weniger belastet.',
          'Der Anbau erweitert horizontal. Er kommt in Frage, wo Grenzabstände und Grundflächenziffer noch Spielraum lassen. Der Eingriff in den Bestand bleibt gering, was bei bewohnten Häusern zählt.',
          'Der Ersatzneubau nutzt die Ausnutzung voll aus, verliert aber die graue Energie des Bestands. Er ist wirtschaftlich, wenn die bestehende Substanz sanierungsbedürftig ist — bei intakten Bauten ist die Rechnung offen und muss geführt werden.',
        ],
      },
      {
        titel: 'Was die Machbarkeit entscheidet',
        absaetze: [
          'Vier Grössen bestimmen den Rahmen: Ausnutzungs- oder Baumassenziffer, Grenzabstände, Gebäudehöhe und Dachform. Alle vier stehen in der Bau- und Nutzungsordnung Ihrer Gemeinde. Dazu kommen Sonderregeln — Ortsbildschutz, Gewässerabstände, Lärmschutz an Verkehrsachsen.',
          'Der zweite Faktor sind die Nachbarn. Eine Verdichtung, die Schatten wirft oder Einblick schafft, zieht Einsprachen an. Wir prüfen diese Wirkungen im Entwurf und suchen das Gespräch, bevor das Baugesuch eingereicht wird. Das kostet Wochen und spart Jahre.',
        ],
      },
      {
        titel: 'Der wirtschaftliche Rahmen',
        absaetze: [
          'Eine Aufstockung mit zwei zusätzlichen Wohnungen bewegt sich je nach Ausbaustandard und Konstruktion in einer Grössenordnung von rund einer bis eineinhalb Millionen Franken. Die entstehenden Mietzinse tragen diese Investition in den Kantonen Zürich und Zug in der Regel, im Aargau je nach Lage.',
          'Wir empfehlen, mit einer Machbarkeitsstudie zu beginnen: Volumenstudie, Prüfung der Bauordnung, Kostenrahmen, Ertragsrechnung. Der Aufwand liegt im vierstelligen Bereich und schafft die Grundlage für eine Entscheidung, die sechs- bis siebenstellig ist.',
        ],
      },
    ],
    fragen: [
      {
        frage: 'Wie erfahren wir, ob unser Grundstück Ausnutzungsreserven hat?',
        antwort:
          'Aus der Bau- und Nutzungsordnung Ihrer Gemeinde und dem Zonenplan, verglichen mit der bestehenden Bruttogeschossfläche. Wir prüfen das in einer Machbarkeitsstudie und zeigen Ihnen, wie viel zusätzliche Fläche zulässig wäre.',
      },
      {
        frage: 'Können wir während einer Aufstockung im Haus bleiben?',
        antwort:
          'Häufig ja, mit Einschränkungen. Beim Öffnen des Dachs ist eine Notabdichtung nötig, und Lärm entsteht. Eine Etappierung, die den Wohnbereich schützt, ist planbar — wir stimmen sie vor Baubeginn mit Ihnen ab.',
      },
      {
        frage: 'Was ist günstiger: Aufstockung oder Ersatzneubau?',
        antwort:
          'Pro Quadratmeter ist der Ersatzneubau oft günstiger, weil er ohne Rücksicht auf Bestehendes gebaut wird. Insgesamt ist die Aufstockung meist wirtschaftlicher, weil Fundament, Keller und Erschliessung bestehen bleiben. Entscheidend ist der Zustand des Bestands.',
      },
      {
        frage: 'Wie hoch ist das Risiko einer Einsprache?',
        antwort:
          'Es hängt stark von der Wirkung auf die Nachbarschaft ab — Schatten, Einblick, Verkehr. Wir beurteilen das im Entwurf und empfehlen bei kritischen Situationen ein Gespräch mit den Nachbarn vor der Einreichung. Das reduziert das Risiko erheblich.',
      },
      {
        frage: 'Brauchen wir für eine Aufstockung eine Baubewilligung?',
        antwort:
          'Ja, immer. Zusätzliche Geschossfläche ist bewilligungspflichtig. Rechnen Sie mit drei bis neun Monaten Verfahrensdauer, abhängig von Gemeinde und Einsprachelage.',
      },
    ],
  },
  {
    slug: 'baugesuch-kanton-zuerich-aargau',
    titel: 'Baugesuch in Zürich, Aargau und Zug: Der Ablauf ohne Überraschungen',
    lead: 'Das Bewilligungsverfahren ist der Teil eines Projekts, der am häufigsten unterschätzt wird. Was wann eingereicht wird und wo es klemmt.',
    kategorie: 'Recht',
    datum: '2026-03-12',
    lesezeit: 8,
    bild: '/images/insights/baugesuch.webp',
    abschnitte: [
      {
        titel: 'Der Ablauf in vier Schritten',
        absaetze: [
          'Zuerst die Vorabklärung: Ein Gespräch mit der Bauverwaltung Ihrer Gemeinde, bevor Pläne gezeichnet sind. Es klärt, ob das Vorhaben grundsätzlich im Rahmen liegt und wo die Behörde empfindlich ist. Dieser Termin ist kostenlos und erspart Korrekturrunden.',
          'Dann das Baugesuch selbst: Situationsplan, Grundrisse, Schnitte, Fassaden, Berechnung der Ausnutzung, Nachweise zu Energie, Lärm und Brandschutz, Baueingabeformular. Wir stellen das Dossier zusammen und reichen es ein.',
          'Nach der formellen Prüfung folgt die öffentliche Auflage — im Kanton Zürich zwanzig Tage, im Aargau dreissig, im Kanton Zug zwanzig. In dieser Zeit können Nachbarn Einsprache erheben.',
          'Ohne Einsprachen erteilt die Gemeinde die Bewilligung, oft mit Auflagen. Mit Einsprachen folgt ein Aussprachetermin; scheitert er, entscheidet die Baubehörde und danach gegebenenfalls das Baurekursgericht.',
        ],
      },
      {
        titel: 'Wie lange es dauert',
        absaetze: [
          'Ein unbestrittenes Einfamilienhaus wird in den drei Kantonen typischerweise in zwei bis vier Monaten bewilligt. Ein Mehrfamilienhaus braucht drei bis sechs Monate, weil mehr Fachstellen beteiligt sind.',
          'Kommt eine Einsprache dazu, verlängert sich das um Monate. Geht der Fall ans Baurekursgericht, sind ein bis zwei Jahre realistisch. Diese Bandbreite ist der Grund, warum wir Einsprachen vorbeugen, statt sie in Kauf zu nehmen.',
          'Bei Bauten in Ortsbildschutzzonen oder mit Bezug zu einem Inventarobjekt kommt die kantonale Denkmalpflege dazu — planen Sie zwei bis drei Monate zusätzlich ein.',
        ],
      },
      {
        titel: 'Wo es typischerweise klemmt',
        absaetze: [
          'Die Ausnutzungsberechnung ist die häufigste Fehlerquelle. Was zur Bruttogeschossfläche zählt, ist kantonal unterschiedlich geregelt — Untergeschosse, Dachräume und Balkone werden verschieden behandelt. Ein Fehler hier führt zur Rückweisung.',
          'Der Lärmschutz nach Lärmschutz-Verordnung wird oft zu spät geprüft. An einer Verkehrsachse können Grundrisse angepasst werden müssen, damit Schlafräume auf der lärmabgewandten Seite liegen. Wer das erst nach dem Entwurf prüft, zeichnet zweimal.',
          'Der dritte Punkt sind Parkplätze. Die geforderte Anzahl ergibt sich aus einer kommunalen Wegleitung und lässt sich nicht verhandeln. Eine Einstellhalle, die zu klein geplant ist, macht das ganze Projekt hinfällig.',
        ],
      },
      {
        titel: 'Unterschiede zwischen den Kantonen',
        absaetze: [
          'Der Kanton Zürich arbeitet mit der Baumassenziffer, der Aargau meist mit der Ausnutzungsziffer, der Kanton Zug kennt beide je nach Gemeinde. Die Zahlen sind nicht direkt vergleichbar — wer aus einem Kanton Erfahrungswerte mitbringt, verschätzt sich.',
          'Auch die Verfahrensfristen und die Zuständigkeiten unterscheiden sich von Kanton zu Kanton. Wir kennen diese Unterschiede aus der Praxis in der ganzen Schweiz und richten das Dossier auf die jeweilige Behörde aus.',
        ],
      },
    ],
    fragen: [
      {
        frage: 'Wie lange dauert eine Baubewilligung im Kanton Zürich?',
        antwort:
          'Bei einem unbestrittenen Einfamilienhaus zwei bis vier Monate, bei einem Mehrfamilienhaus drei bis sechs. Die öffentliche Auflage beträgt zwanzig Tage. Mit Einsprachen verlängert sich das Verfahren um Monate, bei einem Gang ans Baurekursgericht auf ein bis zwei Jahre.',
      },
      {
        frage: 'Was kostet ein Baugesuch?',
        antwort:
          'Die Gebühren der Gemeinde richten sich meist nach den Baukosten und liegen im Promillebereich. Dazu kommt unser Honorar für die Erstellung des Dossiers sowie die Kosten für Fachnachweise zu Energie, Lärm und Brandschutz. Wir legen das im Angebot getrennt aus.',
      },
      {
        frage: 'Können wir das Baugesuch selbst einreichen?',
        antwort:
          'Formell ja, praktisch selten sinnvoll. Die Nachweise sind fachlich anspruchsvoll und ein Formfehler kostet eine Verfahrensrunde. Bei einfachen Vorhaben wie einem Gartenhaus ist es machbar.',
      },
      {
        frage: 'Was passiert bei einer Einsprache?',
        antwort:
          'Die Gemeinde lädt zu einem Aussprachetermin. Viele Einsprachen lassen sich dort mit einer Anpassung ausräumen. Kommt keine Einigung zustande, entscheidet die Baubehörde; dagegen ist der Weg ans Baurekursgericht offen.',
      },
      {
        frage: 'Dürfen wir vor der Bewilligung mit dem Bauen beginnen?',
        antwort:
          'Nein. Ein Baubeginn ohne rechtskräftige Bewilligung kann zur Einstellung und im Extremfall zum Rückbau führen. Vorbereitende Arbeiten wie Baugrunduntersuchungen sind zulässig.',
      },
    ],
  },
  {
    slug: 'wohnen-im-alter-umbau',
    titel: 'Wohnen im Alter: Umbauen, statt umziehen',
    lead: 'Die meisten Menschen wollen im eigenen Haus bleiben. Was ein Umbau dafür leisten muss — und was er kostet.',
    kategorie: 'Umbau',
    datum: '2026-01-22',
    lesezeit: 6,
    bild: '/images/insights/wohnen-im-alter.webp',
    abschnitte: [
      {
        titel: 'Die Ausgangslage',
        absaetze: [
          'Ein Haus, das für eine Familie gebaut wurde, passt für zwei Personen im Ruhestand oft nicht mehr: zu viele Treppen, ein Bad im Obergeschoss, ein Garten, der Arbeit macht. Der naheliegende Schluss ist der Umzug in eine Wohnung — er ist aber nicht immer der beste.',
          'Ein Umbau kostet in der Regel weniger als der Wechsel in eine gleichwertige Eigentumswohnung, und die gewachsene Umgebung bleibt. Voraussetzung ist, dass die Substanz es zulässt und der Umbau die richtigen Dinge angeht.',
        ],
      },
      {
        titel: 'Was hindernisfrei wirklich heisst',
        absaetze: [
          'Entscheidend sind wenige Punkte: ein schwellenloser Zugang von aussen, ein Bad mit bodengleicher Dusche und ausreichend Bewegungsfläche, Türbreiten ab achtzig Zentimetern und ein Wohn- und Schlafbereich auf einer Ebene.',
          'Die Norm SIA 500 beschreibt das im Detail. Für ein privates Wohnhaus muss man sie nicht vollständig erfüllen — aber die Masse zu kennen hilft, nicht am falschen Zentimeter zu sparen.',
          'Was oft vergessen wird: Beleuchtung und Kontraste. Mit dem Alter sinkt die Sehleistung deutlich. Gute, blendfreie Beleuchtung und kontrastreiche Kanten an Stufen sind günstige Massnahmen mit grosser Wirkung.',
        ],
      },
      {
        titel: 'Drei typische Eingriffe',
        absaetze: [
          'Das Erdgeschoss wird zur vollständigen Wohnung: Wohnen, Kochen, Schlafen und Bad auf einer Ebene. Das Obergeschoss bleibt für Besuch oder wird abgetrennt und vermietet — was zusätzliches Einkommen schafft.',
          'Das Bad wird umgebaut. Das ist der Eingriff mit dem besten Verhältnis von Aufwand und Nutzen: bodengleiche Dusche, unterfahrbarer Waschtisch, Verstärkungen in der Wand für später nötige Griffe. Rechnen Sie mit 25\'000 bis 50\'000 Franken.',
          'Ein Aufzug oder Treppenlift wird eingebaut. Ein Homelift braucht etwa 1,5 Quadratmeter Grundfläche und kostet ab rund 60\'000 Franken. Wenn ohnehin umgebaut wird, lohnt es sich, den Schacht vorzusehen — auch wenn der Aufzug erst später kommt.',
        ],
      },
      {
        titel: 'Umbau im bewohnten Zustand',
        absaetze: [
          'Die meisten Bauherrschaften wollen während des Umbaus im Haus bleiben. Das ist möglich, verlangt aber eine Etappierung: ein Geschoss nach dem anderen, ein provisorisches Bad, Staubschutz an den Übergängen.',
          'Rechnen Sie mit einem Zuschlag von zehn bis zwanzig Prozent gegenüber einem Umbau im leeren Haus. Dieser Aufwand ist meist geringer als die Kosten für eine Zwischenmiete.',
        ],
      },
    ],
    fragen: [
      {
        frage: 'Was kostet ein hindernisfreier Umbau?',
        antwort:
          'Ein Bad mit bodengleicher Dusche liegt bei 25\'000 bis 50\'000 Franken, ein Homelift ab rund 60\'000. Für ein Erdgeschoss, das zur vollständigen Wohnung umgebaut wird, rechnen Sie je nach Substanz mit 150\'000 bis 350\'000 Franken. Wir erstellen dazu einen Kostenrahmen im Vorprojekt.',
      },
      {
        frage: 'Gibt es Fördermittel oder Beiträge?',
        antwort:
          'Für energetische Massnahmen bestehen kantonale Programme, für hindernisfreie Anpassungen unter Umständen Beiträge von IV oder Ergänzungsleistungen. Bei einer AHV-Rente sind die Möglichkeiten begrenzt. Wir prüfen zu Projektbeginn, was in Frage kommt.',
      },
      {
        frage: 'Lohnt sich der Umbau gegenüber einem Verkauf?',
        antwort:
          'Das ist eine Rechnung mit drei Grössen: Umbaukosten, Verkaufswert des Hauses und Preis einer geeigneten Wohnung. Wir klären den ersten Punkt, für die anderen zwei arbeiten wir mit Elindo Immobilien zusammen. Erst mit allen drei Zahlen ist die Frage entscheidbar.',
      },
      {
        frage: 'Können wir das Obergeschoss separat vermieten?',
        antwort:
          'Häufig ja, wenn ein eigener Zugang, eine Küche und ein Bad möglich sind. Bauordnung und Brandschutz setzen dabei Grenzen, und die zusätzliche Wohneinheit ist bewilligungspflichtig. Wir prüfen das in der Machbarkeitsstudie mit.',
      },
      {
        frage: 'Wie lange dauert ein solcher Umbau?',
        antwort:
          'Ein Badumbau vier bis acht Wochen, ein Erdgeschoss-Umbau vier bis sechs Monate. Im bewohnten Zustand verlängert sich das um etwa ein Drittel, weil in Etappen gearbeitet wird.',
      },
    ],
  },
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

/**
 * Häufige Fragen zur Zusammenarbeit, für die Kontaktseite.
 *
 * Bewusst als sichtbarer Text plus FAQPage-Markup: Wer nach "Architekt
 * Obfelden Kosten" oder "ab wann Architekt einbeziehen" sucht, soll die
 * Antwort direkt finden — auch wenn sie über ein KI-System ausgeliefert wird.
 */
export const kontaktFragen: InsightFrage[] = [
  {
    frage: 'In welchen Regionen arbeitet Atelier AA Architekten?',
    antwort:
      'Unser Büro ist in Obfelden im Kanton Zürich. Wir planen und realisieren Projekte in der ganzen Schweiz, mit einem Schwerpunkt im Knonauer Amt sowie in den Kantonen Zürich, Aargau und Zug.',
  },
  {
    frage: 'Welche Leistungen bieten Sie an?',
    antwort:
      'Architektur und Entwurf, Innenarchitektur, Umbau und Sanierung, Projektentwicklung sowie Bauleitung — von der Machbarkeitsstudie über das Baugesuch bis zur Übergabe. Wir übernehmen einzelne Phasen oder die gesamte Planung.',
  },
  {
    frage: 'Welche Arten von Gebäuden planen Sie?',
    antwort:
      'Schwerpunkt sind Mehrfamilienhäuser und Wohnbauten. Dazu kommen Einfamilienhäuser, Aufstockungen, Gewerbe- und Verwaltungsbauten sowie Sanierungen im Bestand.',
  },
  {
    frage: 'Was kostet ein erstes Gespräch?',
    antwort:
      'Das Erstgespräch ist kostenlos und unverbindlich. Wir klären darin Ihr Vorhaben, den Ort und den Rahmen und sagen Ihnen offen, was wir für machbar und sinnvoll halten.',
  },
  {
    frage: 'Wie erreichen wir Sie am besten?',
    antwort:
      'Telefonisch unter +41 44 770 05 06 oder per E-Mail an info@atelier-aa.ch. Wir melden uns in der Regel innerhalb eines Arbeitstages zurück.',
  },
];

export function getInsight(slug: string): Insight | undefined {
  return insights.find((i) => i.slug === slug);
}

export function getWeitereInsights(currentSlug: string, count = 2): Insight[] {
  return insights.filter((i) => i.slug !== currentSlug).slice(0, count);
}
