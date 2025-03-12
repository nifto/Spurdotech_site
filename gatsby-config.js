module.exports = {
  siteMetadata: {
    title: "Spurdotech",
    description: "Expert Mac Repair & IT Support in Lewes",
    author: "Spurdotech Team",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/content/blog`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Spurdotech`,
        short_name: `Spurdotech`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#1e40af`,
        display: `minimal-ui`,
        icon: `src/images/coming-soon-bg.jpg`, // Replace with a square icon later
      },
    },
    `gatsby-plugin-postcss`,
  ],
};