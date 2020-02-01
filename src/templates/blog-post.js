import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import './blog-post.scss';
import TagLabel from '../components/tag-label'
import Divider from '../components/divider'
import { graphql } from 'gatsby'

export default function Template({
  data, // this prop will be injected by the GraphQL query we'll write in a bit
}) {
  const { markdownRemark: post } = data // data.markdownRemark holds your post data
  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <div className="post-section">
        <div className="post-section-title">{post.frontmatter.title}</div>
        <div className="post-section-frontmatter">
          <span>{post.frontmatter.date}</span>
          <Divider type="vertical" />
          <span>{post.frontmatter.author}</span>
          <Divider type="vertical" />
          <span>{post.fields.readingTime.text}</span>
        </div>
        <Divider />
        <div
          className="markdown-content"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>
      <div className="tag-section">
        {
          post.frontmatter.tags.map((tag, index) =>
            <TagLabel
              key={index}
              label={tag}
            />
          )
        }
      </div>
    </Layout>
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
      }
      fields {
        readingTime {
          text
        }
      }
    }
  }
`
