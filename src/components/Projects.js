import React from "react";
// import { Link } from "gatsby";
// import PropTypes from "prop-types";
import styled from "styled-components";
import { theme } from "../styles";

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 150px;
  padding-bottom: 100px;
`;

const Heading = styled.h3`
  color: ${theme.colors.red};
  font-size: ${theme.fontSizes.heading};
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  // justify-content:center;
  padding-left: 20px;
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
    width: 300px;
    @media screen and (max-width: ${theme.screenSizes.tablet}px) {
      width: 100px;
      margin-left: 10px;
    }
    @media screen and (max-width: ${theme.screenSizes.phone}px) {
      width: 50px;
    }
  }
`;

class Projects extends React.Component {
  render() {
    return (
      <ProjectContainer id="projects">
        <Heading>💻 Projects</Heading>
      </ProjectContainer>
    );
  }
}

export default Projects;
