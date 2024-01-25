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
    <Center>
      <Card
        direction={{ base: "column", md: "row" }}
        cursor={"pointer"}
        boxShadow={"lg"}
        bg="whiteAlpha.200"
        color={"white"}
        maxW={{ xl: "1000px" }}
        w={"full"}
      >
        <AspectRatio
          ratio={16 / 9}
          w={{ md: "400px" }}
          maxH={{ base: "200px", sm: "200px", md: "none" }}
        >
          <Skeleton width="100%" height="100%" borderRadius="md" />
        </AspectRatio>

        <Stack w={"full"}>
          <CardBody>
            <Skeleton height="20px" width={"full"} />
            <Box mt={5}>
              <SkeletonText noOfLines={4} spacing={4} skeletonHeight={'2'} />
            </Box>
          </CardBody>
          <CardFooter justify="space-between">
            <p>
              <Skeleton height="12px" width="60px" />
            </p>
            <p>
              <Skeleton height="12px" width="60px" />
            </p>
          </CardFooter>
        </Stack>
      </Card>
    </Center>
  );
};

export default MainCardSkeleton;
