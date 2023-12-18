import { Header } from "../../components/Header";
import { PageType } from "../../data/constants";
import { SampleCard } from "../../components/SampleCard";
import { Text } from "@chakra-ui/react";

export function Home() {
  return (
    <>
      <Header type={PageType.US} />

      <main className="h-screen py-32 px-default-width">
        <Text fontSize={"4xl"}>News</Text>
        <SampleCard />
      </main>
    </>
  );
}

