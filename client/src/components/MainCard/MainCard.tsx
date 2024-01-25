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
import { imagePath } from "../../http/operations";
import { formatDate } from "../../utils/commom";

interface Props {
  id: string;
  title: string;
  description: string;
  readTime: number;
  createdAt: Date | undefined;
}

export function MainCard({
  id,
  title,
  description,
  readTime,
  createdAt,
}: Props) {

  const navigate = useNavigate();

  const date = formatDate(createdAt);

  return (
    <Center>
      <Card
        direction={{ base: "column", md: "row" }}
        onClick={() => navigate("/post")}
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
        >
          <Image
            src={imagePath(id)}
            alt="A big octopus managing containers"
            borderRadius={"md"}
            objectFit="cover"
            loading="lazy"
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
