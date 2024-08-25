import {
  AspectRatio,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Flex,
  Skeleton,
  SkeletonText,
  Stack,
} from "@chakra-ui/react";

export function SampleCardSkeleton() {
  return (
    <Card
      cursor={"pointer"}
      boxShadow={"base"}
      minW="220px"
      maxW={["full", "full", "330px"]}
      bg={"whiteAlpha.200"}
      color={"white"}
      alignSelf={["center", "center", "stretch"]}
    >
      <CardBody>
        <AspectRatio
          ratio={4 / 3}
          maxW={"full"}
          maxH={"150px"}
          mb={3}
          display={"block"}
        >
          <Skeleton height="100%" width="100%" />
        </AspectRatio>
        <Stack spacing="3">
          <Skeleton height="20px" width={"80%"} />
          <SkeletonText noOfLines={3} spacing={3} skeletonHeight="2" />
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <Flex
          direction={{ base: "row", md: "column", lg: "row" }}
          w="full"
          justifyContent={"space-between"}
          h="fit-content"
          alignItems={{ base: "baseline", md: "center", lg: "baseline" }}
        >
          <Skeleton height="30px" width="70px" />
          <Flex className="inline-flex space-x-1 place-items-center minW-fit text-neutral-300">
            <Skeleton height="20px" width="50px" />
            <Skeleton height="20px" width="10px" />
            <Skeleton height="20px" width="50px" />
          </Flex>
        </Flex>
      </CardFooter>
    </Card>
  );
}

export default SampleCardSkeleton;
