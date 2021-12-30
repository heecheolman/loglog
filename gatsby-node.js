/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

const isProduction = process.env.NODE_ENV === 'production'

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const PostTemplate = path.resolve('src/templates/Post/index.tsx')
  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 1000
      ) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              title
              path
              draft
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const {
    data: {
      allMarkdownRemark: { edges },
    },
  } = result

  edges.forEach(({ node }) => {
    const { slug } = node.fields
    if (isProduction) {
      if (!node.frontmatter.draft) {
        createPage({
          path: slug,
          component: PostTemplate,
          context: {
            slug,
          },
        })
      }
    } else {
      createPage({
        path: slug,
        component: PostTemplate,
        context: {
          slug,
        },
      })
    }
  })
}

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode })
    createNodeField({
      node,
      name: `slug`,
      value: '/post' + slug,
    })
  }
}
