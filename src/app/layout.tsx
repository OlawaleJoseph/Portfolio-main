import type { Metadata } from "next";
import { Bricolage_Grotesque, IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { site } from "@/content/site";
import { siteUrl } from "@/lib/content";
import { themeScript } from "@/lib/theme-script";
import "./globals.css";

const display = Bricolage_Grotesque({
  variable: "--font-display",
  weight: ["500", "700"],
  subsets: ["latin"],
});

const sans = IBM_Plex_Sans({
  variable: "--font-sans",
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

const mono = IBM_Plex_Mono({
  variable: "--font-mono",
  weight: ["400", "500"],
  subsets: ["latin"],
});

const title = `${site.name} — Commerce and product engineering`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: title, template: `%s · ${site.name}` },
  description: site.description,
  openGraph: { title, description: site.description, type: "website", siteName: site.name },
  twitter: { card: "summary_large_image", title, description: site.description },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    // data-theme is corrected by the inline script before paint, hence suppressHydrationWarning.
    <html
      lang="en"
      data-theme="light"
      className={`${display.variable} ${sans.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <Nav />
        <main id="top">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
