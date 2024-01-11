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
  title: string;
  description: string;
  readTime: number;
  createdAt: string;
  tag?: {
    name: string;
    color: string;
  };
}

export function SampleCard({
  title,
  description,
  readTime,
  createdAt,
  tag,
}: Props) {
  const date = formatDate(createdAt);
  const color = (n: number): string => {
    switch (n) {
      case 1:
        return "purple";
      case 2:
        return "cyan";
      case 3:
        return "pink";
      case 4:
        return "linkedin";
      case 5:
        return "gray";
      default:
        return "linkedin";
    }
  };

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
              src="https://th.bing.com/th/id/OIG.wP.0xTjqyTThzWawHxaL?pid=ImgGn"
              alt="Green double couch with wooden legs"
            />
          </AspectRatio>
          <Stack spacing="3">
            <Heading size="sm">{title}</Heading>
            <Text
              // bgGradient="linear(to-b, #1a1a1a 0%, rgba(118, 111, 154, 0.08) 100%)"
              // backgroundClip="text"
              color={"white"}
              fontSize={"sm"}
            >
              {description}
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
                title="Política"
                color={color(Math.floor(Math.random() * (5 - 0 + 1) + 0))}
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
