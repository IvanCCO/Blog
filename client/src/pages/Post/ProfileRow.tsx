import { Avatar, Box, Flex, Heading, Text } from "@chakra-ui/react";
import DEEU from "../../assets/he-pic.jpg";

export function ProfileRow() {
  return (
    <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap" py={3} color={"white"}>
      <Avatar name="Segun Adebayo" src={DEEU} size={{base: "md", md: "lg"}} />
      <Box>
        <h1 className="text-sm sm:text-base">Ivan Miranda</h1>
        <p className="text-xs text-neutral-300 sm:text-sm">
          {/* TODO: Colocar dinamico esse dado */}
          Publicado 21 de dez de 2023 · 4 min read
        </p>
      </Box>
    </Flex>
  );
}
