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

export function Header({ type }: { type: PageType }) {

    console.log(type)

    const headerItens = () => {
        return (
            <div className="hidden flex-row space-x-20 justify-between text-white text-md  place-items-center font-inter text-xl font-light ">
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
                    <MenuItem icon={<IoIosFemale />}>
                        She
                    </MenuItem>
                    <MenuItem icon={<IoIosHeartEmpty />} >
                        Us
                    </MenuItem>
                    <MenuItem icon={<IoIosMale />} >
                        He
                    </MenuItem>
                    <MenuDivider />
                    <MenuItem icon={<FaRegEdit />} >
                        Create
                    </MenuItem>
                    <MenuItem icon={<InfoOutlineIcon />} command='⌘H'>

                        About
                    </MenuItem>
                </MenuList>
            </Menu>
        )
    }

    return (
        <div className="top-0 flex justify-between bg-he-background py-1 px-10 place-items-center">

            <Logo />
            {headerItens()}

            <div className='flex place-items-center'>
                <IconInput />
            </div>

            {hamburguer()}

        </div>
    )

}