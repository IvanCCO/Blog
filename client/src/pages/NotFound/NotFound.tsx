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
import HORSE from "../../assets/not-found.png";
import { Header } from "../../components/Header";

export function NotFound() {
  const navigate = useNavigate();

  return (
    <main className="main bg-he-background sm:px-28 md:px-44 lg:px-96">
      <Header />
      <Center>
        <Image src={HORSE} boxSize={["200px", "300px"]} />
      </Center>

      <VStack spacing={10}>
        <div className="text-center">
          <Text
            fontSize={["3xl", "4xl"]}
            fontWeight={"semibold"}
            color={"white"}
          >
            Hmmm, we couldn't find that page.
          </Text>
          <Text fontSize={"lg"} color={"#727272"}>
            Go to our home page, that definitely does exists.
            <br></br>
            If you think that's a bug,{" "}
            <a
              href="https://www.linkedin.com/in/ivan-medeiros-024133241"
              target="_blank"
              className="text-purple-400 font-semibold"
            >
              contact me
            </a>
          </Text>
        </div>
        <Button
          colorScheme="purple"
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
              Simple, my baby's dream is to work with horse genetics
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </VStack>
    </main>
  );
}
