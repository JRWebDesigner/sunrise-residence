import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { FaWhatsapp } from 'react-icons/fa';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Appartamento in Affitto ad Alba | Centro Storico - Comfort & Stile",
  description: "Prenota il tuo soggiorno ad Alba nel nostro appartamento turistico. Posizione centrale, Wi-Fi, cucina attrezzata e vista sulle Langhe. Miglior prezzo garantito!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
         <a
        href="https://wa.me/393317415002"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-colors"
        aria-label="Contactar por WhatsApp"
      >
        <FaWhatsapp className="w-6 h-6" />
      </a>
      </body>
    </html>
  );
}
