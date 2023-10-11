import React from "react";
import {
  CartCount,
  Logo,
  Nav,
  NavLink,
  NavOptions,
  NavText,
  NavbarWrapper,
} from "./navbar.styled";
import { CommonMargin } from "../layout";
import { CartIcon, DropdownIcon } from "../icons";

const Navbar = () => {
  return (
    <NavbarWrapper>
      <CommonMargin>
        <Nav>
          <NavOptions dir="left">
            <Logo>Reeco</Logo>
            <NavLink>Store</NavLink>
            <NavLink>Orders</NavLink>
            <NavLink>Analytics</NavLink>
          </NavOptions>
          <NavOptions dir="right">
            <NavLink>
              <CartIcon />
              <CartCount>13</CartCount>
            </NavLink>
            <NavLink>
              <NavText>
                Hello, James
                <DropdownIcon />
              </NavText>
            </NavLink>
          </NavOptions>
        </Nav>
      </CommonMargin>
    </NavbarWrapper>
  );
};

export default Navbar;

