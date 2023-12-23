import { TagLabel, Tag } from "@chakra-ui/react";

interface TagProps {
  title: string;
  color: string;
}

export function TopicTag({ title, color }: TagProps) {
  return (
    <Tag size={"sm"} borderRadius="full" variant="solid" colorScheme={color}>
      <TagLabel>{title}</TagLabel>
    </Tag>
  );
}
