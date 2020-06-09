/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

//h76rid

module.exports = {
  siteMetadata: {
    author: 'Tochukwu Nwanguma',
    title: 'Web Developer'
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-sharp",
    `gatsby-plugin-react-helmet`,
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data/`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Roboto mono\:400`, `Nunito\:400, 700`, `Open sans\:400, 700`],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        // your google analytics tracking id
        trackingId: `UA-168846842-1`,
        // Puts tracking script in the head instead of the body
        head: true,
        // enable ip anonymization
        anonymize: true,
      },
    }
    // {
    //   resolve: `gatsby-source-medium`,
    //   options: {
    //     username: `@tochukwunwanguma`,
    //     limit: 200,
    //   },
    // },
  ],
}
