import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Innova Gestión Hotelera — Tu hotel, rentable por diseño",
  description:
    "Revenue management, data intelligence y distribución para hoteles independientes en Canarias. Partner estratégico para maximizar tu RevPAR.",
  keywords: [
    "revenue management hoteles",
    "consultoría hotelera Canarias",
    "gestión hotelera Lanzarote",
    "revenue manager freelance",
    "mejorar RevPAR hotel",
  ],
  authors: [{ name: "David Cabrera" }],
  openGraph: {
    title: "Innova Gestión Hotelera — Tu hotel, rentable por diseño",
    description:
      "Revenue management, data intelligence y distribución para hoteles independientes en Canarias.",
    locale: "es_ES",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
