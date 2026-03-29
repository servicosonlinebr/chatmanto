import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Camisa Oficial Seleção Brasileira | Premium | Frete Grátis",
  description:
    "Vista o orgulho do Brasil. Camisa oficial da Seleção Brasileira com qualidade premium, tecido confortável e acabamento impecável. Entrega em até 3 dias úteis. Frete grátis!",
  keywords: [
    "camisa seleção brasileira",
    "camisa brasil",
    "kit casal",
    "frete grátis",
    "entrega rápida",
    "copa do mundo",
  ],
  authors: [{ name: "Camisa Brasil Premium" }],
  openGraph: {
    title: "Camisa Oficial Seleção Brasileira | Premium",
    description:
      "Vista o orgulho do Brasil. Camisa premium com frete grátis e entrega em até 3 dias úteis.",
    images: [
      {
        url: "https://i.ibb.co/gFtcGtCv/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Camisa Seleção Brasileira Premium",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Camisa Oficial Seleção Brasileira | Premium",
    description: "Vista o orgulho do Brasil. Frete grátis!",
    images: ["https://i.ibb.co/gFtcGtCv/hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Rajdhani:wght@400;500;600;700&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-brand-black">{children}</body>
    </html>
  );
}
