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


{/* TODO: Colocar aqui essa página para levar para sobre o projeto 
    TODO: Mostrar apenas o command para quando a tela for grande
*/}

type HeaderStyle = {
    mainBackground: string,
    logoColor: string,
    hamburgerTheme: string,
    menuListBackground: string,
    menuListBorder: string, 
    inputBackground: string
}

const chooseHeaderStyle = (type: PageType): HeaderStyle => {
    switch (type) {
        case 'HE':
            return {
                mainBackground: 'he-background',
                logoColor: 'white',
                hamburgerTheme: 'whiteAlpha',
                menuListBackground: 'white',
                inputBackground: "black",
                menuListBorder: "black", 
            };
        case 'SHE':
            return {
                mainBackground: 'she-background',
                logoColor: 'she-logo-color',
                hamburgerTheme: 'gray',
                menuListBackground: 'white',
                inputBackground: "black",
                menuListBorder: "black", 
            };
        case 'US':
            return {
                mainBackground: 'white',
                logoColor: 'black',
                hamburgerTheme: 'blackAlpha',
                menuListBackground: 'white',
                inputBackground: "white",
                menuListBorder: "black", 
            };
        case 'DEFAULT':
            return {
                mainBackground: 'white',
                logoColor: 'black',
                hamburgerTheme: 'default-hamburguer-color',
                menuListBackground: 'white',
                inputBackground: "black",
                menuListBorder: "black", 
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
                    colorScheme={headerStyle.hamburgerTheme}
                />
                <MenuList bg={headerStyle.menuListBackground} color={"black"} bgColor={headerStyle.menuListBackground} borderColor={"black"}>

                    <MenuItem as='a' href='/about/she' icon={<IoIosFemale />} bg={headerStyle.menuListBackground}>
                        She
                    </MenuItem>
                    <MenuItem as='a' href='/' icon={<IoIosHeartEmpty />} bg={headerStyle.menuListBackground}>
                        Us
                    </MenuItem>
                    <MenuItem as='a' href='/about/he' icon={<IoIosMale />} bg={headerStyle.menuListBackground}>
                        He
                    </MenuItem>

                    <MenuDivider color={headerStyle.menuListBackground}/>

                    <MenuItem as='a' href='/create' icon={<FaRegEdit />} bg={headerStyle.menuListBackground}>
                        Create
                    </MenuItem>

                    <MenuItem as='a' href='/about/taxco' icon={<InfoOutlineIcon />} command='⌘H' bg={headerStyle.menuListBackground}>
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
                <IconInput bg={headerStyle.inputBackground} />
            </div>
            {hamburguer()}
        </div>
    )

}