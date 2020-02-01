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
            timeline {
              date
              title
              description
              major
            }
            utterenceRepo
          }
        }
      }
    `
  );

  return site.siteMetadata;
}
