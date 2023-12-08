import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { IoSearchOutline } from "react-icons/io5";

/* This function should receive as a parameter right element, left element, and hasElement : Boolean*/
interface IconInputProps {
  bg: string;
}

export function IconInput({bg} : IconInputProps) {
  return (
  <InputGroup bg={"#F1F1F1"} border={'none'} borderRadius='full'>
    <InputLeftElement pointerEvents='none'>
      <IoSearchOutline color='black'/>
    </InputLeftElement>
    <Input type='tel' colorScheme='blackAlpha'  placeholder='Search' borderRadius='full' color={'black'} border={'none'} _placeholder={{ opacity: 0.4, color: 'inherit' }}/>
  </InputGroup>
  );
}