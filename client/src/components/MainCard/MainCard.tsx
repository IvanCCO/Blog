import {
  AspectRatio,
  Card,
  CardBody,
  CardFooter,
  Center,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { articlePath } from "../../http/operations";
import { formatDate } from "../../utils/commom";

interface Props {
  id: string;
  title: string;
  description: string;
  readTime: number;
  createdAt: Date | string | undefined;
  imageUrl: string | undefined;
  imageAlt: string | undefined;
}

export function MainCard({
  id,
  title,
  description,
  readTime,
  createdAt,
  imageUrl,
  imageAlt,
}: Props) {
  const navigate = useNavigate();

  const date = formatDate(createdAt);

  return (
    <Center>
      <Card
        direction={{ base: "column", md: "row" }}
        onClick={() => navigate(articlePath(id))}
        cursor={"pointer"}
        boxShadow={"lg"}
        bg="whiteAlpha.200"
        color={"white"}
        maxW={{ xl: "1000px" }}
        w={"full"}
      >
        <AspectRatio
          ratio={16 / 9}
          w={"full"}
          maxH={{ base: "200px", sm: "200px", md: "none" }}
          maxW={{ lg: "400px" }}
        >
          <Image
            w={"full"}
            src={imageUrl}
            alt={imageAlt}
            borderRadius={"md"}
            objectFit="cover"
            fallbackStrategy="onError"
          />
        </AspectRatio>
        <Stack>
          <CardBody>
            <Heading size={{ base: "lg", sm: "md", xl: "lg" }} mb={2}>
              {title}
            </Heading>
            <Text
              color={"white"}
              maxW={{ lg: "70%" }}
              fontSize={{ base: "md", xl: "lg" }}
            >
              {description}
            </Text>
          </CardBody>
          <CardFooter justify="space-between">
            <p className="text-sm text-neutral-300">{date}</p>
            <p className="text-sm text-neutral-300">{readTime} min read</p>
          </CardFooter>
        </Stack>
      </Card>
    </Center>
  );
}
