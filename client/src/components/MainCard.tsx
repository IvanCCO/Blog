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

export function MainCard() {
  const navigate = useNavigate();

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
        <AspectRatio ratio={16 / 9} w={"full"}>
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
              Orquestando conteiners com Kubernets
            </Heading>
            <Text
              // bgGradient="linear(to-b, #1a1a1a 0%, rgba(118, 111, 154, 0.08) 100%)"
              // backgroundClip="text"
              color={"white"}
              maxW={{ lg: "70%" }}
            >
              Que o Kubernetes está ficando o tal tal tal todo mundo sabe mas
              Que o Kubernetes está ficando o tal tal tal todo mundo sabe mas
              agora como de fato orquestrar conteiners com ele e fazer a
              diferenca é algo que pou...
            </Text>
          </CardBody>
          <CardFooter justify="space-between">
            <Text fontSize="sm" color="gray.500">
              4 min read
            </Text>
            <Text fontSize="sm" color="gray.500">
              writed by @ivan_miranda
            </Text>
          </CardFooter>
        </Stack>
      </Card>
    </Center>
  );
}
