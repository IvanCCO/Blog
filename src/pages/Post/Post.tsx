import { PageType } from "../../data/constants";
import { Header } from "../../components/Header";
import MarkdownFormatter from "../../components/MarkdownFormatter";
import { Image } from "@chakra-ui/react";
import EX from "../../assets/Markdown/ex.md";
import { importLocalMarkdownFile } from "../../hooks/useFileUtils";
import { TopicTag } from "../../components/TopicTag";

export function Post() {
  const content = importLocalMarkdownFile(EX);

  return (
    <>
      <Header type={PageType.DEFAULT} />
      <main className="main space-y-6">
        <div className="flex-col space-y-5">
          <Image
            src="https://th.bing.com/th/id/OIG.rFZQiB1UylKPh2zrH_Pt?pid=ImgGn"
            alt="A big octopus managing containers"
            borderStartEndRadius="2xl"
            borderStartStartRadius="2xl"
            objectFit="cover"
          />
          <TopicTag color="red" variant="solid" title="Art" />
          <MarkdownFormatter text={content} />
        </div>
      </main>
    </>
  );
}
