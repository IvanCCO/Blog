"use client";
import { useRouter } from "next/navigation";
import {
  Image,
  Text,
  VStack,
  HStack,
  Center,
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverBody,
} from "@chakra-ui/react";
import { QuestionOutlineIcon } from "@chakra-ui/icons";
import NOT_FOUND_IMAGE from "../public/not-found.png";

export default function NotFound() {
  const router = useRouter();
  return (
    <main className="main bg-he-background sm:px-28 md:px-44 lg:px-96">
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
            Hmmm, não foi possível encontrar essa página
          </Text>
          <Text fontSize={"lg"} color={"#727272"}>
            Vá para página inicial, essa com certeza existe
            <br></br>
            Se você acha que isso é um bug.&nbsp;
            <a
              href="www.linkedin.com/in/ivan-f-m-medeiros"
              target="_blank"
              className="text-purple-400 font-semibold"
            >
              Entre em Contato
            </a>
          </Text>
        </div>
        <Button
          colorScheme="purple"
          variant={"solid"}
          size={["md", "lg"]}
          onClick={() => router.push("/")}
        >
          Voltar para o Início
        </Button>
        <Popover isLazy>
          <PopoverTrigger>
            <HStack cursor={"pointer"}>
              <QuestionOutlineIcon color={"#727272"} />
              <Text fontSize={"xs"} color={"#727272"}>
                Por que um cavalo?
              </Text>
            </HStack>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverArrow />
            <PopoverBody>
              Simples, o sonho da minha namorada é trabalhar com genética de
              cavalo.
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </VStack>
    </main>
  );
}
