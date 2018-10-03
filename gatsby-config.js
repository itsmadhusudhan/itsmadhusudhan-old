const userConfig = require("./config");

module.exports = {
  siteMetadata: {
    title: userConfig.siteTitle,
    author: userConfig.author,
    siteUrl: userConfig.siteUrl,
    description: userConfig.description
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
    {
      resolve:'gatsby-source-filesystem',
      options:{
        path:`${__dirname}/content`,
        name:'content'
      }
    },
    `gatsby-plugin-sitemap`,
    {
      resolve:`gatsby-transformer-remark`,
      options:{
        plugins:[
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
              rel: 'nofollow noopener noreferrer',
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1100,
              quality: 90,
              linkImagesToOriginal: true,
            },
          },
        ]
      }
    },
       {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: ""
      }
    },
  ]
};
