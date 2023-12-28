import { Button } from "@chakra-ui/react";
import { ArrowForwardIcon, ArrowBackIcon } from "@chakra-ui/icons";

export function Pagination() {
  return (
    <div className="flex justify-between place-items-center pt-3 w-full">
      <Button
        colorScheme="gray"
        size="md"
        variant={"link"}
        leftIcon={<ArrowBackIcon />}
        isDisabled={true}
      >
        Prev
      </Button>
      <Button
        colorScheme="gray"
        size="md"
        variant={"link"}
        rounded={"base"}
        rightIcon={<ArrowForwardIcon />}
      >
        Next
      </Button>
    </div>
  );
}
