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
import { useNavigate } from "react-router-dom";
import { articlePath, imagePath } from "../http/operations";
import { formatDate } from "../utils/commom";
import { TopicTag } from "./TopicTag";


interface Props {
  id: string;
  title: string;
  description: string;
  readTime: number;
  createdAt: string;
  tag?: string;
}

export function SampleCard({
  id,
  title,
  description,
  readTime,
  createdAt,
  tag,
}: Props) {
  const navigate = useNavigate();
  const date = formatDate(new Date(createdAt));
  const color = (n: number): string => {
    switch (n) {
      case 1:
        return "purple";
      case 2:
        return "cyan";
      case 3:
        return "pink";
      case 5:
        return "gray";
      default:
        return "linkedin";
    }
  };

  const maxCharacters = 125;

  return (
    <>
      <Card
        cursor={"pointer"}
        onClick={() => navigate(articlePath(id))}
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
              src={imagePath(id)}
              alt="Green double couch with wooden legs"
              loading="lazy"
            />
          </AspectRatio>
          <Stack spacing="3">
            <Heading size={{ base: "sm", sm: "md" }} as={"h1"}>
              {title}
            </Heading>
            <Text
              bgGradient="linear(to-b, #fff 80%, #3E3E42 100%)"
              backgroundClip="text"
              fontSize={{ base: "md", xl: "lg" }}
            >
              {description.length > maxCharacters
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
                title={"fiewbu"}
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
