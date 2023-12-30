import { Button, SimpleGrid, Text } from "@chakra-ui/react";
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

      <main className="main space-y-8 grid place-items-center sm:px-28 md:px-44 lg:px-72">
        <div className="space-y-2">
          <Text fontSize={"3xl"} fontWeight={"medium"}>
            News
          </Text>
          <MainCard />
        </div>
        <div>
          <div className="space-y-3 w-full">
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
            <SimpleGrid
              minChildWidth="230px"
              spacingX={"10px"}
              spacingY={"20px"}
            >
              {sampleCards}
            </SimpleGrid>
            <Pagination />
          </div>
        </div>
      </main>
    </>
  );
}
