import { formatDateWithYear } from "@/app/_lib/formatDate";
import { Avatar, Box, Flex } from "@chakra-ui/react";
import PIC from "../../../public/he-pic.jpg";

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
      <Avatar
        name="Ivan Freire"
        src={PIC.src}
        size={{ base: "md", md: "lg" }}
      />
      <Box>
        <h1 className="text-sm sm:text-base lg:text-lg">Ivan Freire</h1>
        <p className="text-xs text-neutral-300 sm:text-base">
          Postado {data && formatDateWithYear(new Date(data))} · {readTime} min
        </p>
      </Box>
    </Flex>
  );
}
