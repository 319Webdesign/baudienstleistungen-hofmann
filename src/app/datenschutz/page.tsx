import type { Metadata } from "next";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Datenschutz",
  description: `Datenschutzerklärung von ${siteConfig.name}`,
  robots: { index: false, follow: true },
};

export default function DatenschutzPage() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-anthracite sm:text-4xl">
          Datenschutzerklärung
        </h1>
        <span className="mt-4 block h-1 w-14 rounded-full bg-orange" aria-hidden />

        <div className="mt-10 space-y-8 text-muted leading-relaxed">
          <p className="rounded-lg border border-orange/20 bg-surface px-4 py-3 text-sm text-anthracite">
            Hinweis: Diese Datenschutzerklärung ist ein Platzhalter-Grundgerüst und
            muss vor dem Livegang rechtlich geprüft und an die tatsächliche
            Datenverarbeitung angepasst werden.
          </p>

          <div>
            <h2 className="text-xl font-bold text-anthracite">1. Verantwortlicher</h2>
            <p className="mt-3">
              {siteConfig.name}
              <br />
              {siteConfig.owner}
              <br />
              {siteConfig.contact.address.full}
              <br />
              E-Mail: {siteConfig.contact.email}
              <br />
              Telefon: {siteConfig.contact.phone}
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-anthracite">
              2. Erhebung und Speicherung personenbezogener Daten
            </h2>
            <p className="mt-3">
              Beim Besuch dieser Website können technisch notwendige Daten
              verarbeitet werden (z.&nbsp;B. IP-Adresse, Datum und Uhrzeit der
              Anfrage, verwendeter Browser). Zusätzlich können personenbezogene
              Daten verarbeitet werden, wenn Sie uns über das Kontaktformular,
              per E-Mail oder telefonisch kontaktieren.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-anthracite">
              3. Kontaktformular und Anfragen
            </h2>
            <p className="mt-3">
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden
              Ihre Angaben aus dem Formular inklusive der von Ihnen dort
              angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den
              Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir
              nicht ohne Ihre Einwilligung weiter.
            </p>
            <p className="mt-3">
              Rechtsgrundlage für die Verarbeitung ist Art.&nbsp;6 Abs.&nbsp;1
              lit.&nbsp;b DSGVO (vorvertragliche Maßnahmen / Vertrag) bzw.
              Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;f DSGVO (berechtigtes Interesse an
              der Bearbeitung Ihrer Anfrage).
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-anthracite">4. Hosting</h2>
            <p className="mt-3">
              [Angaben zum Hosting-Anbieter ergänzen – Name, Sitz, Auftragsverarbeitung]
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-anthracite">
              5. Cookies und Analyse
            </h2>
            <p className="mt-3">
              Sofern Cookies, Tracking- oder Analysetools eingesetzt werden, sind
              diese hier zu beschreiben. Derzeit ist keine Analyse-Software im
              Grundgerüst eingebunden.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-anthracite">6. Ihre Rechte</h2>
            <p className="mt-3">
              Sie haben jederzeit das Recht auf Auskunft, Berichtigung, Löschung,
              Einschränkung der Verarbeitung, Datenübertragbarkeit sowie
              Widerspruch gegen die Verarbeitung. Zudem besteht ein
              Beschwerderecht bei einer Datenschutzaufsichtsbehörde.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-anthracite">
              7. Speicherdauer
            </h2>
            <p className="mt-3">
              Personenbezogene Daten werden nur so lange gespeichert, wie es für
              die jeweiligen Zwecke erforderlich ist oder gesetzliche
              Aufbewahrungsfristen bestehen.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-anthracite">
              8. Aktualität dieser Erklärung
            </h2>
            <p className="mt-3">
              Stand: Platzhalter – Datum der finalen rechtlichen Freigabe
              eintragen.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
