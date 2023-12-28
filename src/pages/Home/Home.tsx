import { Header } from "../../components/Header";
import { MainCard } from "../../components/MainCard";
import { SampleCard } from "../../components/SampleCard";
import { PageType } from "../../data/constants";
import { Text } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";

export function Home() {
  return (
    <>
      <Header type={PageType.US} />

      <main className="main space-y-6">
        <div>
          <Text fontSize={"3xl"}>News</Text>
          <MainCard />
        </div>
        <div>
          <div className="space-y-5">
            <div className="flex justify-between place-items-center">
              <Text fontSize={"3xl"}>Posts</Text>
              <Button colorScheme="blackAlpha" size="sm" variant={"outline"} px={4} rounded={"base"}>
                Filtrar
              </Button>
            </div>
            <SampleCard />
          </div>
        </div>
      </main>
    </>
  );
}
