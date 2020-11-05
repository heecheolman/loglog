import { graphql, useStaticQuery } from 'gatsby'

function useSiteMetadata() {
  const {
    site: { siteMetadata },
  } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          siteUrl
          title
          image
          author
          utterances
          description
        }
      }
    }
  `)

  return {
    ...siteMetadata,
  }
}

export default useSiteMetadata
