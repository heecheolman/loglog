import { useStaticQuery, graphql } from 'gatsby'

export const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query siteMetadata {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  );

  return site.siteMetadata;
}
