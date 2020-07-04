import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import PostGroup from '../components/post-group'
import postGroupByDate from '../services/post-group-by-date'

const isProduction = process.env.NODE_ENV === 'production'

function Archives({ data }) {
  const { edges: postList, dateGroup } = data.allMarkdownRemark

  const targetPostList = isProduction
    ? postList.filter(({ node }) => !node.frontmatter.draft)
    : postList

  const postEntries = postGroupByDate(targetPostList, dateGroup)

  return (
    <Layout>
      <SEO title="아카이브" />
      {postEntries.map(([title, postList]) => (
        <PostGroup key={title} title={title} postList={postList} />
      ))}
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          frontmatter {
            title
            date(formatString: "YYYY-MM-DD")
            path
            draft
          }
        }
      }
      dateGroup: group(field: frontmatter___date) {
        fieldValue
      }
    }
  }
`

export default Archives
