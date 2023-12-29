import { Button, Center, Image, Text, VStack } from "@chakra-ui/react";
import { Header } from "../../components/Header";
import { PageType } from "../../data/constants";

export function NotFound() {
  return (
    <main className="main sm:px-28 md:px-44 lg:px-96">
      <Header type={PageType.DEFAULT}/>
      <Center>
        <Image
          src="https://th.bing.com/th/id/OIG.I7Xvxuab3JL68Nrm9VH_?w=1024&h=1024&rs=1&pid=ImgDetMain"
          boxSize={["200px","300px" ]}
        />
      </Center>

      <VStack spacing={10}>
        <div>
          <Text fontSize={["3xl", "4xl"]} fontWeight={"semibold"}>Hmmm, we couldn't find that page.</Text>

          <Text fontSize={"lg"} color={"#727272"}>
            Go to our home page, that definitely does exists.
            <br></br>
            If you think thats
            a bug,{" "}
            <a href="#" className="link-color text-purple-800 font-semibold">
              contact me
            </a>
          </Text>
        </div>
        <Button colorScheme="teal" variant={"solid"} size={["md", "lg"]}>Back to Home</Button>
      </VStack>
    </main>
  );
}
