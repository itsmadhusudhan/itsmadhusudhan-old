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
  justify-content: flex-end;
  padding-left: 20px;
  text-align: right;
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

const Chat=styled.p`

`

const MailLink=styled.a`
background: ${theme.colors.navy};
color: ${theme.colors.white};
text-decoration: none;
margin-top: 30px;
width: 120px;
padding: 10px;
cursor: pointer;
box-shadow: 1px 5px 20px rgba(0, 0, 0, 0.2);
text-align: center;
&:hover {
  background: ${theme.colors.white};
  color: ${theme.colors.navy};
  border: 1px solid ${theme.colors.navy};
}
`;


class Contact extends React.Component {
  render() {
    return (
      <ProjectContainer id="contact">
        <Heading>📡 Contact</Heading>
        <Chat>If you have any queries or job offers you can reach out to me on below email id	📧.</Chat>
        <MailLink href="mailto:madhusudhan1863@gmail.com">Mail Me</MailLink>
      </ProjectContainer>
    );
  }
}

export default Contact;
