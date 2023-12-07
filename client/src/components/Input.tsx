import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { IoSearchOutline } from "react-icons/io5";

/* This function should receive as a parameter right element, left element, and hasElement : Boolean*/
interface IconInputProps {
  bg: string;
}

export function IconInput({bg} : IconInputProps) {
  return (
  <InputGroup bg={'#5B5B5B'} border={'none'} borderRadius='full'>
    <InputLeftElement pointerEvents='none'>
      <IoSearchOutline color='white'/>
    </InputLeftElement>
    <Input type='tel' placeholder='Search' borderRadius='full' color={'white'} border={'none'} _placeholder={{ opacity: 0.4, color: 'inherit' }}/>
  </InputGroup>
  );
}