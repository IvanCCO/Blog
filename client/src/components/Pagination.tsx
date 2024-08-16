import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}) {
  const [hasNext, setHasNext] = useState<boolean>(currentPage < totalPages);
  const [hasPrev, setHasPrev] = useState<boolean>(currentPage > 1);

  useEffect(() => {
    setHasNext(currentPage < totalPages);
    setHasPrev(currentPage > 1);
  }, [currentPage, totalPages]);

  function handleNextPage() {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  }
  function handlePrevPage() {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  }

  return (
    <div className="flex justify-between place-items-center pt-3 w-full">
      <Button
        colorScheme="gray"
        size={{ base: "md", lg: "lg" }}
        variant={"link"}
        leftIcon={<ArrowBackIcon />}
        isDisabled={!hasPrev}
        onClick={handlePrevPage}
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
        onClick={handleNextPage}
      >
        Next
      </Button>
    </div>
  );
}

