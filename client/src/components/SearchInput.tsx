import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { IoSearchOutline } from "react-icons/io5";
import { IoIosFemale, IoIosMale, IoIosHeartEmpty } from "react-icons/io";

/* This function should receive as a parameter right element, left element, and hasElement : Boolean
====== 
Just if i need lol
*/
interface IconInputProps {
  backgroundColor: string; 
  foregroundColor: string;
}
export function SearchInput({backgroundColor, foregroundColor }: IconInputProps) {
  return (
  <InputGroup bg={backgroundColor} border={'none'} borderRadius='full'>
    <InputLeftElement pointerEvents='none'>
      <IoSearchOutline color={foregroundColor}/>
    </InputLeftElement>
    <Input type='tel' colorScheme='blackAlpha'  placeholder='Search' borderRadius='full' color={foregroundColor} border={'none'} _placeholder={{ opacity: 0.4, color: 'inherit' }}/>
  </InputGroup>
  );
}