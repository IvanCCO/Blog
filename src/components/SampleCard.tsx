import {
  Card,
  CardBody,
  Text,
  Stack,
  Heading,
  CardFooter,
  Divider,
} from "@chakra-ui/react";
import { TopicTag } from "./TopicTag";

export function SampleCard() {
  return (
    <>
      <Card maxW="sm" variant={"outline"} cursor={"pointer"}>
        <CardBody>
          <Stack spacing="3">
            <Heading size="lg">Orquestando conteiners com Kubernets</Heading>
            <Text>
              Que o Kubernetes está ficando o tal tal tal todo mundo sabe mas
              agora como de fato orquestrar conteiners com ele e fazer a
              diferenca é algo que pou...
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <div className="w-full space-y-2">
            <div className="flex flex-row w-full justify-between h-fit">
              <TopicTag
                title="Política"
                color="twitter"
                variant="solid"
                borderRadius="full"
              />
              <Text fontSize="sm" color="gray.600">
                Dec 12 · 4 min read
              </Text>
            </div>
            <div className="flex flex-row-reverse w-full justify-between h-fit">
              <Text fontSize="sm" color="gray.400" textAlign={"end"}>
                wrote by @ivan_miranda
              </Text>
            </div>
          </div>
        </CardFooter>
      </Card>
    </>
  );
}
