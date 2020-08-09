/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

const SEO = ({ lang, meta, title, image }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            author
            image
          }
        }
      }
    `
  )

  // const metaDescription = description || site.siteMetadata.description
  const metaImage = image || site.siteMetadata.image

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        // {
        //   name: `description`,
        //   content: metaDescription,
        // },
        {
          name: `image`,
          content: metaImage,
        },
        {
          property: `og:title`,
          content: title,
        },
        // {
        //   property: `og:description`,
        //   content: metaDescription,
        // },
        {
          property: `og:image`,
          content: metaImage,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        // {
        //   name: `twitter:description`,
        //   content: metaDescription,
        // },
      ].concat(meta)}
    >
      <link
        href="//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSans-kr.css"
        rel="stylesheet"
        type="text/css"
      ></link>
      <link
        href="//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSans-jp.css"
        rel="stylesheet"
        type="text/css"
      ></link>
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: `ko`,
  meta: [],
  description: ``,
  defaultImage: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
