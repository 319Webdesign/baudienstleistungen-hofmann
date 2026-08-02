import type { Metadata } from "next";
import { Archivo, Source_Sans_3 } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileContactBar } from "@/components/layout/MobileContactBar";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/siteConfig";
import { buildLocalBusinessJsonLd } from "@/lib/seo";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  display: "swap",
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.seo.defaultTitle,
    template: siteConfig.seo.titleTemplate,
  },
  description: siteConfig.seo.defaultDescription,
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: siteConfig.seo.locale,
    siteName: siteConfig.name,
    title: siteConfig.seo.defaultTitle,
    description: siteConfig.seo.defaultDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${archivo.variable} ${sourceSans.variable} h-full antialiased`}
    >
      <body className="has-mobile-bar flex min-h-full w-full max-w-full flex-col overflow-x-clip font-sans">
        <JsonLd data={buildLocalBusinessJsonLd()} />
        <Header />
        <main className="w-full max-w-full min-w-0 flex-1 overflow-x-clip">
          {children}
        </main>
        <Footer />
        <MobileContactBar />
      </body>
    </html>
  );
}
