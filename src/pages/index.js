import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/Seo'
import ProfileCard from '../components/ProfileCard'

import { useSiteMetadata } from '../hooks/use-site-metadata'

const Home = () => {
  const { timeline } = useSiteMetadata()
  return (
    <Layout>
      <SEO title="홈" />
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

export default Home
