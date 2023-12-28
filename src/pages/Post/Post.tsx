import { PageType } from "../../data/constants";
import { Header } from "../../components/Header";
import MarkdownFormatter from "../../components/MarkdownFormatter";
import {
  Image,
  Text,
  VStack,
  Flex,
  Avatar,
  Box,
  Heading,
  Button,
  Stack,
} from "@chakra-ui/react";
import { Pagination } from "../../components/Pagination";

import EX from "../../assets/Markdown/ex.md";
import { importLocalMarkdownFile } from "../../hooks/useFileUtils";
import { TopicTag } from "../../components/TopicTag";
import { SampleCard } from "../../components/SampleCard";
import { ImageBlock } from "./ImageBlock";
import { ProfileRow } from "./ProfileRow";
import { ActionRow } from "./ActionRow";
import { randomInt } from "crypto";

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
      <Header type={PageType.DEFAULT} />
      <main className="main space-y-2">
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

        <div className="w-full">
          <Text fontSize={"2xl"} py={8}>
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
