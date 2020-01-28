import React from 'react';
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import PostGroup from '../components/post-group'
import postGroupByDate from '../services/post-group-by-date'
import PostListTemplate from '../components/templates/post-list-template'

const Archives = ({ data }) => {
  const {
    edges: postList,
    dateGroup,
  } = data.allMarkdownRemark

  const postEntries = postGroupByDate(postList, dateGroup);
  return (
    <Layout>
      <SEO title="Home"/>
      <PostListTemplate postEntries={postEntries} />
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
          }
        }
      }
      dateGroup: group(field: frontmatter___date) {
        fieldValue
      }
    }
  }
`

export default Archives;
