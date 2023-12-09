import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { IoSearchOutline } from "react-icons/io5";

/* This function should receive as a parameter right element, left element, and hasElement : Boolean*/
export function IconInput({ backgroundColor, foregroundColor }: { backgroundColor: string; foregroundColor: string }) {
  return (
  <InputGroup bg={backgroundColor} border={'none'} borderRadius='full'>
    <InputLeftElement pointerEvents='none'>
      <IoSearchOutline color={foregroundColor}/>
    </InputLeftElement>
    <Input type='tel' colorScheme='blackAlpha'  placeholder='Search' borderRadius='full' color={foregroundColor} border={'none'} _placeholder={{ opacity: 0.4, color: 'inherit' }}/>
  </InputGroup>
  );
}