'use-client'
import { HamburgerIcon, InfoOutlineIcon } from "@chakra-ui/icons";
import {
  IconButton,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { IoIosMale, IoMdGlobe, IoMdHome } from "react-icons/io";

export function Hamburguer() {
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label="Options"
        icon={<HamburgerIcon boxSize={6} />}
      />
      <MenuList>
        <MenuItem as="a" href="/" icon={<IoMdHome />}>
          Home
        </MenuItem>
        <MenuItem as="a" href="/about/me" icon={<IoIosMale />}>
          Me
        </MenuItem>
        <MenuItem as="a" href="/world" icon={<IoMdGlobe />}>
          World
        </MenuItem>
        <MenuDivider />
        <MenuItem as="a" href="/about/taxco" icon={<InfoOutlineIcon />}>
          Taxco
        </MenuItem>
      </MenuList>
    </Menu>
  );
}