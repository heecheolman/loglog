import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { graphql } from 'gatsby'
import postGroupByDate from '../services/post-group-by-date'
import TagLabel from '../components/tag-label'
import PostGroup from '../components/post-group'

const isProduction = process.env.NODE_ENV === 'production'

function Tag({ data, pageContext }) {
  const { edges: postList, dateGroup } = data.allMarkdownRemark

  const targetPostList = isProduction
    ? postList.filter(({ node }) => !node.frontmatter.draft)
    : postList

  const postEntries = postGroupByDate(targetPostList, dateGroup)
  const tagElement = !!pageContext.tagName && (
    <div>
      <TagLabel label={pageContext.tagName} />
    </div>
  )

  return (
    <Layout>
      <SEO title={pageContext.tagName || ''} />
      {tagElement}
      {postEntries.map(([title, postList]) => (
        <PostGroup key={title} title={title} postList={postList} />
      ))}
    </Layout>
  )
}

export const query = graphql`
  query($tagName: String) {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { tags: { eq: $tagName } } }
    ) {
      edges {
        node {
          frontmatter {
            title
            date(formatString: "YYYY-MM-DD")
            path
            tags
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

export default Tag
