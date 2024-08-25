import { Tag, TagLabel } from "@chakra-ui/react";

interface TagProps {
  title: string | undefined;
  color: string;
  variant: string;
}

export function TopicTag({ title, color, variant }: TagProps) {
  return (
    <Tag
      size={"md"}
      borderRadius={"md"}
      cursor="pointer"
      variant={variant}
      colorScheme={color}
      textAlign="center"
      placeItems={"center"}
      justifyContent="center"
      minW={{ base: "max-content", md: "80%", lg: "max-content" }}
      py={2}
    >
      <TagLabel fontWeight={"semibold"}>{title}</TagLabel>
    </Tag>
  );
}