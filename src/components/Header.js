import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import styled from "styled-components";
import { theme } from "../styles";
import logo from "../images/favicon.png";
import Menu from "./Menu";

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${theme.colors.white};
  height: 60px;
  padding: 0 30px;
  box-shadow: 1px 5px 20px rgba(0, 0, 0, 0.1);
  @media screen and (max-width: ${theme.screenSizes.tablet}px) {
    padding: 0 20px;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImg = styled.img`
  height: 40px;
  margin-right: 10px;
`;

const LogoLink = styled(Link)`
  text-decoration: none;
  color: ${theme.colors.red};
  font-size: ${theme.fontSizes.heading};
`;

const HamburgerMenu = styled.div`
  display: none;
  padding: 15px;
  cursor: pointer;
  z-index: 10;
  @media screen and (max-width: ${theme.screenSizes.tablet}px) {
    display: flex;
  }
`;

const HamburgerBox = styled.div`
  position: relative;
  display: inline-block;
  width: 25px;
  height: 24px;
`;

const HamburgerLine = styled.div`
  background: ${({ menuOpen }) =>
    menuOpen ? theme.colors.white: theme.colors.red};
  position: absolute;
  top: 50%;
  height: 3px;
  left: 0;
  right: 0;
  width: 100%;
  &:before,
  &:after {
    content: "";
    display: block;
    background: ${({ menuOpen }) =>
      menuOpen ? theme.colors.white : theme.colors.red};
    height: 3px;
    left: auto;
    right: 0;
    position: absolute;
  }
  &:before {
    width: 80%;
    top: 10px;
  }
  &:after {
    width: 120%;
    top: -10px;
  }
`;

const NavBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const NavbarLinks = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: ${theme.screenSizes.tablet}px) {
    display: none;
  }
`;

const NavBarList = styled.ul`
  display: flex;
  align-items: center;
`;

const NavBarItem = styled.li`
  margin: 0 10px;
  position: relative;
  list-style: none;
`;

const NavBarLink = styled(Link)`
  padding: 10px;
  text-decoration: none;
  color: ${theme.colors.red};
`;

class Header extends React.Component {
  state = {
    menuOpen: false
  };

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  toggleMenu = () => {
    this.setState(prevState => ({ menuOpen: !prevState.menuOpen }));
  };

  handleResize = () => {
    if (this.state.menuOpen && window.innerWidth > 768) {
      this.toggleMenu();
    }
  };

  handleClick=(e)=>{
    if(e.target.href){
      this.toggleMenu();
    }
  }

  render() {
    const { navLinks } = this.props;
    const { menuOpen } = this.state;
    return (
      <HeaderContainer>
        <NavBar>
          <Logo>
            <LogoImg src={logo} />
            <LogoLink to="/" aria-label="Home">
              Madhusudhan
            </LogoLink>
          </Logo>
          <HamburgerMenu onClick={this.toggleMenu}>
            <HamburgerBox>
              <HamburgerLine menuOpen={menuOpen} />
            </HamburgerBox>
          </HamburgerMenu>
          <NavbarLinks>
            <NavBarList>
              {navLinks.map(({ name, url }, i) => (
                <NavBarItem key={i}>
                  <NavBarLink to={url}>{name}</NavBarLink>
                </NavBarItem>
              ))}
            </NavBarList>
          </NavbarLinks>
        </NavBar>
        <Menu menuOpen={menuOpen} navLinks={navLinks} handleClick={this.handleClick}/>
      </HeaderContainer>
    );
  }
}

export default Header;

Header.propTypes = {
  navLinks: PropTypes.array.isRequired
};
