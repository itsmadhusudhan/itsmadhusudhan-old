import PropTypes from "prop-types";
import React from "react";
import styled, { injectGlobal } from "styled-components";
import About from "../components/About";
import Contact from "../components/Contact";
import Experience from "../components/Experience";
import Hero from "../components/Hero";
// import { grapgql } from "gatsby";
import Layout from "../components/Layout";
import Projects from "../components/Projects";
import { theme } from "../styles";

injectGlobal`
  html{
    box-sizing:border-box;
  }
  *,*:before,*:after{
    box-sizing:border-box;
  }
  body{
    margin:0;
    padding:0;
    font-family: Cabin,"Segoe UI";
  }
  a,h1,h2,h3,p,li,ul{
    margin:0;
  }
`;

const MainContainer = styled.div`
  display: block;
  width: 100%;
  padding: 30px 150px 0 150px;
  @media screen and (max-width: ${theme.screenSizes.desktop}px) {
    padding: 30px 50px 0 50px;
  }
  @media screen and (max-width: ${theme.screenSizes.tablet}px) {
    padding: 40px;
  }
  @media screen and (max-width: ${theme.screenSizes.phablet}px) {
    padding: 10px;
  }
`;

const IndexPage = () => {
  return (
    <Layout>
      <MainContainer>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact/>
      </MainContainer>
    </Layout>
  );
};

IndexPage.propTypes = {
  location: PropTypes.object
};

export default IndexPage;
