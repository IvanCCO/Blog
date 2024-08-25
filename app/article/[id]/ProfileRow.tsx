import { Avatar, Box, Flex } from "@chakra-ui/react";

export function ProfileRow({
  data,
  readTime,
}: {
  data: Date;
  readTime: number;
}) {
  return (
    <Flex
      flex="1"
      gap="4"
      alignItems="center"
      flexWrap="wrap"
      py={3}
      color={"white"}
    >
      <Avatar name="Ivan Miranda" src={"c"} size={{ base: "md", md: "lg" }} />
      <Box>
        <h1 className="text-sm sm:text-base lg:text-lg">Ivan Miranda</h1>
        <p className="text-xs text-neutral-300 sm:text-base">
          Posted {"feujfie"} · {readTime} min
          read
        </p>
      </Box>
    </Flex>
  );
}