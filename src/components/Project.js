import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const ProjectContainer = styled.div`
  margin: 50px 20px;
  padding: 20px;
  border: 1px solid #ccc;
`;

const ProjectHeading = styled.h2`
  font-size: 28px;
`;

const ProjectBody = styled.p`
  font-size: 20px;
`;

const ProjectLink = styled(Link)``;

const ProjectSource = styled.a``;

const ProjectDemo = styled.a``;

const Project = ({ heading, body }) => {
  return (
    <ProjectContainer>
      <ProjectHeading>{heading}</ProjectHeading>
      <ProjectBody>{body}</ProjectBody>
    </ProjectContainer>
  );
};

export default Project;
