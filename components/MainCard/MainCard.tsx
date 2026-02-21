import { formatDate } from "@/app/_lib/formatDate";
import {
  AspectRatio,
  Card,
  CardBody,
  CardFooter,
  Center,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";

interface Props {
  id: string;
  title: string;
  description: string;
  readTime: number;
  createdAt: Date | string | undefined;
  imageUrl: string | undefined;
  imageAlt: string | undefined;
  onClick: () => void;
}

export function MainCard({
  id,
  title,
  description,
  readTime,
  createdAt,
  imageUrl,
  imageAlt,
  onClick
}: Props) {
  const date = formatDate(createdAt);

  return (
    <Center>
      <Card
        direction={{ base: "column", md: "row" }}
        onClick={onClick}
        cursor={"pointer"}
        boxShadow={"lg"}
        bg="whiteAlpha.200"
        color={"white"}
        maxW={{ xl: "1000px" }}
        w={"full"}
        zIndex={100}
        overflow="hidden"
        borderRadius="lg"
      >
        <AspectRatio
          ratio={16 / 9}
          w={"full"}
          maxH={{ base: "200px", sm: "200px", md: "none" }}
          maxW={{ lg: "400px" }}
        >
          <Image
            src={imageUrl || ""}
            alt={imageAlt || "Image"}
            width={1000}
            height={1000}
            objectFit="cover"
          />
        </AspectRatio>
        <Stack>
          <CardBody>
            <Heading size={{ base: "lg", sm: "md", xl: "lg" }} mb={2}>
              {title}
            </Heading>
            <Text
              color={"whiteAlpha.700"}
              maxW={{ lg: "70%" }}
              fontSize={{ base: "sm", xl: "md" }}
            >
              {description}
            </Text>
          </CardBody>
          <CardFooter justify="space-between">
            <p className="text-sm text-neutral-300">{date}</p>
            <p className="text-sm text-neutral-300">Ivan Freire</p>
          </CardFooter>
        </Stack>
      </Card>
    </Center>
  );
}
