import { Header } from "../../components/Header";
import { MainCard } from "../../components/MainCard";
import { SampleCard } from "../../components/SampleCard";
import { PageType } from "../../data/constants";
import { Text } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { ArrowForwardIcon, ArrowBackIcon} from '@chakra-ui/icons'

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
          <Text fontSize={"3xl"}>News</Text>
          <MainCard />
        </div>
        <div>
          <div className="space-y-3">
            <div className="flex justify-between place-items-center">
              <Text fontSize={"3xl"}>Posts</Text>
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
            <div className="flex justify-between place-items-center pt-3">
              <Button
                colorScheme="gray"
                size="md"
                variant={"link"}
                leftIcon={<ArrowBackIcon/>}
                isDisabled={true}
              >
                Prev
              </Button>
              <Button
                colorScheme="gray"
                size="md"
                variant={"link"}
                rounded={"base"}
                rightIcon={<ArrowForwardIcon/>}
              >
                Next
              </Button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
