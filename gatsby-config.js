module.exports = {
  siteMetadata: {
    siteUrl: `https://heecheolman.dev`,
    title: `heecheolman`,
    image: `/heecheolman-profile.jpeg`,
    description: `새롭게 배우는것에 거리낌이 없는 개발자 김희철입니다. 직관적이며 남녀노소 쉽게 이용할 수 있는 웹을 개발하고 싶습니다. 최근에 리액트에 관심이 많습니다.`,
    author: `heecheolman`,
    utterenceRepo: `heecheolman/loglog`,
    timeline: [
      {
        date: '2019.1',
        title: '에멘탈',
        major: `프론트엔드`,
        description: `<a href="https://emmental.co.kr" target="_blank" rel="noopener noreferrer">에멘탈</a>의 웹 프론트엔드 개발자이고 Angular, Typescript 를 이용해 <a href="https://bznav.com" target="_blank" rel="noopener noreferrer">비즈넵</a> 서비스를 개발하고 있습니다.`,
      },
    ],
  },
  plugins: [
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/contents`,
        name: 'contents',
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-table-of-contents`,
            options: {
              exclude: 'Table of Contents',
              tight: false,
              fromHeading: 2,
              toHeading: 3,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: 'language-',
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false,
              languageExtensions: [
                {
                  language: 'superscript',
                  extend: 'javascript',
                  definition: {
                    superscript_types: /(SuperType)/,
                  },
                  insertBefore: {
                    function: {
                      superscript_keywords: /(superif|superelse)/,
                    },
                  },
                },
              ],
              prompt: {
                user: 'root',
                host: 'localhost',
                global: false,
              },
              escapeEntities: {},
            },
          },
          `gatsby-remark-autolink-headers`,
          `gatsby-remark-reading-time`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 768,
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
            },
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              destinationDir: `${__dirname}/contents/gif`,
            },
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `heecheolman.dev`,
        short_name: `heecheolman`,
        start_url: `/`,
        background_color: `#578CDC`,
        theme_color: `#578CDC`,
        display: `minimal-ui`,
        icon: `static/heecheolman-profile.jpeg`,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-dark-mode`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap.xml`,
        query: `
        {
          site {
            siteMetadata {
              siteUrl
            }
          }
          allSitePage {
            edges {
              node {
                path
              }
            }
          }
      }`,
        serialize: ({ site, allSitePage }) =>
          allSitePage.edges.map(edge => {
            return {
              url: site.siteMetadata.siteUrl + edge.node.path,
              changefreq: `daily`,
              priority: 0.7,
            }
          }),
      },
    },
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: `https://heecheolman.dev`,
        sitemap: `https://heecheolman.dev/sitemap.xml`,
        policy: [
          {
            userAgent: '*',
            allow: '/',
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        workboxConfig: {
          importWorkboxFrom: `cdn`,
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-157532846-1`,
        head: true,
        anonymize: true,
        respectDNT: true,
      },
    },
    // `gatsby-transformer-remark`,
    // {
    //   resolve: `gatsby-transformer-remark`,
    //   options: {
    //     plugins: [
    //       {
    //         resolve: 'gatsby-remark-copy-linked-files',
    //         // options: {
    //         //   destinationDir: `${__dirname}/contents/gif`,
    //         // },
    //       },
    //     ],
    //   },
    // },
  ],
}
