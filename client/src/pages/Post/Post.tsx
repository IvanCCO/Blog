import { Heading, Text } from "@chakra-ui/react";
import { Header } from "../../components/Header";
import MarkdownFormatter from "../../components/MarkdownFormatter";
import { PageType } from "../../data/constants";
import { Footer } from "../../components/Footer";

import EX from "../../assets/Markdown/ex.md";
import { SampleCard } from "../../components/SampleCard";
import { TopicTag } from "../../components/TopicTag";
import { importLocalMarkdownFile } from "../../hooks/useFileUtils";
import { ActionRow } from "./ActionRow";
import { ImageBlock } from "./ImageBlock";
import { ProfileRow } from "./ProfileRow";

export function Post() {
  const content = importLocalMarkdownFile(EX);

  const sampleCards: JSX.Element[] = [];

  for (let index = 0; index < 2; index++) {
    sampleCards.push(<SampleCard key={index} />);
  }

  const justifyContent =
    sampleCards?.length < 3 ? "flex-start" : "space-between";

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
      <Header type={PageType.DEFAULT} />
      <main className="main space-y-2 sm:px-28 md:px-44 lg:px-72 xl:px-96 2xl:px-96">
        <div className="space-y-4">
          <div className="w-fit">
            <TopicTag
              color={color(Math.floor(Math.random() * (5 - 0 + 1) + 0))}
              variant="solid"
              title="Tecnology"
              borderRadius="full"
            />
          </div>

          <Heading size={"lg"}>
            Modern online and offline payments for Africa
          </Heading>
          <Text fontSize={"sm"} fontWeight={"light"} color={"#727272"}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia
            delectus dignissimos doloremque aliquid ullam iure, tempora
            obcaecati nulla consequuntur accusamus nam!
          </Text>
          <ProfileRow />
          <ActionRow />
        </div>
        <div className="py-6">
          <ImageBlock />
        </div>

        <div>
          <MarkdownFormatter text={content} />
        </div>

        <Footer textColor="black"/>
      </main>
    </>
  );
}
