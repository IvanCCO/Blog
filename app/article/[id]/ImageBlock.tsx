import { formatUrlArticle } from "@/app/_lib/formatUrl";
import { Image, Text, VStack } from "@chakra-ui/react";

export function ImageBlock({
  articleId,
  imagePath,
  imageAlt,
}: {
  articleId: string;
  imagePath: string;
  imageAlt: string;
}) {
  return (
    <VStack spacing={1} p={0}>
      <Image
        src={formatUrlArticle(articleId, imagePath)}
        alt={imageAlt}
        objectFit="cover"
        fallbackStrategy={"onError"}
      />
      <Text fontSize={"xs"} color={"GrayText"}>
        @Bing: {imageAlt}
      </Text>
    </VStack>
  );
}
