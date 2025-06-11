// app/fr/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sunrise Residence: Appartement Alba centre (terrasse & WiFi)",
  description: "Sunrise Residence propose un appartement moderne au centre d’Alba avec terrasse, WiFi gratuit et parking. À proximité des attractions des Langhe. Réservez !",
  alternates: {
    canonical: "https://sunriseresidencealba.com/fr",
    languages: {
      "it": "https://sunriseresidencealba.com/",
      "fr": "https://sunriseresidencealba.com/fr",
      "es": "https://sunriseresidencealba.com/es",
      "en": "https://sunriseresidencealba.com/en",
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

