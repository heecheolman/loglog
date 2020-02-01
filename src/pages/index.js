import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import ProfileCard from '../components/profile-card'
import { useSiteMetadata } from '../hooks/use-site-metadata'
const IndexPage = () => {
  const { timeline } = useSiteMetadata();
  return (
    <Layout>
      <SEO title="Home"/>
      <ProfileCard timeline={timeline} />
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
