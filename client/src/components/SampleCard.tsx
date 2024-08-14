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
import { formatDate } from "../utils/commom";
import { TopicTag } from "./TopicTag";

interface Props {
  title: string | undefined;
  description: string | undefined;
  readTime: number | undefined;
  createdAt: string | undefined;
  imageUrl: string | undefined
  tag: {
    name: string;
    color: string;
  };
}

export function SampleCard({
  title,
  description,
  readTime,
  createdAt,
  imageUrl,
  tag,
}: Props) {
  const date = formatDate(createdAt);

  const maxCharacters = 125;

  return (
    <>
      <Card
        cursor={"pointer"}
        boxShadow={"base"}
        minW="220px"
        maxW={"330px"}
        bg={"whiteAlpha.200"}
        color={"white"}
        alignSelf={["center", "center", "stretch"]}
      >
        <CardBody>
          <AspectRatio
            ratio={4 / 3}
            maxW={"full"}
            maxH={"150px"}
            mb={3}
            display={{ base: "none", sm: "none", md: "none", lg: "block" }}
          >
            <Image
              src={imageUrl}
              alt="Green double couch with wooden legs"
              loading="lazy"
            />
          </AspectRatio>
          <Stack spacing="3">
            <Heading size={{ base: "sm", sm: "md" }} as={"h1"}>
              {title}
            </Heading>
            <Text
              fontSize={{ base: "md", xl: "lg" }}
            >
              {description != undefined && description.length > maxCharacters
                ? description.substring(120) + "..."
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
              <TopicTag
                title={tag.name}
                color={tag.color}
                variant="solid"
                borderRadius="full"
              />
              <div className="inline-flex space-x-1 place-items-center minW-fit text-neutral-300">
                <p className="text-sm mt-4 min-w-fit">{date}</p>
                <p className="text-sm mt-4 min-w-fit">·</p>
                <p className="text-sm mt-4 min-w-fit">{readTime} min read</p>
              </div>
            </Flex>
          </div>
        </CardFooter>
      </Card>
    </>
  );
}
