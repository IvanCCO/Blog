import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  IconButton,
} from "@chakra-ui/react";
import { HamburgerIcon, InfoOutlineIcon } from "@chakra-ui/icons";
import { IoIosFemale, IoIosMale, IoIosHeartEmpty } from "react-icons/io";
import { FaRegEdit } from "react-icons/fa";

interface MenuProps {
  theme: string;
  menuListBackground: string;
  textColor: string;
}

export function Hamburguer({
  theme,
  menuListBackground,
  textColor,
}: MenuProps) {
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label="Options"
        icon={<HamburgerIcon boxSize={6} />}
        variant="outline"
        colorScheme={theme}
      />
      <MenuList
        bg={menuListBackground}
        color={textColor}
        bgColor={menuListBackground}
        borderColor={"black"}
      >
        <MenuItem
          as="a"
          href="/about/she"
          icon={<IoIosFemale />}
          bg={menuListBackground}
        >
          She
        </MenuItem>
        <MenuItem
          as="a"
          href="/"
          icon={<IoIosHeartEmpty />}
          bg={menuListBackground}
        >
          Us 
        </MenuItem>
        <MenuItem
          as="a"
          href="/about/he"
          icon={<IoIosMale />}
          bg={menuListBackground}
        >
          He
        </MenuItem>

        <MenuDivider color={menuListBackground} />

        <MenuItem
          as="a"
          href="/create"
          icon={<FaRegEdit />}
          bg={menuListBackground}
        >
          Create
        </MenuItem>

        <MenuItem
          as="a"
          href="/about/taxco"
          icon={<InfoOutlineIcon />}
          bg={menuListBackground}
        >
          About
        </MenuItem>
      </MenuList>
    </Menu>
  );
}
