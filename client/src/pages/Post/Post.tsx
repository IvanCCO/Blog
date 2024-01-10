import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import MarkdownFormatter from "../../components/MarkdownFormatter";

import EX from "../../assets/Markdown/ex.md";
import ProgressBar from "../../components/ProgressBar";
import { SampleCard } from "../../components/SampleCard";
import { TopicTag } from "../../components/TopicTag";
import { importLocalMarkdownFile } from "../../hooks/useFileUtils";
import { ActionRow } from "./ActionRow";
import { ImageBlock } from "./ImageBlock";
import { ProfileRow } from "./ProfileRow";

export function Post() {
  const content = importLocalMarkdownFile(EX);

  const sampleCards: JSX.Element[] = [];

  for (let index = 0; index < 3; index++) {
    sampleCards.push(<SampleCard key={index} />);
  }

  const color = (n: number): string => {
    switch (n) {
      case 1:
        return "purple";
      case 2:
        return "cyan";
      case 3:
        return "pink";
      case 4:
        return "linkedin";
      case 5:
        return "gray";
      default:
        return "linkedin";
    }
  };
  return (
    <>
      <ProgressBar />
      <Header />
      <main className="main space-y-2 sm:px-28 md:px-44 lg:px-52 xl:px-72 2xl:px-96  bg-he-background">
        <div className="space-y-4">
          <div className="w-fit">
            <TopicTag
              color={color(Math.floor(Math.random() * (5 - 0 + 1) + 0))}
              variant="solid"
              title="Tecnology"
              borderRadius="full"
            />
          </div>

          <h1 className="text-xl sm:text-2xl md:text-3xl text-white font-semibold">
            Modern online and offline payments for Africa
          </h1>
          <p className="text-xs sm:text-sm font-light text-neutral-400">
            {/* TODO: Arrumar esse cara para ficar dinamico */}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia
            delectus dignissimos doloremque aliquid ullam iure, tempora
            obcaecati nulla consequuntur accusamus nam!
          </p>

          <ProfileRow />
          <ActionRow />
        </div>
        <div className="py-6">
          <ImageBlock />
        </div>

        <div>
          <MarkdownFormatter text={content} />
        </div>
        {/* TODO: Colocar carinha para mostrar os posts relacionados */}

        <Footer />
      </main>
    </>
  );
}
