module.exports = {
  siteMetadata: {
    title: `n0llan.nu`,
    description: `Mottagningen för Industriell Ekonomi KTH`,
    author: `@axelbacklund`,
    menuLinks: [
      {
        name: 'Schema',
        link: '/schema',
      },
      {
        name: 'Media',
        link: '/media',
      },
      {
        name: 'Kontakt',
        link: '/kontakt',
      },
      {
        name: 'OSA',
        link: '/osa',
      },
      {
        name: 'Om mottagningen',
        link: '/om-mottagningen',
      },
      {
        name: 'Medverkande företag',
        link: '/medverkande-foretag',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-typegen`,
      options: {
        emitSchema: {
          'src/__generated__/gatsby-introspection.json': true,
          'src/__generated__/gatsby-schema.graphql': true,
        },
        emitPluginDocuments: {
          'src/__generated__/gatsby-plugin-documents.graphql': true,
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'fonts',
        path: `${__dirname}/static/fonts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `news`,
        path: `${__dirname}/content/news`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `media`,
        path: `${__dirname}/content/media`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `osa`,
        path: `${__dirname}/content/osa`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/content/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `info-links`,
        path: `${__dirname}/content/info-links`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `sponsors`,
        path: `${__dirname}/content/sponsors`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `msg`,
        path: `${__dirname}/content/msg`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`karla`],
        display: 'swap',
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `n0llan.nu`,
        short_name: `n0llan.nu`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/mottagningen.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
