import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { IoSearchOutline } from "react-icons/io5";

/* This function should receive as a parameter right element, left element, and hasElement : Boolean
====== 
Just if i need lol
*/
export function SearchInput() {
  return (
    <InputGroup border={"none"} borderRadius="full" size={"sm"} maxW={"140px"}>
      <InputLeftElement pointerEvents="none">
        <IoSearchOutline />
      </InputLeftElement>
      <Input
        type="tel"
        colorScheme="blackAlpha"
        placeholder="Search"
        borderRadius="full"
        border={"none"}
        _placeholder={{ opacity: 0.4, color: "inherit" }}
      />
    </InputGroup>
  );
}
