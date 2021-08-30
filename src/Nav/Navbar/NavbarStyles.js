import styled from "styled-components";
import { Link as LinkScroll } from "react-scroll";
import { Link as LinkRouter } from "react-router-dom";

export const Nav = styled.nav`
  background: #fff;
  height: 80px;
  //margin-top: -80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 0;
  z-index: 10;
  font-size: 1rem;
  position: sticky;
  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
  border-bottom: 1px solid whitesmoke;
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  height: 80px;
`;
export const NavLogo = styled(LinkRouter)`
  color: #505050;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.2rem;
  text-decoration: none;
  margin-left: 24px;
  font-weight: bold;
  display: flex;
  align-items: center;
`;
export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    font-size: 1.8rem;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    cursor: pointer;
    color: #505050;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  margin-right: 22px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const NavItem = styled.li`
  height: 80px;
`;
export const NavLinks = styled(LinkScroll)`
  display: flex;
  align-items: center;
  padding: 0 1rem;
  color: #707070;
  cursor: pointer;
  text-decoration: none;
  height: 100%;

  &:hover {
    color: #536def;
  }

  &.active {
    border-bottom: 3px solid #01bf71;
  }
`;
export const BtnWrapper = styled.nav`
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
