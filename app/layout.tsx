import { Inter } from "next/font/google";
import { Providers } from "./providers";
import "./globals.css";
import { Metadata } from "next";
import { formatUrlDefault } from "./_lib/formatUrl";
import { Analytics } from "@vercel/analytics/react";
import { Blog, WithContext } from "schema-dts";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ivan Freire",
  description:
    "Nesse blog compartilho minha jornada, vivências, derrotas, vitórias e desafios.",
  authors: { name: "Ivan Freire" },
  keywords: ["livro", "empreendedorismo", "tecnologia"],
  openGraph: {
    siteName: "Ivan Freire",
    title: "Ivan Freire",
    description:
      "Nesse blog compartilho Minha jornada, vivências, derrotas, vitórias e desafios.",
    images: formatUrlDefault("logo-taxco.png"),
    type: "article",
  },
  twitter: {
    title: "Ivan Freire",
    description:
      "Nesse blog compartilho Minha jornada, vivências, derrotas, vitórias e desafios.",
    images: formatUrlDefault("logo-taxco.png"),
  },
  alternates: {
    canonical: "https://www.ivanfreire.me"
  }
};

const jsonLd: WithContext<Blog> =
{
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Ivan Freire",
  url: "https://www.ivanfreire.me",
  description: "Meu Blog onde compartilho meus pensamentos, ideias, opniões e aprendizados.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" style={{ colorScheme: "dark" }} suppressHydrationWarning>
      <Script
        id="blog-root-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />
      <body className={inter.className}>
        <Providers>{children}</Providers>
        <Analytics />
      </body>
    </html>
  );
}
