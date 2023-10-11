import styled from "styled-components";

export const NavbarWrapper = styled.div`
  width: 100%;
  background: #1e633f;
  padding: 12px 0px;
  color: #fff;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavOptions = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${(props) =>
    props.dir === "left" ? "flex-start" : "flex-end"};
  width: 50%;
`;

export const Logo = styled.h1`
  margin-right: 12px;
  font-size: 32px;
`;

export const NavText = styled.p`
  display: flex;
  align-items: center;
  & > svg {
    margin-left: 8px;
  }
`;

export const NavLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 12px;
  align-self: center;
  position: relative;
  opacity: 0.7;
`;

export const CartCount = styled.span`
  position: absolute;
  top: -8px;
  left: 4px;
  background: #3eca72;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  font-size: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

