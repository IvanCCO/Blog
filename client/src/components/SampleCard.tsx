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
              <TopicTag />
              <Text fontSize="sm" color="gray.500">
                02-12-2022
              </Text>
            </div>
            <div>
              <Text fontSize="sm" color="gray.500" align={"end"}>
                writed by @ivan_miranda
              </Text>
            </div>
          </div>
        </CardFooter>
      </Card>
    </>
  );
}
