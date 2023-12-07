import { IconInput } from './Input';
import { Logo } from "../components/Logo";
import { PageType } from '../data/constants';
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    IconButton,
} from '@chakra-ui/react'
import { HamburgerIcon, InfoOutlineIcon } from '@chakra-ui/icons'
import { IoIosFemale, IoIosMale, IoIosHeartEmpty } from "react-icons/io";
import { FaRegEdit } from "react-icons/fa";
import { Link } from "react-router-dom";


{/* TODO: Colocar aqui essa página para levar para sobre o projeto 
    TODO: Mostrar apenas o command para quando a tela for grande
                        
*/}

const chooseBgColor = (type: PageType) => {

    console.log(type)

    switch (type) {
        case 'HE':
            return "he-background"
        case 'SHE':
            return "she-background"
        case 'US':
            return "white"
        case 'DEFAULT':
            return "white"
    }

}

const headerItens = () => {
    return (
        <div className="hidden flex-row space-x-20 justify-between text-white text-md  place-items-center font-inter text-xl font-light">
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
    )
}


/* Colorscheme on dark mode is whiteAlpha and on white mode is default" */
export function Header({ type }: { type: PageType }) {

    const hamburguer = () => {
        return (
            <Menu >
                <MenuButton
                    as={IconButton}
                    aria-label='Options'
                    icon={<HamburgerIcon boxSize={6} />}
                    variant='outline'
                    colorScheme='whiteAlpha'
                />
                <MenuList bg={'teal'} color={'white'} bgColor={"teal"} borderColor={"teal"}>

                    <MenuItem as='a' href='/about/she' icon={<IoIosFemale />} bg={"teal"}>
                        She
                    </MenuItem>
                    <MenuItem as='a' href='/' icon={<IoIosHeartEmpty />} bg={"teal"}>
                        Us
                    </MenuItem>
                    <MenuItem as='a' href='/about/he' icon={<IoIosMale />} bg={"teal"}>
                        He
                    </MenuItem>
                    <MenuDivider color={"teal"}/>

                    <MenuItem as='a' href='/create' icon={<FaRegEdit />} bg={"teal"}>
                        Create
                    </MenuItem>

                    <MenuItem as='a' href='/about/taxco' icon={<InfoOutlineIcon />} command='⌘H' bg={"teal"}>
                        About
                    </MenuItem>
                </MenuList>
            </Menu >
        )
    }

    return (

        <div className={` bg-${chooseBgColor(type)} flex justify-between py-1 px-5 place-items-center`}>
            <Logo />
            {headerItens()}

            <div className='flex place-items-center'>
                <IconInput bg="d" />
            </div>

            {hamburguer()}

        </div>
    )

}