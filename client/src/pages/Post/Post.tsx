import { useState, useEffect } from "react";
import { PageType } from "../../data/constants";
import { Header } from "../../components/Header";
import MarkdownFormatter from "../../components/MarkdownFormatter";
import { Image } from "@chakra-ui/react";
import EX from "../../assets/Markdown/ex.md"
import { importLocalMarkdownFile } from "../../hooks/useFileUtils";

export function Post() {

  const content = importLocalMarkdownFile(EX)

  return (
    <>
      <Header type={PageType.DEFAULT} />
      <main className="main space-y-6">
        <div className="flex-col space-y-5">
          <Image
            src="https://th.bing.com/th/id/OIG.pM5yvYt8jXgKE4HyVvUx?pid=ImgGn"
            alt="A big octopus managing containers"
            borderStartEndRadius="2xl"
            borderStartStartRadius="2xl"
            objectFit="cover"
          />
          <MarkdownFormatter text={content}/>
        </div>
      </main>
    </>
  );
}
