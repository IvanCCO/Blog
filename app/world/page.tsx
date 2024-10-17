import { formatUrlDefault } from "../_lib/formatUrl";
import World from "../article/[slug]/World";
import { world } from "./worldData";
import type { Metadata } from "next";

const openGraph = {
  title: "Globo | Todos os lugares que já estive.",
  description:
    "Meu sonho é conhecer os 4 oceanos, ter contato com diversas culturas, aprender dezenas de idiomas, e não vou desistir.",
};

export const metadata: Metadata = {
  title: openGraph.title,
  description: openGraph.description,
  openGraph: {
    siteName: "Ivan Freire",
    images: [
      {
        url: formatUrlDefault("world-thumb.png"),
        width: 800,
        height: 600,
      },
    ],
    type: "website",
    title: openGraph.title,
    description: openGraph.description,
  },
  twitter: {
    card: "summary_large_image",
    images: formatUrlDefault("world-thumb.png"),
    title: openGraph.title,
    description: openGraph.description,
  },
};

export default function Page() {
  return <World locations={world.features} />;
}
