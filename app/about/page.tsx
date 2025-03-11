import Header from "../../components/Header";
import MarkdownFormatter from "@/components/MarkdownFormatter";
import type { Metadata } from "next";
import { formatUrlDefault } from "@/app/_lib/formatUrl";
import Footer from "@/components/Footer";
import { AboutPage, WithContext } from "schema-dts";
import Script from "next/script";
import { Signature } from "@/components/Signature";

const openGraph = {
  title: "Sobre o Blog",
  description:
    "Por que eu construi esse blog? Não era melhor ter feito outras coisas da minha vida?",
};

export const metadata: Metadata = {
  title: openGraph.title,
  description: openGraph.description,
  openGraph: {
    siteName: "Ivan Freire",
    images: [
      {
        url: formatUrlDefault("logo-taxco.png"),
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
    images: formatUrlDefault("logo-taxco.png"),
    title: openGraph.title,
    description: openGraph.description,
  },
};

const jsonLd: WithContext<AboutPage> =
{
  "@context": "https://schema.org",
  '@id': 'https://www.ivanfreire.me/#about',
  '@type': 'AboutPage',
  url: 'https://www.ivanfreire.me/about',
  name: "Ivan Freire",
  inLanguage: 'pt-BR',
  description: 'Nesse blog compartilho Minha jornada, vivências, derrotas, vitórias e desafios.',
  mainEntity: { '@id': 'https://www.ivanfreire.me' },
  character: {
    "@type": "Person",
    name: "Ivan Freire",
  },
  creator: {
    "@type": "Person",
    name: "Ivan Freire",
  }
};

const code = `\`\`\`js
// É assim que funciona a definição da planta na prática
function choosePlant(dateString?: string): string {

  if (!dateString) {
    return "🍇";
  }

  const date = new Date(dateString);
  const now = new Date();

  const diffInMonths = (now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24 * 30);

  if (diffInMonths < 3) return "🌱";
  if (diffInMonths < 6) return "🍇";
  return "🌲";
}
\`\`\``;


export default function About() {
  const content = `

# Que site é esse?

Esse blog (que não é um blog) é um marco importante pra mim, sendo meu primeiro projeto solo, desde a ideia inicial até o lançamento. Mas o que exatamente é esse site? Um portfólio? Um blog? Na verdade, é um pouco de tudo isso e mais. Aqui é o meu cantinho virtual, onde guardo meus pensamentos, descobertas e insights que acho que valem a pena serem compartilhados.

/

É um espaço versátil onde você vai encontrar tutoriais, minhas opiniões sobre tecnologias, os livros que estou lendo e até um pouco da minha jornada de aprendizado. Não é só um blog com artigos prontos e acabados; é um lugar onde compartilho trabalhos em progresso, ideias que vêm à mente e coisas que estou experimentando.

/

Resumindo, é como se fosse meu jardim digital pessoal. Um espaço que vai além dos rótulos convencionais, abraçando a criatividade e a exploração. Aqui, você pode acompanhar a evolução dos meus pensamentos e criações, mostrando a minha jornada de aprendizado e compartilhamento do meu jeito.

/

# O que é um Jardim Digital?

Um jardim digital é um lugar para cultivar e compartilhar pensamentos sobre temas específicos, diferente dos blogs tradicionais com artigos polidos e refinados. Ao contrário dessas plataformas, os jardins digitais valorizam a natureza bruta e ainda não polida das ideias em desenvolvimento.

/

Pense em um jardim digital como um laboratório dinâmico, um espaço cheio de ideias incompletas, imperfeições, experimentos e até erros. É como o laboratório do Homem de Ferro, onde as criações são construídas, ajustadas, e as vezes até jogadas no lixo

/

No fundo, um jardim digital é inovação, imperfeição e na evolução das ideias, criando um ambiente que incentiva exploração, experimentação e crescimento orgânico dos conceitos. Não é só uma plataforma, é um espaço vivo onde as ideias são plantadas, cuidadas e deixam de florescer em sua forma mais autêntica e natural. 

/

Não fui eu quem criei esse conceito, peguei de inspiração de outros sites que vi na minha jornada para construção desse. Segue alguns Jardins Digitais que encontrei na internet:
- [Obsidian Digital Garden](https://dg-docs.ole.dev/)
- [Digital Garden](https://digital-garden.dev/garden)
- [Brad Woods - Esse realmente me inspirou demais](https://garden.bradwoods.io)

## O que são os 🌱🌲🍇?

Basicamente eles representam a **maturidade da ideia**, imagina que uma ideia acaba de nascer então ela é uma semente, nesse caso é uma semente de uva.

/

Então conforme a ideia for ganhando maturidade, ou seja, está o tempo de criação dela for aumentando então ela vai se transformando em uma árvore, e depois de mais algum tempo
ela começara a dar frutos, nesse caso uma Uva 🍇

${code}

> [!note] Por que uma uva? 🍇
> Porque eu amo uva! 🍇

# Agradecimentos

Quero expressar minha imensa gratidão à minha mãe, que sempre me apoiou e me ajudou a focar nos estudos e a seguir minhas paixões. Seu encorajamento e apoio em todas as minhas decisões foram fundamentais para minha jornada.

/

E este projeto também é um reflexo do apoio incrível da minha namorada, Stéphanie. Seu apoio me manteve motivado e me ajudou a não desistir mesmo quando a motivação estava em baixa.` ;

  return (
    <>
      <Script
        id="about-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />
      <Header />

      <main className="main px-default-width md:px-44 sm:px-28 lg:px-52 xl:px-72 2xl:px-[30rem] 3xl:px-[36rem] bg-he-background">
        <MarkdownFormatter text={content} />
        <Signature/>
        <Footer />
      </main>
    </>
  );
}
