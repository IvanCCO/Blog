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
      <main className="main space-y-6 px-0">
        <Image
          src="https://th.bing.com/th/id/OIG.dkD1meYhDHXfRc6PlsNr?pid=ImgGn"
          alt="A big octopus managing containers"
          objectFit="cover"
        />

        <div className="flex-col space-y-5 px-6">
          <TopicTag color="red" variant="solid" title="Art" />
          <MarkdownFormatter text={content} />
        </div>
      </main>
    </>
  );
}
