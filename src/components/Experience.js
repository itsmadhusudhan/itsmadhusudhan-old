import React from "react";
// import PropTypes from "prop-types";
import styled from "styled-components";
import { theme } from "../styles";

const ExperienceContainer = styled.div`
  display: flex;
  flex-direction:column;
  font-family: Cabin;
  padding-right:150px;
  padding-bottom:100px;
`;

const Heading = styled.h3`
  color: ${theme.colors.red};
  font-size: ${theme.fontSizes.heading};
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  justify-content:flex-end;
  padding-left: 20px;
  text-align:right;
  &:after,
  &:before {
    content: "";
    display: block;
    height: 1px;
    background: ${theme.colors.navy};
  }
  &:before {
    margin-right: 20px;
    width: 100px;
    @media screen and (max-width: ${theme.screenSizes.tablet}px) {
      margin-right: 10px;
    }
  }
  &:after {
    margin-left: 20px;
    width: 400px;
    @media screen and (max-width: ${theme.screenSizes.tablet}px) {
      width: 100px;
      margin-left: 10px;
    }
    @media screen and (max-width: ${theme.screenSizes.phone}px) {
      width: 50px;
    }
  }
`;

const Content=styled.div`
  display:flex;
  justify-content:space-around;
  `;

const Introduction = styled.p`
  margin-top: 25px;
  font-size: ${theme.fontSizes.large};
  max-width: 500px;
  line-height: 25px;
`;

class Experience extends React.Component {
  render() {
    return (
      <ExperienceContainer id="experience">
      <Heading>Experience</Heading>
        <Content> 
        <Introduction></Introduction>
        </Content>
      </ExperienceContainer>
    );
  }
}

export default Experience;
