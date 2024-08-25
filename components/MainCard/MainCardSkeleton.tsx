import {
  AspectRatio,
  Box,
  Card,
  CardBody,
  CardFooter,
  Center,
  Skeleton,
  SkeletonText,
  Stack,
} from "@chakra-ui/react";

const MainCardSkeleton = () => {
  return (
      <Card
        direction={{ base: "column", md: "row" }}
        cursor={"pointer"}
        boxShadow={"lg"}
        bg="whiteAlpha.200"
        color={"white"}
      >
        <AspectRatio
          ratio={16 / 9}
          w={{ md: "400px" }}
          maxH={{ base: "200px", sm: "200px", md: "none" }}
        >
          <Skeleton borderRadius="md" />
        </AspectRatio>
        <Stack w={"full"}>
          <CardBody>
            <Skeleton height="20px" width={"full"} />
            <Box mt={5}>
              <SkeletonText noOfLines={4} spacing={4} skeletonHeight={"2"} />
            </Box>
          </CardBody>
          <CardFooter justify="space-between">
            <SkeletonText noOfLines={4} spacing={4} skeletonHeight={"2"} />
            <SkeletonText noOfLines={4} spacing={4} skeletonHeight={"2"} />
          </CardFooter>
        </Stack>
      </Card>
  );
};

export default MainCardSkeleton;
