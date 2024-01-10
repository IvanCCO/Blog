import { Avatar, Box, Flex, Heading, Text } from "@chakra-ui/react";
import DEEU from "../../assets/he-pic.jpg";

export function ProfileRow() {
  return (
    <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap" py={3} color={"white"}>
      <Avatar name="Segun Adebayo" src={DEEU} size={"md"} />
      <Box>
        <Heading size="xs">Ivan Miranda</Heading>
        <Text fontSize={"xs"} color={"#727272"}>
          {/* TODO: Colocar dinamico esse dado */}
          Publicado 21 de dez de 2023 · 4 min read
        </Text>
      </Box>
    </Flex>
  );
}
