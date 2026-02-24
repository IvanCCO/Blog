import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}) {
  const hasNext = currentPage < totalPages;
  const hasPrev = currentPage > 1;

  function handleNextPage() {
    if (!hasNext) return;
    onPageChange(currentPage + 1);
  }

  function handlePrevPage() {
    if (!hasPrev) return;
    onPageChange(currentPage - 1);
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
