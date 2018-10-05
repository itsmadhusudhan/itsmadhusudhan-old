import React, { Fragment } from "react";
// import PropTypes from "prop-types";
import styled from "styled-components";
import { theme } from "../styles";
import resume from "../assets/Madhusudhan_resume.pdf";

const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 50px 0 100px 0;
`;

const Hello = styled.p`
  color: ${theme.colors.red};
  font-size: ${theme.fontSizes.large};
`;

const Name = styled.h1`
  font-size: 70px;
  color: ${theme.colors.navy};
  @media screen and (max-width: ${theme.screenSizes.desktop}px) {
    font-size: 60px;
  }
  @media screen and (max-width: ${theme.screenSizes.tablet}px) {
    font-size: 50px;
  }
`;

const Caption = styled.h2`
  font-size: 60px;
  color: ${theme.colors.red};
  @media screen and (max-width: ${theme.screenSizes.desktop}px) {
    font-size: 50px;
  }
  @media screen and (max-width: ${theme.screenSizes.tablet}px) {
    font-size: 40px;
  }
`;

const Introduction = styled.p`
  margin-top: 25px;
  font-size: ${theme.fontSizes.large};
  max-width: 500px;
  line-height: 25px;
  @media screen and (max-width: ${theme.screenSizes.tablet}px) {
    font-size: 18px;
  }
`;

const WebLink = styled.a`
  color: ${theme.colors.red};
  text-decoration: none;
`;

const ResumeLink = styled.a`
  background: ${theme.colors.navy};
  color: ${theme.colors.white};
  text-decoration: none;
  margin-top: 30px;
  width: 120px;
  padding: 10px;
  cursor: pointer;
  box-shadow: 1px 5px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  border: 1px solid ${theme.colors.white};
  &:hover {
    background: ${theme.colors.white};
    color: ${theme.colors.navy};
    border: 1px solid ${theme.colors.navy};
  }
`;

class Hero extends React.Component {
  state = {
    isMounted: false
  };

  componentDidMount() {
    setTimeout(() => this.setState({ isMounted: true }), 500);
  }

  render() {
    const { isMounted } = this.state;
    return (
      <HeroContainer>
        {isMounted && (
          <Fragment>
            <Hello>Hello, I'm </Hello>
            <Name>Madhusudhan.</Name>
            <Caption>A very passionate Front-End developer</Caption>
            <Introduction>
              I'm a Software Engineer based in India. I love reading and writing
              about JavaScript. React and Angular are the two frameworks that
              I'm currently interested in. I write about web development on my
              blog{" "}
              <WebLink href="https://codingtitan.com">codingtitan.com</WebLink>
            </Introduction>
            <ResumeLink
              href={resume}
              target="__blank"
              rel="nofollow noopener noreferrer"
            >
              Get Resume
            </ResumeLink>
          </Fragment>
        )}
      </HeroContainer>
    );
  }
}

export default Hero;
