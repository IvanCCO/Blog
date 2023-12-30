import { QuestionOutlineIcon } from "@chakra-ui/icons";
import {
  Button,
  Center,
  HStack,
  Image,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import HORSE from "../../assets/Designer-no-background.png";
import { Header } from "../../components/Header";
import { PageType } from "../../data/constants";

export function NotFound() {
  const navigate = useNavigate();

  return (
    <main className="main sm:px-28 md:px-44 lg:px-96">
      <Header type={PageType.DEFAULT} />
      <Center>
        <Image src={HORSE} boxSize={["200px", "300px"]} />
      </Center>

      <VStack spacing={10}>
        <div>
          <Text fontSize={["3xl", "4xl"]} fontWeight={"semibold"}>
            Hmmm, we couldn't find that page.
          </Text>

          <Text fontSize={"lg"} color={"#727272"}>
            Go to our home page, that definitely does exists.
            <br></br>
            If you think thats a bug,{" "}
            <a href="#" className="link-color text-purple-800 font-semibold">
              contact me
            </a>
          </Text>
        </div>
        <Button
          colorScheme="teal"
          variant={"solid"}
          size={["md", "lg"]}
          onClick={() => navigate("/")}
        >
          Back to Home
        </Button>

        <Popover isLazy>
          <PopoverTrigger>
            <HStack cursor={"pointer"}>
              <QuestionOutlineIcon color={"#727272"} />
              <Text fontSize={"xs"} color={"#727272"}>
                Why a horse?
              </Text>
            </HStack>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverArrow />
            <PopoverBody>
              That's simple, my babys dream is to work with horse genetics
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </VStack>
    </main>
  );
}
