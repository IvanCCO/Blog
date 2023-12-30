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
      size={"md"}
      {...(borderRadius && { borderRadius })}
      variant={variant}
      colorScheme={color}
      textAlign="center"
      placeItems={"center"}
      justifyContent="center"
      minW={{ base: "max-content", md: "80%", lg: "max-content" }}
    >
      <TagLabel fontWeight={"semibold"}>{title}</TagLabel>
    </Tag>
  );
}
