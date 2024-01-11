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
import { formatDate } from "../utils/commom";

interface Props {
  title: string,
  description: string,
  readTime: number,
  createdAt: string 
  tag?: {
    name: string,
    color: string
  }
}

export function MainCard({title, description, readTime, createdAt, tag} : Props) {

  const navigate = useNavigate();

  const date = formatDate(createdAt)

  return (
    <Center>
      <Card
        direction={{ base: "column", md: "row" }}
        onClick={() => navigate("/post")}
        cursor={"pointer"}
        boxShadow={"lg"}
        bg="whiteAlpha.200"
        color={"white"}
      >
        <AspectRatio ratio={16 / 9} w={"full"} maxH={{base: "200px", sm: "200px", md: "none"}}>
          <Image
            src="https://th.bing.com/th/id/OIG.pM5yvYt8jXgKE4HyVvUx?pid=ImgGn"
            alt="A big octopus managing containers"
            borderRadius={"md"}
            objectFit="cover"
          />
        </AspectRatio>
        <Stack>
          <CardBody>
            <Heading size={["lg", "md"]} mb={2}>
              {title}
            </Heading>
            <Text
              color={"white"}
              maxW={{ lg: "70%" }}
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
