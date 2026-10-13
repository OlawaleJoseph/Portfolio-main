import type { Metadata } from "next";
import { Instrument_Serif, Inter } from "next/font/google";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { profile } from "@/content/profile";
import { initials, siteUrl } from "@/lib/content";
import { themeScript } from "@/lib/theme-script";
import "./globals.css";

const serif = Instrument_Serif({
  variable: "--font-serif",
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const sans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const title = `${profile.name} — ${profile.role}`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: title, template: `%s · ${profile.name}` },
  description: profile.tagline,
  openGraph: { title, description: profile.tagline, type: "website" },
  twitter: { card: "summary_large_image", title, description: profile.tagline },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    // data-theme is corrected by the inline script before paint, hence suppressHydrationWarning.
    <html lang="en" data-theme="dark" className={`${serif.variable} ${sans.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <Nav initials={initials(profile.name)} />
        <main id="top">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
