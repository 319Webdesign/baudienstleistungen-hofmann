import type { Metadata } from "next";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Impressum",
  description: `Impressum von ${siteConfig.name}`,
  robots: { index: false, follow: true },
};

export default function ImpressumPage() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-anthracite sm:text-4xl">
          Impressum
        </h1>
        <span className="mt-4 block h-1 w-14 rounded-full bg-orange" aria-hidden />

        <div className="mt-10 space-y-8 text-muted leading-relaxed">
          <div>
            <h2 className="text-xl font-bold text-anthracite">Angaben gemäß § 5 TMG</h2>
            <p className="mt-3">
              {siteConfig.name}
              <br />
              Inhaber: {siteConfig.owner}
              <br />
              {siteConfig.contact.address.street}
              <br />
              {siteConfig.contact.address.zip} {siteConfig.contact.address.city}
            </p>
            <p className="mt-3 text-sm text-orange">
              Hinweis: Adressdaten sind Platzhalter und müssen vor Veröffentlichung
              durch vollständige und korrekte Angaben ersetzt werden.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-anthracite">Kontakt</h2>
            <p className="mt-3">
              Telefon: {siteConfig.contact.phone}
              <br />
              E-Mail: {siteConfig.contact.email}
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-anthracite">
              Umsatzsteuer-ID
            </h2>
            <p className="mt-3">
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
              <br />
              [USt-IdNr. eintragen – sofern vorhanden]
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-anthracite">
              Berufsbezeichnung und berufsrechtliche Regelungen
            </h2>
            <p className="mt-3">
              Berufsbezeichnung: Maurermeister / staatlich geprüfter Bautechniker
              <br />
              Verliehen in: Bundesrepublik Deutschland
              <br />
              [Zuständige Kammer / Aufsichtsbehörde – sofern erforderlich eintragen]
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-anthracite">
              Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
            </h2>
            <p className="mt-3">
              {siteConfig.owner}
              <br />
              {siteConfig.contact.address.full}
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-anthracite">
              Haftung für Inhalte
            </h2>
            <p className="mt-3">
              Als Diensteanbieter sind wir gemäß den allgemeinen Gesetzen für eigene
              Inhalte auf diesen Seiten verantwortlich. Wir sind jedoch nicht
              verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
              überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
              Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der
              Nutzung von Informationen nach den allgemeinen Gesetzen bleiben
              hiervon unberührt.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-anthracite">
              Haftung für Links
            </h2>
            <p className="mt-3">
              Unser Angebot enthält gegebenenfalls Links zu externen Websites
              Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können
              wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die
              Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder
              Betreiber der Seiten verantwortlich.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-anthracite">Urheberrecht</h2>
            <p className="mt-3">
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
              Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
              Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
              Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des
              jeweiligen Autors bzw. Erstellers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
