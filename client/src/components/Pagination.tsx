import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export function Pagination({
  isFirstPage,
  isLastPage,
  onPageIncrement,
  onPageDecrement,
}: {
  isFirstPage: boolean;
  isLastPage: boolean;
  onPageIncrement: () => void;
  onPageDecrement: () => void;
}) {
  const [hasNext, setHasNext] = useState<boolean>(!isLastPage);
  const [hasPrev, setHasPrev] = useState<boolean>(!isFirstPage);

  useEffect(() => {
    setHasNext(!isLastPage);
    setHasPrev(!isFirstPage);
  }, [isFirstPage, isLastPage]);

  return (
    <div className="flex justify-between place-items-center pt-3 w-full">
      <Button
        colorScheme="gray"
        size={{ base: "md", lg: "lg" }}
        variant={"link"}
        leftIcon={<ArrowBackIcon />}
        isDisabled={!hasPrev}
        onClick={onPageDecrement}
      >
        Prev
      </Button>
      <Button
        colorScheme="gray"
        size={{ base: "md", lg: "lg" }}
        variant={"link"}
        rounded={"base"}
        isDisabled={!hasNext}
        rightIcon={<ArrowForwardIcon />}
        onClick={onPageIncrement}
      >
        Next
      </Button>
    </div>
  );
}
