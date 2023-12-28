import {
  Card,
  CardBody,
  Text,
  Image,
  Stack,
  Heading,
  CardFooter,
  AspectRatio,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export function MainCard() {

  const navigate = useNavigate()

  return (
    <>
    {/* TODO: Arrumar esse cara para ficar dinâmico */}
      <Card maxW="sm" onClick={() => navigate("/post")} cursor={"pointer"}>
        <AspectRatio ratio={16 / 9}>
          <Image
            src="https://th.bing.com/th/id/OIG.pM5yvYt8jXgKE4HyVvUx?pid=ImgGn"
            alt="A big octopus managing containers"
            borderTopRadius="lg"
            objectFit="cover"
          />
        </AspectRatio>
        <CardBody>
          <Stack spacing="3">
            <Heading size="lg">Orquestando conteiners com Kubernets</Heading>
            <Text
              bgGradient="linear(to-b, #1a1a1a 0%, rgba(118, 111, 154, 0.08) 100%)"
              backgroundClip="text"
            >
              Que o Kubernetes está ficando o tal tal tal todo mundo sabe mas
              agora como de fato orquestrar conteiners com ele e fazer a
              diferenca é algo que pou...
            </Text>
          </Stack>
        </CardBody>
        <CardFooter justify="space-between">
          <Text fontSize="sm" color="gray.500">
            4 min read
          </Text>
          <Text fontSize="sm" color="gray.500">
            writed by @ivan_miranda
          </Text>
        </CardFooter>
      </Card>
    </>
  );
}
