import React from 'react'
import { css } from '@emotion/core'
import { graphql } from 'gatsby'

import MainLayout from '../../layouts/MainLayout'
import Seo from '../../components/Seo'
import Badge from '../../components/Badge'
import Utterances from '../../components/Utterances'

import styles from './style.module.scss'

const Post = props => {
  const {
    data: {
      site: {
        siteMetadata: { utterances },
      },
      markdownRemark: { html, frontmatter },
    },
  } = props

  return (
    <MainLayout>
      <Seo title={frontmatter.title} description={frontmatter.description} />
      <article className={styles.article}>
        {/* <TableOfContents htmlText={tableOfContents} /> */}
        <div className={styles.articleMeta}>
          {frontmatter.draft ? (
            <Badge
              css={css`
                margin-bottom: 8px;
              `}
            >
              작성중
            </Badge>
          ) : null}
          <p className={styles.createdAt}>{frontmatter.date}</p>
          <p className={styles.description}>{frontmatter.description}</p>
        </div>
        <h1>{frontmatter.title}</h1>
        <section dangerouslySetInnerHTML={{ __html: html }} />
      </article>
      <Utterances repo={utterances} />
    </MainLayout>
  )
}

export const PageQuery = graphql`
  query PostQuery($slug: String!) {
    site {
      siteMetadata {
        utterances
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      tableOfContents
      frontmatter {
        title
        date(formatString: "YYYY년 M월 D일 HH:MM")
        description
        draft
      }
    }
  }
`

export default Post
