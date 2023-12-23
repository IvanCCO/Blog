import { PageType } from "../../data/constants";
import { Header } from "../../components/Header";
import MarkdownCode from "../../components/Markdown/MarkdownCode";
import { Image } from "@chakra-ui/react";

export function Post() {
  return (
    <>
      <Header type={PageType.DEFAULT} />
      <main className="h-screen py-32 px-default-width space-y-6">
        <div className="flex-col space-y-5">
          <Image
            src="https://th.bing.com/th/id/OIG.pM5yvYt8jXgKE4HyVvUx?pid=ImgGn"
            alt="A big octopus managing containers"
            borderStartEndRadius="2xl"
            borderStartStartRadius="2xl"
            objectFit="cover"
          />
          <MarkdownCode />
        </div>
      </main>
    </>
  );
}
