import { Providers } from "./providers";
import "./globals.css";
import { Metadata } from "next";
import { formatUrlDefault } from "./_lib/formatUrl";
import { Analytics } from "@vercel/analytics/react";
import { Blog, WithContext } from "schema-dts";
import Script from "next/script";
import { allPosts } from "@/.contentlayer/generated";
import Header from "@/components/Header";
import { Agentation  } from "agentation";
import { itim, lora } from "./fonts";

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
  inLanguage: 'pt-BR',
  description: "Nesse blog compartilho Minha jornada, vivências, derrotas, vitórias e desafios.",
  blogPost: {
    "@id": allPosts.reduce((latest, post) => {
      return new Date(post.createdAt) > new Date(latest.createdAt) ? post : latest;
    }, allPosts[0])._id
  },
  about: "My Life",
  author: "Ivan Freire",
  character: {
    "@type": "Person",
    name: "Ivan Freire",
  },
  creator: {
    "@type": "Person",
    name: "Ivan Freire",
  }
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
      <body className={`${itim.variable} ${lora.variable} ${lora.className} bg-he-background`}>
        <Providers>
          <Header />
          {children}
        </Providers>
        <Analytics />
        {process.env.NODE_ENV === "development" && <Agentation />}
      </body>
    </html>
  );
}
