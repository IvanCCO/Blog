import { Inter } from "next/font/google";
import { Providers } from "./providers";
import "./globals.css";
import { Metadata } from "next";
import { formatUrlDefault } from "./_lib/formatUrl";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Taxco | meu Palácio Digital",
  description: "Aqui eu compartilho meus pensamentos, ideias, opniões e muito mais.",
  authors: { name: "Ivan Miranda" },
  keywords: ["livro", "artigo", "codigo", "finanças", "HowTo", "tecnologia"],
  openGraph: {
    siteName: "Taxco",
    title: "Taxco | meu Palácio Digital",
    description: "Aqui eu compartilho meus pensamentos, ideias, opniões e muito mais",
    images: formatUrlDefault("logo-taxco.png"),
    type: "article",
  },
  twitter: {
    title: "Taxco | meu Palácio Digital",
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
      </body>
    </html>
  );
}
