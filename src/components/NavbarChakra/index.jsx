import {
  Flex,
  Text,
  Button,
  Spacer,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import { HamburgerIcon } from "@chakra-ui/icons";

const Navbar = ({ cartCount }) => {
  return (
    <Flex
      as="nav"
      alignItems="center"
      bg="white"
      h="64px"
      p="40px"
      borderBottom="1px"
      borderColor="teal"
      justifyContent="space-between"
      position="fixed"
      top="0"
      left="0"
      right="0"
      zIndex={1}
    >
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Categories"
          icon={<HamburgerIcon />}
          variant="ghost"
          colorScheme="teal"
          display={["flex", "flex", "none", "none"]}
        ></MenuButton>
        <MenuList>
          <NavLink to="/category/shoes">
            <MenuItem>Shoes</MenuItem>
          </NavLink>
          <NavLink to="/category/pants">
            <MenuItem>Pants</MenuItem>
          </NavLink>
          <NavLink to="/category/shirt">
            <MenuItem>Shirt</MenuItem>
          </NavLink>
          <NavLink to="/category/jacket">
            <MenuItem>Jacket</MenuItem>
          </NavLink>
          <NavLink to="/category/ball">
            <MenuItem>Ball</MenuItem>
          </NavLink>
        </MenuList>
      </Menu>
      <Spacer display={["flex", "flex", "none", "none"]} />

      <NavLink to="/">
        <Text color="blackAlpha.700" fontSize="2xl" fontWeight="extrabold">
          Sport 78
        </Text>
      </NavLink>
      <Spacer />

      <HStack spacing="20px" display={["none", "none", "flex", "flex"]}>
        <NavLink to="/category/shoes">
          <Button variant="ghost" colorScheme="teal" size="lg">
          Shoes
          </Button>
        </NavLink>
        <NavLink to="/category/pants">
          <Button variant="ghost" colorScheme="teal" size="lg">
            Pants
          </Button>
        </NavLink>
        <NavLink to="/category/shirt">
          <Button variant="ghost" colorScheme="teal" size="lg">
            Shirt
          </Button>
        </NavLink>
        <NavLink to="/category/jacket">
          <Button variant="ghost" colorScheme="teal" size="lg">
           Jacket
          </Button>
        </NavLink>
        <NavLink to="/category/ball">
          <Button variant="ghost" colorScheme="teal" size="lg">
           Ball
          </Button>
        </NavLink>
      </HStack>
      <Spacer display={["none", "none", "flex", "flex"]} />

      <NavLink to="/cart">
        <IconButton
          icon={<CartWidget cartCount={cartCount} />}
          colorScheme="teal"
          variant="ghost"
        />
      </NavLink>
    </Flex>
  );
};

export default Navbar;
