import { Image, Text, VStack } from "@chakra-ui/react";
import TRANQUILAO from "../../assets/tranquilao.jpeg";
import { formatUrl } from "../../http/operations";

export function ImageBlock({
  articleId,
  imagePath,
  imageAlt,
}: {
  articleId: string;
  imagePath: string;
  imageAlt: string;
}) {
  const image = formatUrl(articleId, imagePath);
  return (
    <>
      <VStack spacing={1} p={0}>
        <Image
          src={image}
          alt={imageAlt}
          objectFit="cover"
          fallbackSrc={TRANQUILAO}
          fallbackStrategy={"onError"}
        />
        <Text fontSize={"xs"} color={"GrayText"}>
          @Bing: {imageAlt}
        </Text>
      </VStack>
    </>
  );
}
