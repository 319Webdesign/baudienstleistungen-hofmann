import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="flex flex-1 items-center justify-center bg-surface px-4 py-24">
      <div className="max-w-lg text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-orange">
          404
        </p>
        <h1 className="mt-3 text-3xl font-bold text-anthracite">
          Seite nicht gefunden
        </h1>
        <p className="mt-4 text-muted">
          Die angeforderte Seite existiert nicht oder wurde verschoben.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href="/">Zur Startseite</Button>
          <Button href="/kontakt" variant="outline">
            Kontakt
          </Button>
        </div>
        <p className="mt-6 text-sm text-muted">
          Oder zurück zur{" "}
          <Link href="/leistungen" className="text-orange hover:underline">
            Leistungsübersicht
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
