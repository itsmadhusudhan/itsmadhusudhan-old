import React from "react";
// import { Link } from "gatsby";
// import PropTypes from "prop-types";
import styled from "styled-components";
import { theme } from "../styles";

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20vh 20px 20vh 0;
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

const Touch=styled.h2`
  font-size:30px;
  color:${theme.colors.navy};
  text-align: center;
  margin-top:50px;
`;

const Chat = styled.p`
  padding-top: 20px;
  font-size: 20px;
  text-align: center;
  max-width:600px;
  margin:0 auto;
  line-height:25px;
`;

const MailLink = styled.a`
  background: ${theme.colors.navy};
  color: ${theme.colors.white};
  text-decoration: none;
  margin-top: 30px;
  width: 120px;
  padding: 10px;
  cursor: pointer;
  box-shadow: 1px 5px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  border: 1px solid ${theme.colors.navy};
  align-self: center;
  &:hover {
    background: ${theme.colors.white};
    color: ${theme.colors.navy};
    border: 1px solid ${theme.colors.navy};
  }
`;
 /* eslint-disable */
class Contact extends React.Component {
  render() {
    return (
      <ContactContainer id="contact">
        <Heading>
        <span role="img" arial-label="emoji">        
        📡 
        </span>
        Contact</Heading>
        <Touch>Let's Be in Touch!</Touch>
        <Chat>
          If you have any queries or job offers you can reach out to me on below
          email id 📧.
          You can also contact me if you want me to work with you on any side
          projects. I just love exploring new ways to do things.
        </Chat>
        <MailLink href="mailto:madhusudhan1863@gmail.com">Mail Me</MailLink>
      </ContactContainer>
    );
  }
}

export default Contact;
