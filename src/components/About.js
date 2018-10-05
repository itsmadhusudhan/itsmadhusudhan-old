import React from "react";
// import PropTypes from "prop-types";
import styled from "styled-components";
import { theme } from "../styles";
import madhu from '../images/madhu.jpg';

const AboutContainer = styled.div`
  display: flex;
  flex-direction:column;
  font-family: Cabin;
  padding: 5vh 150px 20vh 0;
  min-height:100vh;
  @media screen and (max-width: ${theme.screenSizes.tablet}px) {
    padding-right:0;
  }
`;

const Heading = styled.h3`
  color: ${theme.colors.red};
  font-size: ${theme.fontSizes.heading};
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  padding-left: 20px;
  @media screen and (max-width: ${theme.screenSizes.phablet}px) {
    justify-content: center;
  }
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
    @media screen and (max-width: ${theme.screenSizes.phablet}px) {
      width: 0;
    }
  }
  &:after {
    margin-left: 20px;
    width: 300px;
    @media screen and (max-width: ${theme.screenSizes.tablet}px) {
      width: 100px;
      margin-left: 10px;
    }
    @media screen and (max-width: ${theme.screenSizes.phablet}px) {
      width: 0;
    }
  }
`;

const Content=styled.div`
  display:flex;
  justify-content:space-around;
  padding-top:30px;
  @media screen and (max-width: ${theme.screenSizes.phablet}px) {
    flex-direction:column-reverse;
    align-items:center;
    justify-content:center;
  }
  `;

const TextBlock=styled.div``;

const Madhu=styled.img`
  border-radius:50%;
  width:250px;
  height:250px;
  float:left;
  display:block;
  user-select:none;
`;

const Introduction = styled.p`
  margin-top: 25px;
  font-size: ${theme.fontSizes.large};
  max-width: 500px;
  line-height: 25px;
  @media screen and (max-width: ${theme.screenSizes.phablet}px) {
    order:2;
  }
`;
 /* eslint-disable */
class About extends React.Component {
  render() {
    return (
      <AboutContainer id="about">
      <Heading>
      <span role="img" arial-label="emoji">👲</span> About Me</Heading>
        <Content>
        <TextBlock>
        <Introduction>I have completed my Bachelor's degree in 2017. I have been learning web development 
        from one year </Introduction>
        <Introduction>I enjoy reading very much. </Introduction>
        </TextBlock>
        <Madhu src={madhu}></Madhu>        
        </Content>
      </AboutContainer>
    );
  }
}

export default About;
