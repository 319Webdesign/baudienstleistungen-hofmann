import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const CANONICAL_HOST = "www.baudienstleistungen-hofmann.de";

export function proxy(request: NextRequest) {
  const host = request.headers.get("host")?.split(":")[0] ?? "";
  const proto = request.headers.get("x-forwarded-proto");

  const isProductionHost =
    host === CANONICAL_HOST || host === "baudienstleistungen-hofmann.de";

  if (!isProductionHost) {
    return NextResponse.next();
  }

  const needsHttps = proto === "http";
  const needsWww = host === "baudienstleistungen-hofmann.de";

  if (needsHttps || needsWww) {
    const url = request.nextUrl.clone();
    url.protocol = "https:";
    url.host = CANONICAL_HOST;
    url.port = "";
    return NextResponse.redirect(url, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
