import type { Projekt } from '@/types';

/**
 * Referenzprojekte.
 *
 * Titel, Ort, Jahr und Bauherrschaft stammen aus dem Custom-Post-Type `films`
 * der alten Website. Wo dort Platzhalter hinterlegt waren ("testkunde",
 * "test AG"), steht `null` statt einer erfundenen Angabe.
 *
 * Die Abschnitte, Eckdaten und Fragen sind neu geschrieben. Sie geben
 * Suchmaschinen und KI-Systemen substanziellen Text — eine Projektseite, die nur
 * aus Bildern und drei Zeilen besteht, wird als Quelle nicht herangezogen.
 * Ortsnamen, Kanton und Gebäudetyp sind bewusst ausgeschrieben.
 *
 * Reihenfolge: neuestes Projekt zuerst.
 */
export const projekte: Projekt[] = [
  {
    slug: 'efh-jonen',
    title: 'Einfamilienhaus',
    ort: 'Jonen',
    kanton: 'AG',
    kunde: null,
    jahr: '2026',
    typ: 'Einfamilienhaus',
    kategorien: ['Neubau', 'Wohnen'],
    leistungen: [
      'Machbarkeitsstudie',
      'Projektierung',
      'Ausschreibungsplanung',
      'Ausführungsplanung',
      'Bauleitung',
    ],
    beschreibung:
      'Neubau eines Einfamilienhauses in Jonen im Kanton Aargau mit zwei Vollgeschossen, Dachgeschoss und Untergeschoss. Die Bauherrschaft war zugleich der Inhaber von Atelier AA Architekten — ein Neubau mit besonderem architektonischem Anspruch.',
    abschnitte: [
      {
        titel: 'Ein Neubau mit besonderem Anspruch',
        absaetze: [
          'In Jonen im Kanton Aargau entstand ein Einfamilienhaus mit einer Besonderheit: Die Bauherrschaft war zugleich der Inhaber von Atelier AA Architekten. Ein Neubau für das eigene Büro bedeutet einen anderen Massstab als ein Projekt für Dritte — jede Entscheidung zwischen Wunsch und Budget wird ohne Umweg über eine zweite Partei durchdacht.',
          'Der Anspruch an die architektonische Qualität war entsprechend hoch. Gleichzeitig musste das Grundstück selbst berücksichtigt werden: Die Lage verlangte von Anfang an eine sorgfältige Planung der Erschliessung und der Anordnung auf der Parzelle.',
        ],
      },
      {
        titel: 'Vier Ebenen, klar geordnet',
        absaetze: [
          'Das Haus umfasst zwei Vollgeschosse, ein Dachgeschoss und ein Untergeschoss. Diese Schichtung schafft klar getrennte Nutzungen: Rückzug und Technik im Untergeschoss, Wohnen und Kochen im Erdgeschoss, private Räume im Ober- und Dachgeschoss.',
          'Eine offene Treppe mit Glasgeländer verbindet die Ebenen sichtbar miteinander, statt sie durch ein geschlossenes Treppenhaus zu trennen. Grossflächige Verglasungen öffnen die oberen Geschosse zur umgebenden Landschaft.',
        ],
      },
      {
        titel: 'Materialisierung und Ausblick',
        absaetze: [
          'Innen bestimmen helle Oberflächen und wenige, dafür grossformatige Materialwechsel das Bild — eine Zurückhaltung, die den Blick nach aussen betont. Von den oberen Geschossen reicht die Sicht weit über das offene Landschaftsbild rund um Jonen.',
          'Auch aussen ist die Sprache reduziert: eine helle Putzfassade und dunkel abgesetzte Fensterbänder setzen einen bewussten Kontrast zur giebelständigen Nachbarbebauung, ohne sich von ihr abzuwenden.',
        ],
      },
    ],
    daten: [
      { label: 'Gebäudetyp', wert: 'Einfamilienhaus, Neubau' },
      { label: 'Geschosse', wert: '2 Vollgeschosse, Dachgeschoss, Untergeschoss' },
      { label: 'Besonderheit', wert: 'Eigenprojekt des Büros' },
      { label: 'Status', wert: 'Realisiert' },
    ],
    fragen: [
      {
        frage: 'Was bedeutet es, wenn ein Architekturbüro für sich selbst baut?',
        antwort:
          'Es bedeutet vor allem, dass zwischen architektonischem Anspruch und Bauherrenwunsch keine zweite Partei vermitteln muss — beide Rollen liegen in einer Person. Am Bewilligungsverfahren und der Bauleitung ändert das nichts: Baugesuch, Ausschreibung und Ausführung laufen wie bei jedem anderen Projekt.',
      },
      {
        frage: 'Worauf muss man bei einem schwierig erschlossenen Grundstück achten?',
        antwort:
          'Zufahrt, Werkleitungen und Grenzabstände müssen früh geprüft werden, oft schon vor dem Landkauf. Eine ungünstige Erschliessung lässt sich planerisch meist lösen, verursacht aber zusätzliche Kosten, die in der Kostenschätzung von Anfang an eingerechnet werden sollten.',
      },
      {
        frage: 'Was kostet ein Einfamilienhaus-Neubau mit Untergeschoss?',
        antwort:
          'Im Kanton Aargau liegen Einfamilienhäuser in mittlerem bis gehobenem Standard aktuell bei rund 900 bis 1200 Franken pro Kubikmeter Gebäudevolumen. Ein vollwertiges Untergeschoss erhöht diesen Wert, da Aushub und Abdichtung ins Gewicht fallen — eine belastbare Zahl liefert erst der Kostenrahmen im Vorprojekt.',
      },
      {
        frage: 'Warum wurde ausgerechnet dieses Projekt als erstes Referenzprojekt gezeigt?',
        antwort:
          'Weil es das aktuellste realisierte Projekt ist und weil wir als Eigenprojekt besonders offen über Entscheidungen sprechen können, die bei Kundenprojekten vertraulich bleiben. Für Referenzen von Bauherrschaften siehe die übrigen Projekte in dieser Übersicht.',
      },
    ],
    thumbnail: '/images/projekte/efh-jonen/thumb.jpg',
    heroImage: '/images/projekte/efh-jonen/hero.jpg',
    galerie: [
      '/images/projekte/efh-jonen/01.jpg',
      '/images/projekte/efh-jonen/02.jpg',
      '/images/projekte/efh-jonen/03.jpg',
      '/images/projekte/efh-jonen/04.jpg',
      '/images/projekte/efh-jonen/05.jpg',
      '/images/projekte/efh-jonen/06.jpg',
      '/images/projekte/efh-jonen/07.jpg',
      '/images/projekte/efh-jonen/08.jpg',
      '/images/projekte/efh-jonen/09.jpg',
      '/images/projekte/efh-jonen/10.jpg',
      '/images/projekte/efh-jonen/11.jpg',
      '/images/projekte/efh-jonen/12.jpg',
      '/images/projekte/efh-jonen/13.jpg',
      '/images/projekte/efh-jonen/14.jpg',
      '/images/projekte/efh-jonen/15.jpg',
      '/images/projekte/efh-jonen/16.jpg',
      '/images/projekte/efh-jonen/17.jpg',
      '/images/projekte/efh-jonen/18.jpg',
      '/images/projekte/efh-jonen/19.jpg',
      '/images/projekte/efh-jonen/20.jpg',
      '/images/projekte/efh-jonen/21.jpg',
      '/images/projekte/efh-jonen/22.jpg',
      '/images/projekte/efh-jonen/23.jpg',
      '/images/projekte/efh-jonen/24.jpg',
    ],
    plaene: [{ titel: 'Kataster', datei: '/dokumente/projekte/efh-jonen/01-kataster.pdf' }],
    featured: true,
  },
  {
    slug: 'mfh-untersiggenthal',
    title: 'Mehrfamilienhaus',
    ort: 'Untersiggenthal',
    kanton: 'AG',
    kunde: null,
    jahr: '2026',
    typ: 'Mehrfamilienhaus',
    kategorien: ['Neubau', 'Wohnen'],
    leistungen: [
      'Entwurf',
      'Baugesuch',
      'Ausführungsplanung',
      'Bauleitung',
    ],
    beschreibung:
      'Mehrfamilienhaus in Untersiggenthal im Kanton Aargau. Die vertikale Gliederung der Fassade nimmt den Rhythmus der Nachbarschaft auf und übersetzt ihn in eine ruhige, zeitgemässe Form.',
    abschnitte: [
      {
        titel: 'Die Aufgabe',
        absaetze: [
          'Das Grundstück liegt in einer gewachsenen Wohnzone von Untersiggenthal und fällt nach Süden ab. Gefordert war eine Verdichtung, die die zulässige Ausnutzung nutzt, ohne die Nachbarschaft zu überfahren.',
        ],
      },
      {
        titel: 'Volumen und Einordnung',
        absaetze: [
          'Ein Satteldachhaus, das die Dachlandschaft der Umgebung aufnimmt und trotzdem mehr Wohnfläche bietet. Die vertikale Fassadengliederung streckt das Haus optisch, vorgelagerte Balkone lassen die Grundfläche der Wohnungen ungeschmälert.',
        ],
      },
      {
        titel: 'Grundrisse',
        absaetze: [
          'Jede Wohnung ist zweiseitig orientiert, mit Morgen- und Abendlicht und einer zum Wohnraum offenen, aber abtrennbaren Küche. Die Wohnungsgrössen sind gemischt — für Einzelpersonen, Paare und Familien.',
        ],
      },
      {
        titel: 'Konstruktion und Nachhaltigkeit',
        absaetze: [
          'Massivbau mit hinterlüfteter Fassade, sodass sich die Fassade in Jahrzehnten erneuern lässt, ohne die Struktur anzutasten. Die Wärmeerzeugung erfolgt über eine Erdsonden-Wärmepumpe, das Dach ist für Photovoltaik vorbereitet — der Betrieb ist fossilfrei.',
        ],
      },
    ],
    daten: [
      { label: 'Gebäudetyp', wert: 'Mehrfamilienhaus, Neubau' },
      { label: 'Bauweise', wert: 'Massivbau, hinterlüftete Fassade' },
      { label: 'Wärmeerzeugung', wert: 'Erdsonden-Wärmepumpe' },
      { label: 'Status', wert: 'In Realisierung' },
    ],
    fragen: [
      {
        frage: 'Wie lange dauert ein Mehrfamilienhaus von der ersten Skizze bis zum Einzug?',
        antwort:
          'Rechnen Sie mit drei bis vier Jahren. Vorprojekt und Baugesuch brauchen etwa ein Jahr, die Baugenehmigung im Kanton Aargau je nach Gemeinde und Einsprachelage drei bis neun Monate, die Ausführung anschliessend rund achtzehn Monate.',
      },
      {
        frage: 'Wie viele Wohnungen sind auf unserem Grundstück möglich?',
        antwort:
          'Das ergibt sich aus Ausnutzungsziffer, Grenzabständen und Gebäudehöhe der Bau- und Nutzungsordnung Ihrer Gemeinde. Wir prüfen das in einer Machbarkeitsstudie und zeigen Ihnen eine realistische Bandbreite mit Volumenstudie.',
      },
      {
        frage: 'Was kostet ein Mehrfamilienhaus pro Kubikmeter?',
        antwort:
          'Im Kanton Aargau und Zürich liegen Wohnbauten in mittlerem Standard aktuell bei rund 700 bis 900 Franken pro Kubikmeter Gebäudevolumen. Baugrund, Erschliessung und Ausbaustandard verschieben das erheblich — eine belastbare Zahl gibt erst der Kostenrahmen im Vorprojekt.',
      },
    ],
    thumbnail: '/images/projekte/mfh-untersiggenthal/thumb.jpg',
    heroImage: '/images/projekte/mfh-untersiggenthal/hero.jpg',
    galerie: [
      '/images/projekte/mfh-untersiggenthal/01.jpg',
      '/images/projekte/mfh-untersiggenthal/02.jpg',
      '/images/projekte/mfh-untersiggenthal/03.jpg',
      '/images/projekte/mfh-untersiggenthal/04.jpg',
    ],
    plaene: [
      { titel: 'Kataster', datei: '/dokumente/projekte/mfh-untersiggenthal/01-kataster.pdf' },
      { titel: 'Untergeschoss', datei: '/dokumente/projekte/mfh-untersiggenthal/02-untergeschoss.pdf' },
      { titel: 'Erdgeschoss / Umgebung', datei: '/dokumente/projekte/mfh-untersiggenthal/03-erdgeschoss-umgebung.pdf' },
      { titel: 'Obergeschoss', datei: '/dokumente/projekte/mfh-untersiggenthal/04-obergeschoss.pdf' },
      { titel: 'Dachgeschoss', datei: '/dokumente/projekte/mfh-untersiggenthal/05-dachgeschoss.pdf' },
      { titel: 'Nordansicht', datei: '/dokumente/projekte/mfh-untersiggenthal/06-nordansicht.pdf' },
      { titel: 'Ostansicht', datei: '/dokumente/projekte/mfh-untersiggenthal/07-ostansicht.pdf' },
      { titel: 'Südansicht', datei: '/dokumente/projekte/mfh-untersiggenthal/08-suedansicht.pdf' },
      { titel: 'Westansicht', datei: '/dokumente/projekte/mfh-untersiggenthal/09-westansicht.pdf' },
    ],
    featured: false,
  },
  {
    slug: 'mfh-sihlaurain',
    title: 'Mehrfamilienhäuser Sihlaurain',
    ort: 'Adliswil',
    kanton: 'ZH',
    kunde: 'Lagos AG',
    jahr: '2025',
    typ: 'Wohnüberbauung',
    kategorien: ['Neubau', 'Wohnen'],
    leistungen: [
      'Projektentwicklung',
      'Entwurf',
      'Baugesuch',
      'Ausführungsplanung',
      'Bauleitung',
    ],
    beschreibung:
      'Zwei Mehrfamilienhäuser als Ensemble in Adliswil, Kanton Zürich. Die Baukörper fassen einen gemeinsamen Aussenraum und stehen in einem klaren Verhältnis zueinander.',
    abschnitte: [
      {
        titel: 'Zwei Häuser, ein Ensemble',
        absaetze: [
          'Die Bauherrschaft hatte zwei benachbarte Parzellen und die Absicht, sie getrennt zu bebauen. Wir haben vorgeschlagen, beide Häuser gemeinsam zu entwickeln — nicht als Zwillinge, sondern als aufeinander bezogene Baukörper.',
          'Der Gewinn liegt im Aussenraum: Statt zweier Restflächen entsteht ein zusammenhängender Hof, der beiden Häusern dient. Auch Erschliessung, Einstellhalle und Werkleitungen liessen sich zusammenlegen, was die Erstellungskosten gesenkt hat.',
        ],
      },
      {
        titel: 'Materialität',
        absaetze: [
          'Die Fassaden sind in grossformatigen Platten ausgeführt, dunkel abgesetzt gegen die helleren Nachbarbauten. Die Fensteröffnungen sind wenige, aber grosse — das ergibt eine ruhige Fassade und innen gut nutzbare Wandflächen.',
          'Der Sonnenschutz ist als Lamellenstore in die Fassadenebene integriert. Geschlossen bildet er mit der Fassade eine Fläche, statt als Aufbau zu erscheinen.',
        ],
      },
      {
        titel: 'Wirtschaftlichkeit',
        absaetze: [
          'Das Projekt war von Beginn an als Renditeobjekt gedacht. Wir haben Grundrisse und Ausbaustandard so abgestimmt, dass die Mietzinse im Marktband von Adliswil liegen und die Wohnungen langfristig vermietbar bleiben.',
          'Nutzungsoffenheit war Teil der Kalkulation: Die Wohnungstrennwände sind nicht tragend und lassen sich versetzen, wenn sich die Nachfrage nach Wohnungsgrössen verschiebt.',
        ],
      },
    ],
    daten: [
      { label: 'Gebäudetyp', wert: 'Zwei Mehrfamilienhäuser' },
      { label: 'Bauweise', wert: 'Massivbau, Plattenfassade' },
      { label: 'Besonderheit', wert: 'Gemeinsame Einstellhalle und Aussenraum' },
      { label: 'Status', wert: 'Realisiert' },
    ],
    fragen: [
      {
        frage: 'Lohnt es sich, zwei Nachbarparzellen gemeinsam zu entwickeln?',
        antwort:
          'Meist ja. Gemeinsame Einstellhalle, Erschliessung und Werkleitungen senken die Erstellungskosten deutlich, und der Aussenraum wird nutzbarer. Voraussetzung ist, dass die Eigentumsverhältnisse und die Etappierung sauber geregelt werden.',
      },
      {
        frage: 'Wie planen Sie für eine gute Rendite?',
        antwort:
          'Wir stimmen Wohnungsmix und Ausbaustandard auf das lokale Mietzinsniveau ab, statt maximal zu bauen. Dazu kommt Nutzungsoffenheit: nicht tragende Trennwände erlauben es, Wohnungsgrössen später anzupassen, ohne ins Tragwerk einzugreifen.',
      },
      {
        frage: 'Was passiert, wenn eine der beiden Parzellen einer anderen Eigentümerschaft gehört als die andere?',
        antwort:
          'Eine gemeinsame Entwicklung ist dann weiterhin möglich, verlangt aber einen frühen Dienstbarkeits- oder Grunddienstbarkeitsvertrag zwischen den Eigentümerschaften, der Erschliessung, Einstellhalle und Kostenteilung regelt. Wir bringen diesen Vertrag rechtzeitig vor dem Baugesuch auf den Weg.',
      },
    ],
    thumbnail: '/images/projekte/mfh-sihlaurain/thumb.jpg',
    heroImage: '/images/projekte/mfh-sihlaurain/hero.jpg',
    galerie: [
      '/images/projekte/mfh-sihlaurain/01.jpg',
      '/images/projekte/mfh-sihlaurain/02.jpg',
      '/images/projekte/mfh-sihlaurain/03.jpg',
      '/images/projekte/mfh-sihlaurain/04.jpg',
      '/images/projekte/mfh-sihlaurain/05.jpg',
      '/images/projekte/mfh-sihlaurain/06.jpg',
      '/images/projekte/mfh-sihlaurain/07.jpg',
      '/images/projekte/mfh-sihlaurain/08.jpg',
      '/images/projekte/mfh-sihlaurain/09.jpg',
      '/images/projekte/mfh-sihlaurain/10.jpg',
      '/images/projekte/mfh-sihlaurain/11.jpg',
      '/images/projekte/mfh-sihlaurain/12.jpg',
      '/images/projekte/mfh-sihlaurain/13.jpg',
      '/images/projekte/mfh-sihlaurain/14.jpg',
      '/images/projekte/mfh-sihlaurain/15.jpg',
      '/images/projekte/mfh-sihlaurain/16.jpg',
    ],
    featured: true,
  },
  {
    slug: 'mfh-kuenten',
    title: 'Mehrfamilienhaus',
    ort: 'Künten',
    kanton: 'AG',
    kunde: null,
    jahr: '2024',
    typ: 'Mehrfamilienhaus',
    kategorien: ['Neubau', 'Wohnen'],
    leistungen: ['Entwurf', 'Baugesuch', 'Ausführungsplanung'],
    beschreibung:
      'Mehrfamilienhaus am Hang in Künten, Kanton Aargau. Gestaffelte Baukörper reagieren auf das Gelände und geben jeder Wohnung einen eigenen Aussenraum mit Aussicht.',
    abschnitte: [
      {
        titel: 'Bauen am Hang',
        absaetze: [
          'Das Grundstück in Künten fällt deutlich ab. Ein Hang ist kein Nachteil, sondern eine Chance: Er erlaubt es, Wohnungen übereinander zu stapeln, ohne dass eine der anderen die Aussicht nimmt.',
          'Wir haben das Volumen in drei Stufen gegliedert, die dem Gelände folgen. Jede Stufe trägt die Terrasse der darüberliegenden Wohnung. Aushub und Stützmauern bleiben dadurch minimal.',
        ],
      },
      {
        titel: 'Licht und Aussicht',
        absaetze: [
          'Alle Wohnräume orientieren sich nach Südwesten zur Aussicht. Die Schlafräume liegen bergseitig und bleiben dadurch kühler — im Sommer ein spürbarer Vorteil ohne technische Kühlung.',
          'Die Fensterflächen sind grosszügig, aber nicht flächig verglast. Feste Brüstungen und der auskragende Terrassenboden darüber verschatten im Hochsommer, lassen die flache Wintersonne aber einfallen.',
        ],
      },
      {
        titel: 'Zurückhaltung als Haltung',
        absaetze: [
          'Künten ist ein Dorf mit kleinteiliger Bebauung. Ein Mehrfamilienhaus ist hier ein Eingriff — er muss begründet und sorgfältig gemacht sein.',
          'Wir haben deshalb mit wenigen, ortsüblichen Materialien gearbeitet: Putz, Holz an den geschützten Bauteilen, mineralische Farbtöne. Das Haus fällt nicht auf, hält aber jeder genauen Betrachtung stand.',
        ],
      },
    ],
    daten: [
      { label: 'Gebäudetyp', wert: 'Mehrfamilienhaus am Hang' },
      { label: 'Besonderheit', wert: 'Gestaffelte Baukörper, Terrassen' },
      { label: 'Ausrichtung', wert: 'Wohnräume Südwest' },
      { label: 'Status', wert: 'Realisiert' },
    ],
    fragen: [
      {
        frage: 'Ist Bauen am Hang teurer?',
        antwort:
          'Aushub, Hangsicherung und Erschliessung kosten mehr als in der Ebene. Bei sorgfältiger Planung kompensiert der Gewinn an Aussicht und Belichtung das im Verkaufs- oder Mietwert meist. Entscheidend ist, das Volumen dem Gelände anzupassen statt es abzugraben.',
      },
      {
        frage: 'Brauchen wir eine Kühlung für die Wohnungen?',
        antwort:
          'In den meisten Fällen nicht, wenn Ausrichtung, Verschattung und Speichermasse stimmen. Wir prüfen den sommerlichen Wärmeschutz im Entwurf — bauliche Lösungen sind günstiger und wartungsfrei gegenüber technischer Kühlung.',
      },
    ],
    thumbnail: '/images/projekte/mfh-kuenten/thumb.jpg',
    heroImage: '/images/projekte/mfh-kuenten/hero.jpg',
    galerie: [
      '/images/projekte/mfh-kuenten/01.jpg',
      '/images/projekte/mfh-kuenten/02.jpg',
      '/images/projekte/mfh-kuenten/03.jpg',
      '/images/projekte/mfh-kuenten/04.jpg',
      '/images/projekte/mfh-kuenten/05.jpg',
      '/images/projekte/mfh-kuenten/06.jpg',
      '/images/projekte/mfh-kuenten/07.jpg',
      '/images/projekte/mfh-kuenten/08.jpg',
      '/images/projekte/mfh-kuenten/09.jpg',
    ],
    plaene: [
      { titel: 'Kataster', datei: '/dokumente/projekte/mfh-kuenten/01-kataster.pdf' },
      { titel: 'Untergeschoss', datei: '/dokumente/projekte/mfh-kuenten/02-untergeschoss.pdf' },
      { titel: 'Erdgeschoss', datei: '/dokumente/projekte/mfh-kuenten/03-erdgeschoss.pdf' },
      { titel: 'Attikageschoss', datei: '/dokumente/projekte/mfh-kuenten/04-attikageschoss.pdf' },
      { titel: 'Fassade Ost', datei: '/dokumente/projekte/mfh-kuenten/05-fassade-ost.pdf' },
      { titel: 'Fassade Nord', datei: '/dokumente/projekte/mfh-kuenten/06-fassade-nord.pdf' },
      { titel: 'Fassade Süd', datei: '/dokumente/projekte/mfh-kuenten/07-fassade-sued.pdf' },
      { titel: 'Schnitt AA', datei: '/dokumente/projekte/mfh-kuenten/08-schnitt-aa.pdf' },
    ],
    featured: false,
  },
  {
    slug: 'mfh-letten',
    title: 'Mehrfamilienhaus Letten',
    ort: 'Ottenbach',
    kanton: 'ZH',
    kunde: null,
    jahr: '2023',
    typ: 'Mehrfamilienhaus',
    kategorien: ['Mieterausbau', 'Umbau', 'Wohnen'],
    leistungen: [
      'Machbarkeitsstudie',
      'Projektierung',
      'Ausschreibungsplanung',
      'Ausführungsplanung',
      'Bauleitung',
    ],
    beschreibung:
      'Umnutzung eines ehemaligen Bürogebäudes in Ottenbach im Kanton Zürich zu einem Mehrfamilienhaus mit acht Wohnungen. Auskragende Balkone im Dachgeschoss prägen das neue Erscheinungsbild.',
    abschnitte: [
      {
        titel: 'Die Aufgabe',
        absaetze: [
          'Das Gebäude in Ottenbach im Kanton Zürich wurde ursprünglich als Bürohaus genutzt und entsprach hinsichtlich Raumstruktur, Technik und Nutzung nicht mehr den heutigen Anforderungen. Im Rahmen einer umfassenden Kernsanierung haben wir die bestehende Bausubstanz bis auf den Rohbau zurückgeführt und vollständig in ein modernes Mehrfamilienhaus transformiert.',
          'Ziel war die nachhaltige Weiterentwicklung des Bestands und die Schaffung von zeitgemässem Wohnraum, statt das Gebäude abzureissen und neu zu bauen. Eine Umnutzung stellt andere Anforderungen als ein Neubau: Tragstruktur, Geschosshöhen und Erschliessung sind vorgegeben und müssen in die neue Nutzung integriert werden.',
        ],
      },
      {
        titel: 'Acht Wohnungen aus einem Bürohaus',
        absaetze: [
          'Durch die Umnutzung konnten insgesamt acht Wohnungen realisiert werden. Dafür haben wir die bestehende Gebäudestruktur grundlegend neu organisiert und an die Anforderungen modernen Wohnens angepasst.',
          'Gleichzeitig erfolgte die Erneuerung der technischen Infrastruktur sowie die gezielte Aufwertung der Gebäudehülle. Wärmedämmung, Fenster und Haustechnik entsprechen damit heutigem Standard, ohne dass die Struktur des ehemaligen Bürohauses ersetzt werden musste.',
        ],
      },
      {
        titel: 'Die auskragenden Balkone',
        absaetze: [
          'Eine besondere Herausforderung stellte die Realisierung der auskragenden Balkone im Dachgeschoss dar. Die anspruchsvolle konstruktive Umsetzung erforderte eine präzise Planung und enge Abstimmung aller Beteiligten.',
          'Die neu geschaffenen Aussenräume prägen das Erscheinungsbild des Gebäudes und schaffen einen wesentlichen Mehrwert für die Bewohnerinnen und Bewohner. Wo vorher ein geschlossenes Bürohaus stand, öffnen sich jetzt grosszügige Balkone zum Umfeld.',
        ],
      },
      {
        titel: 'Von der Machbarkeitsstudie bis zur Bauleitung',
        absaetze: [
          'Das Projekt wurde von der ersten Machbarkeitsstudie über die Projektierung und Ausschreibung bis hin zur Ausführungsplanung und Begleitung der Bauleitung durchgehend von uns betreut.',
          'Durch die sorgfältige Koordination sämtlicher Projektbeteiligter konnte die Transformation des ehemaligen Bürogebäudes in Ottenbach in ein hochwertiges Mehrfamilienhaus erfolgreich umgesetzt werden.',
        ],
      },
    ],
    daten: [
      { label: 'Gebäudetyp', wert: 'Mehrfamilienhaus, Umnutzung eines Bürogebäudes' },
      { label: 'Wohnungen', wert: 'Acht Wohnungen' },
      { label: 'Besonderheit', wert: 'Auskragende Balkone im Dachgeschoss' },
      { label: 'Status', wert: 'Realisiert' },
    ],
    fragen: [
      {
        frage: 'Lohnt sich die Umnutzung eines Bürogebäudes zu Wohnraum?',
        antwort:
          'Oft ja, wenn Tragstruktur und Geschosshöhen mitspielen. Der Rohbau bleibt erhalten, was Aushub und Rückbau spart, während Grundrisse, Haustechnik und Gebäudehülle vollständig erneuert werden. Ob sich das im Einzelfall rechnet, zeigt eine Machbarkeitsstudie zu Beginn.',
      },
      {
        frage: 'Wie werden auskragende Balkone konstruktiv gelöst?',
        antwort:
          'Auskragende Balkone brauchen eine durchdachte Lastabtragung, meist über verstärkte Deckenplatten oder eingespannte Träger, kombiniert mit einer Wärmedämmung, die die Kältebrücke am Auskragungspunkt unterbricht. Die Details müssen früh mit dem Tragwerksplaner abgestimmt werden, weil sie die Statik des ganzen Geschosses beeinflussen.',
      },
      {
        frage: 'Wie lange dauert eine Kernsanierung mit Umnutzung?',
        antwort:
          'Von der Machbarkeitsstudie bis zum Einzug rechnen Sie meist mit zwei bis drei Jahren, je nach Bewilligungsverfahren und Umfang der Eingriffe. Weil die bestehende Struktur genutzt wird, entfällt die Rohbauzeit eines Neubaus, dafür verlängert eine sorgfältige Bestandsaufnahme die Planungsphase.',
      },
    ],
    thumbnail: '/images/projekte/mfh-letten/thumb.jpg',
    heroImage: '/images/projekte/mfh-letten/hero.jpg',
    galerie: [
      '/images/projekte/mfh-letten/01.jpg',
      '/images/projekte/mfh-letten/02.jpg',
      '/images/projekte/mfh-letten/03.jpg',
      '/images/projekte/mfh-letten/04.jpg',
      '/images/projekte/mfh-letten/05.jpg',
      '/images/projekte/mfh-letten/06.jpg',
      '/images/projekte/mfh-letten/07.jpg',
      '/images/projekte/mfh-letten/08.jpg',
      '/images/projekte/mfh-letten/09.jpg',
      '/images/projekte/mfh-letten/10.jpg',
      '/images/projekte/mfh-letten/11.jpg',
    ],
    plaene: [
      { titel: 'Kataster', datei: '/dokumente/projekte/mfh-letten/01-kataster.pdf' },
      { titel: 'Erdgeschoss', datei: '/dokumente/projekte/mfh-letten/02-erdgeschoss.pdf' },
      { titel: 'Dachgeschoss', datei: '/dokumente/projekte/mfh-letten/03-dachgeschoss.pdf' },
      { titel: 'Westfassade', datei: '/dokumente/projekte/mfh-letten/04-westfassade.pdf' },
      { titel: 'Nordfassade', datei: '/dokumente/projekte/mfh-letten/05-nordfassade.pdf' },
    ],
    featured: true,
  },
  {
    slug: 'efh-huenenberg',
    title: 'Einfamilienhaus',
    ort: 'Hünenberg',
    kanton: 'ZG',
    kunde: null,
    jahr: '2023',
    typ: 'Einfamilienhaus',
    kategorien: ['Umbau', 'Wohnen'],
    leistungen: ['Projektierung', 'Ausschreibungsplanung', 'Ausführungsplanung', 'Bauleitung'],
    beschreibung:
      'Sanierung und Erweiterung eines Einfamilienhauses in Hünenberg im Kanton Zug. Eine rahmenlose Verglasung öffnet das Erdgeschoss zum Garten, ein neuer Balkon im Obergeschoss bietet Sicht auf den Zugersee.',
    abschnitte: [
      {
        titel: 'Die Aufgabe',
        absaetze: [
          'Das bestehende Einfamilienhaus in Hünenberg im Kanton Zug wurde im Erdgeschoss umfassend saniert und durch einen gezielten Anbau erweitert. Ziel der Bauherrschaft war es, den Wohnraum grosszügig zu öffnen und trotz der Erweiterung eine maximale natürliche Belichtung sicherzustellen.',
          'Gleichzeitig sollte die neue Struktur ohne störende statische Eingriffe in den Bestand auskommen — eine Vorgabe, die die Wahl der Konstruktion und der Verglasung von Anfang an mitbestimmt hat.',
        ],
      },
      {
        titel: 'Rahmenlose Verglasung',
        absaetze: [
          'Für die Öffnung zum Garten kam eine durchgängige, grossflächige Verglasung mit einem rahmenlosen Schiebesystem zum Einsatz. Sie schafft eine nahezu nahtlose Verbindung zwischen Innen- und Aussenraum; die raumhohen Fenster führen das Licht tief in den Wohnbereich.',
          'Trotz der kompakten Grundstruktur des Hauses entsteht dadurch eine räumliche Grosszügigkeit, wie sie ein reiner Anbau ohne diese Öffnung nicht erreicht hätte.',
        ],
      },
      {
        titel: 'Die Beschattung als Detail',
        absaetze: [
          'Eine besondere planerische Herausforderung war die Beschattung: Die Bauherrschaft wünschte ausschliesslich seitliche Führungsschienen an der Fassade, keine sichtbare Technik im Blickfeld. Die Lösung wurde deshalb vollständig im Sturzbereich integriert und über die Gebäudeecke geführt.',
          'Die erforderliche Stabilität stellt ein ergänzendes, sorgfältig verstecktes Stahlrohr sicher. Das Ergebnis ist ein Sonnenschutz, der funktioniert, ohne die reduzierte Fassade zu stören.',
        ],
      },
      {
        titel: 'Balkon mit Weitblick',
        absaetze: [
          'Durch die Erweiterung entstand im Obergeschoss ein grosszügiger Balkon mit hoher Aufenthaltsqualität. Von hier reicht der Blick über die Dächer der Nachbarschaft bis zum Zugersee.',
          'Das Projekt verbindet damit technische Präzision in der Umsetzung mit einer klaren Ausrichtung auf Wohnqualität und Aussicht.',
        ],
      },
    ],
    daten: [
      { label: 'Gebäudetyp', wert: 'Einfamilienhaus, Sanierung und Erweiterung' },
      { label: 'Besonderheit', wert: 'Rahmenlose Verglasung, integrierte Beschattung' },
      { label: 'Ausblick', wert: 'Balkon mit Sicht auf den Zugersee' },
      { label: 'Status', wert: 'Realisiert' },
    ],
    fragen: [
      {
        frage: 'Wie lässt sich ein Erdgeschoss ohne sichtbare Statik öffnen?',
        antwort:
          'Meist über rahmenlose Schiebeverglasungen in Kombination mit verstärkten Sturzkonstruktionen, die die Lasten unauffällig abtragen. Wie weit sich eine Fassade öffnen lässt, hängt von der bestehenden Tragstruktur ab und muss früh mit dem Tragwerksplaner geklärt werden.',
      },
      {
        frage: 'Wie funktioniert eine Beschattung ohne sichtbare Führungsschienen an der Fassade?',
        antwort:
          'Die Führung lässt sich in den Sturzbereich integrieren und über die Gebäudeecke führen, statt sie aussen an der Fassade zu montieren. Die zusätzlich nötige Stabilität übernimmt ein ergänzendes, verdecktes Stahlrohr — sichtbar bleibt nur der Behang selbst.',
      },
      {
        frage: 'Lohnt sich eine Erweiterung gegenüber einem Neubau?',
        antwort:
          'Oft ja, wenn die bestehende Struktur und Lage stimmen. Eine Erweiterung nutzt vorhandene Erschliessung und Bausubstanz weiter und kommt meist günstiger als ein vollständiger Neubau — vorausgesetzt, die Anschlüsse an den Bestand werden sorgfältig geplant.',
      },
    ],
    thumbnail: '/images/projekte/efh-huenenberg/thumb.jpg',
    heroImage: '/images/projekte/efh-huenenberg/hero.jpg',
    galerie: [
      '/images/projekte/efh-huenenberg/01.jpg',
      '/images/projekte/efh-huenenberg/02.jpg',
      '/images/projekte/efh-huenenberg/03.jpg',
      '/images/projekte/efh-huenenberg/04.jpg',
      '/images/projekte/efh-huenenberg/05.jpg',
      '/images/projekte/efh-huenenberg/06.jpg',
      '/images/projekte/efh-huenenberg/07.jpg',
      '/images/projekte/efh-huenenberg/08.jpg',
      '/images/projekte/efh-huenenberg/09.jpg',
      '/images/projekte/efh-huenenberg/10.jpg',
      '/images/projekte/efh-huenenberg/11.jpg',
      '/images/projekte/efh-huenenberg/12.jpg',
      '/images/projekte/efh-huenenberg/13.jpg',
      '/images/projekte/efh-huenenberg/14.jpg',
      '/images/projekte/efh-huenenberg/15.jpg',
      '/images/projekte/efh-huenenberg/16.jpg',
      '/images/projekte/efh-huenenberg/17.jpg',
      '/images/projekte/efh-huenenberg/18.jpg',
      '/images/projekte/efh-huenenberg/19.jpg',
      '/images/projekte/efh-huenenberg/20.jpg',
      '/images/projekte/efh-huenenberg/21.jpg',
      '/images/projekte/efh-huenenberg/22.jpg',
      '/images/projekte/efh-huenenberg/23.jpg',
      '/images/projekte/efh-huenenberg/24.jpg',
      '/images/projekte/efh-huenenberg/25.jpg',
      '/images/projekte/efh-huenenberg/26.jpg',
      '/images/projekte/efh-huenenberg/27.jpg',
      '/images/projekte/efh-huenenberg/28.jpg',
      '/images/projekte/efh-huenenberg/29.jpg',
      '/images/projekte/efh-huenenberg/30.jpg',
      '/images/projekte/efh-huenenberg/31.jpg',
      '/images/projekte/efh-huenenberg/32.jpg',
      '/images/projekte/efh-huenenberg/33.jpg',
      '/images/projekte/efh-huenenberg/34.jpg',
      '/images/projekte/efh-huenenberg/35.jpg',
      '/images/projekte/efh-huenenberg/36.jpg',
      '/images/projekte/efh-huenenberg/37.jpg',
      '/images/projekte/efh-huenenberg/38.jpg',
      '/images/projekte/efh-huenenberg/39.jpg',
      '/images/projekte/efh-huenenberg/40.jpg',
    ],
    featured: false,
  },
  {
    slug: 'mfh-hochwarting',
    title: 'Mehrfamilienhaus Hochwarting',
    ort: 'Glashütten',
    kanton: 'AG',
    kunde: null,
    jahr: '2021',
    typ: 'Mehrfamilienhaus',
    kategorien: ['Neubau', 'Wohnen'],
    leistungen: ['Entwurf', 'Baugesuch', 'Ausführungsplanung', 'Bauleitung'],
    beschreibung:
      'Wohnbau mit klarer Ordnung in Glashütten, Kanton Aargau. Sorgfältig proportionierte Fassade, reduzierte Materialwahl, Grundrisse für Gemeinschaft und Rückzug.',
    abschnitte: [
      {
        titel: 'Ordnung als Entwurfsprinzip',
        absaetze: [
          'Der Entwurf folgt einem einfachen Raster, das Fenster, Balkone und Wohnungstrennungen in ein Verhältnis setzt. Diese Ordnung ist nicht Selbstzweck: Sie macht die Konstruktion einfach und die Fassade ruhig.',
          'Innerhalb des Rasters gibt es Abweichungen, wo sie begründet sind — grössere Öffnungen zum Wohnraum, kleinere zu Nebenräumen. Die Regel bleibt lesbar, die Ausnahme wird zum Akzent.',
        ],
      },
      {
        titel: 'Gemeinschaft und Rückzug',
        absaetze: [
          'Die Grundrisse trennen klar zwischen offenen und geschützten Bereichen. Wohnen, Essen und Kochen bilden eine Zone, die Schlafräume liegen abgesetzt an einem kurzen Gang.',
          'Im Erdgeschoss gibt es einen gemeinsam nutzbaren Raum für Velos, Kinderwagen und Gerätschaften. Solche Flächen werden oft eingespart und danach vermisst.',
        ],
      },
      {
        titel: 'Langlebigkeit vor Effekt',
        absaetze: [
          'Bei der Materialwahl haben wir Dauerhaftigkeit über Wirkung gestellt: mineralischer Putz statt Verkleidung, robuste Bodenbeläge, Fenster mit langlebigen Beschlägen.',
          'Das Ergebnis wirkt zurückhaltend. Nach fünf Jahren Nutzung ist es das noch — was der eigentliche Test für Materialentscheide ist.',
        ],
      },
    ],
    daten: [
      { label: 'Gebäudetyp', wert: 'Mehrfamilienhaus, Neubau' },
      { label: 'Bauweise', wert: 'Massivbau, mineralischer Putz' },
      { label: 'Besonderheit', wert: 'Gemeinschaftsraum im Erdgeschoss' },
      { label: 'Status', wert: 'Realisiert' },
    ],
    fragen: [
      {
        frage: 'Wie viel Fläche sollten wir für Nebenräume einplanen?',
        antwort:
          'Für Velos, Kinderwagen und Gerätschaften rechnen Sie mit etwa zwei bis drei Quadratmetern je Wohnung, zusätzlich zu den Kellerabteilen. Diese Flächen werden oft gestrichen und danach vermisst — sie beeinflussen die Zufriedenheit der Mieterschaft deutlich.',
      },
      {
        frage: 'Welche Materialien halten am längsten?',
        antwort:
          'Mineralische Putze, Sichtbeton und keramische Beläge sind über Jahrzehnte robust. Bei Fenstern und Beschlägen zahlt sich Qualität am stärksten aus, weil ein Austausch dort aufwendig ist. Wir legen diese Entscheide im Vorprojekt mit Lebenszykluskosten offen.',
      },
    ],
    thumbnail: '/images/projekte/mfh-hochwarting/thumb.jpg',
    heroImage: '/images/projekte/mfh-hochwarting/hero.jpg',
    galerie: [
      '/images/projekte/mfh-hochwarting/01.jpg',
      '/images/projekte/mfh-hochwarting/02.jpg',
      '/images/projekte/mfh-hochwarting/03.jpg',
      '/images/projekte/mfh-hochwarting/04.jpg',
      '/images/projekte/mfh-hochwarting/05.jpg',
    ],
    plaene: [
      { titel: 'Umgebungsplan', datei: '/dokumente/projekte/mfh-hochwarting/01-umgebungsplan.pdf' },
      { titel: 'Erdgeschoss', datei: '/dokumente/projekte/mfh-hochwarting/02-erdgeschoss.pdf' },
      { titel: 'Obergeschoss', datei: '/dokumente/projekte/mfh-hochwarting/03-obergeschoss.pdf' },
      { titel: 'Attika', datei: '/dokumente/projekte/mfh-hochwarting/04-attika.pdf' },
      { titel: 'Schnitt', datei: '/dokumente/projekte/mfh-hochwarting/05-schnitt.pdf' },
      { titel: 'Haus A, Nordwestfassade', datei: '/dokumente/projekte/mfh-hochwarting/06-haus-a-nordwestfassade.pdf' },
      { titel: 'Haus B, Nordostfassade', datei: '/dokumente/projekte/mfh-hochwarting/07-haus-b-nordostfassade.pdf' },
      { titel: 'Haus B, Nordwestfassade', datei: '/dokumente/projekte/mfh-hochwarting/08-haus-b-nordwestfassade.pdf' },
    ],
    featured: false,
  },
  {
    slug: 'defh-safenwil',
    title: 'Doppeleinfamilienhaus',
    ort: 'Safenwil',
    kanton: 'AG',
    kunde: null,
    jahr: 'in Realisierung',
    typ: 'Doppeleinfamilienhaus',
    kategorien: ['Neubau', 'Wohnen'],
    leistungen: ['Machbarkeitsstudie', 'Projektierung', 'Baugesuch', 'Ausschreibungsplanung', 'Ausführungsplanung'],
    beschreibung:
      'Doppeleinfamilienhaus in Safenwil im Kanton Aargau für einen Investor, der das Grundstück erworben hatte. Kubische Bauform, heller Putzfassade und begrüntem Attikageschoss.',
    abschnitte: [
      {
        titel: 'Kompakte Bauform',
        absaetze: [
          'Für einen Investor, der das Grundstück in Safenwil im Kanton Aargau erworben hatte, haben wir ein Doppeleinfamilienhaus mit klar kubischer Form entwickelt. Erdgeschoss und Obergeschoss bilden den kompakten Baukörper, ein zurückversetztes Attikageschoss mit Dachterrasse schliesst das Haus nach oben ab.',
          'Die beiden Hauseinheiten teilen sich die gemeinsame Aussenwand, treten nach aussen aber als ein zusammenhängender Baukörper auf. Je eine Garage und ein separater Hauseingang erschliessen die Einheiten getrennt.',
        ],
      },
      {
        titel: 'Aussenraum und Materialisierung',
        absaetze: [
          'Die Fassade ist hell verputzt, Fenster und Türen sind dunkel abgesetzt und gliedern die Aussenhaut in ruhige, stehende Formate. Auf der Gartenseite öffnet eine grosse Verglasung den Wohnbereich zu einem gedeckten Sitzplatz mit Umgebungsmauer.',
          'Im Innern verbindet eine offene Treppe mit Glasgeländer die Geschosse. Die Wohn-, Ess- und Kochbereiche sind offen zueinander angeordnet, mit hellem Holzboden und einer Kücheninsel mit Steinoberfläche.',
        ],
      },
    ],
    daten: [
      { label: 'Gebäudetyp', wert: 'Doppeleinfamilienhaus' },
      { label: 'Bauherrschaft', wert: 'Investor' },
      { label: 'Bauleitung', wert: 'Durch einen externen Bauleiter' },
    ],
    fragen: [
      {
        frage: 'Was unterscheidet ein Doppeleinfamilienhaus von zwei freistehenden Einfamilienhäusern?',
        antwort:
          'Beim Doppeleinfamilienhaus teilen sich zwei Wohneinheiten eine gemeinsame Wand, was Erstellungskosten und Landbedarf gegenüber zwei freistehenden Häusern reduziert. Grundriss und Erschliessung werden so geplant, dass beide Einheiten trotz der gemeinsamen Wand unabhängig genutzt werden können, etwa mit getrennten Zugängen und Aussenräumen.',
      },
      {
        frage: 'Welche Vorteile bietet ein Attikageschoss mit Dachterrasse?',
        antwort:
          'Ein Attikageschoss schafft zusätzlichen Wohn- oder Freiraum, ohne die Gebäudehöhe der übrigen Geschosse zu erhöhen, da es gegenüber der Fassade zurückversetzt ist. Die Dachterrasse bietet einen privaten Aussenraum ohne Einblick von der Strasse und lässt sich begrünen.',
      },
    ],
    thumbnail: '/images/projekte/defh-safenwil/thumb.jpg',
    heroImage: '/images/projekte/defh-safenwil/hero.jpg',
    galerie: ['/images/projekte/defh-safenwil/01.jpg', '/images/projekte/defh-safenwil/02.jpg'],
    plaene: [
      { titel: 'Kataster', datei: '/dokumente/projekte/defh-safenwil/01-kataster.pdf' },
      { titel: 'Erdgeschoss', datei: '/dokumente/projekte/defh-safenwil/02-erdgeschoss.pdf' },
      { titel: 'Obergeschoss', datei: '/dokumente/projekte/defh-safenwil/03-obergeschoss.pdf' },
      { titel: 'Attika', datei: '/dokumente/projekte/defh-safenwil/04-attika.pdf' },
      { titel: 'Westfassade', datei: '/dokumente/projekte/defh-safenwil/05-westfassade.pdf' },
      { titel: 'Nordfassade', datei: '/dokumente/projekte/defh-safenwil/06-nordfassade.pdf' },
      { titel: 'Schnitt', datei: '/dokumente/projekte/defh-safenwil/07-schnitt.pdf' },
    ],
    featured: true,
  },
  {
    slug: 'refh-hochfelden',
    title: 'Reiheneinfamilienhäuser',
    ort: 'Hochfelden',
    kanton: 'ZH',
    kunde: null,
    jahr: 'in Realisierung',
    typ: 'Reiheneinfamilienhäuser',
    kategorien: ['Neubau', 'Wohnen'],
    leistungen: ['Machbarkeitsstudie', 'Projektierung', 'Baugesuch', 'Ausschreibungsplanung', 'Ausführungsplanung'],
    beschreibung:
      'Reiheneinfamilienhäuser in Hochfelden im Kanton Zürich für einen Investor, der das Grundstück erworben hatte. Giebelständige Baukörper mit vorgelagerten Balkonen und Gartenterrassen.',
    abschnitte: [
      {
        titel: 'Aussenbild',
        absaetze: [
          'Für einen Investor, der das Grundstück in Hochfelden im Kanton Zürich erworben hatte, haben wir Reiheneinfamilienhäuser mit giebelständigem, steilem und dunkel gedecktem Satteldach entwickelt. Liegende Dachflächenfenster und mehrere hochrechteckige Dacheinschnitte belichten das Geschoss unter dem Dach, die helle Putzfassade bleibt bewusst zurückhaltend.',
          'Zum Garten hin öffnen sich Balkone mit schlanken Metallgeländern, darunter liegt eine gedeckte Terrasse mit direktem Austritt aus dem Wohnbereich. Ein gepflasterter Weg und eine Rampe mit Geländer erschliessen die Häuser von der Gartenseite, die Umgebung ist mit Stauden, Gräsern und Hecken bepflanzt.',
        ],
      },
      {
        titel: 'Wohnräume',
        absaetze: [
          'Im Innern zeigen die Aufnahmen einen offenen Wohn- und Essbereich mit Parkettboden, der über eine gewendelte Treppe mit den oberen Geschossen verbunden ist. Eine grosse Schiebeverglasung stellt den direkten Bezug zwischen Wohnraum und Garten her.',
          'Die Küche schliesst als offener Bereich an den Essplatz an, ein zweiter Wohnraum mit bodentiefen Fenstertüren und vorgelagerter Terrasse ergänzt das Bild. Die Materialisierung ist hell und zurückhaltend gehalten.',
        ],
      },
    ],
    daten: [
      { label: 'Gebäudetyp', wert: 'Reiheneinfamilienhäuser' },
      { label: 'Bauherrschaft', wert: 'Investor' },
      { label: 'Bauleitung', wert: 'Durch die Bauherrschaft mit dem Unternehmer' },
    ],
    fragen: [
      {
        frage: 'Was zeichnet die Planung von Reiheneinfamilienhäusern aus?',
        antwort:
          'Neben dem Entwurf der einzelnen Häuser spielen Erschliessung, Aussenraum und die Einordnung ins Quartier eine zentrale Rolle. Balkone, Gartenanteile und die Zugänge der einzelnen Einheiten werden so geplant, dass private und gemeinsam genutzte Bereiche klar getrennt bleiben.',
      },
      {
        frage: 'Welche Unterlagen braucht ein Baugesuch für Reiheneinfamilienhäuser?',
        antwort:
          'Dazu gehören in der Regel ein Situationsplan, ein Umgebungsplan sowie Grundriss- und Fassadenpläne aller betroffenen Geschosse. Der genaue Umfang richtet sich nach den Vorgaben der zuständigen Gemeinde und wird im Baugesuchsverfahren zusammengestellt.',
      },
    ],
    thumbnail: '/images/projekte/refh-hochfelden/thumb.jpg',
    heroImage: '/images/projekte/refh-hochfelden/hero.jpg',
    galerie: [
      '/images/projekte/refh-hochfelden/01.jpg',
      '/images/projekte/refh-hochfelden/02.jpg',
      '/images/projekte/refh-hochfelden/03.jpg',
    ],
    plaene: [
      { titel: 'Situationsplan', datei: '/dokumente/projekte/refh-hochfelden/01-situation.pdf' },
      { titel: 'Untergeschoss', datei: '/dokumente/projekte/refh-hochfelden/02-untergeschoss.pdf' },
      { titel: 'Umgebungsplan', datei: '/dokumente/projekte/refh-hochfelden/03-umgebungsplan.pdf' },
      { titel: 'Fassade A', datei: '/dokumente/projekte/refh-hochfelden/04-fassade-a.pdf' },
      { titel: 'Fassade B', datei: '/dokumente/projekte/refh-hochfelden/05-fassade-b.pdf' },
      { titel: 'Fassade C', datei: '/dokumente/projekte/refh-hochfelden/06-fassade-c.pdf' },
      { titel: 'Fassade D', datei: '/dokumente/projekte/refh-hochfelden/07-fassade-d.pdf' },
    ],
    featured: false,
  },
  {
    slug: 'efh-buchs',
    title: 'Einfamilienhaus',
    ort: 'Buchs',
    kanton: 'AG',
    kunde: null,
    jahr: 'nicht realisiert',
    typ: 'Einfamilienhaus',
    kategorien: ['Neubau', 'Wohnen'],
    leistungen: ['Machbarkeitsstudie', 'Projektierung', 'Baugesuch'],
    beschreibung:
      'Studie für ein zusätzliches Einfamilienhaus auf einem Grundstück mit bestehendem Wohnhaus in Buchs im Kanton Aargau. Bis zur Baubewilligung geführt, aber nicht realisiert.',
    abschnitte: [
      {
        titel: 'Ungenutzte Ausnützungsreserve',
        absaetze: [
          'Das Grundstück in Buchs im Kanton Aargau trägt bereits ein Wohnhaus, liess aber noch zusätzliche Ausnützung zu. Für einen privaten Bauherrn haben wir deshalb ein weiteres, freistehendes Einfamilienhaus auf derselben Parzelle geplant.',
          'Das Projekt wurde bis zur Baubewilligung geführt und bewilligt. Realisiert wurde es bislang nicht — die Visualisierungen zeigen den geplanten Zustand, nicht ein bestehendes Gebäude.',
        ],
      },
      {
        titel: 'Entwurf',
        absaetze: [
          'Die Visualisierungen zeigen eine helle, warmtonige Putzfassade und ein geneigtes Dach mit Dachflächenfenstern für zusätzliches Licht in den oberen Räumen. Auf der Gartenseite ergänzt ein gedeckter Sitzplatz den Aussenraum.',
          'Im Erdgeschoss ist ein offener Wohn-, Ess- und Kochbereich mit Kücheninsel vorgesehen, im Obergeschoss ein Zimmer mit Zugang zu Balkon oder Terrasse.',
        ],
      },
    ],
    daten: [
      { label: 'Gebäudetyp', wert: 'Einfamilienhaus, Erweiterungsbau' },
      { label: 'Bauherrschaft', wert: 'Privater Bauherr' },
      { label: 'Status', wert: 'Baubewilligung erteilt, nicht realisiert' },
    ],
    fragen: [
      {
        frage: 'Kann ich auf meinem Grundstück ein weiteres Haus bauen, obwohl schon eines steht?',
        antwort:
          'Das hängt von der Ausnützungsreserve, den Grenzabständen und der Erschliessung Ihrer Parzelle ab. Eine Machbarkeitsstudie zeigt, ob und in welcher Form eine zusätzliche Baute möglich ist, bevor Sie in die Planung investieren.',
      },
      {
        frage: 'Was passiert mit einer erteilten Baubewilligung, wenn nicht gebaut wird?',
        antwort:
          'Eine Baubewilligung ist befristet gültig, meist zwei bis drei Jahre je nach Kanton, danach verfällt sie. Sie kann in dieser Zeit auch mit dem Grundstück verkauft oder bei geänderten Plänen neu beantragt werden.',
      },
    ],
    thumbnail: '/images/projekte/efh-buchs/thumb.jpg',
    heroImage: '/images/projekte/efh-buchs/hero.jpg',
    galerie: [
      '/images/projekte/efh-buchs/01.jpg',
      '/images/projekte/efh-buchs/02.jpg',
      '/images/projekte/efh-buchs/03.jpg',
      '/images/projekte/efh-buchs/04.jpg',
      '/images/projekte/efh-buchs/05.jpg',
      '/images/projekte/efh-buchs/06.jpg',
      '/images/projekte/efh-buchs/07.jpg',
      '/images/projekte/efh-buchs/08.jpg',
    ],
    plaene: [
      { titel: 'Kataster', datei: '/dokumente/projekte/efh-buchs/01-kataster.pdf' },
      { titel: 'Erdgeschoss', datei: '/dokumente/projekte/efh-buchs/02-erdgeschoss.pdf' },
      { titel: 'Nordfassade', datei: '/dokumente/projekte/efh-buchs/03-nordfassade.pdf' },
      { titel: 'Ostfassade', datei: '/dokumente/projekte/efh-buchs/04-ostfassade.pdf' },
      { titel: 'Südfassade', datei: '/dokumente/projekte/efh-buchs/05-suedfassade.pdf' },
    ],
    featured: false,
  },
  {
    slug: 'efh-dietikon',
    title: 'Einfamilienhaus',
    ort: 'Dietikon',
    kanton: 'ZH',
    kunde: null,
    jahr: 'in Realisierung',
    typ: 'Einfamilienhaus',
    kategorien: ['Umbau', 'Wohnen'],
    leistungen: ['Kaufberatung', 'Machbarkeitsstudie', 'Projektierung', 'Baugesuch', 'Ausschreibungsplanung', 'Ausführungsplanung'],
    beschreibung:
      'Kernsanierung eines bestehenden Einfamilienhauses in Dietikon im Kanton Zürich, aktuell in der Bauphase. Die Aufnahmen zeigen den Rückbau bis auf das Mauerwerk.',
    abschnitte: [
      {
        titel: 'Kernsanierung bis auf das Mauerwerk',
        absaetze: [
          'Das bestehende Einfamilienhaus in Dietikon im Kanton Zürich wird für einen privaten Bauherrn kernsaniert. Wir haben ihn bereits vor dem Kauf beraten und seither durch alle Phasen begleitet — von der Machbarkeitsstudie über das Baugesuch bis zur Ausführungsplanung.',
          'Die Aufnahmen entstanden während der Bauphase und zeigen das Gebäude zurückgebaut bis auf das tragende Backsteinmauerwerk unter dem steilen Satteldach, vollständig eingerüstet. Bessere Aufnahmen des fertigen Zustands liegen noch nicht vor.',
        ],
      },
      {
        titel: 'Lage an der Strassenkreuzung',
        absaetze: [
          'Das Grundstück liegt an der Ecke zweier Strassen und ist auf allen Seiten von Nachbarbebauung mit geneigten Dächern umgeben. Hecken entlang der Parzellengrenze schirmen die Baustelle zur Strasse hin ab.',
          'Die Ausführungspläne dokumentieren das Gebäude von allen vier Seiten. Die Bauleitung vor Ort begleiten wir beratend, ohne ein eigenes Bauleitungsmandat zu führen.',
        ],
      },
    ],
    daten: [
      { label: 'Gebäudetyp', wert: 'Einfamilienhaus, Kernsanierung' },
      { label: 'Bauherrschaft', wert: 'Privater Bauherr, bei Kauf beraten' },
      { label: 'Baubegleitung', wert: 'Beratend, ohne Bauleitungsmandat' },
    ],
    fragen: [
      {
        frage: 'Was bedeutet Kernsanierung bis auf das Mauerwerk?',
        antwort:
          'Dabei wird ein Gebäude bis auf die tragende Struktur zurückgebaut — Innenwände, Böden, Fenster und Haustechnik werden komplett erneuert. Das erlaubt eine Sanierung nach heutigem Standard, während der Rohbau und damit die Bauzonen-Konformität des Bestands erhalten bleiben.',
      },
      {
        frage: 'Wie können Sie mich schon vor dem Grundstückskauf unterstützen?',
        antwort:
          'Wir prüfen mit einer Machbarkeitsstudie, was auf dem Grundstück oder im Bestand möglich ist, bevor Sie sich vertraglich binden. So lassen sich Überraschungen bei Bauzone, Ausnützung oder Sanierungsaufwand vermeiden.',
      },
    ],
    thumbnail: '/images/projekte/efh-dietikon/thumb.jpg',
    heroImage: '/images/projekte/efh-dietikon/hero.jpg',
    galerie: [
      '/images/projekte/efh-dietikon/01.jpg',
      '/images/projekte/efh-dietikon/02.jpg',
      '/images/projekte/efh-dietikon/03.jpg',
      '/images/projekte/efh-dietikon/04.jpg',
      '/images/projekte/efh-dietikon/05.jpg',
      '/images/projekte/efh-dietikon/06.jpg',
      '/images/projekte/efh-dietikon/07.jpg',
      '/images/projekte/efh-dietikon/08.jpg',
      '/images/projekte/efh-dietikon/09.jpg',
    ],
    plaene: [
      { titel: 'Situationsplan', datei: '/dokumente/projekte/efh-dietikon/00-situationsplan.pdf' },
      { titel: 'Dachgeschoss', datei: '/dokumente/projekte/efh-dietikon/01-dachgeschoss.pdf' },
      { titel: 'Erdgeschoss', datei: '/dokumente/projekte/efh-dietikon/02-erdgeschoss.pdf' },
      { titel: 'Untergeschoss', datei: '/dokumente/projekte/efh-dietikon/03-untergeschoss.pdf' },
      { titel: 'Obergeschoss', datei: '/dokumente/projekte/efh-dietikon/04-obergeschoss.pdf' },
      { titel: 'Nordansicht', datei: '/dokumente/projekte/efh-dietikon/05-nordansicht.pdf' },
      { titel: 'Ostansicht', datei: '/dokumente/projekte/efh-dietikon/06-ostansicht.pdf' },
      { titel: 'Südansicht', datei: '/dokumente/projekte/efh-dietikon/07-suedansicht.pdf' },
      { titel: 'Westansicht', datei: '/dokumente/projekte/efh-dietikon/08-westansicht.pdf' },
    ],
    featured: false,
  },
  {
    slug: 'efh-wuerenlos',
    title: 'Einfamilienhaus',
    ort: 'Würenlos',
    kanton: 'AG',
    kunde: null,
    jahr: 'in Realisierung',
    typ: 'Einfamilienhaus',
    kategorien: ['Umbau', 'Wohnen'],
    leistungen: ['Machbarkeitsstudie', 'Projektierung', 'Baugesuch', 'Ausschreibungsplanung', 'Ausführungsplanung'],
    beschreibung:
      'Kernsanierung eines bestehenden Einfamilienhauses in Würenlos im Kanton Aargau für einen privaten Investor. Sandfarbene Putzfassade, Lamellenstoren und ein Balkon über der Gartenterrasse.',
    abschnitte: [
      {
        titel: 'Ein Satteldachhaus mit klarer Linie',
        absaetze: [
          'Für einen privaten Investor haben wir ein bestehendes Einfamilienhaus in Würenlos im Kanton Aargau kernsaniert. Die Giebelseiten sind zur Zufahrt und zum Garten hin ausgerichtet, die Putzfassade ist in einem warmen Sandton gehalten, das Ziegeldach in dunklem Braun.',
          'Vor den Fenstern liegen aussenliegende Lamellenstoren, die dem Haus ein ruhiges, gleichmässiges Fassadenbild geben. Der Hauseingang liegt unter einem kleinen, flach gedeckten Vordach zurückversetzt und ist mit einer anthrazitfarbenen Tür gefasst.',
        ],
      },
      {
        titel: 'Terrasse, Balkon und Umgebung',
        absaetze: [
          'Auf der Gartenseite liegt über der gedeckten Terrasse im Erdgeschoss ein Balkon mit schwarzem Metallgeländer, der zusätzlichen Aussenraum im Obergeschoss schafft. Die Terrasse ist mit hellen Bodenplatten belegt.',
          'Das Grundstück ist mit einem Metallzaun eingefasst und durch eine Hecke von der Nachbarschaft abgeschirmt. Bei der Bauleitung haben wir die Investorenseite beratend begleitet, ohne ein eigenes Mandat zu führen.',
        ],
      },
    ],
    daten: [
      { label: 'Gebäudetyp', wert: 'Einfamilienhaus, Kernsanierung' },
      { label: 'Bauherrschaft', wert: 'Privater Investor' },
      { label: 'Baubegleitung', wert: 'Beratend, ohne Bauleitungsmandat' },
    ],
    fragen: [
      {
        frage: 'Lohnt sich eine Kernsanierung für einen privaten Investor?',
        antwort:
          'Meist ja, wenn Lage und Bausubstanz stimmen: Der Wiederverkaufs- oder Vermietungswert steigt oft deutlicher als bei einer reinen Auffrischung. Entscheidend ist eine frühe Kostenschätzung, die Sanierungsaufwand und erzielbaren Wert gegenüberstellt.',
      },
      {
        frage: 'Was bedeutet eine beratende Baubegleitung ohne Bauleitungsmandat?',
        antwort:
          'Wir stehen der Bauherrschaft und der ausführenden Bauleitung fachlich zur Seite, tragen aber nicht die volle Verantwortung für die Bauausführung. Das eignet sich für Bauherrschaften, die selbst oder mit einem eigenen Bauleiter koordinieren möchten, aber unsere Planungssicht einbeziehen wollen.',
      },
    ],
    thumbnail: '/images/projekte/efh-wuerenlos/thumb.jpg',
    heroImage: '/images/projekte/efh-wuerenlos/hero.jpg',
    galerie: [
      '/images/projekte/efh-wuerenlos/01.jpg',
      '/images/projekte/efh-wuerenlos/02.jpg',
      '/images/projekte/efh-wuerenlos/03.jpg',
      '/images/projekte/efh-wuerenlos/04.jpg',
    ],
    plaene: [
      { titel: 'Kataster 1:500', datei: '/dokumente/projekte/efh-wuerenlos/01-kataster-500.pdf' },
      { titel: 'Kataster 1:1000', datei: '/dokumente/projekte/efh-wuerenlos/02-kataster-1000.pdf' },
      { titel: 'Untergeschoss', datei: '/dokumente/projekte/efh-wuerenlos/03-untergeschoss.pdf' },
      { titel: 'Erdgeschoss / Umgebung', datei: '/dokumente/projekte/efh-wuerenlos/04-erdgeschoss-umgebung.pdf' },
      { titel: 'Obergeschoss', datei: '/dokumente/projekte/efh-wuerenlos/05-obergeschoss.pdf' },
      { titel: 'Schnitt AA', datei: '/dokumente/projekte/efh-wuerenlos/06-schnitt-aa.pdf' },
      { titel: 'Schnitt BB', datei: '/dokumente/projekte/efh-wuerenlos/07-schnitt-bb.pdf' },
      { titel: 'Ostfassade', datei: '/dokumente/projekte/efh-wuerenlos/08-ostfassade.pdf' },
      { titel: 'Westfassade', datei: '/dokumente/projekte/efh-wuerenlos/09-westfassade.pdf' },
      { titel: 'Nordfassade', datei: '/dokumente/projekte/efh-wuerenlos/10-nordfassade.pdf' },
      { titel: 'Südfassade', datei: '/dokumente/projekte/efh-wuerenlos/11-suedfassade.pdf' },
    ],
    featured: false,
  },
  {
    slug: 'efh-rupperswil',
    title: 'Einfamilienhaus',
    ort: 'Rupperswil',
    kanton: 'AG',
    kunde: null,
    jahr: 'in Realisierung',
    typ: 'Einfamilienhaus',
    kategorien: ['Umbau', 'Wohnen'],
    leistungen: ['Machbarkeitsstudie', 'Projektierung', 'Baugesuch', 'Ausschreibungsplanung', 'Ausführungsplanung'],
    beschreibung:
      'Kernsanierung und Erweiterung eines bestehenden Einfamilienhauses in Rupperswil im Kanton Aargau. Weiss verputzter Giebelbau mit flachdachigem Nebenbaukörper.',
    abschnitte: [
      {
        titel: 'Giebelbau mit flachdachigem Nebenbau',
        absaetze: [
          'Ein bestehendes Einfamilienhaus in Rupperswil im Kanton Aargau haben wir kernsaniert und erweitert. Die weiss verputzte Fassade verbindet einen giebelständigen Hauptbaukörper mit einem niedrigeren, flachdachigen Nebenbaukörper — eingebettet zwischen Nachbarbauten mit traditionellen Ziegeldächern.',
          'Ein Holzlattenzaun fasst das Grundstück zur Strasse hin, ein gepflasterter Vorplatz führt zum Eingang. Rückseitig öffnet sich ein Sitzplatz zu einem eingezäunten Gartenbereich mit Rasen.',
        ],
      },
      {
        titel: 'Offener Wohnbereich über mehrere Geschosse',
        absaetze: [
          'Im Innern sind Küche, Ess- und Wohnbereich als ein durchgehender, heller Raum mit Holzboden gestaltet. Eine offene Treppe mit Glasgeländer verbindet die Geschosse, eine grossflächige Verglasung stellt den Bezug zum Sitzplatz im Garten her.',
          'Die Bauleitung hat die Bauherrschaft nach Abschluss unserer Planung selbst übernommen.',
        ],
      },
    ],
    daten: [
      { label: 'Gebäudetyp', wert: 'Einfamilienhaus, Kernsanierung und Erweiterung' },
      { label: 'Bauleitung', wert: 'Durch die Bauherrschaft selbst' },
    ],
    fragen: [
      {
        frage: 'Was zeichnet die Aussengestaltung dieses Einfamilienhauses aus?',
        antwort:
          'Die Fassade ist hell verputzt und kombiniert einen giebelständigen Hauptbaukörper mit einem niedrigeren, flachdachigen Nebenbaukörper. Diese Kombination erlaubt unterschiedliche Raumhöhen und Nutzungen unter einem gemeinsamen architektonischen Ausdruck.',
      },
      {
        frage: 'Können wir die Bauleitung bei einer Sanierung selbst übernehmen?',
        antwort:
          'Das ist möglich, wenn die Bauherrschaft über die nötige Zeit und Erfahrung verfügt, Handwerker zu koordinieren und Termine zu überwachen. Wir übergeben dafür eine ausführungsreife Planung, auf die sich die Bauherrschaft und die Unternehmer vor Ort stützen können.',
      },
    ],
    thumbnail: '/images/projekte/efh-rupperswil/thumb.jpg',
    heroImage: '/images/projekte/efh-rupperswil/hero.jpg',
    galerie: [
      '/images/projekte/efh-rupperswil/01.jpg',
      '/images/projekte/efh-rupperswil/02.jpg',
      '/images/projekte/efh-rupperswil/03.jpg',
      '/images/projekte/efh-rupperswil/04.jpg',
      '/images/projekte/efh-rupperswil/05.jpg',
      '/images/projekte/efh-rupperswil/06.jpg',
      '/images/projekte/efh-rupperswil/07.jpg',
    ],
    plaene: [
      { titel: 'Situationsplan 1:500', datei: '/dokumente/projekte/efh-rupperswil/01-situation-500.pdf' },
      { titel: 'Situationsplan 1:1000', datei: '/dokumente/projekte/efh-rupperswil/02-situation-1000.pdf' },
    ],
    featured: false,
  },
  {
    slug: 'mfh-untersiggenthal-2',
    title: 'Wohnüberbauung Untersiggenthal',
    ort: 'Untersiggenthal',
    kanton: 'AG',
    kunde: null,
    jahr: 'in Realisierung',
    typ: 'Mehrfamilienhaus',
    kategorien: ['Neubau', 'Wohnen'],
    leistungen: ['Machbarkeitsstudie', 'Projektierung', 'Baugesuch', 'Ausschreibungsplanung', 'Ausführungsplanung'],
    beschreibung:
      'Neubau eines Mehrfamilienhauses in Untersiggenthal im Kanton Aargau, aktuell in der Ausführung. Steiles Giebeldach und vertikal verbretterte Holzfassade.',
    abschnitte: [
      {
        titel: 'Ein giebelständiger Neubau im Bestand',
        absaetze: [
          'Das Mehrfamilienhaus fügt sich in eine gewachsene Nachbarschaft aus Einzel- und Mehrfamilienhäusern ein. Der Baukörper mit steilem Satteldach und liegenden Dachflächenfenstern nimmt die giebelständige Bauweise der Umgebung auf und übersetzt sie in eine zeitgemässe Kubatur mit drei Wohngeschossen über einem Untergeschoss.',
          'Die Fassade ist über alle Geschosse mit vertikalen Holzlatten verkleidet, die Fenster und Balkone liegen in klaren, senkrechten Bahnen.',
        ],
      },
      {
        titel: 'Von der Planung zur Ausführung durch einen Generalunternehmer',
        absaetze: [
          'Wir haben das Projekt von der Machbarkeitsstudie bis zur Ausführungsplanung vollständig begleitet. Im Erdgeschoss gruppieren sich die Wohnungen symmetrisch um ein zentrales Treppenhaus mit Lift, jede Einheit verfügt über einen eigenen Balkon oder eine Terrasse.',
          'Nach Abschluss der Planung wurde das Projekt an einen Generalunternehmer verkauft, der den Neubau nun ausführt.',
        ],
      },
    ],
    daten: [
      { label: 'Gebäudetyp', wert: 'Mehrfamilienhaus, Neubau' },
      { label: 'Geschosse', wert: '2 Vollgeschosse, Dachgeschoss, Untergeschoss' },
      { label: 'Realisierung', wert: 'Durch einen Generalunternehmer nach Verkauf' },
    ],
    fragen: [
      {
        frage: 'Was bedeutet es, wenn ein Projekt nach der Planung an einen Generalunternehmer verkauft wird?',
        antwort:
          'Die Bauherrschaft überträgt die Realisierung an einen Generalunternehmer, der Ausführung und Bauleitung übernimmt, während die von uns erarbeitete Planung als Grundlage bestehen bleibt. Das kann sich lohnen, wenn die ursprüngliche Bauherrschaft die Bauphase nicht selbst begleiten will oder das Projekt weiterveräussert.',
      },
      {
        frage: 'Welche Vorteile bietet eine Holzfassade bei einem Mehrfamilienhaus?',
        antwort:
          'Eine vertikale Holzverkleidung ist leicht, lässt sich gut vorfertigen und passt sich mit der Zeit farblich der Umgebung an. Sie verlangt eine durchdachte Detailplanung bei Anschlüssen und Entwässerung, bietet dafür aber ein warmes, alterungsfähiges Erscheinungsbild.',
      },
    ],
    thumbnail: '/images/projekte/mfh-untersiggenthal-2/thumb.jpg',
    heroImage: '/images/projekte/mfh-untersiggenthal-2/hero.jpg',
    galerie: [
      '/images/projekte/mfh-untersiggenthal-2/01.jpg',
      '/images/projekte/mfh-untersiggenthal-2/02.jpg',
      '/images/projekte/mfh-untersiggenthal-2/03.jpg',
      '/images/projekte/mfh-untersiggenthal-2/04.jpg',
      '/images/projekte/mfh-untersiggenthal-2/05.jpg',
    ],
    plaene: [
      { titel: 'Kataster', datei: '/dokumente/projekte/mfh-untersiggenthal-2/01-kataster.pdf' },
      { titel: 'Untergeschoss', datei: '/dokumente/projekte/mfh-untersiggenthal-2/02-untergeschoss.pdf' },
      { titel: 'Erdgeschoss / Umgebung', datei: '/dokumente/projekte/mfh-untersiggenthal-2/03-erdgeschoss-umgebung.pdf' },
      { titel: 'Obergeschoss', datei: '/dokumente/projekte/mfh-untersiggenthal-2/04-obergeschoss.pdf' },
      { titel: 'Nordansicht', datei: '/dokumente/projekte/mfh-untersiggenthal-2/05-nordansicht.pdf' },
      { titel: 'Ostansicht', datei: '/dokumente/projekte/mfh-untersiggenthal-2/06-ostansicht.pdf' },
      { titel: 'Südansicht', datei: '/dokumente/projekte/mfh-untersiggenthal-2/07-suedansicht.pdf' },
      { titel: 'Westansicht', datei: '/dokumente/projekte/mfh-untersiggenthal-2/08-westansicht.pdf' },
    ],
    featured: false,
  },
  {
    slug: 'efh-merenschwand',
    title: 'Einfamilienhaus',
    ort: 'Merenschwand',
    kanton: 'AG',
    kunde: null,
    jahr: 'in Realisierung',
    typ: 'Einfamilienhaus',
    kategorien: ['Umbau', 'Wohnen'],
    leistungen: ['Machbarkeitsstudie', 'Projektierung', 'Baugesuch', 'Ausführungsplanung'],
    beschreibung:
      'Totalsanierung eines bestehenden Einfamilienhauses in Merenschwand im Kanton Aargau. Kubischer Baukörper mit Flachdach und heller Putzfassade.',
    abschnitte: [
      {
        titel: 'Totalsanierung eines kubischen Baukörpers',
        absaetze: [
          'Ein bestehendes Einfamilienhaus in Merenschwand im Kanton Aargau haben wir für die Bauherrschaft von der Machbarkeitsstudie bis zur Ausführungsplanung totalsaniert. Der zweigeschossige, weiss verputzte Baukörper unter einem Flachdach mit Kiesbelag erhielt dabei dunkel gerahmte Fenster und aussenliegende Lamellenstoren.',
          'Das Grundstück liegt in einem gewachsenen Quartier mit giebelständigen Nachbarhäusern. Der reduzierte, kantige Baukörper hebt sich davon ab, ohne die Nachbarschaft zu ignorieren.',
        ],
      },
      {
        titel: 'Aussenraum und Details',
        absaetze: [
          'Ein gedeckter Vorbereich mit Holzbalken-Vordach markiert den Zugang auf der einen Seite, ein Balkon mit dunklem Glasgeländer im Obergeschoss öffnet sich zur anderen. Die Terrasse mit grossformatigen Platten schliesst direkt an den Garten an.',
          'Bei der Bauleitung haben wir die Bauherrschaft beratend begleitet, ohne ein eigenes Mandat zu führen. An der Fassade ist die Aussenaufstellung einer Wärmepumpe sichtbar.',
        ],
      },
    ],
    daten: [
      { label: 'Gebäudetyp', wert: 'Einfamilienhaus, Totalsanierung' },
      { label: 'Baubegleitung', wert: 'Beratend, ohne Bauleitungsmandat' },
    ],
    fragen: [
      {
        frage: 'Was ist der Unterschied zwischen einer Totalsanierung und einer Kernsanierung?',
        antwort:
          'Bei einer Totalsanierung wird das gesamte Gebäude einschliesslich Haustechnik, Innenausbau und meist der Gebäudehülle erneuert, während die tragende Struktur erhalten bleibt. Eine Kernsanierung geht oft noch weiter und legt zusätzlich Teile des Rohbaus offen, etwa wenn auch Wände oder Decken verändert werden.',
      },
      {
        frage: 'Was zeichnet einen kubischen Baukörper mit Flachdach aus?',
        antwort:
          'Ein Flachdach erlaubt eine ruhige, kantige Gebäudeform ohne Dachschräge und schafft im Innern nutzbare Raumhöhen bis unter die Decke. Nach aussen wirkt der Baukörper reduziert und lässt sich über Fassadenfarbe und Fensteraufteilung gezielt gestalten.',
      },
    ],
    thumbnail: '/images/projekte/efh-merenschwand/thumb.jpg',
    heroImage: '/images/projekte/efh-merenschwand/hero.jpg',
    galerie: [
      '/images/projekte/efh-merenschwand/01.jpg',
      '/images/projekte/efh-merenschwand/02.jpg',
      '/images/projekte/efh-merenschwand/03.jpg',
      '/images/projekte/efh-merenschwand/04.jpg',
      '/images/projekte/efh-merenschwand/05.jpg',
      '/images/projekte/efh-merenschwand/06.jpg',
      '/images/projekte/efh-merenschwand/07.jpg',
      '/images/projekte/efh-merenschwand/08.jpg',
      '/images/projekte/efh-merenschwand/09.jpg',
      '/images/projekte/efh-merenschwand/10.jpg',
      '/images/projekte/efh-merenschwand/11.jpg',
      '/images/projekte/efh-merenschwand/12.jpg',
      '/images/projekte/efh-merenschwand/13.jpg',
      '/images/projekte/efh-merenschwand/14.jpg',
      '/images/projekte/efh-merenschwand/15.jpg',
      '/images/projekte/efh-merenschwand/16.jpg',
      '/images/projekte/efh-merenschwand/17.jpg',
      '/images/projekte/efh-merenschwand/18.jpg',
      '/images/projekte/efh-merenschwand/19.jpg',
      '/images/projekte/efh-merenschwand/20.jpg',
      '/images/projekte/efh-merenschwand/21.jpg',
      '/images/projekte/efh-merenschwand/22.jpg',
      '/images/projekte/efh-merenschwand/23.jpg',
      '/images/projekte/efh-merenschwand/24.jpg',
    ],
    plaene: [{ titel: 'Kataster', datei: '/dokumente/projekte/efh-merenschwand/01-kataster.pdf' }],
    featured: false,
  },
  {
    slug: 'mfh-wuerenlingen',
    title: 'Mehrfamilienhaus',
    ort: 'Würenlingen',
    kanton: 'AG',
    kunde: null,
    jahr: 'in Realisierung',
    typ: 'Mehrfamilienhaus',
    kategorien: ['Neubau', 'Wohnen'],
    leistungen: ['Kaufberatung', 'Machbarkeitsstudie', 'Projektierung', 'Baugesuch', 'Ausschreibungsplanung', 'Ausführungsplanung'],
    beschreibung:
      'Neubau eines Mehrfamilienhauses in Würenlingen im Kanton Aargau für einen Investor, aktuell in Ausführung. Ausgebautes Dachgeschoss und auf schlanken Stützen vorgelagerte Balkone.',
    abschnitte: [
      {
        titel: 'Von der Kaufberatung bis zur Ausführungsplanung',
        absaetze: [
          'Einen Investor, der ein Grundstück in Würenlingen im Kanton Aargau erwerben wollte, haben wir bereits vor dem Kauf beraten und seither durch alle Phasen begleitet: Machbarkeitsstudie, Baugesuch, Ausschreibungsplanung und Ausführungsplanung. Das Mehrfamilienhaus wird aktuell ausgeführt und gebaut.',
          'Das Gebäude ist als Satteldachbau mit drei Vollgeschossen und ausgebautem Dachgeschoss angelegt. Das Dach ist mit dunklen Ziegeln gedeckt und über die gesamte Gebäudelänge durchgezogen, mit einzelnen Dachflächenfenstern für die Räume im obersten Geschoss.',
        ],
      },
      {
        titel: 'Balkone und Umgebung',
        absaetze: [
          'Über alle Geschosse hinweg sind Balkone auf schlanken, dunklen Stützen vorgelagert, mit Balkongeländern aus vertikalen Metallstäben. Im Erdgeschoss setzen sich die Aussenräume in gedeckten Sitzplätzen mit Bepflanzung fort.',
          'Die Umgebungsgestaltung zeigt einen Kiesweg entlang der Fassade, Rasenflächen und durchgehende Pflanzbeete mit Gräsern und Sträuchern vor den Terrassen.',
        ],
      },
    ],
    daten: [
      { label: 'Gebäudetyp', wert: 'Mehrfamilienhaus, Neubau' },
      { label: 'Geschosse', wert: '3 Vollgeschosse, ausgebautes Dachgeschoss' },
      { label: 'Bauherrschaft', wert: 'Investor, ab Grundstückskauf begleitet' },
    ],
    fragen: [
      {
        frage: 'Wann sollten wir einen Architekten in den Grundstückskauf einbeziehen?',
        antwort:
          'Am besten vor der Kaufzusage: Wir prüfen dann anhand von Bauzone, Ausnützung und Erschliessung, was auf dem Grundstück realistisch möglich ist. Das verhindert, dass ein Kaufpreis auf Basis falscher Annahmen zur Bebaubarkeit bezahlt wird.',
      },
      {
        frage: 'Was ist bei der Planung eines Mehrfamilienhauses mit Satteldach zu beachten?',
        antwort:
          'Ein ausgebautes Dachgeschoss verlangt eine sorgfältige Abstimmung von Dachneigung, Belichtung über Dachflächenfenster und lichter Raumhöhe unter der Schräge. Zusammen mit den Anforderungen der Bauzone bestimmt das den Spielraum für die Grundrissgestaltung im obersten Geschoss.',
      },
    ],
    thumbnail: '/images/projekte/mfh-wuerenlingen/thumb.jpg',
    heroImage: '/images/projekte/mfh-wuerenlingen/hero.jpg',
    galerie: [
      '/images/projekte/mfh-wuerenlingen/01.jpg',
      '/images/projekte/mfh-wuerenlingen/02.jpg',
      '/images/projekte/mfh-wuerenlingen/03.jpg',
    ],
    plaene: [
      { titel: 'Kataster 1:500', datei: '/dokumente/projekte/mfh-wuerenlingen/01-kataster-500.pdf' },
      { titel: 'Kataster 1:1000', datei: '/dokumente/projekte/mfh-wuerenlingen/02-kataster-1000.pdf' },
      { titel: 'Erdgeschoss und Umgebung', datei: '/dokumente/projekte/mfh-wuerenlingen/03-erdgeschoss-umgebung.pdf' },
      { titel: 'Obergeschoss und Dachgeschoss', datei: '/dokumente/projekte/mfh-wuerenlingen/04-obergeschoss-dachgeschoss.pdf' },
      { titel: 'Nordfassade', datei: '/dokumente/projekte/mfh-wuerenlingen/05-nordfassade.pdf' },
      { titel: 'Ansicht Nordost', datei: '/dokumente/projekte/mfh-wuerenlingen/06-nordost.pdf' },
      { titel: 'Ansicht Südwest', datei: '/dokumente/projekte/mfh-wuerenlingen/07-suedwest.pdf' },
      { titel: 'Ansicht Südost', datei: '/dokumente/projekte/mfh-wuerenlingen/08-suedost.pdf' },
    ],
    featured: false,
  },
  /**
   * Noch ohne Fotos — nur der vollständige Plansatz liegt vor. Vorschau- und
   * Titelbild zeigen deshalb bewusst die Fassadenzeichnung statt eines
   * erfundenen Fotos. Text bewusst knapp gehalten: mehr als Lage,
   * Gebäudetyp und Planungsstand lässt sich aus dem Plansatz nicht
   * verlässlich belegen.
   */
  {
    slug: 'efh-neerach',
    title: 'Einfamilienhaus Hohmatt',
    ort: 'Neerach',
    kanton: 'ZH',
    kunde: null,
    jahr: 'in Planung',
    typ: 'Einfamilienhaus',
    kategorien: ['Neubau', 'Wohnen'],
    leistungen: ['Projektierung', 'Baugesuch'],
    beschreibung:
      'Einfamilienhaus an der Hohmatt in Neerach im Kanton Zürich. Der vollständige Plansatz von Situation bis Fassaden liegt vor, Fotos folgen nach der Realisierung.',
    abschnitte: [
      {
        titel: 'Stand des Projekts',
        absaetze: [
          'Für dieses Einfamilienhaus an der Hohmatt in Neerach haben wir Situationsplan, Untergeschoss, Erdgeschoss, Dachgeschoss, Schnitte und Fassaden bis zur Baueingabe ausgearbeitet.',
        ],
      },
    ],
    daten: [
      { label: 'Gebäudetyp', wert: 'Einfamilienhaus, Neubau' },
      { label: 'Status', wert: 'In Planung' },
    ],
    fragen: [
      {
        frage: 'Warum sind hier keine Fotos zu sehen?',
        antwort:
          'Dieses Projekt ist noch nicht realisiert. Sobald das Haus gebaut ist, ergänzen wir die Seite mit Fotos — bis dahin zeigen wir die Fassadenzeichnung aus dem Baugesuch.',
      },
    ],
    thumbnail: '/images/projekte/efh-neerach/thumb.jpg',
    heroImage: '/images/projekte/efh-neerach/hero.jpg',
    galerie: [],
    plaene: [
      { titel: 'Situation', datei: '/dokumente/projekte/efh-neerach/01-situation.pdf' },
      { titel: 'Untergeschoss', datei: '/dokumente/projekte/efh-neerach/02-untergeschoss.pdf' },
      { titel: 'Erdgeschoss', datei: '/dokumente/projekte/efh-neerach/03-erdgeschoss.pdf' },
      { titel: 'Dachgeschoss', datei: '/dokumente/projekte/efh-neerach/04-dachgeschoss.pdf' },
      { titel: 'Schnitt 1', datei: '/dokumente/projekte/efh-neerach/05-schnitt-1.pdf' },
      { titel: 'Schnitt 2', datei: '/dokumente/projekte/efh-neerach/06-schnitt-2.pdf' },
      { titel: 'Fassade 1', datei: '/dokumente/projekte/efh-neerach/07-fassade-1.pdf' },
      { titel: 'Fassade 2', datei: '/dokumente/projekte/efh-neerach/08-fassade-2.pdf' },
      { titel: 'Fassade 3', datei: '/dokumente/projekte/efh-neerach/09-fassade-3.pdf' },
      { titel: 'Fassade 4', datei: '/dokumente/projekte/efh-neerach/10-fassade-4.pdf' },
    ],
    featured: false,
  },
  /**
   * Ebenfalls noch ohne Fotos — siehe Hinweis bei efh-neerach oben. Die
   * rote/gestrichelte Darstellung im Fassadenplan deutet auf einen Umbau
   * mit Anbau hin, nicht auf einen Neubau auf freier Parzelle.
   */
  {
    slug: 'efh-othmarsingen',
    title: 'Einfamilienhaus',
    ort: 'Othmarsingen',
    kanton: 'AG',
    kunde: null,
    jahr: 'in Planung',
    typ: 'Einfamilienhaus',
    kategorien: ['Umbau', 'Wohnen'],
    leistungen: ['Projektierung', 'Baugesuch'],
    beschreibung:
      'Umbau und Erweiterung eines Einfamilienhauses in Othmarsingen im Kanton Aargau. Der vollständige Plansatz liegt vor, Fotos folgen nach der Realisierung.',
    abschnitte: [
      {
        titel: 'Stand des Projekts',
        absaetze: [
          'Für dieses Einfamilienhaus in Othmarsingen haben wir Situationsplan, Untergeschoss, Ober- und Erdgeschoss, Schnitte und Fassade bis zur Baueingabe ausgearbeitet.',
        ],
      },
    ],
    daten: [
      { label: 'Gebäudetyp', wert: 'Einfamilienhaus, Umbau und Erweiterung' },
      { label: 'Status', wert: 'In Planung' },
    ],
    fragen: [
      {
        frage: 'Warum sind hier keine Fotos zu sehen?',
        antwort:
          'Dieses Projekt ist noch nicht realisiert. Sobald das Haus umgebaut ist, ergänzen wir die Seite mit Fotos — bis dahin zeigen wir die Fassadenzeichnung aus dem Baugesuch.',
      },
    ],
    thumbnail: '/images/projekte/efh-othmarsingen/thumb.jpg',
    heroImage: '/images/projekte/efh-othmarsingen/hero.jpg',
    galerie: [],
    plaene: [
      { titel: 'Situation', datei: '/dokumente/projekte/efh-othmarsingen/01-situation.pdf' },
      { titel: 'Untergeschoss', datei: '/dokumente/projekte/efh-othmarsingen/02-untergeschoss.pdf' },
      { titel: 'Obergeschoss', datei: '/dokumente/projekte/efh-othmarsingen/03-obergeschoss.pdf' },
      { titel: 'Erdgeschoss', datei: '/dokumente/projekte/efh-othmarsingen/04-erdgeschoss.pdf' },
      { titel: 'Schnitt 1', datei: '/dokumente/projekte/efh-othmarsingen/05-schnitt-1.pdf' },
      { titel: 'Schnitt 2', datei: '/dokumente/projekte/efh-othmarsingen/06-schnitt-2.pdf' },
      { titel: 'Fassade', datei: '/dokumente/projekte/efh-othmarsingen/07-fassade.pdf' },
    ],
    featured: false,
  },
  /**
   * Umbau eines Gebäudes in Obfelden zu einer Kleintierpraxis für den
   * "Verein Mërgimi", plus separate Parkplatzerweiterung mit eigener
   * Untergeschoss-Ausführungsplanung. Beide Plansätze tragen dieselbe
   * Planblatt-Nummerierung (32.3) und gehören erkennbar zum selben Vorhaben.
   * Noch ohne Fotos.
   */
  {
    slug: 'gewerbe-obfelden',
    title: 'Kleintierpraxis',
    ort: 'Obfelden',
    kanton: 'ZH',
    kunde: 'Verein Mërgimi',
    jahr: 'in Planung',
    typ: 'Gewerbebau',
    kategorien: ['Umbau', 'Gewerbe', 'Büro'],
    leistungen: ['Projektierung', 'Baugesuch', 'Ausführungsplanung'],
    beschreibung:
      'Umbau eines Gebäudes in Obfelden im Kanton Zürich zu einer Kleintierpraxis für den Verein Mërgimi, mit Erweiterung der Parkplätze. Der Plansatz liegt vor, Fotos folgen nach der Realisierung.',
    abschnitte: [
      {
        titel: 'Stand des Projekts',
        absaetze: [
          'Für den Verein Mërgimi haben wir den Umbau eines bestehenden Gebäudes in Obfelden zu einer Kleintierpraxis geplant, dazu die Erweiterung der Parkplätze mit eigener Ausführungsplanung für das Untergeschoss.',
        ],
      },
    ],
    daten: [
      { label: 'Gebäudetyp', wert: 'Gewerbebau, Umbau zu Kleintierpraxis' },
      { label: 'Bauherrschaft', wert: 'Verein Mërgimi' },
      { label: 'Status', wert: 'In Planung' },
    ],
    fragen: [
      {
        frage: 'Warum sind hier keine Fotos zu sehen?',
        antwort:
          'Dieses Projekt ist noch nicht realisiert. Sobald der Umbau abgeschlossen ist, ergänzen wir die Seite mit Fotos — bis dahin zeigen wir den Grundriss aus dem Baugesuch.',
      },
    ],
    thumbnail: '/images/projekte/gewerbe-obfelden/thumb.jpg',
    heroImage: '/images/projekte/gewerbe-obfelden/hero.jpg',
    galerie: [],
    plaene: [
      { titel: 'Erdgeschoss', datei: '/dokumente/projekte/gewerbe-obfelden/01-erdgeschoss.pdf' },
      { titel: 'Umgebung', datei: '/dokumente/projekte/gewerbe-obfelden/02-umgebung.pdf' },
      { titel: 'Untergeschoss', datei: '/dokumente/projekte/gewerbe-obfelden/03-untergeschoss.pdf' },
      { titel: 'Deckenplan', datei: '/dokumente/projekte/gewerbe-obfelden/04-deckenplan.pdf' },
      { titel: 'Bodenplan', datei: '/dokumente/projekte/gewerbe-obfelden/05-bodenplan.pdf' },
    ],
    featured: false,
  },
  /**
   * Frühestes Projektstadium ohne verwertbare Unterlagen: weder Fotos noch
   * Pläne liegen vor, nur der Ordnername als Adresse. Platzhalterbild
   * (neutrale Haus-Grafik) statt Fassaden- oder Grundrisszeichnung, da auch
   * kein Plansatz existiert.
   */
  {
    slug: 'defh-weiningen',
    title: 'Doppeleinfamilienhaus',
    ort: 'Weiningen',
    kanton: 'ZH',
    kunde: null,
    jahr: 'in Planung',
    typ: 'Doppeleinfamilienhaus',
    kategorien: ['Neubau', 'Wohnen'],
    leistungen: ['Projektierung'],
    beschreibung:
      'Doppeleinfamilienhaus in Weiningen im Kanton Zürich. Erste Visualisierungen aus der Entwurfsplanung zeigen einen giebelständigen Baukörper mit heller Putzfassade und offenem Wohnbereich.',
    abschnitte: [
      {
        titel: 'Zwei Einheiten unter einem Giebeldach',
        absaetze: [
          'Die Visualisierungen zeigen ein Doppeleinfamilienhaus mit steilem Satteldach und liegenden Dachflächenfenstern, das sich giebelständig ins Quartier einfügt. Die Fassade ist hell verputzt, Balkone mit filigranen Glasgeländern öffnen sich zur Gartenseite.',
          'Der Aussenraum ist bewusst zurückhaltend gestaltet: Rasenflächen, einzelne Bäume und ein gepflasterter Zugang prägen das Bild, ohne den Blick auf den Baukörper zu verstellen.',
        ],
      },
      {
        titel: 'Offener Wohnbereich',
        absaetze: [
          'Im Erdgeschoss zeigt eine Visualisierung einen durchgehenden Wohn-, Ess- und Kochbereich mit bodentiefen Fenstern und Terrassenzugang. Die Küche ist als offene Kochinsel mit dunkler Steinoberfläche in den Wohnraum integriert, der helle Eichenboden zieht sich durch die ganze Fläche.',
        ],
      },
    ],
    daten: [
      { label: 'Gebäudetyp', wert: 'Doppeleinfamilienhaus, Neubau' },
      { label: 'Status', wert: 'In Planung' },
    ],
    fragen: [
      {
        frage: 'Sind das bereits Fotos vom fertigen Haus?',
        antwort:
          'Nein, das sind Visualisierungen aus der Entwurfsplanung. Das Projekt befindet sich weiterhin in der Planungsphase, gebaut ist noch nichts. Sobald das Haus realisiert ist, ergänzen wir die Seite mit echten Fotos.',
      },
    ],
    thumbnail: '/images/projekte/defh-weiningen/thumb.jpg',
    heroImage: '/images/projekte/defh-weiningen/hero.jpg',
    galerie: [
      '/images/projekte/defh-weiningen/01.jpg',
      '/images/projekte/defh-weiningen/02.jpg',
      '/images/projekte/defh-weiningen/03.jpg',
    ],
    featured: false,
  },
  {
    slug: 'mfh-niederweningen',
    title: 'Mehrfamilienhaus Murzelnstrasse',
    ort: 'Niederweningen',
    kanton: 'ZH',
    kunde: null,
    jahr: 'in Planung',
    typ: 'Mehrfamilienhaus',
    kategorien: ['Neubau', 'Wohnen'],
    leistungen: ['Projektierung'],
    beschreibung:
      'Mehrfamilienhaus an der Murzelnstrasse in Niederweningen im Kanton Zürich. Das Projekt befindet sich in einem frühen Planungsstadium, Fotos und Pläne folgen im weiteren Verlauf.',
    abschnitte: [
      {
        titel: 'Stand des Projekts',
        absaetze: [
          'Für dieses Mehrfamilienhaus an der Murzelnstrasse in Niederweningen stehen wir am Anfang der Planung. Sobald Grundrisse und Fassaden ausgearbeitet sind, ergänzen wir diese Seite.',
        ],
      },
    ],
    daten: [
      { label: 'Gebäudetyp', wert: 'Mehrfamilienhaus, Neubau' },
      { label: 'Status', wert: 'In Planung' },
    ],
    fragen: [
      {
        frage: 'Warum sind hier keine Fotos oder Pläne zu sehen?',
        antwort:
          'Dieses Projekt befindet sich noch in einem frühen Planungsstadium. Wir ergänzen die Seite, sobald Pläne und später Fotos vorliegen.',
      },
    ],
    thumbnail: '/images/projekte/mfh-niederweningen/thumb.jpg',
    heroImage: '/images/projekte/mfh-niederweningen/hero.jpg',
    galerie: [],
    featured: false,
  },
];

export function getProjekt(slug: string): Projekt | undefined {
  return projekte.find((p) => p.slug === slug);
}

export function getWeitereProjekte(currentSlug: string, count = 3): Projekt[] {
  return projekte.filter((p) => p.slug !== currentSlug).slice(0, count);
}

export function getFeaturedProjekte(): Projekt[] {
  return projekte.filter((p) => p.featured);
}
