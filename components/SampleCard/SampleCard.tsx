import {
  AspectRatio,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Flex,
  Heading,
  Icon,
  Image,
  Stack,
  Tag,
  TagLabel,
  TagRightIcon,
  Text,
} from "@chakra-ui/react";
import { TopicTag } from "../TopicTag";
import { formatDate } from "@/app/_lib/formatDate";

function choosePlant(dateString?: string): string {

  if (!dateString) {
    return "🍇"
  }

  const date = new Date(dateString);
  const now = new Date();

  const diffInMonths = (now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24 * 30);

  if (diffInMonths < 3) return "🌱";
  if (diffInMonths < 6) return "🍇";
  return "🌲";
}

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
  onClick,
}: Props) {
  const maxCharacters = 125;
  const date = formatDate(createdAt);

  return (
    <>
      <Card
        cursor={"pointer"}
        boxShadow={"base"}
        w={{ xl: "320px" }}
        minW="220px"
        maxW={["full", "full", "330px"]}
        bg={"whiteAlpha.200"}
        color={"white"}
        alignSelf={["center", "stretch", "stretch"]}
        onClick={onClick}
        zIndex={100}
        overflow="hidden"
      >
        <AspectRatio ratio={4 / 3} w="full" maxH={"220px"}>
          <Image
            src={imageUrl}
            alt={imageAlt}
            loading="lazy"
            objectFit="cover"
            w="full"
            h="full"
          />
        </AspectRatio>
        <CardBody>
          <Stack spacing="3">
            <Heading size={{ base: "sm", sm: "md" }} as={"h1"}>
              {title} {choosePlant(createdAt)}
            </Heading>
            <Text fontSize={{ base: "sm", xl: "md" }} color="whiteAlpha.700">
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
      </Card >
    </>
  );
}
