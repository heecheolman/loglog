import React from 'react'
import { css } from '@emotion/core'
import { graphql } from 'gatsby'

import MainLayout from '../../layouts/MainLayout'
import Seo from '../../components/Seo'
import Badge from '../../components/Badge'
import Utterances from '../../components/Utterances'
import styled from '@emotion/styled'

function Post(props: any) {
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
      <Seo
        title={frontmatter.title}
        description={frontmatter.description}
        image={''}
      />
      <div
        css={css`
          margin-bottom: 3rem;
        `}
      >
        {frontmatter.draft ? (
          <Badge
            css={css`
              margin-bottom: 8px;
            `}
          >
            작성중
          </Badge>
        ) : null}
        <p
          css={css`
            font-size: 13px;
            color: var(--textWeak);
            margin-top: 0;
            margin-bottom: 8px;
            font-weight: 300;
            word-break: keep-all;
            overflow-wrap: break-word;
            line-height: 1.8;
          `}
        >
          {frontmatter.date}
        </p>
        <p
          css={css`
            font-size: 13px;
            margin-top: 0;
            color: var(--textWeak);
            font-weight: 300;
            word-break: keep-all;
            overflow-wrap: break-word;
            line-height: 1.8;
          `}
        >
          {frontmatter.description}
        </p>
      </div>
      <Article css={articleStyle}>
        {/* <TableOfContents htmlText={tableOfContents} /> */}

        <Title>{frontmatter.title}</Title>
        <section dangerouslySetInnerHTML={{ __html: html }} />
      </Article>
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

const Article = styled.article`
  position: relative;
  z-index: 0;
  word-break: keep-all;
  margin-bottom: 6rem;
`

const Title = styled.h1`
  margin-top: 4.5rem;
  margin-bottom: 1.5rem;
  font-size: 3rem;
  font-weight: 400;
  color: var(--textNormal);
`
const articleStyle = css`
  .toc {
    ul {
      list-style: none;
      margin: 0;

      li {
        font-size: 0.8rem;

        > p {
          font-size: 0.8rem;
        }
        > ul {
          margin: 8px 0 8px 10px;
          padding-left: 10px;
        }
      }
    }
  }

  h1 {
    margin-top: 4.5rem;
    margin-bottom: 1.5rem;
    font-size: 3rem;
    font-weight: 400;
    color: var(--textNormal);
  }
  h2 {
    margin-top: 3rem;
    margin-bottom: 1rem;
    font-size: 2rem;
    font-weight: 400;
    color: var(--textNormal);
  }
  h3 {
    margin-top: 2.4rem;
    margin-bottom: 0.8rem;
    font-size: 1.6rem;
    font-weight: 400;
    color: var(--textNormal);
  }
  h4 {
    margin-top: 2.1rem;
    margin-bottom: 0.7rem;
    font-size: 1.4rem;
    font-weight: 400;
    color: var(--textNormal);
  }
  h5 {
    margin-top: 1.8rem;
    margin-bottom: 0.6rem;
    font-size: 1.2rem;
    font-weight: 400;
    color: var(--textNormal);
  }
  h6 {
    margin-top: 1.5rem;
    margin-bottom: 0.5rem;
    font-size: 1rem;
    font-weight: 400;
    color: var(--textNormal);
  }

  strong {
    font-weight: 600;
  }

  p {
    margin-top: 0;
    margin-bottom: 2rem;
    font-size: 1rem;
    font-weight: 300;
    word-break: keep-all;
    overflow-wrap: break-word;
    line-height: 1.8;
    color: var(--textNormal);
  }

  img {
    width: 100%;
  }

  table {
    padding: 0;
    border-collapse: collapse;
  }
  table tr {
    border-top: 1px solid var(--borderWeak);
    background-color: var(--card-bg);
    margin: 0;
    padding: 0;
  }

  table tr th {
    font-weight: bold;
    border: 1px solid var(--borderWeak);
    text-align: left;
    margin: 0;
    padding: 6px 15px;
    color: var(--textNormal);
  }

  table tr td {
    border: 1px solid var(--borderWeak);
    text-align: left;
    font-weight: 300;
    margin: 0;
    padding: 6px 15px;
  }

  table tr th :first-child,
  table tr td :first-child {
    margin-top: 0;
  }

  table tr th :last-child,
  table tr td :last-child {
    margin-bottom: 0;
  }

  ol {
    margin: 0 0 1rem 0;
    padding-left: 1rem;
    font-weight: 300;

    li {
      font-size: 1rem;
      line-height: 1.8;
      color: var(--textNormal);

      p {
        margin: 0;
      }
    }
  }

  ul {
    margin: 0 0 1rem 0;
    padding-left: 1rem;
    font-weight: 300;

    li {
      color: var(--textNormal);
      line-height: 1.8;

      p {
        margin: 0;
      }
    }
  }

  blockquote {
    margin: 2rem 0 2.5rem 0;
    border-left: 3px solid var(--textWeak);
    padding-left: 15px;
    p {
      margin: 0;
      color: var(--textWeak);
      font-weight: 300;
      font-size: 1rem;
    }
  }

  hr {
    width: 100%;
    height: 1px;
    margin: 20px 0;
    border: none;
    background-color: var(--dividerBg);
  }

  pre {
    border-radius: 2px;
    font-size: 1rem;

    * {
      font-family: 'SF Pro Text', 'SF Pro Icons', 'Helvetica Neue', 'Helvetica',
        'Arial', sans-serif;
    }
  }

  a {
    color: var(--textNormal);
    transition: 0.1s ease-out;

    &:hover {
      color: var(--primary);
    }
  }

  :not(pre) > code[class*='language-'] {
    font-family: 'SF Pro Text', 'SF Pro Icons', 'Helvetica Neue', 'Helvetica',
      'Arial', sans-serif;
    padding: 0.2em 0.4em;
    margin: 0;
    font-size: 1rem;
    font-weight: 400;
    background-color: var(--codeBg);
    color: var(--codeColor);
    border-radius: 2px;
    white-space: pre-wrap;
    word-break: break-all;
    text-shadow: none;
  }
`
