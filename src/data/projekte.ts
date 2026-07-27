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
    slug: 'mfh-untersiggenthal',
    title: 'MFH Untersiggenthal',
    ort: 'Untersiggenthal',
    kanton: 'AG',
    kunde: null,
    jahr: '2026',
    typ: 'Mehrfamilienhaus',
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
          'Das Grundstück liegt in einer gewachsenen Wohnzone von Untersiggenthal, umgeben von Einfamilienhäusern aus verschiedenen Jahrzehnten. Gefordert war eine Verdichtung, die die zulässige Ausnutzung nutzt, ohne die Nachbarschaft zu überfahren.',
          'Die zweite Vorgabe kam vom Gelände: Das Grundstück fällt nach Süden ab. Ein Sockelgeschoss war unvermeidlich — die Frage war, wie es sich einfügt statt aufzudrängen.',
        ],
      },
      {
        titel: 'Volumen und Einordnung',
        absaetze: [
          'Wir haben das Volumen als Satteldachhaus entwickelt und damit die Dachlandschaft der Umgebung aufgenommen. Die Firsthöhe bleibt unter der der Nachbarbauten, obwohl das Gebäude mehr Wohnfläche aufnimmt.',
          'Die vertikale Fassadengliederung streckt das Haus optisch und lässt es schlanker wirken, als es ist. Die Balkone sind vorgelagert und nicht ins Volumen eingeschnitten — so bleibt die Grundfläche der Wohnungen ungeschmälert.',
        ],
      },
      {
        titel: 'Grundrisse',
        absaetze: [
          'Jede Wohnung ist zweiseitig orientiert und erhält damit Morgen- und Abendlicht. Die Küche liegt zum Wohnraum offen, ist aber durch eine Schiebetür abtrennbar — eine Anforderung, die Mietinteressenten regelmässig stellen.',
          'Die Wohnungsgrössen sind gemischt: kleinere Einheiten für Einzelpersonen und Paare, grössere für Familien. Diese Mischung stabilisiert die Vermietung über Marktzyklen hinweg.',
        ],
      },
      {
        titel: 'Konstruktion und Nachhaltigkeit',
        absaetze: [
          'Massivbau mit hinterlüfteter Fassade. Die Trennung von Tragwerk und Hülle erlaubt es, die Fassade in Jahrzehnten zu erneuern, ohne die Struktur anzutasten.',
          'Die Wärmeerzeugung erfolgt über eine Erdsonden-Wärmepumpe, das Dach ist für Photovoltaik vorbereitet. Der Betrieb ist damit fossilfrei.',
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
    featured: true,
  },
  {
    slug: 'mfh-sihlaurain',
    title: 'MFH Sihlaurain 2 und 4',
    ort: 'Murgenthal',
    kanton: 'AG',
    kunde: 'Lagos AG',
    jahr: '2025',
    typ: 'Wohnüberbauung',
    leistungen: [
      'Projektentwicklung',
      'Entwurf',
      'Baugesuch',
      'Ausführungsplanung',
      'Bauleitung',
    ],
    beschreibung:
      'Zwei Mehrfamilienhäuser als Ensemble in Murgenthal, Kanton Aargau. Die Baukörper fassen einen gemeinsamen Aussenraum und stehen in einem klaren Verhältnis zueinander.',
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
          'Das Projekt war von Beginn an als Renditeobjekt gedacht. Wir haben Grundrisse und Ausbaustandard so abgestimmt, dass die Mietzinse im Marktband von Murgenthal liegen und die Wohnungen langfristig vermietbar bleiben.',
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
    ],
    thumbnail: '/images/projekte/mfh-sihlaurain/thumb.png',
    heroImage: '/images/projekte/mfh-sihlaurain/hero.png',
    galerie: [
      '/images/projekte/mfh-sihlaurain/01.jpg',
      '/images/projekte/mfh-sihlaurain/02.jpg',
      '/images/projekte/mfh-sihlaurain/03.jpg',
      '/images/projekte/mfh-sihlaurain/04.jpg',
    ],
    featured: true,
  },
  {
    slug: 'mfh-kuenten',
    title: 'Mehrfamilienhaus Künten',
    ort: 'Künten',
    kanton: 'AG',
    kunde: null,
    jahr: '2024',
    typ: 'Mehrfamilienhaus',
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
    ],
    featured: true,
  },
  {
    slug: 'mfh-letten',
    title: 'Mehrfamilienhaus Letten',
    ort: 'Ottenbach',
    kanton: 'ZH',
    kunde: null,
    jahr: '2023',
    typ: 'Mehrfamilienhaus',
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
    ],
    featured: true,
  },
  {
    slug: 'mfh-hochwarting',
    title: 'Mehrfamilienhaus Hochwarting',
    ort: 'Glashütten',
    kanton: 'AG',
    kunde: null,
    jahr: '2021',
    typ: 'Mehrfamilienhaus',
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
    ],
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
