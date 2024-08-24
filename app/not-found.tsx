"use client";
import { useRouter } from "next/navigation";
import { Image } from "@chakra-ui/image";
import { Text, VStack, HStack, Center } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverBody,
} from "@chakra-ui/popover";
import { QuestionOutlineIcon } from "@chakra-ui/icons";
import NOT_FOUND_IMAGE from "../public/not-found.png";
import Header from "../components/Header"

export default function NotFound() {
  const router = useRouter();
  return (
    <main className="main bg-he-background sm:px-28 md:px-44 lg:px-96">
      <Header />
      <Center>
        <Image
          src={NOT_FOUND_IMAGE.src}
          boxSize={["200px", "300px"]}
          alt="A linedraw of a horse"
        />
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
          onClick={() => router.push("/")}
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
              Simple, my girl's dream is to work with horse genetics
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </VStack>
    </main>
  );
}
