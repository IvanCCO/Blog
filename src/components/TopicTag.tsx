import { Tag, TagLabel } from "@chakra-ui/react";

interface TagProps {
  title: string;
  color: string;
  variant: string;
  borderRadius?: string;
}

export function TopicTag({ title, color, variant, borderRadius }: TagProps) {
  return (
    <Tag
      size={"sm"}
      {...(borderRadius && { borderRadius })}
      variant={variant}
      colorScheme={color}
    >
      <TagLabel fontWeight={"semibold"}>{title}</TagLabel>
    </Tag>
  );
}
