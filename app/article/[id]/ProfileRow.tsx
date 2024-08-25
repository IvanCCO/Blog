import { formatDateWithYear } from "@/app/_lib/formatDate";
import { Avatar, Box, Flex } from "@chakra-ui/react";
import PIC from "../../../public/he-pic.jpg"

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
      <Avatar name="Ivan Miranda" src={PIC.src} size={{ base: "md", md: "lg" }} />
      <Box>
        <h1 className="text-sm sm:text-base lg:text-lg">Ivan Miranda</h1>
        <p className="text-xs text-neutral-300 sm:text-base">
          Posted {data && formatDateWithYear(new Date(data))} · {readTime} min
          read
        </p>
      </Box>
    </Flex>
  );
}