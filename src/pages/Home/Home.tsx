import { Button, Text } from "@chakra-ui/react";
import { Header } from "../../components/Header";
import { MainCard } from "../../components/MainCard";
import { Pagination } from "../../components/Pagination";
import { SampleCard } from "../../components/SampleCard";
import { PageType } from "../../data/constants";

export function Home() {
  const sampleCards: JSX.Element[] = [];

  for (let index = 0; index < 3; index++) {
    sampleCards.push(<SampleCard key={index} />);
  }
  return (
    <>
      <Header type={PageType.US} />

      <main className="main space-y-8 grid place-items-center">
        <div className="space-y-2">
          <Text fontSize={"3xl"} fontWeight={"medium"}>
            News
          </Text>
          <MainCard />
        </div>
        <div>
          <div className="space-y-3">
            <div className="flex justify-between place-items-center">
              <Text fontSize={"3xl"} fontWeight={"medium"}>
                Posts
              </Text>
              <Button
                colorScheme="gray"
                size="sm"
                variant={"solid"}
                rounded={"base"}
              >
                Filtrar
              </Button>
            </div>
            {sampleCards}
            <Pagination />
          </div>
        </div>
      </main>
    </>
  );
}
