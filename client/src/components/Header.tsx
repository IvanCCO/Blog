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

type HeaderStyle = {
    mainBackground: string,
    logoColor: string,
    hamburguerColor: string,
    menuListBackground: string
}

const chooseHeaderStyle = (type: PageType): HeaderStyle => {
    switch (type) {
        case 'HE':
            return {
                mainBackground: 'he-background',
                logoColor: 'white',
                hamburguerColor: 'whiteAlpha',
                menuListBackground: 'he-menu-list-background'
            };
        case 'SHE':
            return {
                mainBackground: 'she-background',
                logoColor: 'she-logo-color',
                hamburguerColor: 'she-hamburguer-color',
                menuListBackground: 'she-menu-list-background'
            };
        case 'US':
            return {
                mainBackground: 'white',
                logoColor: 'us-logo-color',
                hamburguerColor: 'us-hamburguer-color',
                menuListBackground: 'us-menu-list-background'
            };
        case 'DEFAULT':
            return {
                mainBackground: 'white',
                logoColor: 'default-logo-color',
                hamburguerColor: 'default-hamburguer-color',
                menuListBackground: 'default-menu-list-background'
            };
        default:
            throw new Error(`Invalid page type: ${type}`);
    }
};


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


    const headerStyle = chooseHeaderStyle(type)

    const hamburguer = () => {
        return (
            <Menu >
                <MenuButton
                    as={IconButton}
                    aria-label='Options'
                    icon={<HamburgerIcon boxSize={6} />}
                    variant='outline'
                    colorScheme={headerStyle.hamburguerColor}
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

        <div className={`fixed top-0 left-0 right-0 bg-${headerStyle.mainBackground} flex justify-between py-1 px-5 place-items-center`}>
            <Logo color={headerStyle.logoColor}/>

            {headerItens()}

            <div className='flex place-items-center'>
                <IconInput bg={headerStyle.hamburguerColor} />
            </div>

            {hamburguer()}

        </div>
    )

}