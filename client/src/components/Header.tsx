import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { CiSearch } from "react-icons/ci";
import { IconInput } from './Input';

export function Header() {

    return (
        <div className="top-0 flex justify-between bg-he-background py-1 px-10 border-2 border-blue-100">

            <div className="flex-none text-white font-itim text-5xl py-3">
                Taxco.
            </div>

            <div className="flex flex-row space-x-20 justify-between text-white text-md  place-items-center font-inter text-xl font-light ">
                <div>
                    <p className='cursor-pointer'>She</p>
                </div>
                <div>
                    <p className='cursor-pointer'>Us</p>
                </div>
                <div>
                    <p className='cursor-pointer'>He</p>
                </div>
            </div>

            <div className='flex place-items-center'>
                <IconInput/>
            </div>

        </div>
    )

}