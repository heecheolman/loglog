module.exports = {
  siteMetadata: {
    siteUrl: `https://heecheolman.dev`,
    title: `heecheolman`,
    image: `/heecheolman-profile.jpeg`,
    description:
      '개발에 열정을 갖고 꾸준한 노력으로 매일 성장하는 김희철입니다. 웹 프론트엔드에 관심이 많아 웹 프론트엔드 개발로 끝을 보고 싶습니다. 전세계 사람들의 일상생활속에서 자연스럽게 녹아드는 좋은 서비스 구현을 위해 디자인 시스템, 데이터 시각화, 협업, 오픈소스등 다양한 분야에 관심을 갖고 있습니다.<br><br>최근에는 남는시간에 사소하게나마 오픈소스에 기여하려고 노력하고 있습니다.',
    author: `heecheolman`,
    utterenceRepo: `heecheolman/loglog`,
    timeline: [
      {
        date: '2019.1',
        title: '에멘탈',
        major: `웹 프론트엔드`,
        description: `에멘탈에서 Angular, Ionic3, Typescript 를 이용해 <a href="https://bznav.com" target="_blank" rel="noopener noreferrer">비즈넵</a> 서비스를 유지보수 및 개발. `,
      },
    ],
  },
  plugins: [
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: `${__dirname}/src/images`,
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
