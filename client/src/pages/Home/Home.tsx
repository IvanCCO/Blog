import { SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { Header } from "../../components/Header";
import { MainCard } from "../../components/MainCard";
import { Pagination } from "../../components/Pagination";
import { SampleCard } from "../../components/SampleCard";
import { TopicTag } from "../../components/TopicTag";
import { PageType } from "../../data/constants";

export function Home() {
  const sampleCards: JSX.Element[] = [];

  for (let index = 0; index < 3; index++) {
    sampleCards.push(<SampleCard key={index} />);
  }
  return (
    <>
      <Header type={PageType.US} />

      <main className="main space-y-8 grid place-items-center sm:px-28 md:px-44 lg:px-72 justify-center">
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
              <SimpleGrid spacingX={"5px"} spacingY={"10px"} columns={[2, 4]}>
                <TopicTag title="All Articles" color="yellow" variant="solid" />
                <TopicTag
                  title="Veterinary"
                  color="whatsapp"
                  variant="outline"
                />
                <TopicTag title="Tecnlogy" color="purple" variant="outline" />
                <TopicTag title="More" color="linkedin" variant="outline" />
              </SimpleGrid>
            </div>
            <Stack direction={["column", "column", "row"]}>{sampleCards}</Stack>
            <Pagination />
          </div>
        </div>
      </main>
    </>
  );
}