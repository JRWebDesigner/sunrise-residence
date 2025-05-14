import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import {ReactNode} from 'react'
import {useLocale} from 'next-intl'
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
  title: "Sunrise Residence",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = useLocale();
  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
         <a
        href="https://wa.me/393317415002"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-colors"
        aria-label="Contactar por WhatsApp"
      >
        <FaWhatsapp className="w-6 h-6" />
      </a>
      </body>
    </html>
  );
}
