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
    slug: 'design-build-projektabwicklung',
    titel: 'Design Build: Warum wir neue Formen der Projektabwicklung weiterdenken',
    lead: 'Gute Architektur entscheidet sich nicht nur im Entwurf, sondern auch darin, wie ein Projekt organisiert wird. Wir beschäftigen uns mit integrierten Abwicklungsmodellen wie Design Build und wenden erste Prinzipien bereits in einem aktuellen Projekt an.',
    kategorie: 'Prozess',
    datum: '2026-08-20',
    lesezeit: 6,
    bild: '/images/buero/atelier-aa-buero-1.jpg',
    abschnitte: [
      {
        titel: 'Warum wir uns damit beschäftigen',
        absaetze: [
          'Klassische Projektabläufe führen häufig dazu, dass relevantes Wissen erst spät zusammenkommt: Der Entwurf steht weitgehend, bevor Fragen der Ausführung, der Kosten oder der Machbarkeit vollständig geklärt sind. Architektonische, technische und wirtschaftliche Entscheidungen beeinflussen sich aber gegenseitig: Je später sie gemeinsam betrachtet werden, desto teurer wird jede Korrektur.',
          'Uns interessiert deshalb, wie sich relevantes Wissen früher in einen Projektprozess einbinden lässt, statt es erst dann zu prüfen, wenn der Entwurf längst feststeht.',
        ],
      },
      {
        titel: 'Was Design Build verändert',
        absaetze: [
          'Design Build ist ein Modell integrierter Projektabwicklung: Planung und Ausführung werden nicht strikt nacheinander, sondern von Beginn an gemeinsam gedacht. Fachwissen aus der Ausführung fliesst früher in Entscheidungen ein, technische und wirtschaftliche Konsequenzen werden früher sichtbar.',
          'Das verändert, wo Verantwortung liegt und wie Schnittstellen zwischen Planung und Ausführung organisiert sind. Beides lässt sich reduzieren, wenn die Beteiligten früher am selben Tisch sitzen, ohne dass Gestaltung zur Nebensache wird.',
        ],
      },
      {
        titel: 'Was wir bereits tun',
        absaetze: [
          'Atelier AA hat sich intensiv mit Design Build und integrierter Projektabwicklung auseinandergesetzt und bereits ein aktuelles Projekt gestartet, in dem wir zentrale Prinzipien daraus anwenden: Wir bringen Planung, Ausführung und wirtschaftliche Überlegungen früher zusammen und beziehen relevantes Fachwissen gezielter in den Prozess ein.',
          'Das Projekt wird dadurch nicht vollständig nach Design Build abgewickelt. Es ist ein Anfang, an dem wir prüfen, welche Prinzipien daraus ein Projekt tatsächlich besser machen, bevor wir daraus einen festen Ablauf für andere Projekte ableiten.',
        ],
      },
      {
        titel: 'Was uns daran interessiert',
        absaetze: [
          'Wann sollte Unternehmerwissen in ein Projekt einfliessen? Welche Entscheidungen werden heute zu spät getroffen? Wo entstehen Schnittstellen, die sich vermeiden liessen? Wie lassen sich Gestaltung, Kosten und Machbarkeit von Beginn an gemeinsam betrachten, statt sie nacheinander abzuprüfen? Und welche Projektbeteiligten müssen wann am Tisch sitzen, damit eine Entscheidung auf einer breiteren Grundlage steht?',
          'Das sind für uns keine rhetorischen Fragen, sondern die, an denen sich zeigt, ob ein Prozess ein Projekt tatsächlich besser macht.',
        ],
      },
      {
        titel: 'Kein neues Schema',
        absaetze: [
          'Atelier AA arbeitet nicht nach starren Rezepten: Auch Design Build verstehen wir nicht als neues Schema, das sich unverändert auf jedes Projekt übertragen lässt, sondern als Ansatz, den wir projektbezogen einsetzen und weiterdenken. Auch die Art, wie ein Projekt entsteht, ist für uns Teil der Architektur.',
          'Wir entwickeln damit nicht nur Architektur weiter, sondern auch die Prozesse, durch die sie möglich wird.',
        ],
      },
    ],
    fragen: [
      {
        frage: 'Was ist Design Build?',
        antwort:
          'Ein Modell integrierter Projektabwicklung, bei dem Planung und Ausführung von Beginn an gemeinsam gedacht werden, statt strikt nacheinander. Fachwissen aus der Ausführung fliesst dadurch früher in Entscheidungen ein.',
      },
      {
        frage: 'Arbeitet Atelier AA bereits vollständig nach Design Build?',
        antwort:
          'Nein. Wir haben uns intensiv mit dem Modell auseinandergesetzt und wenden erste zentrale Prinzipien daraus in einem aktuellen Projekt an, das Projekt wird aber nicht vollständig nach Design Build abgewickelt.',
      },
      {
        frage: 'Was bedeutet integrierte Projektabwicklung konkret?',
        antwort:
          'Planung, Ausführung und wirtschaftliche Überlegungen werden früher zusammengebracht, relevantes Fachwissen wird gezielter in den Prozess eingebunden, und unnötige Schnittstellen zwischen den Beteiligten werden reduziert.',
      },
      {
        frage: 'Wird Atelier AA Design Build künftig für alle Projekte anbieten?',
        antwort:
          'Das entscheidet sich am einzelnen Projekt. Wir setzen Prinzipien der integrierten Projektabwicklung dort ein, wo sie ein Projekt tatsächlich besser machen, nicht als festes Schema für jede Aufgabe.',
      },
    ],
  },
  {
    slug: 'verdichtung-innenentwicklung',
    titel: 'Verdichten statt neu bauen: Was auf Ihrem Grundstück möglich ist',
    lead: 'Bauland wird in Zürich, Aargau und Zug knapp. Der Bestand hält oft mehr aus, als seine Eigentümer vermuten: Aufstockung, Ersatzneubau oder Anbau.',
    kategorie: 'Verdichtung',
    datum: '2026-07-20',
    lesezeit: 7,
    bild: '/images/insights/atelier-aa-verdichtung.webp',
    abschnitte: [
      {
        titel: 'Die Reserve liegt im Bestand',
        absaetze: [
          'Viele Einfamilienhaus-Parzellen in den Kantonen Zürich, Aargau und Zug stammen aus den Sechziger- und Siebzigerjahren. Nach heutiger Bau- und Zonenordnung liegen dort oft noch Nutzungsreserven. Wo damals ein Haus für vier Personen stand, kann heute Wohnraum für mehrere Haushalte möglich sein, je nach Parzelle.',
          'Das Raumplanungsgesetz verlangt seit der Revision Innenentwicklung vor Neueinzonung. Kantone und Gemeinden haben ihre Bau- und Nutzungsordnungen entsprechend angepasst: Vielerorts wurden Ausnutzungsziffern erhöht oder Attikageschosse zugelassen. Diese Reserven sind vielen Eigentümern nicht bewusst.',
        ],
      },
      {
        titel: 'Drei Wege der Verdichtung',
        absaetze: [
          'Die Aufstockung nutzt die vorhandene Struktur und ist der schnellste Weg. Voraussetzung ist ein Tragwerk, das die zusätzliche Last aufnimmt, und eine Gebäudehöhe, die die Bauordnung noch zulässt. Häufig lohnt sich eine Leichtbaukonstruktion in Holz, weil sie das Fundament weniger belastet.',
          'Der Anbau erweitert horizontal. Er kommt in Frage, wo Grenzabstände und Grundflächenziffer noch Spielraum lassen. Der Eingriff in den Bestand bleibt gering, was bei bewohnten Häusern zählt.',
          'Der Ersatzneubau nutzt die Ausnutzung voll aus, verliert aber die graue Energie des Bestands. Er ist wirtschaftlich, wenn die bestehende Substanz sanierungsbedürftig ist. Bei intakten Bauten ist die Rechnung offen und muss geführt werden.',
        ],
      },
      {
        titel: 'Was die Machbarkeit entscheidet',
        absaetze: [
          'Vier Grössen bestimmen den Rahmen: Ausnutzungs- oder Baumassenziffer, Grenzabstände, Gebäudehöhe und Dachform. Alle vier stehen in der Bau- und Nutzungsordnung Ihrer Gemeinde. Dazu kommen Sonderregeln: Ortsbildschutz, Gewässerabstände, Lärmschutz an Verkehrsachsen.',
          'Der zweite Faktor sind die Nachbarn. Eine Verdichtung, die Schatten wirft oder Einblick schafft, zieht Einsprachen an. Wir prüfen diese Wirkungen im Entwurf und suchen das Gespräch, bevor das Baugesuch eingereicht wird. So wird Konfliktpotenzial erkennbar, solange das Projekt noch anpassbar ist.',
        ],
      },
      {
        titel: 'Der wirtschaftliche Rahmen',
        absaetze: [
          'Eine Aufstockung mit zwei zusätzlichen Wohnungen bewegt sich je nach Ausbaustandard und Konstruktion in einer Grössenordnung von rund einer bis eineinhalb Millionen Franken; Preisstand 2026, grober Erfahrungswert. Ob die erzielbaren Mietzinse diese Investition tragen, hängt von Lage, Baukosten, Finanzierung und Wohnungsmix ab und rechnen wir für die konkrete Parzelle durch.',
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
          'Häufig ja, mit Einschränkungen. Beim Öffnen des Dachs ist eine Notabdichtung nötig, und Lärm entsteht. Eine Etappierung, die den Wohnbereich schützt, ist planbar. Wir stimmen sie vor Baubeginn mit Ihnen ab.',
      },
      {
        frage: 'Was ist günstiger: Aufstockung oder Ersatzneubau?',
        antwort:
          'Pro Quadratmeter ist der Ersatzneubau oft günstiger, weil er ohne Rücksicht auf Bestehendes gebaut wird. Insgesamt ist die Aufstockung meist wirtschaftlicher, weil Fundament, Keller und Erschliessung bestehen bleiben. Entscheidend ist der Zustand des Bestands.',
      },
      {
        frage: 'Wie hoch ist das Risiko einer Einsprache?',
        antwort:
          'Es hängt stark von der Wirkung auf die Nachbarschaft ab: Schatten, Einblick, Verkehr. Wir beurteilen das im Entwurf und empfehlen bei kritischen Situationen ein Gespräch mit den Nachbarn vor der Einreichung. Das reduziert das Risiko erheblich.',
      },
      {
        frage: 'Brauchen wir für eine Aufstockung eine Baubewilligung?',
        antwort:
          'In der Regel ja: Zusätzliche Geschossfläche ist bewilligungspflichtig. Die konkreten Anforderungen richten sich nach dem kantonalen und kommunalen Baurecht. Für das Verfahren sind je nach Gemeinde, Fachstellen und Einsprachelage mehrere Monate einzuplanen.',
      },
    ],
  },
  {
    slug: 'baugesuch-kanton-zuerich-aargau',
    titel: 'Baugesuch in Zürich, Aargau und Zug: Der Ablauf ohne Überraschungen',
    lead: 'Das Bewilligungsverfahren ist der Teil eines Projekts, der am häufigsten unterschätzt wird. Was wann eingereicht wird und wo es klemmt.',
    kategorie: 'Recht',
    datum: '2026-04-08',
    lesezeit: 8,
    bild: '/images/insights/atelier-aa-baugesuch.webp',
    abschnitte: [
      {
        titel: 'Der Ablauf in vier Schritten',
        absaetze: [
          'Zuerst die Vorabklärung: Ein Gespräch mit der Bauverwaltung Ihrer Gemeinde, bevor Pläne gezeichnet sind. Es klärt, ob das Vorhaben grundsätzlich im Rahmen liegt und wo die Behörde empfindlich ist, und erspart Korrekturrunden. Umfang, Ablauf und allfällige Gebühren regelt jede Gemeinde selbst.',
          'Dann das Baugesuch selbst: Situationsplan, Grundrisse, Schnitte, Fassaden, Berechnung der Ausnutzung, Nachweise zu Energie, Lärm und Brandschutz, Baueingabeformular. Wir stellen das Dossier zusammen und reichen es ein.',
          'Nach der formellen Prüfung folgt die öffentliche Auflage, in der Nachbarn Einsprache erheben können. Die genaue Frist regelt jede Gemeinde beziehungsweise jeder Kanton für sich.',
          'Ohne Einsprachen erteilt die Gemeinde die Bewilligung, oft mit Auflagen. Bei einer Einsprache kann die Behörde zu einem Einigungsgespräch einladen, verpflichtet ist sie dazu nicht. Kommt keine Einigung zustande, entscheidet die Baubehörde, und der Weg an eine kantonale Beschwerdeinstanz steht offen. Für die rechtliche Vertretung in diesem Verfahren empfehlen wir eine Anwältin oder einen Anwalt: Wir kennen den Ablauf aus der Praxis, sind aber keine Rechtsvertretung.',
        ],
      },
      {
        titel: 'Wie lange es dauert',
        absaetze: [
          'Die folgenden Zeitangaben sind grobe Orientierungswerte aus unserer Projekterfahrung, keine Zusicherung: Die tatsächliche Dauer hängt von der Gemeinde, der Vollständigkeit des Gesuchs und der Einsprachelage ab.',
          'Im Kanton Zürich sind die Entscheidfristen gesetzlich geregelt: In der Regel entscheidet die Behörde innert zwei Monaten seit der Vorprüfung, bei Neubauten und grösseren Umbauvorhaben innert vier Monaten. Die Frist läuft erst ab Abschluss der Vorprüfung, nicht ab Einreichung.',
          'Kommt eine Einsprache dazu, verlängert sich das um Monate. Geht der Fall an die kantonale Beschwerdeinstanz, sind ein bis zwei Jahre realistisch. Diese Bandbreite ist der Grund, warum wir Einsprachen vorbeugen, statt sie in Kauf zu nehmen.',
          'Bei Bauten in Ortsbildschutzzonen oder mit Bezug zu einem Inventarobjekt kommt die kantonale Denkmalpflege dazu: Planen Sie zwei bis drei Monate zusätzlich ein.',
        ],
      },
      {
        titel: 'Wo es typischerweise klemmt',
        absaetze: [
          'Die Ausnutzungsberechnung ist die häufigste Fehlerquelle. Was zur Bruttogeschossfläche zählt, ist kantonal unterschiedlich geregelt: Untergeschosse, Dachräume und Balkone werden verschieden behandelt. Ein Fehler hier führt zur Rückweisung.',
          'Der Lärmschutz nach Lärmschutz-Verordnung wird oft zu spät geprüft. An einer Verkehrsachse können Grundrisse angepasst werden müssen, damit Schlafräume auf der lärmabgewandten Seite liegen. Wer das erst nach dem Entwurf prüft, zeichnet zweimal.',
          'Der dritte Punkt sind Parkplätze. Die geforderte Anzahl richtet sich nach den kantonalen und kommunalen Vorgaben. Je nach Standort, Erschliessung und Nutzung sind Reduktionen, Mobilitätskonzepte oder Ersatzabgaben möglich, das muss aber früh geklärt werden. Eine Einstellhalle, die zu klein geplant ist, macht das ganze Projekt hinfällig.',
        ],
      },
      {
        titel: 'Unterschiede zwischen den Kantonen',
        absaetze: [
          'Welche Nutzungsziffer massgebend ist, steht in der Bau- und Zonenordnung der jeweiligen Gemeinde: Baumassenziffer, Ausnutzungsziffer, Überbauungsziffer oder eine Kombination. Die Zahlen sind nicht direkt vergleichbar. Wer aus einer anderen Gemeinde Erfahrungswerte mitbringt, verschätzt sich.',
          'Auch die Verfahrensfristen und die Zuständigkeiten unterscheiden sich von Kanton zu Kanton. Wir kennen diese Unterschiede aus der Praxis in diesen Kantonen und richten das Dossier auf die jeweilige Behörde aus.',
        ],
      },
    ],
    fragen: [
      {
        frage: 'Wie lange dauert eine Baubewilligung im Kanton Zürich?',
        antwort:
          'Im Kanton Zürich entscheidet die Behörde in der Regel innert zwei Monaten seit der Vorprüfung, bei Neubauten und grösseren Umbauten innert vier Monaten. Bis zur Vorprüfung vergeht zusätzlich Zeit, und mit Einsprachen verlängert sich das Verfahren um Monate, bei einem Gang ans Baurekursgericht auf ein bis zwei Jahre.',
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
          'Häufig lässt sich mit den Einsprechenden das Gespräch suchen, teils auf Einladung der Gemeinde. Viele Einsprachen lassen sich mit einer Anpassung ausräumen. Kommt keine Einigung zustande, entscheidet die Baubehörde; dagegen steht der Weg an eine kantonale Beschwerdeinstanz offen.',
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
    lead: 'Die meisten Menschen wollen im eigenen Haus bleiben. Was ein Umbau dafür leisten muss und was er kostet.',
    kategorie: 'Umbau',
    datum: '2026-01-22',
    lesezeit: 6,
    bild: '/images/insights/atelier-aa-wohnen-im-alter.webp',
    abschnitte: [
      {
        titel: 'Die Ausgangslage',
        absaetze: [
          'Ein Haus, das für eine Familie gebaut wurde, passt für zwei Personen im Ruhestand oft nicht mehr: zu viele Treppen, ein Bad im Obergeschoss, ein Garten, der Arbeit macht. Der naheliegende Schluss ist der Umzug in eine Wohnung, er ist aber nicht immer der beste.',
          'Ein Umbau kostet in der Regel weniger als der Wechsel in eine gleichwertige Eigentumswohnung, und die gewachsene Umgebung bleibt. Voraussetzung ist, dass die Substanz es zulässt und der Umbau die richtigen Dinge angeht.',
        ],
      },
      {
        titel: 'Was hindernisfrei wirklich heisst',
        absaetze: [
          'Entscheidend sind wenige Punkte: ein schwellenloser Zugang von aussen, ein Bad mit bodengleicher Dusche und ausreichend Bewegungsfläche, Türbreiten ab achtzig Zentimetern und ein Wohn- und Schlafbereich auf einer Ebene. Diese Masse einzuhalten hilft, nicht am falschen Zentimeter zu sparen.',
          'Was oft vergessen wird: Beleuchtung und Kontraste. Mit dem Alter sinkt die Sehleistung deutlich. Gute, blendfreie Beleuchtung und kontrastreiche Kanten an Stufen sind günstige Massnahmen mit grosser Wirkung.',
        ],
      },
      {
        titel: 'Drei typische Eingriffe',
        absaetze: [
          'Das Erdgeschoss wird zur vollständigen Wohnung: Wohnen, Kochen, Schlafen und Bad auf einer Ebene. Das Obergeschoss bleibt für Besuch oder wird abgetrennt und vermietet, was zusätzliches Einkommen schafft.',
          'Das Bad wird umgebaut. Das ist der Eingriff mit dem besten Verhältnis von Aufwand und Nutzen: bodengleiche Dusche, unterfahrbarer Waschtisch, Verstärkungen in der Wand für später nötige Griffe. Rechnen Sie mit 25\'000 bis 50\'000 Franken.',
          'Ein Aufzug oder Treppenlift wird eingebaut. Ein Homelift braucht etwa 1,5 Quadratmeter Grundfläche und kostet ab rund 60\'000 Franken. Wenn ohnehin umgebaut wird, lohnt es sich, den Schacht vorzusehen, auch wenn der Aufzug erst später kommt.',
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
          'Das ist eine Rechnung mit drei Grössen: Umbaukosten, Verkaufswert des Hauses und Preis einer geeigneten Wohnung. Wir klären diese Zahlen gemeinsam mit einer Immobilienbewertung. Erst mit allen drei Werten ist die Frage entscheidbar.',
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
    lead: 'Generative Werkzeuge liefern in Minuten hunderte Varianten. Die eigentliche Arbeit beginnt danach: bei der Frage, welche davon trägt.',
    kategorie: 'Digitalisierung',
    datum: '2026-08-05',
    lesezeit: 6,
    bild: '/images/insights/atelier-aa-ki-entwurf.png',
    abschnitte: [
      {
        titel: 'Was die Werkzeuge heute leisten',
        absaetze: [
          'Generative Software durchsucht Lösungsräume schneller, als es von Hand möglich wäre. Bei Volumenstudien, Belegungsvarianten oder der Optimierung von Fensterflächen gegen Wärmeeinträge ist das ein echter Gewinn: Wir sehen früher, welche Richtungen sich lohnen und welche nicht.',
          'Auch in der Ausführungsplanung hilft Automatisierung. Kollisionsprüfungen zwischen Tragwerk und Haustechnik, Mengenauszüge, Varianten von Detailanschlüssen: Aufgaben mit klaren Regeln und prüfbarem Ergebnis. Wir nutzen diese Werkzeuge dort, wo sie Zeit freispielen für die Fragen, die Urteilsvermögen brauchen.',
        ],
      },
      {
        titel: 'Wo die Grenze liegt',
        absaetze: [
          'Ein Modell kennt keinen Ort. Es weiss nicht, dass das Wohnzimmer des Nachbarn nach Süden liegt, dass die Gemeinde bei der Firsthöhe empfindlich ist oder dass die Bauherrschaft in fünf Jahren eine Generation mehr im Haus unterbringen möchte. Es optimiert, was messbar ist, und übersieht, was zählt.',
          'Der zweite Punkt ist Verantwortung. Für ein Bauwerk haftet ein Mensch mit Namen und Berufsregister-Eintrag. Ein Vorschlag aus einem Modell ist ein Vorschlag, bis jemand ihn prüft, anpasst und unterschreibt. Diese Prüfung ist keine Formalie, sondern der Kern des Berufs.',
        ],
      },
      {
        titel: 'Wie wir damit arbeiten',
        absaetze: [
          'Wir setzen generative Werkzeuge in der frühen Phase ein, um Varianten zu erzeugen, und bewerten sie anschliessend an denselben Kriterien wie jeden anderen Entwurf: Fügt sich das Volumen in den Kontext? Sind die Grundrisse in zwanzig Jahren noch brauchbar? Stimmt das Verhältnis von Aufwand und Wirkung?',
          'Was bleibt, ist unsere Handschrift und unsere Verantwortung. Die Werkzeuge verkürzen den Weg zur Auswahl. Die Auswahl selbst treffen wir.',
        ],
      },
      {
        titel: 'Ein Beispiel aus der eigenen Werkstatt',
        absaetze: [
          'Für eine kleine, freistehende Raumeinheit im Garten haben wir mit einem generativen Werkzeug rasch mehrere Kubaturen durchgespielt, ohne konkrete Parzelle, ohne Bauherrschaft, rein als Formstudie. Die beiden Bilder zeigen zwei solche KI-generierten Varianten: ein eingeschossiger Pavillon und ein zweigeschossiger Kubus, beide in Holzverkleidung.',
          'Zur Einordnung: Das sind Visualisierungen aus der Werkzeugerprobung, keine Fotos eines realisierten Projekts und keine Machbarkeitsstudie für ein bestehendes Grundstück. Genau das ist der in diesem Beitrag beschriebene Nutzen, und genau dort hört er auch auf: Für ein echtes Grundstück braucht es danach die eigentliche Arbeit.',
        ],
        bilder: [
          '/images/insights/atelier-aa-ki-entwurf-beispiel-1.jpg',
          '/images/insights/atelier-aa-ki-entwurf-beispiel-2.jpg',
        ],
      },
    ],
    fragen: [
      {
        frage: 'Entwerfen Sie unsere Projekte mit KI?',
        antwort:
          'Wir nutzen generative Werkzeuge für Variantenstudien und rechenintensive Prüfungen. Der Entwurf, die Auswahl und die Verantwortung für das Ergebnis liegen bei uns: Jedes Projekt wird von einem Architekten verantwortet, der es unterschreibt.',
      },
      {
        frage: 'Wird Planung dadurch günstiger?',
        antwort:
          'Teilweise. Bei Aufgaben mit klaren Regeln sparen wir Zeit, und das kommt bei umfangreichen Projekten im Honorar an. Die Phasen, die Abstimmung und Urteilsvermögen brauchen, werden dadurch nicht kürzer, denn sie sind der eigentliche Wert unserer Arbeit.',
      },
      {
        frage: 'Was passiert mit unseren Projektdaten?',
        antwort:
          'Projektbezogene Unterlagen geben wir nicht in öffentliche KI-Dienste. Wo wir Werkzeuge einsetzen, die Daten verarbeiten, klären wir Speicherort und Zweck vorab und halten das im Planungsvertrag fest.',
      },
      {
        frage: 'Können wir Varianten sehen, bevor wir uns entscheiden?',
        antwort:
          'Ja. Wir zeigen in der Vorprojektphase mehrere Ansätze mit ihren Vor- und Nachteilen, anhand von Modellen, Schnitten und Kostenrahmen. Sie entscheiden auf einer nachvollziehbaren Grundlage, nicht auf ein Bild hin.',
      },
    ],
  },
  {
    slug: 'kreislauffaehig-bauen',
    titel: 'Kreislauffähig bauen: Der Bestand ist die Ressource',
    lead: 'Der grösste Hebel für weniger Emissionen liegt nicht im Neubau, sondern in dem, was schon steht. Was das für ein konkretes Projekt bedeutet.',
    kategorie: 'Nachhaltigkeit',
    datum: '2026-06-17',
    lesezeit: 7,
    bild: '/images/insights/atelier-aa-kreislauf-bauen.jpg',
    abschnitte: [
      {
        titel: 'Graue Energie entscheidet mit',
        absaetze: [
          'Ein gut gedämmter Neubau verbraucht im Betrieb wenig. Doch bevor er bezogen wird, stecken Jahre an Emissionen in Beton, Stahl und Transport. Bei einem Wohnbau nach heutigem Standard macht diese graue Energie über den Lebenszyklus einen erheblichen Teil der Gesamtbilanz aus.',
          'Daraus folgt eine einfache Reihenfolge: erhalten, wo es geht. Umbauen, wo Erhalt allein nicht reicht. Neu bauen, wo es sachlich begründet ist. Diese Reihenfolge stellen wir am Anfang jedes Projekts zur Diskussion, auch wenn die Anfrage anders lautet.',
        ],
      },
      {
        titel: 'Was Kreislauffähigkeit praktisch heisst',
        absaetze: [
          'Kreislauffähig zu bauen beginnt bei der Fügung. Verschraubt statt verklebt, Schichten trennbar, Materialien sortenrein: Das klingt technisch, entscheidet aber darüber, ob ein Bauteil in dreissig Jahren wiederverwendet oder entsorgt wird.',
          'Dazu kommt die Nutzungsoffenheit. Eine Geschosshöhe, die auch ein Büro erlaubt. Ein Tragwerk, das eine Wand versetzen lässt. Ein Grundriss, der geteilt werden kann, wenn ein Haushalt kleiner wird. Gebäude, die sich anpassen lassen, werden nicht abgerissen.',
        ],
      },
      {
        titel: 'Der wirtschaftliche Teil',
        absaetze: [
          'Kreislauffähigkeit ist kein Aufpreis für ein gutes Gewissen. Trennbare Konstruktionen können späteren Rückbau und Wiederverwendung erleichtern, nutzungsoffene Grundrisse die Anpassungsfähigkeit erhöhen, und Bauteile aus dem Bestand ersparen Neubeschaffung.',
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
          'Einzelne Massnahmen erhöhen die Erstellungskosten, können aber Betriebs-, Energie- und späteren Umbaukosten senken. Entscheidend ist deshalb die Betrachtung über den Lebenszyklus, und dass früh geplant wird: Wer Nachhaltigkeit ab dem Vorprojekt mitdenkt, zahlt weniger als wer sie später nachrüstet.',
      },
      {
        frage: 'Können wir wiederverwendete Bauteile einsetzen?',
        antwort:
          'Ja, mit Vorlauf. Verfügbarkeit und Nachweise brauchen Zeit, deshalb klären wir früh, welche Bauteile in Frage kommen, häufig Tragwerkselemente, Fassadenplatten oder Innenausbau. Für tragende Teile ist ein Nachweis der Eigenschaften erforderlich.',
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
    lead: 'Software plant Details, Portale liefern Typenhäuser, Modelle erzeugen Bilder. Was ein Architekt beiträgt, wird dadurch nicht kleiner, nur sichtbarer.',
    kategorie: 'Haltung',
    datum: '2026-03-11',
    lesezeit: 5,
    bild: '/images/insights/atelier-aa-rolle-architekt.png',
    abschnitte: [
      {
        titel: 'Die Aufgabe stellen, nicht nur lösen',
        absaetze: [
          'Bauherrschaften kommen mit einer Frage: vier Wohnungen auf diesem Grundstück. Nach dem ersten Gespräch ist es oft eine andere: fünf kleinere Einheiten, weil der Markt sie sucht, oder drei mit einer Option auf Aufstockung.',
          'Diese Verschiebung ist die eigentliche Leistung. Wer nur die gestellte Aufgabe löst, löst manchmal die falsche. Ein Werkzeug optimiert, was man ihm vorgibt, es fragt aber nicht zurück.',
        ],
      },
      {
        titel: 'Widersprüche aushalten',
        absaetze: [
          'Ein Bauprojekt besteht aus Anforderungen, die sich gegenseitig ausschliessen: Budget gegen Qualität, Ausnutzung gegen Nachbarschaft, Termin gegen Sorgfalt. Diese Konflikte lassen sich nicht wegrechnen, sie müssen gewichtet werden.',
          'Gewichten heisst entscheiden, und Entscheidungen brauchen jemanden, der sie begründet, vor der Bauherrschaft, der Behörde und in zehn Jahren auch vor sich selbst.',
        ],
      },
      {
        titel: 'Durch das Verfahren führen',
        absaetze: [
          'Zwischen Entwurf und Schlüsselübergabe liegen Baugesuch, Einsprachefristen, Vergaben, ein Dutzend Fachplaner und die Baustelle. Hier entscheidet sich, ob aus einer guten Idee ein gutes Haus wird.',
          'Wir vertreten dabei die Interessen der Bauherrschaft: gegenüber Unternehmern, in Behördengesprächen, bei Nachträgen. Das ist unspektakulär und macht am Ende den Unterschied in Kosten, Terminen und Qualität.',
        ],
      },
      {
        titel: 'Der Wert bleibt sichtbar',
        absaetze: [
          'Ein sorgfältig geplantes Gebäude vermietet sich besser, hält länger und lässt sich anpassen. Diese Qualität entsteht nicht durch mehr Rechenleistung, sondern durch jemanden, der zuhört, abwägt und Verantwortung übernimmt.',
          'Genau darin sehen wir unsere Aufgabe, heute wie vor zwanzig Jahren, nur mit besseren Werkzeugen.',
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
          'Das Honorar wird projektspezifisch anhand des vereinbarten Leistungsumfangs, der Komplexität und des Aufwands festgelegt. Die Ordnung SIA 102:2020 nennt dafür mehrere Modelle, unter anderem Pauschalhonorar, Honorar nach effektivem Zeitaufwand oder ein baukostenbezogenes Honorar; eine allgemeine Prozenttabelle gibt es darin nicht mehr. Wir legen die gewählte Grundlage im Angebot offen und rechnen phasenweise ab, damit sie nachvollziehbar bleibt.',
      },
      {
        frage: 'Können wir einzelne Phasen beauftragen?',
        antwort:
          'Ja. Viele Bauherrschaften beginnen mit Vorstudie und Vorprojekt und entscheiden danach über die Fortsetzung. Wir halten die Phasen so ab, dass ein Wechsel möglich bleibt, auch wenn durchgehende Begleitung meist das bessere Ergebnis bringt.',
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
  {
    slug: 'baukostenschub-2022',
    titel: 'Baukostenschub 2022: Was der Preissprung bei Stahl und Zement bedeutete',
    lead: 'Innert eines Jahres verteuerte sich Stahl um siebzig Prozent; Zement zog binnen zwei Jahren um vierzig Prozent nach. Was diesen Schub auslöste und was Bauherrschaften seither daraus mitnehmen.',
    kategorie: 'Kosten',
    datum: '2025-01-14',
    lesezeit: 5,
    bild: '/images/insights/atelier-aa-baukostenschub-2022.webp',
    abschnitte: [
      {
        titel: 'Der stärkste Anstieg seit Messbeginn',
        absaetze: [
          'Im April 2022 stieg der Baupreisindex des Bundesamts für Statistik für den Hochbau gegenüber dem Vorjahr um 8,1 Prozent, der stärkste Anstieg innerhalb eines Jahres seit Beginn der Erhebung 1998. Die Materialkosten im Hochbau allein legten im Mai 2022 um 19,6 Prozent zu.',
          'Am stärksten betroffen waren Metalle und mineralische Baustoffe: Stahl verteuerte sich nach Erhebungen des Schweizerischen Baumeisterverbands im Verlauf von 2021 um rund siebzig Prozent, Zement zwischen 2022 und 2023 um rund vierzig Prozent. Wer zu diesem Zeitpunkt einen Kostenvoranschlag aus dem Vorjahr in der Schublade hatte, stand vor einer unangenehmen Überraschung.',
        ],
      },
      {
        titel: 'Lieferketten, Nachfrage, Wechselkurs',
        absaetze: [
          'Drei Faktoren trafen zusammen: Lieferkettenstörungen nach der Pandemie, eine hohe gleichzeitige Nachfrage nach Baustoffen und Fachpersonal sowie steigende Energiekosten in der Materialproduktion. Lange Lieferzeiten und Annahmestopps einzelner Werke verschärften die Lage zusätzlich.',
          'Ab Ende 2023 beruhigte sich die Entwicklung wieder, auch weil der starke Schweizer Franken die Importkosten für Baumaterialien in Franken spürbar dämpfte. Die Baupreise stiegen seither nur noch leicht.',
        ],
      },
      {
        titel: 'Was das für die Kostenschätzung heisst',
        absaetze: [
          'Der Preisschub 2022 hat vor allem eines gezeigt: Eine Kostenschätzung ist eine Momentaufnahme, kein fixer Vertrag. Zwischen Vorprojekt und Vergabe können, je nach Marktlage, mehrere Prozentpunkte liegen, bei einem Mehrfamilienhaus schnell ein sechsstelliger Betrag.',
          'Wir arbeiten deshalb mit einem gestuften Vorgehen: Kostenschätzung im Vorprojekt, Kostenvoranschlag im Bauprojekt, danach die Präzisierung anhand der eingegangenen Unternehmerofferten. Die Genauigkeit wächst von Stufe zu Stufe, statt eine einzige, früh fixierte Zahl zu verteidigen.',
        ],
      },
    ],
    fragen: [
      {
        frage: 'Wie schützt man sich vertraglich vor Materialpreisschwankungen?',
        antwort:
          'Über Preisgleitklauseln in Werkverträgen, die Materialpreisänderungen zwischen Offerte und Ausführung nach einem definierten Index abbilden. Ohne eine solche Klausel trägt in der Regel der Unternehmer das Risiko bis zur Vergabe, danach die Bauherrschaft, wenn Nachträge berechtigt sind.',
      },
      {
        frage: 'Lohnt es sich, Material frühzeitig zu bestellen oder Preise zu sichern?',
        antwort:
          'Bei Bauteilen mit langer Lieferzeit oder bekannter Preisvolatilität kann eine frühe Vergabe oder Reservierung sinnvoll sein. Das verlangt aber eine Projektplanung, die so weit steht, dass Mengen und Spezifikationen schon verlässlich feststehen.',
      },
      {
        frage: 'Wie genau ist ein Kostenvoranschlag heute?',
        antwort:
          'Nach Ausschreibung und einem wesentlichen Teil der Vergaben lässt sich die Kostenprognose weiter präzisieren, weil die tatsächlichen Unternehmerofferten vorliegen. Wie genau, hängt vom Projektstand, den bereits vergebenen Arbeiten und den verbleibenden Risiken ab. Nachträge aus effektivem Mehraufwand oder Planänderungen bleiben möglich und werden einzeln geprüft.',
      },
    ],
  },
  {
    slug: 'holzbau-mehrgeschossig',
    titel: 'Holzbau im Aufwind: Warum mehrgeschossige Holzhäuser sich verdoppelt haben',
    lead: 'Zwischen 2014 und 2024 hat sich die Zahl bewilligter Wohnbauten mit Holztragwerk und mindestens fünf Geschossen mehr als verdoppelt. Was hinter diesem Trend steckt.',
    kategorie: 'Nachhaltigkeit',
    datum: '2025-03-18',
    lesezeit: 6,
    bild: '/images/insights/atelier-aa-holzbau.webp',
    abschnitte: [
      {
        titel: 'Von Randerscheinung zu Marktanteil',
        absaetze: [
          'Nach den Marktzahlen von Holzbau Schweiz erreichte Holz 2024 bei Neubauten mit mindestens drei Wohneinheiten einen Anteil von 8,4 Prozent, unter Einbezug von Umbauten 10,8 Prozent. Bei Wohngebäuden mit tragender Holzkonstruktion und mindestens fünf Geschossen stieg die Zahl der Bewilligungen zwischen 2014 und 2024 von rund 100 auf 215, hat sich also mehr als verdoppelt.',
        ],
      },
      {
        titel: 'Warum Bauherrschaften Holz wählen',
        absaetze: [
          'Der wichtigste Grund ist die graue Energie: Holz bindet beim Wachstum CO₂ und benötigt in der Herstellung deutlich weniger Energie als Beton oder Stahl. Dazu kommt die Vorfertigung: Holzelemente lassen sich witterungsunabhängig in der Werkhalle produzieren und auf der Baustelle in kurzer Zeit montieren.',
          'Das verkürzt die Bauzeit und reduziert den Lärm auf der Baustelle, was besonders bei Verdichtungsprojekten in bewohnter Nachbarschaft ins Gewicht fällt.',
        ],
      },
      {
        titel: 'Wo die Grenzen liegen',
        absaetze: [
          'Holzbau ist nicht in jeder Situation die wirtschaftlichere Wahl. Bei sehr hohen Schallschutzanforderungen zwischen den Geschossen braucht es zusätzliche Massnahmen, die einen Teil des Gewichtsvorteils wieder aufheben. Auch die Feuchtigkeitsdetails an Übergängen zum Aussenraum verlangen sorgfältige Planung.',
          'Für viele Bauaufgaben ist heute ein Hybrid aus Holz und Massivbau die pragmatischste Lösung, etwa Betonkerne für Treppenhäuser und Nasszellen kombiniert mit Holz für die übrige Struktur.',
        ],
      },
    ],
    fragen: [
      {
        frage: 'Ist Holzbau teurer als konventioneller Massivbau?',
        antwort:
          'In der reinen Erstellung meist vergleichbar, teils leicht teurer. Die kürzere Bauzeit und geringere Lärmbelastung gleichen das bei vielen Projekten wirtschaftlich aus. Die genaue Rechnung hängt von Gebäudetyp, Grundriss und Standort ab.',
      },
      {
        frage: 'Wie steht es um den Brandschutz bei mehrgeschossigen Holzbauten?',
        antwort:
          'Die Schweizer Brandschutzvorschriften erlauben auch für Holztragwerke Gebäude bis in grössere Höhen, mit entsprechenden Anforderungen an Kapselung und Sprinkleranlagen. Die Details werden projektspezifisch mit der Brandschutzbehörde abgestimmt.',
      },
      {
        frage: 'Eignet sich Holzbau auch für eine Verdichtung im Bestand?',
        antwort:
          'Ja, besonders bei Aufstockungen: Das geringere Gewicht von Holzelementen belastet das bestehende Fundament und Tragwerk weniger als eine Aufstockung in Massivbauweise, oft die entscheidende Voraussetzung, damit eine Aufstockung überhaupt möglich wird.',
      },
    ],
  },
  {
    slug: 'stromgesetz-mantelerlass',
    titel: 'Das neue Stromgesetz: Was der Mantelerlass für Bauherrschaften bedeutet',
    lead: 'Mit 68,7 Prozent Ja-Stimmen hat die Schweiz im Juni 2024 den Mantelerlass angenommen. Was sich damit für Bauvorhaben ändert.',
    kategorie: 'Recht',
    datum: '2025-06-16',
    lesezeit: 6,
    bild: '/images/insights/atelier-aa-stromgesetz.webp',
    abschnitte: [
      {
        titel: 'Vier Gesetze in einer Vorlage',
        absaetze: [
          'Der Mantelerlass, im Abstimmungskampf meist «Stromgesetz» genannt, ändert gleich vier Bundesgesetze: das Energiegesetz, das Stromversorgungsgesetz, das Raumplanungsgesetz und das Waldgesetz. Am 9. Juni 2024 stimmten rund 68,7 Prozent der Stimmenden zu.',
          'Ziel ist ein rascher Ausbau erneuerbarer Energien: Bis 2035 sollen Sonne, Wind und weitere erneuerbare Quellen ohne Wasserkraft jährlich 35 Terawattstunden liefern, gegenüber rund 5 Terawattstunden heute. Die Wasserkraft selbst soll ihre Produktion bis 2035 auf knapp 38 Terawattstunden steigern.',
        ],
      },
      {
        titel: 'Was sich für Bauvorhaben ändert',
        absaetze: [
          'Für die Raumplanung bedeutet die Vorlage vereinfachte Verfahren für Anlagen von nationalem Interesse, etwa grössere Solar- und Windprojekte, sowie Anpassungen bei Bewilligungsabläufen für Energieanlagen. Für den einzelnen Wohnbau ändert sich das Baubewilligungsverfahren selbst nicht direkt.',
          'Indirekt spürbar wird die Vorlage über die kantonalen Energievorschriften, die im Zug der Umsetzung angepasst werden, etwa bei Anforderungen an Eigenstromerzeugung und Netzanschluss neuer Gebäude.',
        ],
      },
      {
        titel: 'Wie wir das einordnen',
        absaetze: [
          'Für Bauherrschaften heisst das vor allem: Die energetischen Anforderungen an Neubauten werden in den kommenden Jahren eher strenger als lockerer, mit zunehmendem Fokus auf Eigenstromerzeugung und -verbrauch. Wer heute plant, sollte Photovoltaik, Speicher und eine Wärmepumpe nicht als Zusatzoption, sondern als Grundausstattung mitdenken.',
          'Wir verfolgen die kantonale Umsetzung laufend und passen unsere Planungsgrundlagen an, sobald neue Vorschriften rechtskräftig sind, statt auf Verdacht vorzugreifen.',
        ],
      },
    ],
    fragen: [
      {
        frage: 'Ändert der Mantelerlass die Solarpflicht für mein Bauvorhaben?',
        antwort:
          'Nicht direkt. Die Solarpflicht bei mehr als 300 Quadratmetern anrechenbarer Gebäudefläche ist bereits im Energiegesetz verankert. Der Mantelerlass stärkt aber den generellen Ausbau erneuerbarer Energien, was künftige Verschärfungen wahrscheinlicher macht.',
      },
      {
        frage: 'Betrifft mich das Gesetz bei einem privaten Einfamilienhaus überhaupt?',
        antwort:
          'Direkt vor allem über die kantonale Umsetzung bei Energievorschriften. Die grossen Verfahrenserleichterungen der Vorlage betreffen in erster Linie grössere Energieanlagen, nicht den einzelnen Wohnbau.',
      },
      {
        frage: 'Wann treten die neuen Bestimmungen in Kraft?',
        antwort:
          'Der Mantelerlass wird stufenweise umgesetzt, mit entsprechenden Verordnungen des Bundesrats und Anpassungen auf kantonaler Ebene. Für ein konkretes Projekt prüfen wir den jeweils aktuellen Stand zu Beginn der Planung.',
      },
    ],
  },
  {
    slug: 'bim-pflicht-planung',
    titel: 'Wo BIM Pflicht wird: Was die Digitalisierung für Planer und Bauherrschaften bedeutet',
    lead: 'Seit 2021 muss der Bund bei eigenen Bauprojekten mit der BIM-Methode arbeiten, ab 2025 auch bei Infrastrukturanlagen. Was Building Information Modeling praktisch verändert.',
    kategorie: 'Digitalisierung',
    datum: '2025-08-19',
    lesezeit: 6,
    bild: '/images/insights/atelier-aa-bim.webp',
    abschnitte: [
      {
        titel: 'Vom Plan zum Modell',
        absaetze: [
          'Bundesstellen und bundesnahe Unternehmen führen die BIM-Methode seit mehreren Jahren schrittweise ein, zunächst bei eigenen Hochbauprojekten ab einer bestimmten Projektgrösse, inzwischen auch bei Infrastrukturanlagen. Building Information Modeling bedeutet: Statt getrennter 2D-Pläne entsteht ein digitales Gebäudemodell, das Geometrie, Bauteile und Eigenschaften in einem Datensatz vereint.',
          'Der erwartete Nutzen liegt darin, Planungswidersprüche früher sichtbar zu machen und Informationen konsistenter zu koordinieren: Fehler und Widersprüche zwischen Fachplanern zeigen sich am gemeinsamen Modell früher als bei getrennten 2D-Plänen.',
        ],
      },
      {
        titel: 'Was BIM in der Praxis bedeutet',
        absaetze: [
          'Konkret arbeiten Architektur, Statik und Haustechnik im selben dreidimensionalen Modell statt in getrennten Plansätzen, die erst am Ende zusammengeführt werden. Kollisionen, etwa eine Lüftungsleitung, die durch einen tragenden Träger verläuft, werden so schon in der Planung sichtbar, nicht erst auf der Baustelle.',
          'Für kleinere private Bauvorhaben ist die volle BIM-Methode heute noch nicht Standard, das Prinzip der digitalen Koordination zwischen den Fachplanern gehört aber zunehmend auch dort zur guten Praxis.',
        ],
      },
      {
        titel: 'Wie wir damit arbeiten',
        absaetze: [
          'Wir setzen 3D-Planung bereits heute ein, um Varianten zu prüfen und Fachplaner frühzeitig zu koordinieren, unabhängig davon, ob ein Projekt die formalen BIM-Anforderungen des Bundes erfüllen muss. Für Bauherrschaften zählt vor allem das Ergebnis: weniger Widersprüche zwischen den Gewerken und eine Ausführungsplanung, die auf der Baustelle tatsächlich funktioniert.',
          'Wo ein Bauherr oder eine öffentliche Auftraggeberin BIM explizit verlangt, klären wir die Anforderungen an Detaillierungsgrad und Datenformat vorab im Planungsvertrag.',
        ],
      },
    ],
    fragen: [
      {
        frage: 'Brauche ich für ein privates Einfamilienhaus BIM?',
        antwort:
          'Formal nicht. Die Pflicht betrifft Bundesbauten und bundesnahe Betriebe. Wir setzen 3D-Modelle aber unabhängig von einer formalen Pflicht ein, wo sie die Koordination zwischen den Fachplanern verbessern.',
      },
      {
        frage: 'Wird Planung durch BIM teurer?',
        antwort:
          'Der Koordinationsaufwand verschiebt sich stärker in die frühe Planungsphase, was dort mehr Zeit kostet. Dafür sinkt das Risiko teurer Kollisionen und Nachträge während der Ausführung, in der Gesamtbetrachtung meist ein Gewinn.',
      },
      {
        frage: 'Was passiert mit den BIM-Daten nach Bauabschluss?',
        antwort:
          'Sie können als digitaler Bestandsplan für den Betrieb und spätere Umbauten dienen, sofern das im Planungsvertrag vereinbart und die Datenpflege entsprechend budgetiert wird.',
      },
    ],
  },
  {
    slug: 'ladeinfrastruktur-neubau',
    titel: 'Ladeinfrastruktur im Neubau: Was Kantone bei E-Mobilität heute verlangen',
    lead: 'Eine gesamtschweizerische Pflicht für Ladestationen gibt es nicht, wohl aber in mehreren Kantonen die Pflicht, Neubauten dafür vorzubereiten. Ein Überblick.',
    kategorie: 'Nachhaltigkeit',
    datum: '2025-09-15',
    lesezeit: 5,
    bild: '/images/insights/atelier-aa-ladeinfrastruktur.webp',
    abschnitte: [
      {
        titel: 'Vorbereitung statt Pflicht',
        absaetze: [
          'Eine schweizweite Pflicht zur Installation von Ladestationen in neuen Mehrfamilienhäusern gibt es aktuell nicht. Mehrere Kantone, darunter Bern, Luzern, Neuenburg, Schaffhausen und Zürich, verlangen aber, dass bei Neubauten zumindest die baulichen Voraussetzungen für eine spätere Nachrüstung geschaffen werden.',
          'Das bedeutet in der Regel Vorverkabelung oder Leerrohre für eine bestimmte Anzahl Parkplätze, meist orientiert am technischen Standard des SIA-Merkblatts 2060 und den Mustervorschriften der Kantone im Energiebereich, kurz MuKEn.',
        ],
      },
      {
        titel: 'Was das für die Planung heisst',
        absaetze: [
          'Für eine Einstellhalle bedeutet das: Leitungsführung und Kapazität des Hausanschlusses müssen schon im Vorprojekt für die spätere Vollausstattung mit Ladepunkten mitgedacht werden, auch wenn zunächst nur ein Teil der Parkplätze tatsächlich ausgerüstet wird. Nachträgliches Aufbrechen von Bodenplatten für vergessene Leitungen ist um ein Vielfaches teurer als eine vorausschauende Leerrohrplanung.',
          'Auf Bundesebene wird zudem ein Rechtsanspruch auf Ladeinfrastruktur für Mietende und Stockwerkeigentümerschaften geprüft: Eine entsprechende Änderung des Energiegesetzes befindet sich 2026 in der Vernehmlassung. Bis dahin gilt, was Kanton und Gemeinde vorschreiben.',
        ],
      },
      {
        titel: 'Unsere Praxis',
        absaetze: [
          'Wir sehen bei Einstellhallen grundsätzlich eine vollständige Leerrohrvorbereitung vor, unabhängig davon, ob der jeweilige Kanton das explizit verlangt: Eine vorausschauende Vorbereitung im Neubau ist in der Regel deutlich einfacher als eine spätere Nachrüstung, und eine nachrüstbare Einstellhalle ist ein Vorteil für die Vermietbarkeit.',
          'Bei der Wahl der Lastmanagement-Lösung stimmen wir uns früh mit dem Elektroplaner ab, damit die Hausanschlussleistung nicht zum Engpass wird, wenn später mehrere Ladepunkte gleichzeitig genutzt werden.',
        ],
      },
    ],
    fragen: [
      {
        frage: 'Muss ich bei einem Einfamilienhaus-Neubau eine Ladestation einbauen?',
        antwort:
          'Eine generelle Pflicht besteht nicht, in einzelnen Kantonen aber die Pflicht zur baulichen Vorbereitung. Wir empfehlen unabhängig davon, mindestens ein Leerrohr zur Garage vorzusehen, der Aufwand ist beim Neubau minimal.',
      },
      {
        frage: 'Was kostet die Vorbereitung für Ladeinfrastruktur in einer Einstellhalle?',
        antwort:
          'Die reine Leerrohrvorbereitung liegt im Neubau meist im niedrigen vierstelligen Bereich für die ganze Halle. Die eigentlichen Ladestationen und das Lastmanagement kommen erst bei tatsächlicher Installation dazu.',
      },
      {
        frage: 'Was ist Lastmanagement und wieso brauche ich das?',
        antwort:
          'Lastmanagement verteilt die verfügbare Anschlussleistung dynamisch auf die aktiven Ladepunkte, damit nicht jeder Stellplatz einzeln für die maximale Ladeleistung abgesichert werden muss. Das spart Kosten beim Hausanschluss, besonders bei vielen Stellplätzen.',
      },
    ],
  },
  {
    slug: 'sommerlicher-waermeschutz',
    titel: 'Sommerlicher Wärmeschutz: Warum Hitzeschutz kein Extra mehr ist',
    lead: 'Mit häufigeren Hitzewellen gewinnt der sommerliche Wärmeschutz an Bedeutung und ist längst Teil der SIA-Normen. Was das für Fassade und Fenster bedeutet.',
    kategorie: 'Nachhaltigkeit',
    datum: '2025-10-06',
    lesezeit: 6,
    bild: '/images/insights/atelier-aa-hitzeschutz.webp',
    abschnitte: [
      {
        titel: 'Die Norm hinter dem Thema',
        absaetze: [
          'Der Nachweis des sommerlichen Wärmeschutzes stützt sich auf die Norm SIA 180 «Wärmeschutz, Feuchteschutz und Raumklima in Gebäuden», ergänzt durch die Normen SIA 382/1 und SIA 342 sowie die Merkblätter SIA 2024 und 2028. Sie verlangt, dass ein behagliches Raumklima primär mit konstruktiven Massnahmen sichergestellt wird, nicht mit zusätzlicher Kühltechnik.',
          'Massgebend sind drei Faktoren: die Art und Effizienz der Verschattung von Fensterflächen, Standort und Ausrichtung des Gebäudes sowie die Wärmespeicherfähigkeit der Innenraumflächen.',
        ],
      },
      {
        titel: 'Warum das Thema drängender wird',
        absaetze: [
          'Mit häufigeren und längeren Hitzewellen reicht eine Fassade, die nur den winterlichen Wärmeschutz optimiert, nicht mehr aus. Grossflächige Verglasungen können ohne wirksamen Sonnenschutz zu erheblichen sommerlichen Wärmeeinträgen führen, mit der Folge, dass nachträglich eine Kühlung eingebaut werden muss, die weder geplant noch budgetiert war.',
          'Wir prüfen den sommerlichen Wärmeschutz deshalb bereits im Entwurf, nicht erst als Nachweis kurz vor der Baueingabe, denn zu diesem Zeitpunkt lassen sich Fensteranteil, Verschattung und Speichermasse noch ohne Mehrkosten anpassen.',
        ],
      },
      {
        titel: 'Bauliche Massnahmen statt Technik',
        absaetze: [
          'Aussenliegende, bewegliche Verschattung, also Lamellenstoren oder Storen vor der Fassade, ist deutlich wirksamer als innenliegender Sonnenschutz, weil sie die Wärme schon vor dem Glas abhält statt erst im Raum. Auskragende Bauteile wie Balkone oder Vordächer können sommerliche, hoch stehende Sonne blockieren und gleichzeitig die flache Wintersonne einfallen lassen.',
          'Massive Bauteile mit hoher Speicherfähigkeit, etwa Sichtbeton oder mineralische Innenputze, puffern Temperaturspitzen ab, indem sie Wärme tagsüber aufnehmen und nachts wieder abgeben, wenn richtig gelüftet wird.',
        ],
      },
    ],
    fragen: [
      {
        frage: 'Reicht eine automatische Storensteuerung als Nachweis für sommerlichen Wärmeschutz?',
        antwort:
          'Die Steuerung allein nicht. Massgebend ist die bauliche Wirksamkeit der Verschattung selbst. Eine automatische Steuerung stellt aber sicher, dass die vorhandene Verschattung auch tatsächlich genutzt wird, etwa wenn niemand zu Hause ist.',
      },
      {
        frage: 'Brauchen wir bei grossflächiger Verglasung zwingend eine Kühlung?',
        antwort:
          'Nicht zwingend, wenn Verschattung, Ausrichtung und Speichermasse von Anfang an mitgeplant werden. Wird die Verglasung erst nachträglich vergrössert, ohne diese Massnahmen anzupassen, steigt das Risiko einer Überhitzung deutlich.',
      },
      {
        frage: 'Gilt der Nachweis auch bei einem Umbau oder nur bei Neubauten?',
        antwort:
          'Der Nachweis wird vor allem bei Neubauten und grösseren Umbauten mit relevanten Fassadenänderungen verlangt. Bei kleineren Umbauten lohnt sich eine Prüfung trotzdem, wenn sich der Fensteranteil oder die Verschattungssituation ändert.',
      },
    ],
  },
  {
    slug: 'wohnungsknappheit-leerwohnungsziffer',
    titel: 'Leerwohnungsziffer auf Rekordtief: Was die Wohnungsknappheit für Bauherrschaften bedeutet',
    lead: 'Nur noch ein Prozent der Schweizer Wohnungen stehen leer, der tiefste Wert seit zwölf Jahren. Was hinter der Zahl steckt und was sie für Verdichtungsprojekte bedeutet.',
    kategorie: 'Verdichtung',
    datum: '2025-11-17',
    lesezeit: 6,
    bild: '/images/insights/atelier-aa-wohnungsknappheit.webp',
    abschnitte: [
      {
        titel: 'Der tiefste Stand seit zwölf Jahren',
        absaetze: [
          'Am 1. Juni 2025 standen schweizweit noch 48\'455 Wohnungen leer: Die Leerwohnungsziffer sank damit auf 1,0 Prozent, den tiefsten Stand seit zwölf Jahren und das fünfte Jahr in Folge rückläufig. Am angespanntesten ist die Lage in Genf (0,34 Prozent), Zug (0,42 Prozent) und Zürich (0,48 Prozent). Fünfzehn Kantone liegen unter der Ein-Prozent-Marke.',
          'Am anderen Ende stehen die Kantone Jura (3,03 Prozent) und Solothurn (2,05 Prozent) mit spürbar mehr Leerstand, ein Hinweis darauf, wie unterschiedlich sich die Nachfrage regional verteilt.',
        ],
      },
      {
        titel: 'Eine strukturelle Lücke',
        absaetze: [
          'Zwischen 2015 und 2019 entstanden im Schnitt gut 51\'000 Wohnungen pro Jahr, zwischen 2020 und 2024 waren es weniger als 46\'000. Gleichzeitig kamen im selben Zeitraum jährlich rund 50\'350 neue Haushalte hinzu, unter anderem, weil Haushalte im Schnitt kleiner werden. Rechnerisch fehlten damit jährlich gut 4000 Wohnungen, über die fünf Jahre rund 22\'000.',
          'Diese Lücke lässt sich nicht allein mit klassischem Neubau auf der grünen Wiese schliessen, denn dafür fehlt in den gefragten Lagen schlicht das unbebaute Land.',
        ],
      },
      {
        titel: 'Was das für Verdichtungsprojekte bedeutet',
        absaetze: [
          'Für Eigentümerschaften mit einer bestehenden, nicht voll ausgenützten Parzelle verbessert die Wohnungsknappheit die Ausgangslage: Zusätzlicher Wohnraum durch Aufstockung, Anbau oder Ersatzneubau trifft auf eine Nachfrage, die in den meisten Lagen nicht abreisst. Das senkt tendenziell das Vermietungsrisiko neu geschaffener Wohnungen.',
          'Gleichzeitig bleibt die Verdichtung an die bestehende Bau- und Nutzungsordnung gebunden: Wie viel zusätzlicher Wohnraum tatsächlich möglich ist, hängt weiterhin von Ausnutzung, Grenzabständen und Gebäudehöhe der jeweiligen Gemeinde ab, nicht von der Marktlage.',
        ],
      },
    ],
    fragen: [
      {
        frage: 'Wird die Wohnungsknappheit die Baubewilligung für eine Verdichtung erleichtern?',
        antwort:
          'Nicht automatisch. Bau- und Nutzungsordnungen ändern sich unabhängig von der aktuellen Marktlage, meist über längere Revisionszyklen. Die Marktlage verbessert aber die Wirtschaftlichkeit eines Vorhabens, das planungsrechtlich bereits möglich ist.',
      },
      {
        frage: 'Lohnt sich eine Investition in Wohnbau angesichts der tiefen Leerstandsquote noch mehr als früher?',
        antwort:
          'Eine tiefe Leerwohnungsziffer kann das Vermietungsrisiko senken. Ob sich ein Wohnbau wirtschaftlich trägt, hängt aber zusätzlich von Grundstück, Baukosten, Finanzierung, erzielbaren Mietzinsen und Projektstruktur ab. Wir prüfen das projektspezifisch, auch weil sich einzelne Gemeinden innerhalb eines Kantons deutlich unterscheiden können.',
      },
      {
        frage: 'Warum wird trotz Wohnungsknappheit nicht einfach mehr gebaut?',
        antwort:
          'Weil Bauland in gefragten Lagen knapp ist, Verfahren Zeit brauchen und der Fachkräftemangel die Bautätigkeit zusätzlich bremst. Die Lücke zwischen Nachfrage und Fertigstellungen baut sich deshalb nur langsam ab.',
      },
    ],
  },
  {
    slug: 'solarpflicht-kantone',
    titel: 'Solarpflicht in den Kantonen: Was 2026 für Neubauten gilt',
    lead: 'Der Bund verlangt eine Solarpflicht bei mehr als 300 Quadratmetern anrechenbarer Gebäudefläche, die Kantone setzen sie aber sehr unterschiedlich um. Ein Überblick vor der nächsten Verschärfung.',
    kategorie: 'Nachhaltigkeit',
    datum: '2025-12-10',
    lesezeit: 6,
    bild: '/images/insights/atelier-aa-solarpflicht.webp',
    abschnitte: [
      {
        titel: 'Eine Pflicht, viele Umsetzungen',
        absaetze: [
          'Auf Bundesebene gilt seit dem 1. Januar 2023 eine Solarpflicht für Neubauten mit mehr als 300 Quadratmetern anrechenbarer Gebäudefläche, verankert in Artikel 45a des Energiegesetzes. Ob Photovoltaik oder Solarthermie zum Einsatz kommt, schreibt der Bund nicht vor, beides ist zulässig.',
          'Die konkrete Umsetzung und mögliche Ausnahmen liegen bei den Kantonen, die dabei deutlich unterschiedlich streng sind. Luzern verlangt bei Neubauten eine Solaranlage auf mindestens fünfzig Prozent der Dachfläche, bei Dachsanierungen auf mindestens fünfundzwanzig Prozent.',
        ],
      },
      {
        titel: 'Bern als jüngstes Beispiel',
        absaetze: [
          'Im Kanton Bern gelten ab dem 1. Januar 2026 neue, strengere Vorschriften: Neubauten müssen mit Anlagen zur Solarenergienutzung im Umfang von mindestens zehn Prozent der anrechenbaren Gebäudefläche ausgestattet werden, gut geeignete Dachflächen sind zu mindestens sechzig Prozent der Bruttodachfläche zu nutzen.',
          'Diese Verschärfung reiht sich in einen klaren Trend ein: Kantone, die ihre Energievorschriften revidieren, tendieren fast durchgehend zu strengeren, nicht zu lockereren Solaranforderungen.',
        ],
      },
      {
        titel: 'Was das für die Entwurfsplanung heisst',
        absaetze: [
          'Wer heute ein Dach entwirft, sollte die spätere Solarnutzung von Anfang an mitdenken: Ausrichtung, Verschattung durch Dachaufbauten und Kamine sowie die statische Reserve für das zusätzliche Gewicht der Module. Nachträglich eine grosse Solaranlage auf ein dafür nicht vorbereitetes Dach zu bringen, ist möglich, aber selten die wirtschaftlichste Lösung.',
          'Auch gestalterisch lohnt sich die frühe Integration: Eine von Beginn an mitgeplante Anlage lässt sich unauffälliger in die Dachfläche einfügen als eine später aufgesetzte Nachrüstung.',
        ],
      },
    ],
    fragen: [
      {
        frage: 'Gilt die Solarpflicht auch für ein normales Einfamilienhaus?',
        antwort:
          'Die Bundespflicht greift erst über 300 Quadratmetern anrechenbarer Gebäudefläche, was viele Einfamilienhäuser unterschreiten. Einzelne Kantone kennen jedoch strengere, auch kleinere Bauten betreffende Regeln. Wir prüfen das für Ihr Grundstück im Vorprojekt.',
      },
      {
        frage: 'Muss ich Photovoltaik oder darf ich auch Solarthermie installieren?',
        antwort:
          'Auf Bundesebene ist beides zulässig. Photovoltaik ist in der Praxis meist die flexiblere Wahl, weil der erzeugte Strom für Haushalt, Wärmepumpe und zunehmend auch Elektromobilität genutzt werden kann.',
      },
      {
        frage: 'Was passiert, wenn mein Dach für eine grosse Solaranlage schlecht geeignet ist?',
        antwort:
          'Die kantonalen Vorschriften sehen in der Regel Ausnahmen für ungeeignete Dachflächen vor, etwa bei starker Verschattung oder ungünstiger Ausrichtung. Wir klären das im Baugesuchsverfahren mit der zuständigen Behörde ab.',
      },
    ],
  },
  {
    slug: 'muken-2025-energievorschriften',
    titel: 'MuKEn 2025: Was die neuen kantonalen Energievorschriften bedeuten',
    lead: 'Die Mustervorschriften der Kantone im Energiebereich bilden die Grundlage für Solarpflicht, Ladeinfrastruktur und Heizungsersatz. Was sich mit der aktuellen Revision ändert.',
    kategorie: 'Recht',
    datum: '2026-05-13',
    lesezeit: 5,
    bild: '/images/insights/atelier-aa-muken.webp',
    abschnitte: [
      {
        titel: 'Eine Vorlage, viele kantonale Gesetze',
        absaetze: [
          'Die Mustervorschriften der Kantone im Energiebereich, kurz MuKEn, sind kein eigenständiges Gesetz, sondern eine Vorlage, an der sich die kantonalen Energiegesetze orientieren. Sie regeln unter anderem Anforderungen an den winterlichen Wärmeschutz, den Heizungsersatz in Bestandsbauten sowie die Vorbereitung für Solaranlagen und Ladeinfrastruktur.',
          'Weil jeder Kanton die MuKEn eigenständig in kantonales Recht überführt, unterscheiden sich Tempo und Strenge der Umsetzung von Kanton zu Kanton, was gerade für Büros, die in mehreren Kantonen planen, eine laufende Beobachtung verlangt.',
        ],
      },
      {
        titel: 'Der Heizungsersatz als Kernthema',
        absaetze: [
          'Ein zentrales Element vieler MuKEn-Umsetzungen ist die Regel, dass beim Ersatz einer fossilen Heizung in Bestandsbauten ein bestimmter Anteil erneuerbarer Energie nachgewiesen werden muss, meist mit mehreren zulässigen Standardlösungen zur Auswahl, etwa Wärmepumpe, Fernwärme oder eine verbesserte Gebäudedämmung.',
          'Für Bauherrschaften mit älteren Liegenschaften heisst das: Der nächste Heizungsersatz ist nicht mehr allein eine technische Ersatzbeschaffung, sondern eine Entscheidung, die frühzeitig mit den geltenden kantonalen Vorgaben abgeglichen werden sollte.',
        ],
      },
      {
        titel: 'Wie wir das in der Planung berücksichtigen',
        absaetze: [
          'Bei Umbauten und Sanierungen prüfen wir die anwendbaren kantonalen Energievorschriften zu Beginn des Vorprojekts, nicht erst beim Baugesuch, denn Nachweise zu Wärmeschutz, Heizsystem und Solarvorbereitung beeinflussen sonst nachträglich den Grundriss oder die Fassadengestaltung.',
          'Da sich die kantonale Umsetzung der MuKEn laufend weiterentwickelt, halten wir uns über die jeweils aktuelle Fassung auf dem Laufenden, statt uns auf einen einmal gelernten Stand zu verlassen.',
        ],
      },
    ],
    fragen: [
      {
        frage: 'Gelten die MuKEn direkt für mein Bauvorhaben?',
        antwort:
          'Nicht direkt. Massgebend ist immer das kantonale Energiegesetz, das die MuKEn als Vorlage übernimmt. Wir prüfen für Ihr Vorhaben die tatsächlich geltende kantonale Fassung.',
      },
      {
        frage: 'Muss ich beim Heizungsersatz zwingend eine Wärmepumpe einbauen?',
        antwort:
          'Nicht zwingend eine Wärmepumpe, aber in der Regel eine von mehreren zulässigen Standardlösungen mit einem Mindestanteil erneuerbarer Energie. Welche Lösung sich für Ihre Liegenschaft eignet, hängt von Gebäudehülle, Grundstück und Anschlussmöglichkeiten ab.',
      },
      {
        frage: 'Betrifft das auch denkmalgeschützte Gebäude?',
        antwort:
          'Für Gebäude mit Ortsbild- oder Denkmalschutz gelten häufig Ausnahmen oder angepasste Anforderungen, insbesondere wenn energetische Massnahmen das geschützte Erscheinungsbild beeinträchtigen würden. Das wird im Einzelfall mit der Denkmalpflege abgestimmt.',
      },
    ],
  },
].sort((a, b) => (a.datum < b.datum ? 1 : -1));

export function getInsight(slug: string): Insight | undefined {
  return insights.find((i) => i.slug === slug);
}

export function getWeitereInsights(currentSlug: string, count = 4): Insight[] {
  return insights.filter((i) => i.slug !== currentSlug).slice(0, count);
}
