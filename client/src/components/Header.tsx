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


export function Header({ type }: { type: PageType }) {

    console.log(type)

    const hamburguer = () => {
        return (
            <Menu>
                <MenuButton
                    as={IconButton}
                    aria-label='Options'
                    icon={<HamburgerIcon boxSize={6} />}
                    variant='outline'
                />
                <MenuList>

                    <Link to={"about/she"}>
                        <MenuItem icon={<IoIosFemale />}>
                            She
                        </MenuItem>
                    </Link>
                    <Link to={"/"}>
                        <MenuItem icon={<IoIosHeartEmpty />} >
                            Us
                        </MenuItem>
                    </Link>
                    <Link to={"/about/he"}>
                        <MenuItem icon={<IoIosMale />} >
                            He
                        </MenuItem>
                    </Link>
                    <MenuDivider />

                    <Link to={"create"}>
                        <MenuItem icon={<FaRegEdit />} >
                            Create
                        </MenuItem>
                    </Link>

                    <Link to={"about"}>
                        <MenuItem icon={<InfoOutlineIcon />} command='⌘H'>
                            About
                        </MenuItem>
                    </Link>
                </MenuList>
            </Menu >
        )
    }

    return (

        <div className={` bg-${chooseBgColor(type)} flex justify-between py-1 px-5 place-items-center`}>
            <Logo />
            {headerItens()}

            <div className='flex place-items-center'>
                <IconInput />
            </div>

            {hamburguer()}

        </div>
    )

}