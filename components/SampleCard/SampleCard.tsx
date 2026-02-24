import {
  AspectRatio,
  Box,
  Card,
  CardBody,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";

function choosePlant(dateString?: string): string {
  if (!dateString) {
    return "🍇";
  }

  const date = new Date(dateString);
  const now = new Date();

  const diffInMonths =
    (now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24 * 30);

  if (diffInMonths < 3) return "🌱";
  if (diffInMonths < 6) return "🍇";
  return "🌲";
}

interface Props {
  title: string | undefined;
  description: string | undefined;
  createdAt: string | undefined;
  imageUrl: string | undefined;
  imageAlt: string | undefined;
  onClick: () => void;
}

export function SampleCard({
  title,
  description,
  createdAt,
  imageUrl,
  imageAlt,
  onClick,
}: Props) {
  return (
    <>
      <Card
        cursor={"pointer"}
        boxShadow={"base"}
        w="full"
        minW={0}
        maxW="full"
        h="full"
        bg={"whiteAlpha.200"}
        color={"white"}
        alignSelf="stretch"
        onClick={onClick}
        zIndex={100}
        overflow="hidden"
      >
        <AspectRatio ratio={16 / 10} w="full" maxH={"150px"}>
          <Box position="relative" w="full" h="full">
            <Image
              src={imageUrl}
              alt={imageAlt}
              loading="lazy"
              objectFit="cover"
              w="full"
              h="full"
            />
            <Box
              aria-hidden="true"
              position="absolute"
              inset={0}
              pointerEvents="none"
              bgGradient="radial(120% 100% at 50% 45%, transparent 25%, rgba(0, 0, 0, 0.38) 100%)"
            />
            <Box
              aria-hidden="true"
              position="absolute"
              inset={0}
              pointerEvents="none"
              bgGradient="linear(to-b, transparent 50%, rgba(0, 0, 0, 0.35) 100%)"
            />
          </Box>
        </AspectRatio>
        <CardBody px={{ base: 5, md: 6 }} py={{ base: 4, md: 5 }}>
          <Stack spacing={{ base: 3, md: 4 }}>
            <Heading
              size={{ base: "sm", md: "sm" }}
              fontFamily="heading"
              as={"h1"}
              lineHeight={{ base: "short", md: "1.35" }}
            >
              {title}
            </Heading>
            <Text
              noOfLines={2}
              fontSize={{ base: "sm" }}
              lineHeight={{ base: "1.55", md: "1.6" }}
              color="whiteAlpha.700"
            >
              {description}
            </Text>
          </Stack>
        </CardBody>
      </Card>
    </>
  );
}
