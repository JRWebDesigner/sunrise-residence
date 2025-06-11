// app/fr/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sunrise Residence",
  description: "Bienvenue à Sunrise Residence",
  alternates: {
    canonical: "https://tusitio.com/fr",
    languages: {
      "it": "https://tusitio.com/",
      "fr": "https://tusitio.com/fr",
    },
  },
};

export default function FrenchLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}

