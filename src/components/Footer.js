import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { theme } from "../styles";

const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${theme.colors.navy};
  height: 60px;
  padding: 10px 30px;
  box-shadow: 1px 5px 20px rgba(0, 0, 0, 0.1);
  @media screen and (max-width: ${theme.screenSizes.tablet}px) {
    padding: 10px 20px;
    flex-direction:column;
  }
`;

const NavBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  @media screen and (max-width: ${theme.screenSizes.tablet}px) {
    flex-direction:column;
  }
`;

const NavbarLinks = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: ${theme.screenSizes.tablet}px) {
    // display: none;
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

const NavBarLink = styled.a`
  padding: 10px;
  text-decoration: none;
  color: ${theme.colors.white};
`;

const CopyRight=styled.p`
  color:${theme.colors.white};
`;

const Footer = ({ socialLinks }) => {
  return (
    <FooterContainer>
      <NavBar>
        <NavbarLinks>
          <NavBarList>
            {socialLinks.map(({ name, url }, i) => (
              <NavBarItem key={i}>
                <NavBarLink
                  href={url}
                  target="__blank"
                  rel="nofollow noopener noreferrer"
                >
                  {name}
                </NavBarLink>
              </NavBarItem>
            ))}
          </NavBarList>
        </NavbarLinks>
        <CopyRight>Designed and developed by Madhusudhan </CopyRight>
      </NavBar>
    </FooterContainer>
  );
};

export default Footer;

Footer.propTypes={
  socialLinks:PropTypes.array.isRequired
}