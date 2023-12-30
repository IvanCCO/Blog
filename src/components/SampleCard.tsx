import {
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Stack,
  Text,
Image,
AspectRatio
} from "@chakra-ui/react";
import { TopicTag } from "./TopicTag";

export function SampleCard() {
  const color = (n: number): string => {
    switch (n) {
      case 1:
        return "purple";
      case 2:
        return "cyan";
      case 3:
        return "pink";
      case 4:
        return "linkedin";
      case 5:
        return "gray";
      default:
        return "linkedin";
    }
  };

  return (
    <>
      <Card
        variant={"outline"}
        cursor={"pointer"}
        boxShadow={"base"}
      >
        <CardBody>
          <AspectRatio ratio={4/3} maxW={"full"} maxH={"150px"} mb={3} display={{base: "none", sm: "none", md: "none", lg: "block"}}>
          <Image
            src="https://th.bing.com/th/id/OIG.wP.0xTjqyTThzWawHxaL?pid=ImgGn"
            alt="Green double couch with wooden legs"
          />
          </AspectRatio>
          <Stack spacing="3">
            <Heading size="sm">Orquestando conteiners com Kubernets</Heading>
            <Text
              bgGradient="linear(to-b, #1a1a1a 0%, rgba(118, 111, 154, 0.08) 100%)"
              backgroundClip="text"
              fontSize={"sm"}
            >
              eius blanditiis repudiandae, beatae cum temporibus autem,
              molestias aperiam perferendis, ipsam voluptatum consequuntur
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <div className="w-full space-y-2">
            <div className="flex flex-row w-full justify-between h-fit">
              <TopicTag
                title="Política"
                color={color(Math.floor(Math.random() * (5 - 0 + 1) + 0))}
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
