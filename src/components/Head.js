import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import favicon from '../images/favicon.png';

const Head=({metaData})=>(
  <Helmet>
  <html lang="en" />
  <title>{metaData.title}</title>
  <link rel="icon" type="image/png" href={favicon} />
  <meta name="metaData.description" content={metaData.description} />
  <meta property="og:type" content="website" />
    <meta property="og:url" content={metaData.siteUrl} />
    <meta property="og:site_name" content={metaData.title} />
    <link href="https://fonts.googleapis.com/css?family=Cabin" rel="stylesheet"/>
  </Helmet>
)

export default Head;

Head.propTypes={
  metaData:PropTypes.object.isRequired
}