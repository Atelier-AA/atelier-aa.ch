import type { Metadata } from 'next';
import Container from '@/components/ui/Container';
import { firma } from '@/data/firma';

export const metadata: Metadata = {
  title: 'Datenschutzerklärung',
  description:
    'Datenschutzerklärung von Atelier AA Architekten GmbH, Obfelden: welche Personendaten wir bearbeiten, zu welchem Zweck, wie lange und welche Rechte Sie nach dem Schweizer Datenschutzgesetz haben.',
};

/**
 * Datenschutzerklärung.
 *
 * Aufgebaut nach dem revidierten Schweizer Datenschutzgesetz (DSG, in Kraft
 * seit 1. September 2023) und, für Besucher aus dem EU-Raum, den
 * Informationspflichten der DSGVO.
 *
 * WICHTIG — vor der Veröffentlichung juristisch prüfen lassen. Ein Abschnitt
 * muss an den tatsächlichen Betrieb angepasst werden:
 * - «Hosting und Server-Logfiles»: Anbieter und Standort eintragen (bei einem
 *   Betrieb auf Vercel liegt eine Auftragsbearbeitung mit US-Bezug vor).
 *
 * Google Analytics und der Meta-Werbepixel (Abschnitt 7) laden erst, sobald in
 * den Vercel-Umgebungsvariablen NEXT_PUBLIC_GA_MEASUREMENT_ID bzw.
 * NEXT_PUBLIC_META_PIXEL_ID gesetzt sind UND die Besucherin/der Besucher im
 * Cookie-Banner zugestimmt hat (siehe CookieBanner.tsx, GoogleAnalytics.tsx,
 * MarketingPixel.tsx). Vor dem Live-Start sind beide Variablen leer, es
 * findet also noch keine Datenübermittlung statt — der folgende Text
 * beschreibt bereits den Zielzustand nach dem Go-Live.
 */
export default function DatenschutzPage() {
  const stand = 'August 2026';

  return (
    <div className="pt-32 pb-20 md:pb-28 md:pt-40">
      <Container>
        <div className="max-w-3xl">
          <p className="mb-4 text-xs uppercase tracking-widest text-stone">
            Rechtliches
          </p>
          <h1 className="mb-6 text-4xl font-medium text-ink md:text-5xl lg:text-6xl">
            Datenschutzerklärung
          </h1>
          <p className="mb-16 text-sm text-stone">Stand: {stand}</p>

          <div className="space-y-12 leading-relaxed text-graphite">
            <section>
              <p>
                Der Schutz Ihrer Personendaten ist uns ein wichtiges Anliegen. Nachfolgend
                informieren wir Sie darüber, welche Daten wir bearbeiten, zu welchem
                Zweck, auf welcher Grundlage und welche Rechte Ihnen zustehen. Grundlage
                ist das schweizerische Datenschutzgesetz (DSG); für Besucherinnen und
                Besucher aus dem EU-Raum berücksichtigen wir zusätzlich die
                Informationspflichten der Datenschutz-Grundverordnung (DSGVO).
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-medium text-ink">
                1. Verantwortliche Stelle
              </h2>
              <address className="not-italic">
                {firma.name}
                <br />
                {firma.strasse}
                <br />
                {firma.plz} {firma.ort}, {firma.land}
                <br />
                Telefon:{' '}
                <a href={`tel:${firma.telefonHref}`} className="underline underline-offset-4">
                  {firma.telefon}
                </a>
                <br />
                E-Mail:{' '}
                <a href={`mailto:${firma.email}`} className="underline underline-offset-4">
                  {firma.email}
                </a>
                <br />
                UID: {firma.uid}
              </address>
              <p className="mt-4">
                Eine Vertretung in der EU nach Art. 27 DSGVO haben wir nicht bestellt, da
                wir unsere Leistungen nicht auf den EU-Markt ausrichten.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-medium text-ink">
                2. Bearbeitung bei Besuch der Website
              </h2>
              <p>
                Beim Aufruf unserer Website übermittelt Ihr Browser technisch notwendige
                Angaben an den Server, auf dem die Website betrieben wird. Dazu gehören
                die IP-Adresse, Datum und Uhrzeit des Zugriffs, die aufgerufene Adresse,
                der übermittelte Referrer sowie Angaben zu Browser und Betriebssystem.
              </p>
              <p className="mt-4">
                Diese Daten sind erforderlich, um die Website auszuliefern, ihre
                Stabilität zu gewährleisten und Angriffe zu erkennen. Sie werden nicht mit
                anderen Datenquellen zusammengeführt und nicht zur Bildung von
                Nutzungsprofilen verwendet.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-medium text-ink">
                3. Hosting und Server-Logfiles
              </h2>
              <p>
                Die Website wird bei einem externen Dienstleister betrieben, der die unter
                Ziffer 2 genannten Daten in unserem Auftrag bearbeitet. Wir haben mit
                diesem Dienstleister eine Vereinbarung zur Auftragsbearbeitung
                abgeschlossen.
              </p>
              <p className="mt-4">
                Findet dabei eine Übermittlung ins Ausland statt, erfolgt diese auf
                Grundlage der Standardvertragsklauseln beziehungsweise eines vom
                Bundesrat anerkannten angemessenen Datenschutzniveaus. Auskunft über den
                eingesetzten Anbieter und den Serverstandort erhalten Sie jederzeit auf
                Anfrage.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-medium text-ink">
                4. Kontaktaufnahme und Kontaktformular
              </h2>
              <p>
                Wenn Sie uns per E-Mail, telefonisch oder über das Kontaktformular
                schreiben, bearbeiten wir die von Ihnen mitgeteilten Angaben — in der
                Regel Name, E-Mail-Adresse, Telefonnummer und den Inhalt Ihrer Nachricht —
                zur Beantwortung Ihrer Anfrage und für allfällige Anschlussfragen.
              </p>
              <p className="mt-4">
                Die Bekanntgabe dieser Daten ist freiwillig. Ohne sie können wir Ihre
                Anfrage jedoch nicht bearbeiten. Wir bewahren Anfragen so lange auf, wie
                es für die Bearbeitung und zur Erfüllung gesetzlicher
                Aufbewahrungspflichten erforderlich ist; Geschäftsunterlagen unterliegen
                einer Aufbewahrungsfrist von zehn Jahren.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-medium text-ink">
                5. Bearbeitung im Rahmen von Planungsmandaten
              </h2>
              <p>
                Erteilen Sie uns ein Mandat, bearbeiten wir die für die Planung
                erforderlichen Daten: Angaben zu Ihrer Person, zum Grundstück, zur
                Finanzierung sowie Korrespondenz mit Behörden und Fachplanern.
              </p>
              <p className="mt-4">
                Im Rahmen des Bewilligungsverfahrens geben wir die notwendigen Angaben an
                die zuständigen Behörden weiter. An Fachplaner, Unternehmer und
                Bauleitungspartner geben wir nur weiter, was für deren Leistung
                erforderlich ist.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-medium text-ink">
                6. Bekanntgabe an Dritte
              </h2>
              <p>
                Wir geben Ihre Daten nur bekannt, wenn dies für die Erfüllung eines
                Vertrages erforderlich ist, Sie zugestimmt haben oder eine gesetzliche
                Pflicht besteht. Empfänger können sein: Behörden im
                Bewilligungsverfahren, Fachplanerinnen und Fachplaner, ausführende
                Unternehmen, unsere IT-Dienstleister sowie Treuhand und Revision.
              </p>
              <p className="mt-4">
                Wir verkaufen keine Personendaten und geben sie nicht zu Werbezwecken an
                Dritte weiter.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-medium text-ink">
                7. Cookies, Analyse und Marketing
              </h2>
              <p>
                Diese Website verwendet Cookies und vergleichbare Technologien. Technisch
                notwendige Cookies werden immer gesetzt, da ohne sie der Betrieb der
                Seite nicht möglich ist. Für alle übrigen Kategorien holen wir vor dem
                Setzen Ihre Einwilligung über den Cookie-Banner ein. Sie können Ihre
                Auswahl jederzeit über den Link «Cookie-Einstellungen» im Footer ändern
                oder widerrufen.
              </p>
              <p className="mt-4 font-medium text-ink">Notwendige Cookies</p>
              <p className="mt-2">
                Speichern insbesondere Ihre Cookie-Einstellung selbst. Rechtsgrundlage ist
                unser berechtigtes Interesse am technischen Betrieb der Website
                (Art. 6 Abs. 1 lit. f DSGVO) beziehungsweise Art. 31 DSG.
              </p>
              <p className="mt-4 font-medium text-ink">Statistik: Google Analytics</p>
              <p className="mt-2">
                Bei erteilter Einwilligung setzen wir Google Analytics (Google Ireland
                Limited, Gordon House, Barrow Street, Dublin 4, Irland; für die
                Datenverarbeitung mitverantwortlich: Google LLC, USA) ein, um zu
                verstehen, wie unsere Website genutzt wird — etwa welche Seiten besucht
                und über welche Kanäle Besucherinnen und Besucher auf unsere Website
                gelangen. Dabei werden unter anderem IP-Adresse (gekürzt), Geräte- und
                Browserangaben, besuchte Seiten und Verweildauer verarbeitet.
              </p>
              <p className="mt-4">
                Die Daten können dabei an Server von Google in die USA übermittelt
                werden. Google hat sich dem EU-U.S. Data Privacy Framework unterstellt;
                ergänzend stützen wir die Übermittlung auf die Standardvertragsklauseln
                der EU-Kommission. Die Daten werden nach 14 Monaten automatisch gelöscht.
                Rechtsgrundlage ist Ihre Einwilligung (Art. 6 Abs. 1 lit. a DSGVO,
                Art. 31 Abs. 2 lit. a DSG).
              </p>
              <p className="mt-4 font-medium text-ink">Marketing: Werbepixel</p>
              <p className="mt-2">
                Bei erteilter Einwilligung setzen wir einen Werbepixel (z. B. Meta Pixel
                von Meta Platforms Ireland Limited) ein, um die Wirksamkeit unserer
                Online-Werbung zu messen und Ihnen auf anderen Plattformen für Sie
                relevantere Inhalte zu unserem Angebot zu zeigen. Dabei werden Angaben zu
                Ihrem Besuch unserer Website an den jeweiligen Anbieter übermittelt und
                können dort mit Ihrem dortigen Konto verknüpft werden. Es kann zu einer
                Übermittlung in die USA kommen; die Anbieter stützen sich dafür auf die
                Standardvertragsklauseln der EU-Kommission. Rechtsgrundlage ist Ihre
                Einwilligung (Art. 6 Abs. 1 lit. a DSGVO, Art. 31 Abs. 2 lit. a DSG).
              </p>
              <p className="mt-4">
                Google Analytics und der Werbepixel laden technisch erst, nachdem Sie der
                jeweiligen Kategorie zugestimmt haben. Ohne Ihre Zustimmung findet keine
                Übermittlung an diese Anbieter statt. Ihre Einwilligung können Sie
                jederzeit mit Wirkung für die Zukunft über «Cookie-Einstellungen» im
                Footer widerrufen.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-medium text-ink">
                8. Schriften und externe Dienste
              </h2>
              <p>
                Die verwendete Schrift Inter wird von unserem eigenen Server ausgeliefert.
                Beim Besuch der Website entsteht dadurch keine Verbindung zu Servern
                Dritter, und Ihre IP-Adresse wird nicht an Anbieter von Schriftdiensten
                übermittelt.
              </p>
              <p className="mt-4">
                Analysewerkzeuge und der Werbepixel sind unter Ziffer 7 beschrieben und
                laden nur mit Ihrer Einwilligung. Wir setzen darüber hinaus keine
                Social-Media-Plugins und keine eingebetteten Karten oder Videos ein.
                Links auf externe Websites — etwa zu unserem Immobilienpartner — führen
                erst nach einem Klick zu einer Verbindung mit dem jeweiligen Anbieter.
                Für dessen Datenbearbeitung gilt deren eigene Datenschutzerklärung.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-medium text-ink">9. Datensicherheit</h2>
              <p>
                Wir treffen angemessene technische und organisatorische Massnahmen, um
                Ihre Daten gegen unbefugten Zugriff, Verlust und Missbrauch zu schützen.
                Die Übertragung dieser Website erfolgt verschlüsselt über HTTPS. Ein
                vollständiger Schutz vor jedem denkbaren Zugriff lässt sich bei der
                Übermittlung über das Internet allerdings nicht gewährleisten.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-medium text-ink">10. Ihre Rechte</h2>
              <p>Sie haben im Rahmen des anwendbaren Rechts das Recht,</p>
              <ul className="mt-4 space-y-2 pl-5">
                <li className="list-disc">
                  Auskunft über die von uns bearbeiteten Daten zu verlangen,
                </li>
                <li className="list-disc">
                  unrichtige Daten berichtigen zu lassen,
                </li>
                <li className="list-disc">
                  die Löschung oder Einschränkung der Bearbeitung zu verlangen,
                </li>
                <li className="list-disc">
                  Ihre Daten in einem gängigen Format herauszuverlangen oder an einen
                  anderen Verantwortlichen übertragen zu lassen,
                </li>
                <li className="list-disc">
                  einer Bearbeitung zu widersprechen und eine erteilte Einwilligung
                  jederzeit zu widerrufen.
                </li>
              </ul>
              <p className="mt-4">
                Wenden Sie sich dazu an{' '}
                <a href={`mailto:${firma.email}`} className="underline underline-offset-4">
                  {firma.email}
                </a>
                . Zur Prüfung Ihrer Identität können wir einen Nachweis verlangen. Diese
                Rechte können eingeschränkt sein, wenn gesetzliche Pflichten oder
                überwiegende Interessen entgegenstehen.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-medium text-ink">11. Beschwerderecht</h2>
              <p>
                Sie haben das Recht, sich bei der Aufsichtsbehörde zu beschweren. In der
                Schweiz ist dies der Eidgenössische Datenschutz- und
                Öffentlichkeitsbeauftragte (EDÖB), Feldeggweg 1, 3003 Bern. Personen mit
                Aufenthalt in der EU können sich an die für sie zuständige
                Datenschutzbehörde wenden.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-medium text-ink">12. Änderungen</h2>
              <p>
                Wir können diese Datenschutzerklärung anpassen, wenn sich unsere
                Bearbeitung oder die rechtlichen Vorgaben ändern. Es gilt jeweils die auf
                dieser Seite veröffentlichte Fassung. Stand: {stand}.
              </p>
            </section>
          </div>
        </div>
      </Container>
    </div>
  );
}
