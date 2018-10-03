import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { theme } from "../styles";
import PropTypes from "prop-types";

const MenuContainer = styled.div`
  visibility: ${props => (props.menuOpen ? "visible" : "hidden")};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  outline: 0;
  z-index: 9;
  transform: translateX(${props => (props.menuOpen ? 0 : 100)}vw);
  display: none;
  background:transparent;
  transition: transform 0.5s ease-out;
  @media screen and (max-width: ${theme.screenSizes.tablet}px) {
    display: block;
  }
`;

const SideMenuBar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${theme.colors.red};
  width: 50vw;
  height: 100%;
  position: relative;
  right: 0;
  margin-left: auto;
  padding: 100px;
  @media screen and (max-width: ${theme.screenSizes.tablet}px) {
  }
  @media screen and (max-width: ${theme.screenSizes.phablet}px) {
    width: 75vw;
  }
`;

const NavbarLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
`;

const NavBarList = styled.ul`
  width: 100%;
`;

const NavBarItem = styled.li`
  margin: 0 auto 20px;
  position: relative;
  list-style: none;
`;

const NavBarLink = styled(Link)`
  padding: 20px;
  text-decoration: none;
  color: ${theme.colors.white};
  width: 100%;
  font-size: ${theme.fontSizes.large};
`;

const Menu = ({ menuOpen, navLinks }) => {
  return (
    <MenuContainer menuOpen={menuOpen}>
      <SideMenuBar>
        <NavbarLinks>
          <NavBarList>
            {navLinks.map(({ name, url }, i) => (
              <NavBarItem key={i}>
                <NavBarLink to={url}>{name}</NavBarLink>
              </NavBarItem>
            ))}
          </NavBarList>
        </NavbarLinks>
      </SideMenuBar>
    </MenuContainer>
  );
};

export default Menu;

Menu.propTypes = {
  menuOpen: PropTypes.bool.isRequired,
  navLinks: PropTypes.array.isRequired
};
