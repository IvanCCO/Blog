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

import { ExternalLinkIcon } from "@chakra-ui/icons";
import EX from "../../assets/Markdown/ex.md";
import { importLocalMarkdownFile } from "../../hooks/useFileUtils";
import { TopicTag } from "../../components/TopicTag";
import { SampleCard } from "../../components/SampleCard";
import { ImageBlock } from "./ImageBlock";
import { ProfileRow } from "./ProfileRow";
import { ActionRow } from "./ActionRow";

export function Post() {
  const content = importLocalMarkdownFile(EX);

  return (
    <>
      <Header type={PageType.DEFAULT} />
      <main className="main space-y-2">
        <TopicTag
          color="purple"
          variant="solid"
          title="Tecnology"
          borderRadius="full"
        />
        <Heading size={"lg"}>
          Modern online and offline payments for Africa
        </Heading>
        <Text fontSize={"sm"} fontWeight={"light"} color={"#727272"}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia
          delectus dignissimos doloremque aliquid ullam iure, tempora obcaecati
          nulla consequuntur accusamus nam!
        </Text>
        <ProfileRow />
        <ActionRow />
        <div className="py-6">
          <ImageBlock />
        </div>

        <MarkdownFormatter text={content} />

        <Text fontSize={"2xl"} pt={8}>
          Related Posts
        </Text>

        <SampleCard />
      </main>
    </>
  );
}
