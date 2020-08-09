import React, { useEffect, useState } from 'react'
import { useSiteMetadata } from '../../hooks/use-site-metadata'
import { graphql } from 'gatsby'

import MainLayout from '../../layouts/MainLayout'
import SEO from '../../components/Seo'
import TagLabel from '../../components/TagLabel'
import Divider from '../../components/Divider'
import Toc from '../../components/Toc'
import Utterences from '../../components/Utterances'

import './index.scss'

const BlogTemplate = ({ data }) => {
  const { markdownRemark: post } = data
  const { utterenceRepo } = useSiteMetadata()
  const [fixToc, setFixToc] = useState(false)

  const contentImage = post.frontmatter.image
    ? post.frontmatter.image.childImageSharp.resize.src
    : ''

  useEffect(() => {
    const scrollHandler = event => {
      if (window.pageYOffset >= 270) {
        setFixToc(true)
      } else {
        setFixToc(false)
      }
    }

    window.addEventListener('scroll', scrollHandler)
    return () => window.removeEventListener('scroll', scrollHandler)
  }, [fixToc])

  const { headings } = post

  return (
    <MainLayout>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        image={contentImage}
      />
      <article className="post-section">
        <h1 className="post-section-title">{post.frontmatter.title}</h1>
        <div className="post-section-frontmatter">
          <span>{post.frontmatter.date}</span>
          <Divider type="vertical" />
          <span>{post.frontmatter.author}</span>
          <Divider type="vertical" />
          <span>{post.fields.readingTime.text}</span>
        </div>
        <Divider />
        <Toc headings={headings} fixed={fixToc} />
        <div
          className="markdown-content"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </article>
      <div className="tag-section">
        {post.frontmatter.tags.map((tag, index) => (
          <TagLabel key={index} label={tag} />
        ))}
      </div>
      <Utterences repo={utterenceRepo} />
    </MainLayout>
  )
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "YYYY년 MM월 DD일")
        path
        title
        tags
        author
        image {
          id
          childImageSharp {
            id
            resize(width: 768) {
              src
              tracedSVG
              width
              height
              aspectRatio
              originalName
            }
          }
        }
      }
      headings {
        id
        depth
        value
      }
      fields {
        readingTime {
          text
        }
      }
    }
  }
`

export default BlogTemplate