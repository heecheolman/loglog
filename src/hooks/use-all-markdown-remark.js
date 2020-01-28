import { useStaticQuery, graphql } from 'gatsby';

export const useAllMarkdownRemark = (tagName = '') => {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query allMarkdownRemark (
      $tagName: String
    ) {
      allMarkdownRemark (
        sort: {
          order: DESC,
          fields: [frontmatter___date]
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
      }
    }
  `);
  return allMarkdownRemark.edges;
};

