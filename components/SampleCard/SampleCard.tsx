import {
  AspectRatio,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { TopicTag } from "../TopicTag";
import { formatDate } from "@/app/_lib/formatDate";

interface Props {
  id: string;
  title: string | undefined;
  description: string | undefined;
  readTime: number | undefined;
  createdAt: string | undefined;
  imageUrl: string | undefined;
  imageAlt: string | undefined;
  tag: string;
  tagColor: string;
  onClick: () => void;
}

export function SampleCard({
  id,
  title,
  description,
  readTime,
  createdAt,
  imageUrl,
  imageAlt,
  tag,
  tagColor,
  onClick
}: Props) {

  const maxCharacters = 125;
  const date = formatDate(createdAt);

  return (
    <>
      <Card
        cursor={"pointer"}
        boxShadow={"base"}
        minW="220px"
        maxW={["full", "full", "330px"]}
        bg={"whiteAlpha.200"}
        color={"white"}
        alignSelf={["center", "center", "stretch"]}
        onClick={onClick}
      >
        <CardBody>
          <AspectRatio
            ratio={4 / 3}
            maxW={"full"}
            maxH={"150px"}
            mb={3}
            display={"block"}
          >
            <Image src={imageUrl} alt={imageAlt} loading="lazy" />
          </AspectRatio>
          <Stack spacing="3">
            <Heading size={{ base: "sm", sm: "md" }} as={"h1"}>
              {title}
            </Heading>
            <Text fontSize={{ base: "md", xl: "lg" }}>
              {description != undefined && description.length > maxCharacters
                ? description.substring(0, 120) + "..."
                : description}
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <div className="w-full space-y-4">
            <Flex
              direction={{ base: "row", md: "column", lg: "row" }}
              w="full"
              justifyContent={"space-between"}
              h="fit-content"
              alignItems={{ base: "baseline", md: "center", lg: "baseline" }}
            >
              <TopicTag title={tag} color={tagColor} variant="solid" />
              <div className="inline-flex space-x-1 place-items-center minW-fit text-neutral-300">
                <p className="text-sm mt-4 min-w-fit">{date}</p>
                <p className="text-sm mt-4 min-w-fit">·</p>
                <p className="text-sm mt-4 min-w-fit">{readTime} min</p>
              </div>
            </Flex>
          </div>
        </CardFooter>
      </Card>
    </>
  );
}