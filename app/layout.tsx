import { Inter } from "next/font/google";
import { Providers } from "./providers";
import "./globals.css";
import { Metadata } from "next";
import { formatUrlDefault } from "./_lib/formatUrl";
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ivan Freire | meu Palácio Digital",
  description: "Aqui eu compartilho meus pensamentos, ideias, opniões e muito mais.",
  authors: { name: "Ivan Freire" },
  keywords: ["livro", "artigo", "codigo", "finanças", "HowTo", "tecnologia"],
  openGraph: {
    siteName: "Ivan Freire",
    title: "Ivan Freire | meu Palácio Digital",
    description: "Aqui eu compartilho meus pensamentos, ideias, opniões e muito mais",
    images: formatUrlDefault("logo-taxco.png"),
    type: "article",
  },
  twitter: {
    title: "Ivan Freire | meu Palácio Digital",
    description: "Aqui eu compartilho meus pensamentos, ideias, opniões e muito mais",
    images: formatUrlDefault("logo-taxco.png"),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ colorScheme: "dark" }} suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>{children}</Providers>
        <SpeedInsights/>
        <Analytics />
      </body>
    </html>
  );
}
