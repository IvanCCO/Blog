import { Image, Text, VStack } from "@chakra-ui/react";
import TRANQUILAO from "../../assets/tranquilao.jpeg";
import { formatUrl, imagePath } from "../../http/operations";

export function ImageBlock({ articleId }: { articleId: string }) {
  const image = formatUrl(`${articleId}/pic.jpeg`);
  return (
    <>
      <VStack spacing={1} p={0}>
        <Image
          src={image}
          alt={articleId}
          objectFit="cover"
          fallbackSrc={TRANQUILAO}
          fallbackStrategy={"onError"}
        />
        <Text fontSize={"xs"} color={"GrayText"}>
          @Bing
        </Text>
      </VStack>
    </>
  );
}
