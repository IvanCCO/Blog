"use client";
import Footer from "@/components/Footer";
import Header from "../../components/Header";
import MarkdownFormatter from "@/components/MarkdownFormatter";

export default function About() {
  const content = `Esse blog é um marco importante pra mim, sendo meu primeiro projeto solo, desde a ideia inicial até o lançamento. Mas o que exatamente é esse site? Um portfólio? Um blog? Na verdade, é um pouco de tudo isso e mais. Aqui é o meu cantinho virtual, onde guardo meus pensamentos, descobertas e insights que acho que valem a pena serem compartilhados.


É um espaço versátil onde você vai encontrar tutoriais, minhas opiniões sobre tecnologias, os livros que estou lendo e até um pouco da minha jornada de aprendizado. Não é só um blog com artigos prontos e acabados; é um lugar onde compartilho trabalhos em progresso, ideias que vêm à mente e coisas que estou experimentando.


Resumindo, é como se fosse meu jardim digital pessoal. Um espaço que vai além dos rótulos convencionais, abraçando a criatividade e a exploração. Aqui, você pode acompanhar a evolução dos meus pensamentos e criações, mostrando a minha jornada de aprendizado e compartilhamento do meu jeito.


# O que é um Jardim Digital?

Um jardim digital é um lugar para cultivar e compartilhar pensamentos sobre temas específicos, diferente dos blogs tradicionais com artigos polidos e refinados. Ao contrário dessas plataformas, os jardins digitais valorizam a natureza bruta e ainda não polida das ideias em desenvolvimento.


Pense em um jardim digital como um laboratório dinâmico, um espaço cheio de ideias incompletas, imperfeições, experimentos e até erros. É como o laboratório do Homem de Ferro, onde as criações são construídas, ajustadas, e as vezes até jogadas no lixo


No fundo, um jardim digital é inovação, imperfeição e na evolução das ideias, criando um ambiente que incentiva exploração, experimentação e crescimento orgânico dos conceitos. Não é só uma plataforma, é um espaço vivo onde as ideias são plantadas, cuidadas e deixam de florescer em sua forma mais autêntica e natural. 

Não fui eu quem criei esse conceito, peguei de inspiração de outros sites que vi na minha jornada para construção desse. Segue alguns Jardins Digitais que encontrei na internet:
- [Obsidian Digital Garden](https://dg-docs.ole.dev/)
- [Digital Garden](https://digital-garden.dev/garden)

# Agradecimentos

Quero expressar minha imensa gratidão à minha mãe, que sempre me apoiou e me ajudou a focar nos estudos e a seguir minhas paixões. Seu encorajamento e apoio em todas as minhas decisões foram fundamentais para minha jornada.


E este projeto também é um reflexo do apoio incrível da minha namorada, Stéphanie. Seu apoio me manteve motivado e me ajudou a não desistir mesmo quando a motivação estava em baixa.

**@Ivan Freire**`;

  return (
    <>
      <Header />

      <main className="main px-default-width md:px-44 sm:px-28 lg:px-52 xl:px-72 2xl:px-[30rem] 3xl:px-[36rem] bg-he-background">
        <MarkdownFormatter text={content} />
        <Footer />
      </main>
    </>
  );
}
