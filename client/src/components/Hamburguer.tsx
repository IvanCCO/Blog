import { HamburgerIcon, InfoOutlineIcon } from "@chakra-ui/icons";
import {
  IconButton,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { IoIosHeartEmpty, IoIosMale } from "react-icons/io";

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
        icon={<HamburgerIcon boxSize={6} color={textColor} />}
        variant="outline"
      />
      <MenuList
        bg={menuListBackground}
        color={textColor}
        bgColor={menuListBackground}
        borderColor={"black"}
      >
        <MenuItem
          as="a"
          href="/"
          icon={<IoIosHeartEmpty />}
          bg={menuListBackground}
        >
          Home
        </MenuItem>
        <MenuItem
          as="a"
          href="/about/he"
          icon={<IoIosMale />}
          bg={menuListBackground}
        >
          Me
        </MenuItem>

        <MenuDivider color={menuListBackground} />

        <MenuItem
          as="a"
          href="/about/taxco"
          icon={<InfoOutlineIcon />}
          bg={menuListBackground}
        >
          Taxco
        </MenuItem>
      </MenuList>
    </Menu>
  );
}
