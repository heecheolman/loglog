import React from 'react';
import Layout from '../components/layout'
import SEO from '../components/seo'
import { graphql } from 'gatsby'
import postGroupByDate from '../services/post-group-by-date'
import TagLabel from '../components/tag-label'
import PostListTemplate from '../components/templates/post-list-template'

function Tag ({ data, pageContext }) {
  const {
    edges: postList,
    dateGroup
  } = data.allMarkdownRemark;
  const postEntries = postGroupByDate(postList, dateGroup);

  return (
    <Layout>
      <SEO title="tag" />
      <div style={{marginBottom: "10px"}}>
        <TagLabel label={pageContext.tagName} />
      </div>
      <PostListTemplate postEntries={postEntries} />
    </Layout>
  )
}

export const query = graphql`
  query (
    $tagName: String,
  ) {
    allMarkdownRemark (
      sort: {
        order: DESC,
        fields: [frontmatter___date],
      }
      filter: {
        frontmatter: {
          tags: {
            eq: $tagName
          }
        }
      }
    ) {
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
`;

export default Tag;
