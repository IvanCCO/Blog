import {
  Card,
  CardBody,
  Text,
  Image,
  Stack,
  Heading,
  CardFooter,
} from "@chakra-ui/react";

export function SampleCard() {
  return (
    <>
      <Card maxW="sm">
        <CardBody>
          <Image
            src="https://th.bing.com/th/id/OIG.pM5yvYt8jXgKE4HyVvUx?pid=ImgGn"
            alt="A big octopus managing containers"
            borderRadius="lg"
            objectFit={"cover"}
            boxSize={"100px"}
          />
          <Stack mt="6" spacing="3">
            <Heading size="md">Orquestando conteiners com Kubernets</Heading>
            <Text>
              Que o Kubernetes está ficando o tal tal tal todo mundo sabe mas
              agora como de fato orquestrar conteiners com ele e fazer a
              diferenca é algo que pou...
            </Text>
          </Stack>
        </CardBody>
        <CardFooter justify={"flex-end"}>
          <Text fontSize={"sm"} color={"gray.500"}>
            writed by @ivan_miranda
          </Text>
        </CardFooter>
      </Card>
    </>
  );
}
