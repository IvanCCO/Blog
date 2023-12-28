import {
  Image,
  Text,
  VStack,
  Flex,
  Avatar,
  Box,
  Heading,
} from "@chakra-ui/react";

export function ProfileRow() {
  return (
    <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap" py={3}>
      <Avatar
        name="Segun Adebayo"
        src="https://bit.ly/sage-adebayo"
        size={"md"}
      />
      <Box>
        <Heading size="xs">Ivan Miranda</Heading>
        <Text fontSize={"xs"} color={"#727272"}>
          Publicado 21 de dez de 2023 · 4 min read
        </Text>
      </Box>
    </Flex>
  );
}
