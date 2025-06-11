// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sunrise Residence",
  description: "Prenota il tuo soggiorno ad Alba nel nostro appartamento turistico. Posizione centrale, Wi-Fi, cucina attrezzata e vista sulle Langhe. Miglior prezzo garantito!",
  alternates: {
    canonical: "https://tusitio.com/",
    languages: {
      "it": "https://sunriseresidencealba.com/",
      "fr": "https://sunriseresidencealba.com/fr",
      "es": "https://sunriseresidencealba.com/es",
      "en": "https://sunriseresidencealba.com/en",
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}

