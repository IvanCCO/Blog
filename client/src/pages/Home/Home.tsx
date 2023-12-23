import { Header } from "../../components/Header";
import { MainCard } from "../../components/MainCard";
import { SampleCard } from "../../components/SampleCard";
import { PageType } from "../../data/constants";
import { Text } from "@chakra-ui/react";

export function Home() {
  return (
    <>
      <Header type={PageType.US} />

      <main className="h-screen py-32 px-default-width space-y-6">
        <div>
          <Text fontSize={"4xl"}>News</Text>
          <MainCard />
        </div>
        <div>
          <Text fontSize={"4xl"}>Posts</Text>
          <SampleCard />
        </div>
      </main>
    </>
  );
}
