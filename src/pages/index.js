import React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home"/>
    </Layout>
  )
}

export const query = graphql`
  query HomePageQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          frontmatter {
            title
            date(formatString: "YYYY-MM-DD")
            path
            tags
          }
        }
      }
      dateGroup: group(field: frontmatter___date) {
        fieldValue
      }
    }
  }
`

export default IndexPage
