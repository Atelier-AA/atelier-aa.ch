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
      'Neubau eines Einfamilienhauses in Jonen (AG) mit zwei Vollgeschossen, Dachgeschoss und Untergeschoss; die Bauherrschaft war zugleich Inhaber von Atelier AA Architekten. Die Ebenen sind klar geordnet: Rückzug und Technik im Untergeschoss, Wohnen im Erdgeschoss, private Räume darüber, verbunden durch eine offene Treppe mit Glasgeländer. Aussen prägen eine helle Putzfassade und dunkel abgesetzte Fensterbänder das Bild, innen der Blick über die offene Landschaft rund um Jonen.',
    abschnitte: [
      {
        titel: 'Die Aufgabe',
        absaetze: ['Neubau eines Einfamilienhauses in Jonen (AG) mit zwei Vollgeschossen, Dachgeschoss und Untergeschoss; die Bauherrschaft war zugleich Inhaber von Atelier AA Architekten.'],
      },
      {
        titel: 'Die Lösung',
        absaetze: ['Die Ebenen sind klar geordnet: Rückzug und Technik im Untergeschoss, Wohnen im Erdgeschoss, private Räume darüber, verbunden durch eine offene Treppe mit Glasgeländer. Aussen prägen eine helle Putzfassade und dunkel abgesetzte Fensterbänder das Bild, innen der Blick über die offene Landschaft rund um Jonen.'],
      },
    ],
    daten: [
      { label: 'Gebäudetyp', wert: 'Einfamilienhaus, Neubau' },
      { label: 'Geschosse', wert: '2 Vollgeschosse, Dachgeschoss, Untergeschoss' },
      { label: 'Besonderheit', wert: 'Eigenprojekt des Büros' },
      { label: 'Status', wert: 'Realisiert' },
    ],
    entscheidung: {
      ausgangslage:
        'Neubau eines Einfamilienhauses in Jonen (AG) mit zwei Vollgeschossen, Dachgeschoss und Untergeschoss; die Bauherrschaft war zugleich Inhaber von Atelier AA Architekten.',
      frage: 'Wie ordnet man die Ebenen, wenn Rückzug, Technik und Wohnen im selben Haus zusammenkommen?',
      entscheidung:
        'Technik und Rückzugsräume ins Untergeschoss, das Erdgeschoss ganz dem Wohnen vorbehalten, private Räume im Obergeschoss darüber, verbunden durch eine offene Treppe mit Glasgeländer.',
      resultat:
        'Die Wohnebene bleibt ungestört; helle Putzfassade und dunkel abgesetzte Fensterbänder aussen, innen der Blick über die offene Landschaft rund um Jonen.',
    },
    fragen: [
      {
        frage: 'Was bedeutet es, wenn ein Architekturbüro für sich selbst baut?',
        antwort: 'Anspruch und Bauherrenwunsch liegen in einer Person: Am Verfahren ändert das nichts.',
      },
      {
        frage: 'Worauf muss man bei einem schwierig erschlossenen Grundstück achten?',
        antwort: 'Zufahrt, Werkleitungen und Grenzabstände früh prüfen, am besten vor dem Landkauf.',
      },
      {
        frage: 'Was kostet ein Einfamilienhaus-Neubau mit Untergeschoss?',
        antwort: 'Im Aargau rund 900 bis 1200 Franken pro Kubikmeter, je nach Standard.',
      },
    ],
    thumbnail: '/images/projekte/efh-jonen/atelier-aa-efh-jonen-thumb.jpg',
    heroImage: '/images/projekte/efh-jonen/atelier-aa-efh-jonen-hero.jpg',
    galerie: [
      '/images/projekte/efh-jonen/atelier-aa-efh-jonen-12.jpg',
      '/images/projekte/efh-jonen/atelier-aa-efh-jonen-16.jpg',
      '/images/projekte/efh-jonen/atelier-aa-efh-jonen-01.jpg',
      '/images/projekte/efh-jonen/atelier-aa-efh-jonen-02.jpg',
      '/images/projekte/efh-jonen/atelier-aa-efh-jonen-03.jpg',
      '/images/projekte/efh-jonen/atelier-aa-efh-jonen-04.jpg',
      '/images/projekte/efh-jonen/atelier-aa-efh-jonen-05.jpg',
      '/images/projekte/efh-jonen/atelier-aa-efh-jonen-06.jpg',
      '/images/projekte/efh-jonen/atelier-aa-efh-jonen-07.jpg',
      '/images/projekte/efh-jonen/atelier-aa-efh-jonen-08.jpg',
      '/images/projekte/efh-jonen/atelier-aa-efh-jonen-09.jpg',
      '/images/projekte/efh-jonen/atelier-aa-efh-jonen-10.jpg',
      '/images/projekte/efh-jonen/atelier-aa-efh-jonen-11.jpg',
      '/images/projekte/efh-jonen/atelier-aa-efh-jonen-13.jpg',
      '/images/projekte/efh-jonen/atelier-aa-efh-jonen-14.jpg',
      '/images/projekte/efh-jonen/atelier-aa-efh-jonen-15.jpg',
      '/images/projekte/efh-jonen/atelier-aa-efh-jonen-17.jpg',
      '/images/projekte/efh-jonen/atelier-aa-efh-jonen-18.jpg',
      '/images/projekte/efh-jonen/atelier-aa-efh-jonen-19.jpg',
    ],
    plaene: [{ titel: 'Kataster', datei: '/dokumente/projekte/efh-jonen/atelier-aa-efh-jonen-01-kataster.pdf' }],
    featured: true,
    videoClips: [
      {
        bildPfad: '/images/projekte/efh-jonen/atelier-aa-efh-jonen-12.jpg',
        mp4: '/images/projekte/efh-jonen/videos/atelier-aa-efh-jonen-12.mp4',
        webm: '/images/projekte/efh-jonen/videos/atelier-aa-efh-jonen-12.webm',
        poster: '/images/projekte/efh-jonen/videos/atelier-aa-efh-jonen-12-poster.jpg',
      },
      {
        bildPfad: '/images/projekte/efh-jonen/atelier-aa-efh-jonen-16.jpg',
        mp4: '/images/projekte/efh-jonen/videos/atelier-aa-efh-jonen-16.mp4',
        webm: '/images/projekte/efh-jonen/videos/atelier-aa-efh-jonen-16.webm',
        poster: '/images/projekte/efh-jonen/videos/atelier-aa-efh-jonen-16-poster.jpg',
      },
    ],
  },
  {
    slug: 'mfh-alte-poststrasse',
    title: 'Mehrfamilienhaus Alte Poststrasse',
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
      'Mehrfamilienhaus an der Alten Poststrasse in Untersiggenthal (AG), auf einem nach Süden abfallenden Grundstück in gewachsener Wohnzone. Das Satteldachhaus mit vertikaler Fassadengliederung nimmt die Dachlandschaft der Umgebung auf und bietet trotzdem mehr Wohnfläche; vorgelagerte Balkone lassen die Wohnungsflächen ungeschmälert. Jede Wohnung ist zweiseitig orientiert mit offener, abtrennbarer Küche. Massivbau mit hinterlüfteter Fassade, Erdsonden-Wärmepumpe und photovoltaikbereitem Dach: Der Betrieb ist fossilfrei.',
    abschnitte: [
      {
        titel: 'Die Aufgabe',
        absaetze: ['Mehrfamilienhaus an der Alten Poststrasse in Untersiggenthal (AG), auf einem nach Süden abfallenden Grundstück in gewachsener Wohnzone.'],
      },
      {
        titel: 'Die Lösung',
        absaetze: ['Das Satteldachhaus mit vertikaler Fassadengliederung nimmt die Dachlandschaft der Umgebung auf und bietet trotzdem mehr Wohnfläche; vorgelagerte Balkone lassen die Wohnungsflächen ungeschmälert. Jede Wohnung ist zweiseitig orientiert mit offener, abtrennbarer Küche. Massivbau mit hinterlüfteter Fassade, Erdsonden-Wärmepumpe und photovoltaikbereitem Dach: Der Betrieb ist fossilfrei.'],
      },
    ],
    daten: [
      { label: 'Lage', wert: 'Alte Poststrasse, Untersiggenthal' },
      { label: 'Gebäudetyp', wert: 'Mehrfamilienhaus, Neubau' },
      { label: 'Bauweise', wert: 'Massivbau, hinterlüftete Fassade' },
      { label: 'Wärmeerzeugung', wert: 'Erdsonden-Wärmepumpe' },
      { label: 'Status', wert: 'In Realisierung' },
    ],
    entscheidung: {
      ausgangslage:
        'Mehrfamilienhaus an der Alten Poststrasse in Untersiggenthal (AG), auf einem nach Süden abfallenden Grundstück in gewachsener Wohnzone.',
      frage:
        'Wie lässt sich auf einem nach Süden abfallenden Grundstück in gewachsener Wohnzone mehr Wohnfläche gewinnen, ohne die vorgegebene Dachlandschaft zu stören?',
      entscheidung:
        'Ein Satteldachhaus mit vertikaler Fassadengliederung, das die Dachlandschaft der Umgebung aufnimmt; vorgelagerte Balkone lassen die Wohnungsflächen ungeschmälert, jede Wohnung ist zweiseitig orientiert.',
      resultat:
        'Mehr Wohnfläche trotz Dachvorgabe, ungeschmälerte Wohnungsgrundrisse und ein fossilfreier Betrieb durch Erdsonden-Wärmepumpe und photovoltaikbereites Dach.',
    },
    fragen: [
      {
        frage: 'Wie lange dauert ein Mehrfamilienhaus von der ersten Skizze bis zum Einzug?',
        antwort:
          'Meist drei bis vier Jahre: rund ein Jahr für Vorprojekt und Baugesuch, drei bis neun Monate Bewilligung, danach rund achtzehn Monate Ausführung.',
      },
      {
        frage: 'Wie viele Wohnungen sind auf unserem Grundstück möglich?',
        antwort:
          'Das hängt von Ausnutzung, Grenzabständen und Gebäudehöhe Ihrer Gemeinde ab; wir zeigen die Bandbreite in einer Machbarkeitsstudie.',
      },
      {
        frage: 'Was kostet ein Mehrfamilienhaus pro Kubikmeter?',
        antwort:
          'Im Aargau und Zürich aktuell rund 700 bis 900 Franken pro Kubikmeter, je nach Standard und Lage.',
      },
    ],
    thumbnail: '/images/projekte/mfh-alte-poststrasse/atelier-aa-mfh-alte-poststrasse-thumb.jpg',
    heroImage: '/images/projekte/mfh-alte-poststrasse/atelier-aa-mfh-alte-poststrasse-hero.jpg',
    galerie: [
      '/images/projekte/mfh-alte-poststrasse/atelier-aa-mfh-alte-poststrasse-01.jpg',
      '/images/projekte/mfh-alte-poststrasse/atelier-aa-mfh-alte-poststrasse-02.jpg',
    ],
    plaene: [
      { titel: 'Kataster', datei: '/dokumente/projekte/mfh-alte-poststrasse/atelier-aa-mfh-alte-poststrasse-01-kataster.pdf' },
      { titel: 'Untergeschoss', datei: '/dokumente/projekte/mfh-alte-poststrasse/atelier-aa-mfh-alte-poststrasse-02-untergeschoss.pdf' },
      { titel: 'Erdgeschoss / Umgebung', datei: '/dokumente/projekte/mfh-alte-poststrasse/atelier-aa-mfh-alte-poststrasse-03-erdgeschoss-umgebung.pdf' },
      { titel: 'Obergeschoss', datei: '/dokumente/projekte/mfh-alte-poststrasse/atelier-aa-mfh-alte-poststrasse-04-obergeschoss.pdf' },
      { titel: 'Dachgeschoss', datei: '/dokumente/projekte/mfh-alte-poststrasse/atelier-aa-mfh-alte-poststrasse-05-dachgeschoss.pdf' },
      { titel: 'Nordansicht', datei: '/dokumente/projekte/mfh-alte-poststrasse/atelier-aa-mfh-alte-poststrasse-06-nordansicht.pdf' },
      { titel: 'Ostansicht', datei: '/dokumente/projekte/mfh-alte-poststrasse/atelier-aa-mfh-alte-poststrasse-07-ostansicht.pdf' },
      { titel: 'Südansicht', datei: '/dokumente/projekte/mfh-alte-poststrasse/atelier-aa-mfh-alte-poststrasse-08-suedansicht.pdf' },
      { titel: 'Westansicht', datei: '/dokumente/projekte/mfh-alte-poststrasse/atelier-aa-mfh-alte-poststrasse-09-westansicht.pdf' },
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
      'Zwei Mehrfamilienhäuser als Ensemble in Adliswil (ZH), auf zwei ursprünglich getrennt geplanten Nachbarparzellen. Gemeinsam entwickelt entsteht statt zweier Restflächen ein zusammenhängender Hof; auch Erschliessung, Einstellhalle und Werkleitungen wurden zusammengelegt, was die Erstellungskosten senkte. Die Fassaden sind in dunklen, grossformatigen Platten ausgeführt, mit integriertem Lamellenstore als Sonnenschutz. Als Renditeobjekt geplant, mit marktgerechten Mietzinsen und nicht tragenden, versetzbaren Wohnungstrennwänden.',
    abschnitte: [
      {
        titel: 'Die Aufgabe',
        absaetze: ['Zwei Mehrfamilienhäuser als Ensemble in Adliswil (ZH), auf zwei ursprünglich getrennt geplanten Nachbarparzellen.'],
      },
      {
        titel: 'Die Lösung',
        absaetze: ['Gemeinsam entwickelt entsteht statt zweier Restflächen ein zusammenhängender Hof; auch Erschliessung, Einstellhalle und Werkleitungen wurden zusammengelegt, was die Erstellungskosten senkte. Die Fassaden sind in dunklen, grossformatigen Platten ausgeführt, mit integriertem Lamellenstore als Sonnenschutz. Als Renditeobjekt geplant, mit marktgerechten Mietzinsen und nicht tragenden, versetzbaren Wohnungstrennwänden.'],
      },
    ],
    daten: [
      { label: 'Gebäudetyp', wert: 'Zwei Mehrfamilienhäuser' },
      { label: 'Bauweise', wert: 'Massivbau, Plattenfassade' },
      { label: 'Besonderheit', wert: 'Gemeinsame Einstellhalle und Aussenraum' },
      { label: 'Status', wert: 'Realisiert' },
    ],
    entscheidung: {
      ausgangslage:
        'Zwei Mehrfamilienhäuser in Adliswil (ZH), auf zwei ursprünglich getrennt geplanten Nachbarparzellen.',
      frage: 'Zwei Grundstücke getrennt entwickeln oder als Ensemble?',
      entscheidung:
        'Gemeinsame Entwicklung mit gemeinsamer Einstellhalle, Erschliessung und Werkleitungen statt zwei separater Projekte.',
      resultat:
        'Statt zweier Restflächen ein zusammenhängender Hof, gesenkte Erstellungskosten und ein deutlich nutzbarerer Aussenraum.',
    },
    fragen: [
      {
        frage: 'Wie planen Sie für eine gute Rendite?',
        antwort:
          'Wohnungsmix und Ausbaustandard richten sich nach dem lokalen Mietzinsniveau, mit nicht tragenden Trennwänden für spätere Anpassungen.',
      },
      {
        frage: 'Was passiert, wenn die beiden Parzellen unterschiedlichen Eigentümerschaften gehören?',
        antwort:
          'Eine gemeinsame Entwicklung bleibt möglich, braucht aber einen frühen Dienstbarkeitsvertrag zu Erschliessung, Einstellhalle und Kostenteilung.',
      },
    ],
    thumbnail: '/images/projekte/mfh-sihlaurain/atelier-aa-mfh-sihlaurain-thumb.jpg',
    heroImage: '/images/projekte/mfh-sihlaurain/atelier-aa-mfh-sihlaurain-hero.jpg',
    galerie: [
      '/images/projekte/mfh-sihlaurain/atelier-aa-mfh-sihlaurain-01.jpg',
      '/images/projekte/mfh-sihlaurain/atelier-aa-mfh-sihlaurain-02.jpg',
      '/images/projekte/mfh-sihlaurain/atelier-aa-mfh-sihlaurain-03.jpg',
      '/images/projekte/mfh-sihlaurain/atelier-aa-mfh-sihlaurain-04.jpg',
      '/images/projekte/mfh-sihlaurain/atelier-aa-mfh-sihlaurain-05.jpg',
      '/images/projekte/mfh-sihlaurain/atelier-aa-mfh-sihlaurain-06.jpg',
      '/images/projekte/mfh-sihlaurain/atelier-aa-mfh-sihlaurain-07.jpg',
      '/images/projekte/mfh-sihlaurain/atelier-aa-mfh-sihlaurain-08.jpg',
      '/images/projekte/mfh-sihlaurain/atelier-aa-mfh-sihlaurain-09.jpg',
      '/images/projekte/mfh-sihlaurain/atelier-aa-mfh-sihlaurain-10.jpg',
      '/images/projekte/mfh-sihlaurain/atelier-aa-mfh-sihlaurain-11.jpg',
      '/images/projekte/mfh-sihlaurain/atelier-aa-mfh-sihlaurain-12.jpg',
      '/images/projekte/mfh-sihlaurain/atelier-aa-mfh-sihlaurain-13.jpg',
      '/images/projekte/mfh-sihlaurain/atelier-aa-mfh-sihlaurain-14.jpg',
      '/images/projekte/mfh-sihlaurain/atelier-aa-mfh-sihlaurain-15.jpg',
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
      'Mehrfamilienhaus am Hang in Künten (AG): Das Volumen ist in drei Stufen gegliedert, die dem abfallenden Gelände folgen und jeder Wohnung Terrasse und Aussicht geben, bei minimalem Aushub. Die Wohnräume orientieren sich nach Südwesten, die Schlafräume liegen kühler bergseitig; auskragende Terrassenböden verschatten im Sommer und lassen die flache Wintersonne ein. Im dörflich geprägten Künten haben wir bewusst mit wenigen, ortsüblichen Materialien gearbeitet: Putz, Holz, mineralische Farbtöne.',
    abschnitte: [
      {
        titel: 'Die Aufgabe',
        absaetze: ['Mehrfamilienhaus am Hang in Künten (AG): Das Volumen ist in drei Stufen gegliedert, die dem abfallenden Gelände folgen und jeder Wohnung Terrasse und Aussicht geben, bei minimalem Aushub.'],
      },
      {
        titel: 'Die Lösung',
        absaetze: ['Die Wohnräume orientieren sich nach Südwesten, die Schlafräume liegen kühler bergseitig; auskragende Terrassenböden verschatten im Sommer und lassen die flache Wintersonne ein. Im dörflich geprägten Künten haben wir bewusst mit wenigen, ortsüblichen Materialien gearbeitet: Putz, Holz, mineralische Farbtöne.'],
      },
    ],
    daten: [
      { label: 'Gebäudetyp', wert: 'Mehrfamilienhaus am Hang' },
      { label: 'Besonderheit', wert: 'Gestaffelte Baukörper, Terrassen' },
      { label: 'Ausrichtung', wert: 'Wohnräume Südwest' },
      { label: 'Status', wert: 'Realisiert' },
    ],
    entscheidung: {
      ausgangslage: 'Mehrfamilienhaus am Hang in Künten (AG), dörflich geprägte Umgebung.',
      frage:
        'Wie lässt sich am Hang jeder Wohnung Terrasse und Aussicht geben, ohne grossen Aushub und ohne den dörflichen Charakter zu stören?',
      entscheidung:
        'Das Volumen in drei Stufen gegliedert, die dem Gelände folgen; Wohnräume nach Südwesten, kühlere Schlafräume bergseitig, auskragende Terrassenböden als Sonnenschutz, wenige ortsübliche Materialien (Putz, Holz, mineralische Farbtöne).',
      resultat:
        'Minimaler Aushub, jede Wohnung mit eigener Terrasse und Aussicht, ein Baukörper, der sich ins dörfliche Bild einfügt statt sich abzuheben.',
    },
    fragen: [
      {
        frage: 'Ist Bauen am Hang teurer?',
        antwort:
          'Aushub und Hangsicherung kosten mehr, der Gewinn an Aussicht und Belichtung kompensiert das im Verkaufs- oder Mietwert meist.',
      },
      {
        frage: 'Brauchen wir eine Kühlung für die Wohnungen?',
        antwort:
          'In den meisten Fällen nicht, wenn Ausrichtung, Verschattung und Speichermasse von Anfang an stimmen.',
      },
    ],
    thumbnail: '/images/projekte/mfh-kuenten/atelier-aa-mfh-kuenten-thumb.jpg',
    heroImage: '/images/projekte/mfh-kuenten/atelier-aa-mfh-kuenten-hero.jpg',
    galerie: [
      '/images/projekte/mfh-kuenten/atelier-aa-mfh-kuenten-06.jpg',
      '/images/projekte/mfh-kuenten/atelier-aa-mfh-kuenten-01.jpg',
      '/images/projekte/mfh-kuenten/atelier-aa-mfh-kuenten-02.jpg',
      '/images/projekte/mfh-kuenten/atelier-aa-mfh-kuenten-03.jpg',
      '/images/projekte/mfh-kuenten/atelier-aa-mfh-kuenten-04.jpg',
      '/images/projekte/mfh-kuenten/atelier-aa-mfh-kuenten-05.jpg',
    ],
    plaene: [
      { titel: 'Kataster', datei: '/dokumente/projekte/mfh-kuenten/atelier-aa-mfh-kuenten-01-kataster.pdf' },
      { titel: 'Untergeschoss', datei: '/dokumente/projekte/mfh-kuenten/atelier-aa-mfh-kuenten-02-untergeschoss.pdf' },
      { titel: 'Erdgeschoss', datei: '/dokumente/projekte/mfh-kuenten/atelier-aa-mfh-kuenten-03-erdgeschoss.pdf' },
      { titel: 'Attikageschoss', datei: '/dokumente/projekte/mfh-kuenten/atelier-aa-mfh-kuenten-04-attikageschoss.pdf' },
      { titel: 'Fassade Ost', datei: '/dokumente/projekte/mfh-kuenten/atelier-aa-mfh-kuenten-05-fassade-ost.pdf' },
      { titel: 'Fassade Nord', datei: '/dokumente/projekte/mfh-kuenten/atelier-aa-mfh-kuenten-06-fassade-nord.pdf' },
      { titel: 'Fassade Süd', datei: '/dokumente/projekte/mfh-kuenten/atelier-aa-mfh-kuenten-07-fassade-sued.pdf' },
      { titel: 'Schnitt AA', datei: '/dokumente/projekte/mfh-kuenten/atelier-aa-mfh-kuenten-08-schnitt-aa.pdf' },
    ],
    featured: false,
    videoClips: [
      {
        bildPfad: '/images/projekte/mfh-kuenten/atelier-aa-mfh-kuenten-06.jpg',
        mp4: '/images/projekte/mfh-kuenten/videos/atelier-aa-mfh-kuenten-06.mp4',
        webm: '/images/projekte/mfh-kuenten/videos/atelier-aa-mfh-kuenten-06.webm',
        poster: '/images/projekte/mfh-kuenten/videos/atelier-aa-mfh-kuenten-06-poster.jpg',
      },
    ],
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
      'Umnutzung eines ehemaligen Bürogebäudes in Ottenbach (ZH) zu einem Mehrfamilienhaus mit acht Wohnungen. Die Kernsanierung führte die Bausubstanz bis auf den Rohbau zurück; Grundrisse, Haustechnik und Gebäudehülle wurden vollständig erneuert, während die bestehende Struktur erhalten blieb. Die auskragenden Balkone im Dachgeschoss verlangten eine anspruchsvolle konstruktive Lösung und prägen heute das Erscheinungsbild, wo zuvor ein geschlossenes Bürohaus stand. Wir haben das Projekt von der Machbarkeitsstudie bis zur Bauleitung durchgehend begleitet.',
    abschnitte: [
      {
        titel: 'Der Bestand',
        absaetze: ['Umnutzung eines ehemaligen Bürogebäudes in Ottenbach (ZH) zu einem Mehrfamilienhaus mit acht Wohnungen.'],
      },
      {
        titel: 'Der Eingriff',
        absaetze: ['Die Kernsanierung führte die Bausubstanz bis auf den Rohbau zurück; Grundrisse, Haustechnik und Gebäudehülle wurden vollständig erneuert, während die bestehende Struktur erhalten blieb. Die auskragenden Balkone im Dachgeschoss verlangten eine anspruchsvolle konstruktive Lösung und prägen heute das Erscheinungsbild, wo zuvor ein geschlossenes Bürohaus stand. Wir haben das Projekt von der Machbarkeitsstudie bis zur Bauleitung durchgehend begleitet.'],
      },
    ],
    daten: [
      { label: 'Gebäudetyp', wert: 'Mehrfamilienhaus, Umnutzung eines Bürogebäudes' },
      { label: 'Wohnungen', wert: 'Acht Wohnungen' },
      { label: 'Besonderheit', wert: 'Auskragende Balkone im Dachgeschoss' },
      { label: 'Status', wert: 'Realisiert' },
    ],
    entscheidung: {
      ausgangslage:
        'Ein ehemaliges Bürogebäude in Ottenbach (ZH), umzunutzen zu einem Mehrfamilienhaus mit acht Wohnungen.',
      frage: 'Bestehende Struktur erhalten oder das Bürogebäude ersetzen?',
      entscheidung:
        'Kernsanierung bis auf den Rohbau: Die bestehende Struktur bleibt erhalten, Grundrisse, Haustechnik und Gebäudehülle werden vollständig neu; auskragende Balkone im Dachgeschoss als bewusst sichtbarer neuer Akzent.',
      resultat:
        'Acht Wohnungen in einem ehemaligen Bürogebäude, dessen Erscheinungsbild heute von den auskragenden Balkonen geprägt ist statt vom geschlossenen Bürohaus.',
    },
    fragen: [
      {
        frage: 'Lohnt sich die Umnutzung eines Bürogebäudes zu Wohnraum?',
        antwort:
          'Oft ja, wenn Tragstruktur und Geschosshöhen mitspielen: Der Rohbau bleibt erhalten, Grundrisse und Technik werden neu.',
      },
      {
        frage: 'Wie werden auskragende Balkone konstruktiv gelöst?',
        antwort:
          'Über verstärkte Deckenplatten oder eingespannte Träger mit wärmebrückenfreier Dämmung, früh mit dem Tragwerksplaner abzustimmen.',
      },
      {
        frage: 'Wie lange dauert eine Kernsanierung mit Umnutzung?',
        antwort:
          'Meist zwei bis drei Jahre bis zum Einzug, je nach Bewilligungsverfahren und Umfang der Eingriffe.',
      },
    ],
    thumbnail: '/images/projekte/mfh-letten/atelier-aa-mfh-letten-thumb.jpg',
    heroImage: '/images/projekte/mfh-letten/atelier-aa-mfh-letten-hero.jpg',
    galerie: [
      '/images/projekte/mfh-letten/atelier-aa-mfh-letten-01.jpg',
      '/images/projekte/mfh-letten/atelier-aa-mfh-letten-02.jpg',
      '/images/projekte/mfh-letten/atelier-aa-mfh-letten-03.jpg',
      '/images/projekte/mfh-letten/atelier-aa-mfh-letten-04.jpg',
    ],
    plaene: [
      { titel: 'Kataster', datei: '/dokumente/projekte/mfh-letten/atelier-aa-mfh-letten-01-kataster.pdf' },
      { titel: 'Erdgeschoss', datei: '/dokumente/projekte/mfh-letten/atelier-aa-mfh-letten-02-erdgeschoss.pdf' },
      { titel: 'Dachgeschoss', datei: '/dokumente/projekte/mfh-letten/atelier-aa-mfh-letten-03-dachgeschoss.pdf' },
      { titel: 'Westfassade', datei: '/dokumente/projekte/mfh-letten/atelier-aa-mfh-letten-04-westfassade.pdf' },
      { titel: 'Nordfassade', datei: '/dokumente/projekte/mfh-letten/atelier-aa-mfh-letten-05-nordfassade.pdf' },
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
      'Sanierung und Erweiterung eines Einfamilienhauses in Hünenberg (ZG), ohne störende statische Eingriffe in den Bestand. Eine durchgängige, rahmenlose Schiebeverglasung öffnet das Erdgeschoss nahezu nahtlos zum Garten und führt das Licht tief in den Wohnbereich. Die Beschattung wünschte die Bauherrschaft ohne sichtbare Führungsschienen; die Lösung liegt vollständig im Sturzbereich, stabilisiert durch ein verstecktes Stahlrohr. Der neue Balkon im Obergeschoss bietet Sicht über die Nachbarschaft bis zum Zugersee.',
    abschnitte: [
      {
        titel: 'Der Bestand',
        absaetze: ['Sanierung und Erweiterung eines Einfamilienhauses in Hünenberg (ZG), ohne störende statische Eingriffe in den Bestand.'],
      },
      {
        titel: 'Der Eingriff',
        absaetze: ['Eine durchgängige, rahmenlose Schiebeverglasung öffnet das Erdgeschoss nahezu nahtlos zum Garten und führt das Licht tief in den Wohnbereich. Die Beschattung wünschte die Bauherrschaft ohne sichtbare Führungsschienen; die Lösung liegt vollständig im Sturzbereich, stabilisiert durch ein verstecktes Stahlrohr. Der neue Balkon im Obergeschoss bietet Sicht über die Nachbarschaft bis zum Zugersee.'],
      },
    ],
    daten: [
      { label: 'Gebäudetyp', wert: 'Einfamilienhaus, Sanierung und Erweiterung' },
      { label: 'Besonderheit', wert: 'Rahmenlose Verglasung, integrierte Beschattung' },
      { label: 'Ausblick', wert: 'Balkon mit Sicht auf den Zugersee' },
      { label: 'Status', wert: 'Realisiert' },
    ],
    entscheidung: {
      ausgangslage:
        'Sanierung und Erweiterung eines Einfamilienhauses in Hünenberg (ZG), ohne störende statische Eingriffe in den Bestand.',
      frage:
        'Wie lässt sich die Beschattung der neuen Schiebeverglasung einbauen, ohne dass Führungsschienen sichtbar sind, wie es die Bauherrschaft wünschte?',
      entscheidung:
        'Die Führung liegt vollständig im Sturzbereich, stabilisiert durch ein verstecktes Stahlrohr, statt einer sichtbaren Aussenmontage.',
      resultat:
        'Eine durchgängige, rahmenlose Schiebeverglasung ohne sichtbare Technik, dazu ein neuer Balkon im Obergeschoss mit Sicht bis zum Zugersee.',
    },
    fragen: [
      {
        frage: 'Wie lässt sich ein Erdgeschoss ohne sichtbare Statik öffnen?',
        antwort:
          'Meist über rahmenlose Schiebeverglasungen mit verstärkten Sturzkonstruktionen, abhängig von der bestehenden Tragstruktur.',
      },
      {
        frage: 'Wie funktioniert eine Beschattung ohne sichtbare Führungsschienen?',
        antwort:
          'Die Führung liegt im Sturzbereich und über der Gebäudeecke, stabilisiert durch ein verdecktes Stahlrohr.',
      },
      {
        frage: 'Lohnt sich eine Erweiterung gegenüber einem Neubau?',
        antwort:
          'Oft ja, wenn Lage und Struktur stimmen: Die vorhandene Erschliessung wird weiter genutzt, was meist günstiger ist.',
      },
    ],
    thumbnail: '/images/projekte/efh-huenenberg/atelier-aa-efh-huenenberg-thumb.jpg',
    heroImage: '/images/projekte/efh-huenenberg/atelier-aa-efh-huenenberg-hero.jpg',
    galerie: [
      '/images/projekte/efh-huenenberg/atelier-aa-efh-huenenberg-01.jpg',
      '/images/projekte/efh-huenenberg/atelier-aa-efh-huenenberg-02.jpg',
      '/images/projekte/efh-huenenberg/atelier-aa-efh-huenenberg-03.jpg',
      '/images/projekte/efh-huenenberg/atelier-aa-efh-huenenberg-04.jpg',
      '/images/projekte/efh-huenenberg/atelier-aa-efh-huenenberg-05.jpg',
      '/images/projekte/efh-huenenberg/atelier-aa-efh-huenenberg-06.jpg',
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
      'Wohnbau mit klarer Ordnung in Glashütten (AG): Ein einfaches Raster setzt Fenster, Balkone und Wohnungstrennungen in ein ruhiges Verhältnis, mit begründeten Abweichungen als Akzent. Die Grundrisse trennen offene Wohnbereiche von geschützten Schlafräumen; ein gemeinsamer Raum im Erdgeschoss bietet Platz für Velos und Kinderwagen. Bei der Materialwahl stand Dauerhaftigkeit im Vordergrund: mineralischer Putz, robuste Böden, langlebige Beschläge.',
    abschnitte: [
      {
        titel: 'Die Aufgabe',
        absaetze: ['Wohnbau mit klarer Ordnung in Glashütten (AG): Ein einfaches Raster setzt Fenster, Balkone und Wohnungstrennungen in ein ruhiges Verhältnis, mit begründeten Abweichungen als Akzent.'],
      },
      {
        titel: 'Die Lösung',
        absaetze: ['Die Grundrisse trennen offene Wohnbereiche von geschützten Schlafräumen; ein gemeinsamer Raum im Erdgeschoss bietet Platz für Velos und Kinderwagen. Bei der Materialwahl stand Dauerhaftigkeit im Vordergrund: mineralischer Putz, robuste Böden, langlebige Beschläge.'],
      },
    ],
    daten: [
      { label: 'Gebäudetyp', wert: 'Mehrfamilienhaus, Neubau' },
      { label: 'Bauweise', wert: 'Massivbau, mineralischer Putz' },
      { label: 'Besonderheit', wert: 'Gemeinschaftsraum im Erdgeschoss' },
      { label: 'Status', wert: 'Realisiert' },
    ],
    entscheidung: {
      ausgangslage: 'Wohnbau mit klarer Ordnung in Glashütten (AG).',
      frage: 'Wie schafft ein einfaches Fassadenraster Ordnung, ohne monoton zu wirken?',
      entscheidung:
        'Ein einfaches Raster für Fenster, Balkone und Wohnungstrennungen, mit begründeten Abweichungen als Akzent; offene Wohnbereiche von geschützten Schlafräumen getrennt, ein gemeinsamer Raum im Erdgeschoss für Velos und Kinderwagen.',
      resultat:
        'Ein ruhiges, geordnetes Erscheinungsbild mit gezielten Akzenten und dauerhaften Materialien wie mineralischem Putz und robusten Böden.',
    },
    fragen: [
      {
        frage: 'Wie viel Fläche sollten wir für Nebenräume einplanen?',
        antwort:
          'Rund zwei bis drei Quadratmeter je Wohnung zusätzlich zu den Kellerabteilen, oft gestrichen und danach vermisst.',
      },
      {
        frage: 'Welche Materialien halten am längsten?',
        antwort:
          'Mineralische Putze, Sichtbeton und keramische Beläge sind über Jahrzehnte robust; bei Fenstern und Beschlägen zahlt sich Qualität am stärksten aus.',
      },
    ],
    thumbnail: '/images/projekte/mfh-hochwarting/atelier-aa-mfh-hochwarting-thumb.jpg',
    heroImage: '/images/projekte/mfh-hochwarting/atelier-aa-mfh-hochwarting-hero.jpg',
    galerie: [
      '/images/projekte/mfh-hochwarting/atelier-aa-mfh-hochwarting-05.jpg',
      '/images/projekte/mfh-hochwarting/atelier-aa-mfh-hochwarting-01.jpg',
      '/images/projekte/mfh-hochwarting/atelier-aa-mfh-hochwarting-02.jpg',
      '/images/projekte/mfh-hochwarting/atelier-aa-mfh-hochwarting-03.jpg',
      '/images/projekte/mfh-hochwarting/atelier-aa-mfh-hochwarting-04.jpg',
    ],
    plaene: [
      { titel: 'Umgebungsplan', datei: '/dokumente/projekte/mfh-hochwarting/atelier-aa-mfh-hochwarting-01-umgebungsplan.pdf' },
      { titel: 'Erdgeschoss', datei: '/dokumente/projekte/mfh-hochwarting/atelier-aa-mfh-hochwarting-02-erdgeschoss.pdf' },
      { titel: 'Obergeschoss', datei: '/dokumente/projekte/mfh-hochwarting/atelier-aa-mfh-hochwarting-03-obergeschoss.pdf' },
      { titel: 'Attika', datei: '/dokumente/projekte/mfh-hochwarting/atelier-aa-mfh-hochwarting-04-attika.pdf' },
      { titel: 'Schnitt', datei: '/dokumente/projekte/mfh-hochwarting/atelier-aa-mfh-hochwarting-05-schnitt.pdf' },
      { titel: 'Haus A, Nordwestfassade', datei: '/dokumente/projekte/mfh-hochwarting/atelier-aa-mfh-hochwarting-06-haus-a-nordwestfassade.pdf' },
      { titel: 'Haus B, Nordostfassade', datei: '/dokumente/projekte/mfh-hochwarting/atelier-aa-mfh-hochwarting-07-haus-b-nordostfassade.pdf' },
      { titel: 'Haus B, Nordwestfassade', datei: '/dokumente/projekte/mfh-hochwarting/atelier-aa-mfh-hochwarting-08-haus-b-nordwestfassade.pdf' },
    ],
    featured: false,
    videoClips: [
      {
        bildPfad: '/images/projekte/mfh-hochwarting/atelier-aa-mfh-hochwarting-05.jpg',
        mp4: '/images/projekte/mfh-hochwarting/videos/atelier-aa-mfh-hochwarting-05.mp4',
        webm: '/images/projekte/mfh-hochwarting/videos/atelier-aa-mfh-hochwarting-05.webm',
        poster: '/images/projekte/mfh-hochwarting/videos/atelier-aa-mfh-hochwarting-05-poster.jpg',
      },
    ],
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
      'Doppeleinfamilienhaus in Safenwil (AG) für einen Investor: Erd- und Obergeschoss bilden einen kompakten, kubischen Baukörper, ein zurückversetztes Attikageschoss mit Dachterrasse schliesst ihn nach oben ab. Die beiden Einheiten teilen sich eine Wand, treten aber als ein zusammenhängender Baukörper auf, mit je eigener Garage und Hauseingang. Die helle Putzfassade mit dunkel abgesetzten Fenstern öffnet sich gartenseitig zu einem gedeckten Sitzplatz; innen verbindet eine offene Treppe die hellen, offenen Wohnbereiche.',
    abschnitte: [
      {
        titel: 'Die Aufgabe',
        absaetze: ['Doppeleinfamilienhaus in Safenwil (AG) für einen Investor: Erd- und Obergeschoss bilden einen kompakten, kubischen Baukörper, ein zurückversetztes Attikageschoss mit Dachterrasse schliesst ihn nach oben ab.'],
      },
      {
        titel: 'Die Lösung',
        absaetze: ['Die beiden Einheiten teilen sich eine Wand, treten aber als ein zusammenhängender Baukörper auf, mit je eigener Garage und Hauseingang. Die helle Putzfassade mit dunkel abgesetzten Fenstern öffnet sich gartenseitig zu einem gedeckten Sitzplatz; innen verbindet eine offene Treppe die hellen, offenen Wohnbereiche.'],
      },
    ],
    daten: [
      { label: 'Gebäudetyp', wert: 'Doppeleinfamilienhaus' },
      { label: 'Bauherrschaft', wert: 'Investor' },
      { label: 'Bauleitung', wert: 'Durch einen externen Bauleiter' },
    ],
    entscheidung: {
      ausgangslage: 'Doppeleinfamilienhaus in Safenwil (AG) für einen Investor.',
      frage:
        'Wie wirkt ein Doppeleinfamilienhaus als ein zusammenhängender Baukörper, obwohl es zwei unabhängige Einheiten mit je eigenem Eingang sind?',
      entscheidung:
        'Eine gemeinsame Wand und eine einheitliche Kubatur mit zurückversetztem Attikageschoss und Dachterrasse, aber je eigener Garage und Hauseingang pro Einheit.',
      resultat:
        'Ein kompakter, wirtschaftlicher Baukörper, der als Ganzes wirkt, mit privatem Aussenraum über der Dachterrasse für beide Einheiten.',
    },
    fragen: [
      {
        frage: 'Was unterscheidet ein Doppeleinfamilienhaus von zwei freistehenden Häusern?',
        antwort:
          'Die gemeinsame Wand senkt Erstellungskosten und Landbedarf, während beide Einheiten unabhängig nutzbar bleiben.',
      },
      {
        frage: 'Welche Vorteile bietet ein Attikageschoss mit Dachterrasse?',
        antwort:
          'Zusätzlicher Wohnraum ohne höhere Gebäudehöhe, plus ein privater, begrünbarer Aussenraum ohne Einblick von der Strasse.',
      },
    ],
    thumbnail: '/images/projekte/defh-safenwil/atelier-aa-defh-safenwil-thumb.jpg',
    heroImage: '/images/projekte/defh-safenwil/atelier-aa-defh-safenwil-hero.jpg',
    galerie: ['/images/projekte/defh-safenwil/atelier-aa-defh-safenwil-01.jpg', '/images/projekte/defh-safenwil/atelier-aa-defh-safenwil-02.jpg'],
    plaene: [
      { titel: 'Kataster', datei: '/dokumente/projekte/defh-safenwil/atelier-aa-defh-safenwil-01-kataster.pdf' },
      { titel: 'Erdgeschoss', datei: '/dokumente/projekte/defh-safenwil/atelier-aa-defh-safenwil-02-erdgeschoss.pdf' },
      { titel: 'Obergeschoss', datei: '/dokumente/projekte/defh-safenwil/atelier-aa-defh-safenwil-03-obergeschoss.pdf' },
      { titel: 'Attika', datei: '/dokumente/projekte/defh-safenwil/atelier-aa-defh-safenwil-04-attika.pdf' },
      { titel: 'Westfassade', datei: '/dokumente/projekte/defh-safenwil/atelier-aa-defh-safenwil-05-westfassade.pdf' },
      { titel: 'Nordfassade', datei: '/dokumente/projekte/defh-safenwil/atelier-aa-defh-safenwil-06-nordfassade.pdf' },
      { titel: 'Schnitt', datei: '/dokumente/projekte/defh-safenwil/atelier-aa-defh-safenwil-07-schnitt.pdf' },
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
      'Reiheneinfamilienhäuser in Hochfelden (ZH) für einen Investor: giebelständige Baukörper mit steilem, dunkel gedecktem Satteldach, liegenden Dachflächenfenstern und zurückhaltender heller Putzfassade. Zum Garten öffnen sich Balkone mit schlanken Metallgeländern über gedeckten Terrassen. Innen verbindet eine gewendelte Treppe den offenen, hell gehaltenen Wohn- und Essbereich mit den oberen Geschossen; eine grosse Schiebeverglasung stellt den Bezug zum Garten her.',
    abschnitte: [
      {
        titel: 'Die Aufgabe',
        absaetze: ['Reiheneinfamilienhäuser in Hochfelden (ZH) für einen Investor: giebelständige Baukörper mit steilem, dunkel gedecktem Satteldach, liegenden Dachflächenfenstern und zurückhaltender heller Putzfassade.'],
      },
      {
        titel: 'Die Lösung',
        absaetze: ['Zum Garten öffnen sich Balkone mit schlanken Metallgeländern über gedeckten Terrassen. Innen verbindet eine gewendelte Treppe den offenen, hell gehaltenen Wohn- und Essbereich mit den oberen Geschossen; eine grosse Schiebeverglasung stellt den Bezug zum Garten her.'],
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
          'Neben dem Hausentwurf entscheiden Erschliessung, Aussenraum und die klare Trennung privater und gemeinsamer Bereiche.',
      },
      {
        frage: 'Welche Unterlagen braucht ein Baugesuch dafür?',
        antwort:
          'In der Regel Situations-, Umgebungs-, Grundriss- und Fassadenpläne aller betroffenen Geschosse, je nach Gemeinde.',
      },
    ],
    thumbnail: '/images/projekte/refh-hochfelden/atelier-aa-refh-hochfelden-thumb.jpg',
    heroImage: '/images/projekte/refh-hochfelden/atelier-aa-refh-hochfelden-hero.jpg',
    galerie: [
      '/images/projekte/refh-hochfelden/atelier-aa-refh-hochfelden-01.jpg',
      '/images/projekte/refh-hochfelden/atelier-aa-refh-hochfelden-02.jpg',
      '/images/projekte/refh-hochfelden/atelier-aa-refh-hochfelden-03.jpg',
    ],
    plaene: [
      { titel: 'Situationsplan', datei: '/dokumente/projekte/refh-hochfelden/atelier-aa-refh-hochfelden-01-situation.pdf' },
      { titel: 'Untergeschoss', datei: '/dokumente/projekte/refh-hochfelden/atelier-aa-refh-hochfelden-02-untergeschoss.pdf' },
      { titel: 'Umgebungsplan', datei: '/dokumente/projekte/refh-hochfelden/atelier-aa-refh-hochfelden-03-umgebungsplan.pdf' },
      { titel: 'Fassade A', datei: '/dokumente/projekte/refh-hochfelden/atelier-aa-refh-hochfelden-04-fassade-a.pdf' },
      { titel: 'Fassade B', datei: '/dokumente/projekte/refh-hochfelden/atelier-aa-refh-hochfelden-05-fassade-b.pdf' },
      { titel: 'Fassade C', datei: '/dokumente/projekte/refh-hochfelden/atelier-aa-refh-hochfelden-06-fassade-c.pdf' },
      { titel: 'Fassade D', datei: '/dokumente/projekte/refh-hochfelden/atelier-aa-refh-hochfelden-07-fassade-d.pdf' },
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
      'Studie für ein zusätzliches, freistehendes Einfamilienhaus auf einem Grundstück mit bestehendem Wohnhaus in Buchs (AG), das noch Ausnützungsreserve zuliess. Das Projekt wurde bis zur Baubewilligung geführt und bewilligt, bislang aber nicht realisiert; die Visualisierungen zeigen den geplanten, nicht den bestehenden Zustand: eine helle, warmtonige Putzfassade, ein geneigtes Dach mit Dachflächenfenstern und im Erdgeschoss einen offenen Wohn-, Ess- und Kochbereich mit Kücheninsel.',
    abschnitte: [
      {
        titel: 'Die Aufgabe',
        absaetze: ['Studie für ein zusätzliches, freistehendes Einfamilienhaus auf einem Grundstück mit bestehendem Wohnhaus in Buchs (AG), das noch Ausnützungsreserve zuliess.'],
      },
      {
        titel: 'Die Lösung',
        absaetze: ['Das Projekt wurde bis zur Baubewilligung geführt und bewilligt, bislang aber nicht realisiert; die Visualisierungen zeigen den geplanten, nicht den bestehenden Zustand: eine helle, warmtonige Putzfassade, ein geneigtes Dach mit Dachflächenfenstern und im Erdgeschoss einen offenen Wohn-, Ess- und Kochbereich mit Kücheninsel.'],
      },
    ],
    daten: [
      { label: 'Gebäudetyp', wert: 'Einfamilienhaus, Erweiterungsbau' },
      { label: 'Bauherrschaft', wert: 'Privater Bauherr' },
      { label: 'Status', wert: 'Baubewilligung erteilt, nicht realisiert' },
    ],
    entscheidung: {
      ausgangslage:
        'Ein Grundstück mit bestehendem Wohnhaus in Buchs (AG), das noch Ausnützungsreserve zuliess.',
      frage:
        'Lässt sich auf einem Grundstück mit bestehendem Wohnhaus noch ein zusätzliches, freistehendes Einfamilienhaus realisieren?',
      entscheidung:
        'Ein zusätzliches freistehendes Einfamilienhaus wurde geplant und bis zur Baueingabe geführt, unter Nutzung der vorhandenen Ausnützungsreserve.',
      resultat: 'Die Baubewilligung wurde erteilt; realisiert ist das Projekt bislang nicht.',
    },
    fragen: [
      {
        frage: 'Kann ich auf meinem Grundstück ein weiteres Haus bauen, obwohl schon eines steht?',
        antwort:
          'Das hängt von Ausnützungsreserve, Grenzabständen und Erschliessung ab; eine Machbarkeitsstudie zeigt, was möglich ist.',
      },
      {
        frage: 'Was passiert mit einer erteilten Baubewilligung, wenn nicht gebaut wird?',
        antwort:
          'Sie ist befristet, meist zwei bis drei Jahre, und verfällt danach; sie kann aber mit dem Grundstück verkauft werden.',
      },
    ],
    thumbnail: '/images/projekte/efh-buchs/atelier-aa-efh-buchs-thumb.jpg',
    heroImage: '/images/projekte/efh-buchs/atelier-aa-efh-buchs-hero.jpg',
    galerie: [
      '/images/projekte/efh-buchs/atelier-aa-efh-buchs-01.jpg',
      '/images/projekte/efh-buchs/atelier-aa-efh-buchs-02.jpg',
      '/images/projekte/efh-buchs/atelier-aa-efh-buchs-03.jpg',
      '/images/projekte/efh-buchs/atelier-aa-efh-buchs-04.jpg',
    ],
    plaene: [
      { titel: 'Kataster', datei: '/dokumente/projekte/efh-buchs/atelier-aa-efh-buchs-01-kataster.pdf' },
      { titel: 'Erdgeschoss', datei: '/dokumente/projekte/efh-buchs/atelier-aa-efh-buchs-02-erdgeschoss.pdf' },
      { titel: 'Nordfassade', datei: '/dokumente/projekte/efh-buchs/atelier-aa-efh-buchs-03-nordfassade.pdf' },
      { titel: 'Ostfassade', datei: '/dokumente/projekte/efh-buchs/atelier-aa-efh-buchs-04-ostfassade.pdf' },
      { titel: 'Südfassade', datei: '/dokumente/projekte/efh-buchs/atelier-aa-efh-buchs-05-suedfassade.pdf' },
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
      'Kernsanierung eines bestehenden Einfamilienhauses in Dietikon (ZH), aktuell in der Bauphase; wir haben die Bauherrschaft bereits vor dem Kauf beraten und seither durch alle Phasen begleitet. Die Aufnahmen zeigen das Gebäude zurückgebaut bis auf das tragende Backsteinmauerwerk unter dem steilen Satteldach, vollständig eingerüstet; bessere Aufnahmen des fertigen Zustands folgen. Das Grundstück liegt an einer Strassenkreuzung, umgeben von Nachbarbebauung mit geneigten Dächern; die Bauleitung vor Ort begleiten wir beratend.',
    abschnitte: [
      {
        titel: 'Der Bestand',
        absaetze: ['Kernsanierung eines bestehenden Einfamilienhauses in Dietikon (ZH), aktuell in der Bauphase; wir haben die Bauherrschaft bereits vor dem Kauf beraten und seither durch alle Phasen begleitet.'],
      },
      {
        titel: 'Der Eingriff',
        absaetze: ['Die Aufnahmen zeigen das Gebäude zurückgebaut bis auf das tragende Backsteinmauerwerk unter dem steilen Satteldach, vollständig eingerüstet; bessere Aufnahmen des fertigen Zustands folgen. Das Grundstück liegt an einer Strassenkreuzung, umgeben von Nachbarbebauung mit geneigten Dächern; die Bauleitung vor Ort begleiten wir beratend.'],
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
          'Das Gebäude wird bis auf die tragende Struktur zurückgebaut: Innenwände, Böden, Fenster und Haustechnik werden komplett erneuert.',
      },
      {
        frage: 'Wie können Sie mich schon vor dem Grundstückskauf unterstützen?',
        antwort:
          'Mit einer Machbarkeitsstudie, die zeigt, was möglich ist, bevor Sie sich vertraglich binden.',
      },
    ],
    thumbnail: '/images/projekte/efh-dietikon/atelier-aa-efh-dietikon-thumb.jpg',
    heroImage: '/images/projekte/efh-dietikon/atelier-aa-efh-dietikon-hero.jpg',
    galerie: [
      '/images/projekte/efh-dietikon/atelier-aa-efh-dietikon-01.jpg',
      '/images/projekte/efh-dietikon/atelier-aa-efh-dietikon-02.jpg',
      '/images/projekte/efh-dietikon/atelier-aa-efh-dietikon-03.jpg',
      '/images/projekte/efh-dietikon/atelier-aa-efh-dietikon-04.jpg',
      '/images/projekte/efh-dietikon/atelier-aa-efh-dietikon-05.jpg',
      '/images/projekte/efh-dietikon/atelier-aa-efh-dietikon-06.jpg',
    ],
    plaene: [
      { titel: 'Situationsplan', datei: '/dokumente/projekte/efh-dietikon/atelier-aa-efh-dietikon-00-situationsplan.pdf' },
      { titel: 'Dachgeschoss', datei: '/dokumente/projekte/efh-dietikon/atelier-aa-efh-dietikon-01-dachgeschoss.pdf' },
      { titel: 'Erdgeschoss', datei: '/dokumente/projekte/efh-dietikon/atelier-aa-efh-dietikon-02-erdgeschoss.pdf' },
      { titel: 'Untergeschoss', datei: '/dokumente/projekte/efh-dietikon/atelier-aa-efh-dietikon-03-untergeschoss.pdf' },
      { titel: 'Obergeschoss', datei: '/dokumente/projekte/efh-dietikon/atelier-aa-efh-dietikon-04-obergeschoss.pdf' },
      { titel: 'Nordansicht', datei: '/dokumente/projekte/efh-dietikon/atelier-aa-efh-dietikon-05-nordansicht.pdf' },
      { titel: 'Ostansicht', datei: '/dokumente/projekte/efh-dietikon/atelier-aa-efh-dietikon-06-ostansicht.pdf' },
      { titel: 'Südansicht', datei: '/dokumente/projekte/efh-dietikon/atelier-aa-efh-dietikon-07-suedansicht.pdf' },
      { titel: 'Westansicht', datei: '/dokumente/projekte/efh-dietikon/atelier-aa-efh-dietikon-08-westansicht.pdf' },
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
      'Kernsanierung eines bestehenden Einfamilienhauses in Würenlos (AG) für einen privaten Investor: Die Giebelseiten sind zu Zufahrt und Garten ausgerichtet, die Putzfassade in warmem Sandton, das Ziegeldach dunkelbraun, mit aussenliegenden Lamellenstoren für ein ruhiges Fassadenbild. Über der gedeckten Terrasse im Erdgeschoss schafft ein neuer Balkon zusätzlichen Aussenraum im Obergeschoss. Bei der Bauleitung haben wir die Investorenseite beratend begleitet.',
    abschnitte: [
      {
        titel: 'Der Bestand',
        absaetze: ['Kernsanierung eines bestehenden Einfamilienhauses in Würenlos (AG) für einen privaten Investor: Die Giebelseiten sind zu Zufahrt und Garten ausgerichtet, die Putzfassade in warmem Sandton, das Ziegeldach dunkelbraun, mit aussenliegenden Lamellenstoren für ein ruhiges Fassadenbild.'],
      },
      {
        titel: 'Der Eingriff',
        absaetze: ['Über der gedeckten Terrasse im Erdgeschoss schafft ein neuer Balkon zusätzlichen Aussenraum im Obergeschoss. Bei der Bauleitung haben wir die Investorenseite beratend begleitet.'],
      },
    ],
    daten: [
      { label: 'Gebäudetyp', wert: 'Einfamilienhaus, Kernsanierung' },
      { label: 'Bauherrschaft', wert: 'Privater Investor' },
      { label: 'Baubegleitung', wert: 'Beratend, ohne Bauleitungsmandat' },
    ],
    entscheidung: {
      ausgangslage:
        'Kernsanierung eines bestehenden Einfamilienhauses in Würenlos (AG) für einen privaten Investor, mit aussenliegenden Lamellenstoren für ein ruhiges Fassadenbild.',
      frage:
        'Wie lässt sich zusätzlicher Aussenraum im Obergeschoss schaffen, ohne das ruhige Fassadenbild zu stören?',
      entscheidung:
        'Ein neuer Balkon über der bestehenden gedeckten Terrasse im Erdgeschoss, in derselben zurückhaltenden Formensprache wie die sanierte Fassade.',
      resultat:
        'Zusätzlicher privater Aussenraum im Obergeschoss, ohne das ruhige, einheitliche Fassadenbild zu beeinträchtigen.',
    },
    fragen: [
      {
        frage: 'Lohnt sich eine Kernsanierung für einen privaten Investor?',
        antwort:
          'Meist ja, wenn Lage und Bausubstanz stimmen: Der Wiederverkaufswert steigt oft deutlicher als bei einer reinen Auffrischung.',
      },
      {
        frage: 'Was bedeutet eine beratende Baubegleitung ohne Bauleitungsmandat?',
        antwort:
          'Wir stehen fachlich zur Seite, tragen aber nicht die volle Verantwortung für die Bauausführung.',
      },
    ],
    thumbnail: '/images/projekte/efh-wuerenlos/atelier-aa-efh-wuerenlos-thumb.jpg',
    heroImage: '/images/projekte/efh-wuerenlos/atelier-aa-efh-wuerenlos-hero.jpg',
    galerie: [
      '/images/projekte/efh-wuerenlos/atelier-aa-efh-wuerenlos-01.jpg',
      '/images/projekte/efh-wuerenlos/atelier-aa-efh-wuerenlos-02.jpg',
      '/images/projekte/efh-wuerenlos/atelier-aa-efh-wuerenlos-03.jpg',
      '/images/projekte/efh-wuerenlos/atelier-aa-efh-wuerenlos-04.jpg',
      '/images/projekte/efh-wuerenlos/atelier-aa-efh-wuerenlos-05.jpg',
      '/images/projekte/efh-wuerenlos/atelier-aa-efh-wuerenlos-06.jpg',
    ],
    plaene: [
      { titel: 'Kataster 1:500', datei: '/dokumente/projekte/efh-wuerenlos/atelier-aa-efh-wuerenlos-01-kataster-500.pdf' },
      { titel: 'Kataster 1:1000', datei: '/dokumente/projekte/efh-wuerenlos/atelier-aa-efh-wuerenlos-02-kataster-1000.pdf' },
      { titel: 'Untergeschoss', datei: '/dokumente/projekte/efh-wuerenlos/atelier-aa-efh-wuerenlos-03-untergeschoss.pdf' },
      { titel: 'Erdgeschoss / Umgebung', datei: '/dokumente/projekte/efh-wuerenlos/atelier-aa-efh-wuerenlos-04-erdgeschoss-umgebung.pdf' },
      { titel: 'Obergeschoss', datei: '/dokumente/projekte/efh-wuerenlos/atelier-aa-efh-wuerenlos-05-obergeschoss.pdf' },
      { titel: 'Schnitt AA', datei: '/dokumente/projekte/efh-wuerenlos/atelier-aa-efh-wuerenlos-06-schnitt-aa.pdf' },
      { titel: 'Schnitt BB', datei: '/dokumente/projekte/efh-wuerenlos/atelier-aa-efh-wuerenlos-07-schnitt-bb.pdf' },
      { titel: 'Ostfassade', datei: '/dokumente/projekte/efh-wuerenlos/atelier-aa-efh-wuerenlos-08-ostfassade.pdf' },
      { titel: 'Westfassade', datei: '/dokumente/projekte/efh-wuerenlos/atelier-aa-efh-wuerenlos-09-westfassade.pdf' },
      { titel: 'Nordfassade', datei: '/dokumente/projekte/efh-wuerenlos/atelier-aa-efh-wuerenlos-10-nordfassade.pdf' },
      { titel: 'Südfassade', datei: '/dokumente/projekte/efh-wuerenlos/atelier-aa-efh-wuerenlos-11-suedfassade.pdf' },
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
      'Kernsanierung und Erweiterung eines Einfamilienhauses in Rupperswil (AG): Die weiss verputzte Fassade verbindet einen giebelständigen Hauptbaukörper mit einem niedrigeren, flachdachigen Nebenbau, eingebettet zwischen traditionell gedeckten Nachbarhäusern. Innen bilden Küche, Ess- und Wohnbereich einen durchgehenden, hellen Raum mit Holzboden; eine offene Treppe verbindet die Geschosse, eine grosse Verglasung öffnet zum Sitzplatz im Garten. Die Bauleitung hat die Bauherrschaft nach Planungsabschluss selbst übernommen.',
    abschnitte: [
      {
        titel: 'Der Bestand',
        absaetze: ['Kernsanierung und Erweiterung eines Einfamilienhauses in Rupperswil (AG): Die weiss verputzte Fassade verbindet einen giebelständigen Hauptbaukörper mit einem niedrigeren, flachdachigen Nebenbau, eingebettet zwischen traditionell gedeckten Nachbarhäusern.'],
      },
      {
        titel: 'Der Eingriff',
        absaetze: ['Innen bilden Küche, Ess- und Wohnbereich einen durchgehenden, hellen Raum mit Holzboden; eine offene Treppe verbindet die Geschosse, eine grosse Verglasung öffnet zum Sitzplatz im Garten. Die Bauleitung hat die Bauherrschaft nach Planungsabschluss selbst übernommen.'],
      },
    ],
    daten: [
      { label: 'Gebäudetyp', wert: 'Einfamilienhaus, Kernsanierung und Erweiterung' },
      { label: 'Bauleitung', wert: 'Durch die Bauherrschaft selbst' },
    ],
    entscheidung: {
      ausgangslage:
        'Kernsanierung und Erweiterung eines Einfamilienhauses in Rupperswil (AG), eingebettet zwischen traditionell gedeckten Nachbarhäusern.',
      frage:
        'Wie ergänzt man einen flachdachigen Erweiterungsbau neben giebelständigen Nachbarhäusern, ohne aus dem Ortsbild zu fallen?',
      entscheidung:
        'Der giebelständige Hauptbaukörper bleibt bestimmend, ein niedrigerer, flachdachiger Nebenbau tritt zurückhaltend hinzu; eine gemeinsame, weiss verputzte Fassade verbindet beide Teile.',
      resultat:
        'Unterschiedliche Raumhöhen unter einem einheitlichen äusseren Ausdruck, ein durchgehender heller Wohnbereich innen.',
    },
    fragen: [
      {
        frage: 'Was zeichnet die Aussengestaltung dieses Hauses aus?',
        antwort:
          'Die Kombination aus giebelständigem Hauptbau und niedrigerem Flachdach-Nebenbau erlaubt unterschiedliche Raumhöhen unter einem Ausdruck.',
      },
      {
        frage: 'Können wir die Bauleitung bei einer Sanierung selbst übernehmen?',
        antwort:
          'Ja, wenn Zeit und Erfahrung für die Koordination der Handwerker vorhanden sind; wir übergeben eine ausführungsreife Planung.',
      },
    ],
    thumbnail: '/images/projekte/efh-rupperswil/atelier-aa-efh-rupperswil-thumb.jpg',
    heroImage: '/images/projekte/efh-rupperswil/atelier-aa-efh-rupperswil-hero.jpg',
    galerie: [
      '/images/projekte/efh-rupperswil/atelier-aa-efh-rupperswil-01.jpg',
      '/images/projekte/efh-rupperswil/atelier-aa-efh-rupperswil-02.jpg',
      '/images/projekte/efh-rupperswil/atelier-aa-efh-rupperswil-03.jpg',
      '/images/projekte/efh-rupperswil/atelier-aa-efh-rupperswil-04.jpg',
      '/images/projekte/efh-rupperswil/atelier-aa-efh-rupperswil-05.jpg',
      '/images/projekte/efh-rupperswil/atelier-aa-efh-rupperswil-06.jpg',
    ],
    plaene: [
      { titel: 'Situationsplan 1:500', datei: '/dokumente/projekte/efh-rupperswil/atelier-aa-efh-rupperswil-01-situation-500.pdf' },
      { titel: 'Situationsplan 1:1000', datei: '/dokumente/projekte/efh-rupperswil/atelier-aa-efh-rupperswil-02-situation-1000.pdf' },
    ],
    featured: false,
  },
  {
    slug: 'wohnueberbauung-zelgi',
    title: 'Mehrfamilienhaus Zelgi',
    ort: 'Untersiggenthal',
    kanton: 'AG',
    kunde: null,
    jahr: 'in Realisierung',
    typ: 'Mehrfamilienhaus',
    kategorien: ['Neubau', 'Wohnen'],
    leistungen: ['Machbarkeitsstudie', 'Projektierung', 'Baugesuch', 'Ausschreibungsplanung', 'Ausführungsplanung'],
    beschreibung:
      'Neubau eines Mehrfamilienhauses im Gebiet Zelgi in Untersiggenthal (AG), aktuell in Ausführung. Der Baukörper mit steilem Satteldach und liegenden Dachflächenfenstern nimmt die giebelständige Umgebung auf und übersetzt sie in drei Wohngeschosse über einem Untergeschoss, mit vertikaler Holzlattenfassade. Die Wohnungen gruppieren sich symmetrisch um ein zentrales Treppenhaus mit Lift, jede mit eigenem Balkon oder Terrasse. Wir haben das Projekt von der Machbarkeitsstudie bis zur Ausführungsplanung begleitet; realisiert wird es nun durch einen Generalunternehmer.',
    abschnitte: [
      {
        titel: 'Die Aufgabe',
        absaetze: ['Neubau eines Mehrfamilienhauses im Gebiet Zelgi in Untersiggenthal (AG), aktuell in Ausführung.'],
      },
      {
        titel: 'Die Lösung',
        absaetze: ['Der Baukörper mit steilem Satteldach und liegenden Dachflächenfenstern nimmt die giebelständige Umgebung auf und übersetzt sie in drei Wohngeschosse über einem Untergeschoss, mit vertikaler Holzlattenfassade. Die Wohnungen gruppieren sich symmetrisch um ein zentrales Treppenhaus mit Lift, jede mit eigenem Balkon oder Terrasse. Wir haben das Projekt von der Machbarkeitsstudie bis zur Ausführungsplanung begleitet; realisiert wird es nun durch einen Generalunternehmer.'],
      },
    ],
    daten: [
      { label: 'Lage', wert: 'Zelgi, Untersiggenthal' },
      { label: 'Gebäudetyp', wert: 'Mehrfamilienhaus, Neubau' },
      { label: 'Geschosse', wert: '2 Vollgeschosse, Dachgeschoss, Untergeschoss' },
      { label: 'Realisierung', wert: 'Durch einen Generalunternehmer nach Verkauf' },
    ],
    entscheidung: {
      ausgangslage:
        'Neubau eines Mehrfamilienhauses im Gebiet Zelgi in Untersiggenthal (AG), umgeben von giebelständiger Bebauung.',
      frage: 'Wie fügt sich ein neues Mehrfamilienhaus in eine giebelständig geprägte Umgebung ein?',
      entscheidung:
        'Ein Baukörper mit steilem Satteldach und liegenden Dachflächenfenstern, der die giebelständige Umgebung aufnimmt und in drei Wohngeschosse mit vertikaler Holzlattenfassade übersetzt.',
      resultat:
        'Die Wohnungen gruppieren sich symmetrisch um ein zentrales Treppenhaus mit Lift, jede mit eigenem Balkon oder eigener Terrasse, in einem Baukörper, der sich in die Umgebung einfügt statt sich von ihr abzuheben.',
    },
    fragen: [
      {
        frage: 'Was bedeutet es, wenn ein Projekt an einen Generalunternehmer verkauft wird?',
        antwort:
          'Die Realisierung geht an den GU über, während unsere Planung als Grundlage bestehen bleibt. Das ist üblich, wenn die Bauherrschaft weiterveräussert.',
      },
      {
        frage: 'Welche Vorteile bietet eine Holzfassade bei einem Mehrfamilienhaus?',
        antwort:
          'Leicht, gut vorfertigbar, alterungsfähig im Erscheinungsbild, verlangt aber sorgfältige Detailplanung bei Anschlüssen.',
      },
    ],
    thumbnail: '/images/projekte/wohnueberbauung-zelgi/atelier-aa-wohnueberbauung-zelgi-thumb.jpg',
    heroImage: '/images/projekte/wohnueberbauung-zelgi/atelier-aa-wohnueberbauung-zelgi-hero.jpg',
    galerie: [
      '/images/projekte/wohnueberbauung-zelgi/atelier-aa-wohnueberbauung-zelgi-03.jpg',
      '/images/projekte/wohnueberbauung-zelgi/atelier-aa-wohnueberbauung-zelgi-01.jpg',
      '/images/projekte/wohnueberbauung-zelgi/atelier-aa-wohnueberbauung-zelgi-02.jpg',
      '/images/projekte/wohnueberbauung-zelgi/atelier-aa-wohnueberbauung-zelgi-04.jpg',
      '/images/projekte/wohnueberbauung-zelgi/atelier-aa-wohnueberbauung-zelgi-05.jpg',
    ],
    plaene: [
      { titel: 'Kataster', datei: '/dokumente/projekte/wohnueberbauung-zelgi/atelier-aa-wohnueberbauung-zelgi-01-kataster.pdf' },
      { titel: 'Untergeschoss', datei: '/dokumente/projekte/wohnueberbauung-zelgi/atelier-aa-wohnueberbauung-zelgi-02-untergeschoss.pdf' },
      { titel: 'Erdgeschoss / Umgebung', datei: '/dokumente/projekte/wohnueberbauung-zelgi/atelier-aa-wohnueberbauung-zelgi-03-erdgeschoss-umgebung.pdf' },
      { titel: 'Obergeschoss', datei: '/dokumente/projekte/wohnueberbauung-zelgi/atelier-aa-wohnueberbauung-zelgi-04-obergeschoss.pdf' },
      { titel: 'Nordansicht', datei: '/dokumente/projekte/wohnueberbauung-zelgi/atelier-aa-wohnueberbauung-zelgi-05-nordansicht.pdf' },
      { titel: 'Ostansicht', datei: '/dokumente/projekte/wohnueberbauung-zelgi/atelier-aa-wohnueberbauung-zelgi-06-ostansicht.pdf' },
      { titel: 'Südansicht', datei: '/dokumente/projekte/wohnueberbauung-zelgi/atelier-aa-wohnueberbauung-zelgi-07-suedansicht.pdf' },
      { titel: 'Westansicht', datei: '/dokumente/projekte/wohnueberbauung-zelgi/atelier-aa-wohnueberbauung-zelgi-08-westansicht.pdf' },
    ],
    featured: false,
    videoClips: [
      {
        bildPfad: '/images/projekte/wohnueberbauung-zelgi/atelier-aa-wohnueberbauung-zelgi-03.jpg',
        mp4: '/images/projekte/wohnueberbauung-zelgi/videos/atelier-aa-wohnueberbauung-zelgi-03.mp4',
        webm: '/images/projekte/wohnueberbauung-zelgi/videos/atelier-aa-wohnueberbauung-zelgi-03.webm',
        poster: '/images/projekte/wohnueberbauung-zelgi/videos/atelier-aa-wohnueberbauung-zelgi-03-poster.jpg',
      },
    ],
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
      'Totalsanierung eines Einfamilienhauses in Merenschwand (AG): Der zweigeschossige, weiss verputzte Baukörper unter einem Flachdach mit Kiesbelag erhielt dunkel gerahmte Fenster und aussenliegende Lamellenstoren, reduziert und kantig im gewachsenen, giebelständig geprägten Quartier. Ein gedeckter Vorbereich mit Holzbalken-Vordach markiert den Eingang, ein Balkon mit dunklem Glasgeländer öffnet sich zur Gartenseite mit grossformatig gepflasterter Terrasse. Die Bauleitung haben wir beratend begleitet.',
    abschnitte: [
      {
        titel: 'Der Bestand',
        absaetze: ['Totalsanierung eines Einfamilienhauses in Merenschwand (AG): Der zweigeschossige, weiss verputzte Baukörper unter einem Flachdach mit Kiesbelag erhielt dunkel gerahmte Fenster und aussenliegende Lamellenstoren, reduziert und kantig im gewachsenen, giebelständig geprägten Quartier.'],
      },
      {
        titel: 'Der Eingriff',
        absaetze: ['Ein gedeckter Vorbereich mit Holzbalken-Vordach markiert den Eingang, ein Balkon mit dunklem Glasgeländer öffnet sich zur Gartenseite mit grossformatig gepflasterter Terrasse. Die Bauleitung haben wir beratend begleitet.'],
      },
    ],
    daten: [
      { label: 'Gebäudetyp', wert: 'Einfamilienhaus, Totalsanierung' },
      { label: 'Baubegleitung', wert: 'Beratend, ohne Bauleitungsmandat' },
    ],
    entscheidung: {
      ausgangslage:
        'Totalsanierung eines Einfamilienhauses in Merenschwand (AG), in einem gewachsenen, giebelständig geprägten Quartier.',
      frage:
        'Wie fügt sich ein kantiger Flachdachbau zurückhaltend in ein giebelständig geprägtes Quartier ein?',
      entscheidung:
        'Eine reduzierte, kantige Formensprache mit dunkel gerahmten Fenstern und aussenliegenden Lamellenstoren statt einer auffälligen Gestaltung; ein gedeckter Vorbereich markiert den Eingang.',
      resultat:
        'Ein ruhiges, zurückhaltendes Erscheinungsbild trotz baulichem Kontrast zur Umgebung, mit neuem Balkon und Terrasse als Mehrwert.',
    },
    fragen: [
      {
        frage: 'Was ist der Unterschied zwischen Total- und Kernsanierung?',
        antwort:
          'Bei der Totalsanierung bleibt die tragende Struktur erhalten, bei der Kernsanierung wird zusätzlich Teile des Rohbaus offengelegt.',
      },
      {
        frage: 'Was zeichnet einen kubischen Baukörper mit Flachdach aus?',
        antwort:
          'Eine ruhige, kantige Form ohne Dachschräge mit nutzbaren Raumhöhen bis unter die Decke.',
      },
    ],
    thumbnail: '/images/projekte/efh-merenschwand/atelier-aa-efh-merenschwand-thumb.jpg',
    heroImage: '/images/projekte/efh-merenschwand/atelier-aa-efh-merenschwand-hero.jpg',
    galerie: [
      '/images/projekte/efh-merenschwand/atelier-aa-efh-merenschwand-01.jpg',
      '/images/projekte/efh-merenschwand/atelier-aa-efh-merenschwand-02.jpg',
      '/images/projekte/efh-merenschwand/atelier-aa-efh-merenschwand-03.jpg',
      '/images/projekte/efh-merenschwand/atelier-aa-efh-merenschwand-04.jpg',
      '/images/projekte/efh-merenschwand/atelier-aa-efh-merenschwand-05.jpg',
      '/images/projekte/efh-merenschwand/atelier-aa-efh-merenschwand-06.jpg',
      '/images/projekte/efh-merenschwand/atelier-aa-efh-merenschwand-07.jpg',
      '/images/projekte/efh-merenschwand/atelier-aa-efh-merenschwand-08.jpg',
      '/images/projekte/efh-merenschwand/atelier-aa-efh-merenschwand-09.jpg',
    ],
    plaene: [{ titel: 'Kataster', datei: '/dokumente/projekte/efh-merenschwand/atelier-aa-efh-merenschwand-01-kataster.pdf' }],
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
      'Neubau eines Mehrfamilienhauses in Würenlingen (AG) für einen Investor, den wir bereits vor dem Grundstückskauf beraten und seither durch alle Phasen begleitet haben, aktuell in Ausführung. Der Satteldachbau mit drei Vollgeschossen und ausgebautem Dachgeschoss trägt ein durchgehendes, dunkles Ziegeldach mit einzelnen Dachflächenfenstern. Balkone auf schlanken, dunklen Stützen ziehen sich über alle Geschosse; im Erdgeschoss setzen sich die Aussenräume in gedeckten, bepflanzten Sitzplätzen fort.',
    abschnitte: [
      {
        titel: 'Die Aufgabe',
        absaetze: ['Neubau eines Mehrfamilienhauses in Würenlingen (AG) für einen Investor, den wir bereits vor dem Grundstückskauf beraten und seither durch alle Phasen begleitet haben, aktuell in Ausführung.'],
      },
      {
        titel: 'Die Lösung',
        absaetze: ['Der Satteldachbau mit drei Vollgeschossen und ausgebautem Dachgeschoss trägt ein durchgehendes, dunkles Ziegeldach mit einzelnen Dachflächenfenstern. Balkone auf schlanken, dunklen Stützen ziehen sich über alle Geschosse; im Erdgeschoss setzen sich die Aussenräume in gedeckten, bepflanzten Sitzplätzen fort.'],
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
          'Am besten vor der Kaufzusage: Wir prüfen anhand von Bauzone und Ausnützung, was realistisch möglich ist.',
      },
      {
        frage: 'Was ist bei einem Mehrfamilienhaus mit Satteldach zu beachten?',
        antwort:
          'Ein ausgebautes Dachgeschoss verlangt eine sorgfältige Abstimmung von Dachneigung, Belichtung und lichter Raumhöhe.',
      },
    ],
    thumbnail: '/images/projekte/mfh-wuerenlingen/atelier-aa-mfh-wuerenlingen-thumb.jpg',
    heroImage: '/images/projekte/mfh-wuerenlingen/atelier-aa-mfh-wuerenlingen-hero.jpg',
    galerie: [
      '/images/projekte/mfh-wuerenlingen/atelier-aa-mfh-wuerenlingen-01.jpg',
      '/images/projekte/mfh-wuerenlingen/atelier-aa-mfh-wuerenlingen-02.jpg',
      '/images/projekte/mfh-wuerenlingen/atelier-aa-mfh-wuerenlingen-03.jpg',
    ],
    plaene: [
      { titel: 'Kataster 1:500', datei: '/dokumente/projekte/mfh-wuerenlingen/atelier-aa-mfh-wuerenlingen-01-kataster-500.pdf' },
      { titel: 'Kataster 1:1000', datei: '/dokumente/projekte/mfh-wuerenlingen/atelier-aa-mfh-wuerenlingen-02-kataster-1000.pdf' },
      { titel: 'Erdgeschoss und Umgebung', datei: '/dokumente/projekte/mfh-wuerenlingen/atelier-aa-mfh-wuerenlingen-03-erdgeschoss-umgebung.pdf' },
      { titel: 'Obergeschoss und Dachgeschoss', datei: '/dokumente/projekte/mfh-wuerenlingen/atelier-aa-mfh-wuerenlingen-04-obergeschoss-dachgeschoss.pdf' },
      { titel: 'Nordfassade', datei: '/dokumente/projekte/mfh-wuerenlingen/atelier-aa-mfh-wuerenlingen-05-nordfassade.pdf' },
      { titel: 'Ansicht Nordost', datei: '/dokumente/projekte/mfh-wuerenlingen/atelier-aa-mfh-wuerenlingen-06-nordost.pdf' },
      { titel: 'Ansicht Südwest', datei: '/dokumente/projekte/mfh-wuerenlingen/atelier-aa-mfh-wuerenlingen-07-suedwest.pdf' },
      { titel: 'Ansicht Südost', datei: '/dokumente/projekte/mfh-wuerenlingen/atelier-aa-mfh-wuerenlingen-08-suedost.pdf' },
    ],
    featured: false,
  },
  /**
   * Ebenfalls noch ohne Fotos. Die rote/gestrichelte Darstellung im
   * Fassadenplan deutet auf einen Umbau mit Anbau hin, nicht auf einen
   * Neubau auf freier Parzelle.
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
      'Umbau und Erweiterung eines Einfamilienhauses in Othmarsingen (AG): Situationsplan, Geschosse, Schnitte und Fassade liegen bis zur Baueingabe ausgearbeitet vor. Das Foto zeigt das Haus im heutigen Zustand vor dem Umbau.',
    abschnitte: [],
    daten: [
      { label: 'Gebäudetyp', wert: 'Einfamilienhaus, Umbau und Erweiterung' },
      { label: 'Status', wert: 'In Planung' },
    ],
    fragen: [
      {
        frage: 'Ist das schon das umgebaute Haus?',
        antwort:
          'Nein, das Foto zeigt das Haus im heutigen Zustand vor dem Umbau. Sobald die Erweiterung realisiert ist, ergänzen wir die Seite mit Fotos des fertigen Umbaus.',
      },
    ],
    thumbnail: '/images/projekte/efh-othmarsingen/atelier-aa-efh-othmarsingen-thumb.jpg',
    heroImage: '/images/projekte/efh-othmarsingen/atelier-aa-efh-othmarsingen-hero.jpg',
    galerie: ['/images/projekte/efh-othmarsingen/atelier-aa-efh-othmarsingen-01.jpg'],
    plaene: [
      { titel: 'Situation', datei: '/dokumente/projekte/efh-othmarsingen/atelier-aa-efh-othmarsingen-01-situation.pdf' },
      { titel: 'Untergeschoss', datei: '/dokumente/projekte/efh-othmarsingen/atelier-aa-efh-othmarsingen-02-untergeschoss.pdf' },
      { titel: 'Obergeschoss', datei: '/dokumente/projekte/efh-othmarsingen/atelier-aa-efh-othmarsingen-03-obergeschoss.pdf' },
      { titel: 'Erdgeschoss', datei: '/dokumente/projekte/efh-othmarsingen/atelier-aa-efh-othmarsingen-04-erdgeschoss.pdf' },
      { titel: 'Schnitt 1', datei: '/dokumente/projekte/efh-othmarsingen/atelier-aa-efh-othmarsingen-05-schnitt-1.pdf' },
      { titel: 'Schnitt 2', datei: '/dokumente/projekte/efh-othmarsingen/atelier-aa-efh-othmarsingen-06-schnitt-2.pdf' },
      { titel: 'Fassade', datei: '/dokumente/projekte/efh-othmarsingen/atelier-aa-efh-othmarsingen-07-fassade.pdf' },
    ],
    featured: false,
  },
  /**
   * Gewerbeliegenschaft Bachstrasse 29, Obfelden (Grundeigentümerin: REMNEX
   * Anlagestiftung, Zug). Zwei getrennte Vorhaben im selben Gebäude mit
   * unterschiedlicher Bauherrschaft — deshalb zwei eigenständige Projekte
   * statt eines gemeinsamen: die Nutzungsänderung zur Kleintierpraxis
   * (Bauherrin: die Praxis selbst) und der übrige Mieterausbau samt
   * Parkplatzerweiterung (Bauherrin: die Grundeigentümerin). Hero/Thumbnail
   * aus eigenem Drohnenmaterial der fertiggestellten Liegenschaft (2022);
   * Planbilder ohne Planköpfe zugeschnitten (keine Adress-/Bauherrendaten
   * Dritter sichtbar).
   */
  {
    slug: 'kleintierpraxis-obfelden',
    title: 'Kleintierpraxis',
    ort: 'Obfelden',
    kanton: 'ZH',
    kunde: 'Kleintierpraxis Obfelden',
    jahr: '2022',
    typ: 'Gewerbebau',
    kategorien: ['Umbau', 'Gewerbe'],
    leistungen: ['Projektierung', 'Baugesuch', 'Ausführungsplanung'],
    beschreibung:
      'Nutzungsänderung eines Gebäudeteils in Obfelden (ZH) zu einer Kleintierpraxis, mit Umbau und Parkplatznachweis für den neuen Betrieb im Erdgeschoss einer Gewerbeliegenschaft.',
    abschnitte: [],
    daten: [
      { label: 'Gebäudetyp', wert: 'Gewerbebau, Nutzungsänderung zu Kleintierpraxis' },
      { label: 'Bauherrschaft', wert: 'Kleintierpraxis Obfelden' },
      { label: 'Status', wert: 'Realisiert' },
    ],
    fragen: [
      {
        frage: 'Ist das ganze Gebäude die Kleintierpraxis?',
        antwort:
          'Nein, die Praxis befindet sich im Erdgeschoss einer grösseren Gewerbeliegenschaft mit mehreren Mieterinnen und Mietern. Den Mieterausbau der übrigen Geschosse zeigen wir als eigenes Projekt.',
      },
    ],
    thumbnail: '/images/projekte/kleintierpraxis-obfelden/atelier-aa-kleintierpraxis-obfelden-thumb.jpg',
    heroImage: '/images/projekte/kleintierpraxis-obfelden/atelier-aa-kleintierpraxis-obfelden-hero.jpg',
    galerie: [],
    plaene: [
      {
        titel: 'Erdgeschoss',
        datei: '/dokumente/projekte/kleintierpraxis-obfelden/atelier-aa-kleintierpraxis-obfelden-01-erdgeschoss.pdf',
      },
    ],
    featured: false,
  },
  {
    slug: 'mieterausbau-obfelden',
    title: 'Mieterausbau',
    ort: 'Obfelden',
    kanton: 'ZH',
    kunde: 'Remnex Zug',
    jahr: '2022',
    typ: 'Gewerbebau',
    kategorien: ['Umbau', 'Gewerbe', 'Mieterausbau', 'Büro'],
    leistungen: ['Projektierung', 'Baugesuch', 'Ausführungsplanung'],
    beschreibung:
      'Mieterausbau von Gemeinschaftsräumen im Untergeschoss sowie Erweiterung der Besucherparkplätze für eine Gewerbeliegenschaft in Obfelden (ZH).',
    abschnitte: [],
    daten: [
      {
        label: 'Gebäudetyp',
        wert: 'Gewerbebau, Mieterausbau Untergeschoss und Parkplatzerweiterung',
      },
      { label: 'Bauherrschaft', wert: 'Remnex Zug' },
      { label: 'Status', wert: 'Realisiert' },
    ],
    fragen: [
      {
        frage: 'Gehört das zum Projekt Kleintierpraxis?',
        antwort:
          'Es ist dieselbe Liegenschaft, aber ein eigenständiges Vorhaben mit eigener Bauherrschaft: die Grundeigentümerin hat den Mieterausbau der Gemeinschaftsräume und die Parkplatzerweiterung in Auftrag gegeben, unabhängig von der Kleintierpraxis im Erdgeschoss.',
      },
    ],
    thumbnail: '/images/projekte/mieterausbau-obfelden/atelier-aa-mieterausbau-obfelden-thumb.jpg',
    heroImage: '/images/projekte/mieterausbau-obfelden/atelier-aa-mieterausbau-obfelden-hero.jpg',
    galerie: [],
    plaene: [
      {
        titel: 'Umgebung',
        datei: '/dokumente/projekte/mieterausbau-obfelden/atelier-aa-mieterausbau-obfelden-01-umgebung.pdf',
      },
      {
        titel: 'Untergeschoss',
        datei: '/dokumente/projekte/mieterausbau-obfelden/atelier-aa-mieterausbau-obfelden-02-untergeschoss.pdf',
      },
      {
        titel: 'Deckenplan',
        datei: '/dokumente/projekte/mieterausbau-obfelden/atelier-aa-mieterausbau-obfelden-03-deckenplan.pdf',
      },
      {
        titel: 'Bodenplan',
        datei: '/dokumente/projekte/mieterausbau-obfelden/atelier-aa-mieterausbau-obfelden-04-bodenplan.pdf',
      },
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
      'Doppeleinfamilienhaus in Weiningen (ZH): Erste Visualisierungen zeigen einen giebelständigen Baukörper mit steilem Satteldach, heller Putzfassade und filigranen Glasgeländern an den Balkonen. Im Erdgeschoss ein durchgehender Wohn-, Ess- und Kochbereich mit offener Kochinsel und hellem Eichenboden, mit Terrassenzugang über bodentiefe Fenster.',
    abschnitte: [],
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
    thumbnail: '/images/projekte/defh-weiningen/atelier-aa-defh-weiningen-thumb.jpg',
    heroImage: '/images/projekte/defh-weiningen/atelier-aa-defh-weiningen-hero.jpg',
    galerie: [
      '/images/projekte/defh-weiningen/atelier-aa-defh-weiningen-01.jpg',
      '/images/projekte/defh-weiningen/atelier-aa-defh-weiningen-02.jpg',
    ],
    featured: false,
  },
  {
    slug: 'mfh-niederweningen',
    title: 'Mehrfamilienhaus Murzelnstrasse',
    ort: 'Niederweningen',
    kanton: 'ZH',
    kunde: null,
    jahr: 'im Bau',
    typ: 'Mehrfamilienhaus',
    kategorien: ['Neubau', 'Wohnen'],
    leistungen: ['Projektierung'],
    beschreibung:
      'Mehrfamilienhaus an der Murzelnstrasse in Niederweningen (ZH): zwei Neubauten neben einem bestehenden Gebäude, aktuell im Rohbau mit Dachstuhl und Fassade im Bau. Luftaufnahmen von der Baustelle dokumentieren den Baufortschritt.',
    abschnitte: [],
    daten: [
      { label: 'Gebäudetyp', wert: 'Mehrfamilienhaus, Neubau' },
      { label: 'Status', wert: 'Im Bau' },
    ],
    fragen: [
      {
        frage: 'In welcher Bauphase ist das Projekt?',
        antwort:
          'Die Rohbauten stehen, Dachstuhl und Fassade sind im Bau. Die Luftaufnahmen zeigen den aktuellen Baufortschritt. Fotos der fertiggestellten Häuser ergänzen wir nach Bezug.',
      },
    ],
    thumbnail: '/images/projekte/mfh-niederweningen/atelier-aa-mfh-niederweningen-thumb.jpg',
    heroImage: '/images/projekte/mfh-niederweningen/atelier-aa-mfh-niederweningen-hero.jpg',
    galerie: [
      '/images/projekte/mfh-niederweningen/atelier-aa-mfh-niederweningen-01.jpg',
      '/images/projekte/mfh-niederweningen/atelier-aa-mfh-niederweningen-02.jpg',
      '/images/projekte/mfh-niederweningen/atelier-aa-mfh-niederweningen-03.jpg',
    ],
    featured: false,
  },
];

export function getProjekt(slug: string): Projekt | undefined {
  return projekte.find((p) => p.slug === slug);
}

export function getWeitereProjekte(currentSlug: string, count = 4): Projekt[] {
  return projekte.filter((p) => p.slug !== currentSlug).slice(0, count);
}
