import React from 'react'
import { graphql } from 'gatsby'

import MainLayout from '../layouts/MainLayout'
import SEO from '../components/Seo'
import TagLabel from '../components/TagLabel'
import PostGroup from '../components/PostGroup'

import postGroupByDate from '../services/post-group-by-date'

const isProduction = process.env.NODE_ENV === 'production'

const Tag = ({ data, pageContext }) => {
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
    <MainLayout>
      <SEO title={pageContext.tagName || ''} />
      {tagElement}
      {postEntries.map(([title, postList]) => (
        <PostGroup key={title} title={title} postList={postList} />
      ))}
    </MainLayout>
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
