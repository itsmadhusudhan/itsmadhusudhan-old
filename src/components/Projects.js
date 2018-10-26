import React from "react";
// import { Link } from "gatsby";
// import PropTypes from "prop-types";
import styled from "styled-components";
import { theme } from "../styles";
import Project from "./Project";

const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5vh 150px 20vh 0;
  min-height: 100vh;
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

const Container = styled.div``;

/* eslint-disable */
class Projects extends React.Component {
  render() {
    return (
      <ProjectsContainer id="projects">
        <Heading>
          <span role="img" arial-label="emoji">
            💻
          </span>
          Projects
        </Heading>
        <Container>
          <Project
            heading="Rest Api with firebase"
            body="I have built a Rest Api that gives the details of screens in movie theatres"
          />
          <Project heading="Blog with gatsby" body="Designed and developed the blog Coding Titan using Gatsby a static site generator"/>
        </Container>
      </ProjectsContainer>
    );
  }
}

export default Projects;
