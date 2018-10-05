import React from "react";
// import styled from "styled-components";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import Head from "./Head";
import Header from "./Header";
import Footer from "./Footer";
import { navLinks,socialLinks } from "../../config";

class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired
  };

  state = {
    isLoading: true
  };

  render() {
    const { children } = this.props;
    const { isLoading } = this.state;
    return (
      <StaticQuery
        query={graphql`
          query LayoutQuery {
            site {
              siteMetadata {
                title
                siteUrl
                description
              }
            }
          }
        `}
        render={data => (
          <div>
            <Head metaData={data.site.siteMetadata} />
            {isLoading && (
              <div>
                <Header navLinks={navLinks} />
                {children}
                <Footer socialLinks={socialLinks} />
              </div>
            )}
          </div>
        )}
      />
    );
  }
}

export default Layout;
