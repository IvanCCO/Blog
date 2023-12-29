import { StarIcon } from "@chakra-ui/icons";
import {
  Divider,
  Heading,
  HStack,
  IconButton,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { Header } from "../../components/Header";
import MarkdownFormatter from "../../components/MarkdownFormatter";
import { Pagination } from "../../components/Pagination";
import { PageType } from "../../data/constants";

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

  const [hasLiked, setHasLiked] = useState<boolean>(false);

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
      <Header type={PageType.DEFAULT} />
      <main className="main space-y-2 sm:px-28 md:px-44 lg:px-96">
        <div className="space-y-4">
          <TopicTag
            color={color(Math.floor(Math.random() * (5 - 0 + 1) + 0))}
            variant="solid"
            title="Tecnology"
            borderRadius="full"
          />
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

        <Divider />

        {/* TODO: Pensar em como ficaria as estrelas em prod sendo que não vai ter nenhum login*/}
        <div className="w-full flex justify-start">
          <HStack spacing={6}>
            <IconButton
              variant={"ghost"}
              size={"lg"}
              aria-label="Star this post"
              icon={<StarIcon color={hasLiked ? "gold" : "silver"} />}
              onClick={() => setHasLiked(!hasLiked)}
            />
            <Text fontWeight={"semibold"}>299</Text>
          </HStack>
        </div>

        <Divider />
        <div className="w-full">
          <Text fontSize={"2xl"} py={8} fontWeight={"semibold"}>
            Related Posts
          </Text>
          <VStack spacing={5}>
            {sampleCards}
            <Pagination />
          </VStack>
        </div>
      </main>
    </>
  );
}
