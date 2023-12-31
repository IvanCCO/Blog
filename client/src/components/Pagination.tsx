import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";

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
