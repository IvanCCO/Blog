import { Inter } from "next/font/google";
import { Providers } from "./providers";
import "./globals.css";
import { Metadata } from "next";
import { formatUrlDefault } from "./_lib/formatUrl";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ivan Freire | meu Palácio Digital",
  description:
    "Aqui eu compartilho meus pensamentos, ideias, opniões e muito mais.",
  authors: { name: "Ivan Freire" },
  keywords: ["livro", "artigo", "codigo", "finanças", "HowTo", "tecnologia"],
  openGraph: {
    siteName: "Ivan Freire",
    title: "Ivan Freire | meu Palácio Digital",
    description:
      "Aqui eu compartilho meus pensamentos, ideias, opniões e muito mais",
    images: formatUrlDefault("logo-taxco.png"),
    type: "article",
  },
  twitter: {
    title: "Ivan Freire | meu Palácio Digital",
    description:
      "Aqui eu compartilho meus pensamentos, ideias, opniões e muito mais",
    images: formatUrlDefault("logo-taxco.png"),
  },
  alternates: {
    canonical: "https://www.ivanfreire.me"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" style={{ colorScheme: "dark" }} suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>{children}</Providers>
        <Analytics />
      </body>
    </html>
  );
}
