import React from "react";
// import PropTypes from "prop-types";
import styled from "styled-components";
import { theme } from "../styles";

const ExperienceContainer = styled.div`
  display: flex;
  flex-direction: column;
  // padding-right: 150px;
  padding: 10vh 0px 20vh 0;
  min-height: 100vh;
`;

const Heading = styled.h3`
  color: ${theme.colors.red};
  font-size: ${theme.fontSizes.heading};
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: flex-end;
  padding-left: 20px;
  text-align: right;
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
      justify-content: flex-start;
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

const Details = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  padding: 30px;
  @media screen and (max-width: ${theme.screenSizes.desktop}px) {
    flex-direction: column;
    justify-content: space-around;
  }
`;

const Designation = styled.h2`
  color: ${theme.colors.navy};
`;

const Company = styled.h3`
  color: ${theme.colors.grey};
  margin-top: 10px;
`;

const Period = styled.p`
  color: ${theme.colors.darkNavy};
  margin-top: 10px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Introduction = styled.p`
  margin-top: 10px;
  font-size: ${theme.fontSizes.large};
  max-width: 500px;
  line-height: 25px;
`;
/* eslint-disable */
class Experience extends React.Component {
  render() {
    return (
      <ExperienceContainer id="experience">
        <Heading>
          <span role="img" arial-label="emoji">
            💼
          </span>{" "}
          Work Experience{" "}
        </Heading>
        <Details>
          <Content>
            <Designation>Software Engineer</Designation>
            <Company>AtoS Global IT Solutions</Company>
            <Period>July, 2017- Present</Period>
          </Content>
          <Introduction>
            Currently working as a fulltime Software Engineer at AtoS, Pune from
            past One year.{" "}
          </Introduction>
        </Details>
      </ExperienceContainer>
    );
  }
}

export default Experience;
