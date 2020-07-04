/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path')

const isProduction = process.env.NODE_ENV === 'production'

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const blogPostTemplate = path.resolve(`src/templates/blog-post.js`)
  const result = await graphql(`
    {
      allMarkdownRemark(
        limit: 2000
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        edges {
          node {
            frontmatter {
              title
              path
              draft
            }
          }
        }
      }
      tagsGroup: allMarkdownRemark(limit: 2000) {
        group(field: frontmatter___tags) {
          fieldValue
          nodes {
            frontmatter {
              draft
            }
          }
        }
      }
      dateGroup: allMarkdownRemark(limit: 2000) {
        group(field: frontmatter___date) {
          fieldValue
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    if (isProduction && node.frontmatter.draft) {
      return
    }
    createPage({
      path: node.frontmatter.path,
      component: blogPostTemplate,
      context: {}, // additional data can be passed via context
    })
  })

  /*
    tags pages
   */
  result.data.tagsGroup.group.forEach(({ fieldValue, nodes }) => {
    const includePublish = nodes.some(
      ({ frontmatter }) => frontmatter && !frontmatter.draft
    )

    /**
     * production 인데, 발행할게 없다면 tags 페이지 미발행
     */
    if (isProduction && !includePublish) {
      return
    }

    createPage({
      path: '/tags/' + fieldValue,
      component: path.resolve('src/pages/tag.js'),
      context: {
        tagName: fieldValue,
      },
    })
  })
}
