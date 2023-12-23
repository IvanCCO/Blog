import {
  Card,
  CardBody,
  Text,
  Stack,
  Heading,
  CardFooter,
} from "@chakra-ui/react";
import { TopicTag } from "./TopicTag";

export function SampleCard() {
  return (
    <>
      <Card maxW="sm" variant={"outline"}>
        <CardBody>
          <Stack mt="6" spacing="3">
            <Heading size="lg">Orquestando conteiners com Kubernets</Heading>
            <Text>
              Que o Kubernetes está ficando o tal tal tal todo mundo sabe mas
              agora como de fato orquestrar conteiners com ele e fazer a
              diferenca é algo que pou...
            </Text>
          </Stack>
        </CardBody>
        <CardFooter justify="space-between">
          <TopicTag />
          <Text fontSize="sm" color="gray.500">
            02-12-2022
          </Text>
        </CardFooter>
      </Card>
    </>
  );
}
