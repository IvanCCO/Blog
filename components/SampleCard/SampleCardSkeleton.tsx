import {
  AspectRatio,
  Card,
  CardBody,
  Skeleton,
  SkeletonText,
  Stack,
} from "@chakra-ui/react";

export function SampleCardSkeleton() {
  return (
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
    >
      <CardBody px={{ base: 5, md: 6 }} py={{ base: 4, md: 5 }}>
        <AspectRatio
          ratio={16 / 10}
          maxW={"full"}
          maxH={"150px"}
          mb={3}
          display={"block"}
        >
          <Skeleton height="100%" width="100%" />
        </AspectRatio>
        <Stack spacing={{ base: 3, md: 4 }}>
          <Skeleton height="16px" width={"72%"} />
          <SkeletonText noOfLines={2} spacing={3} skeletonHeight="2" />
        </Stack>
      </CardBody>
    </Card>
  );
}

export const renderSkeletons = (count: number) => {
  return Array.from({ length: count }, (_, index) => (
    <SampleCardSkeleton key={index} />
  ));
};


export default SampleCardSkeleton;
