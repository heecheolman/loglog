import React from 'react'
import { css } from '@emotion/core'
import { graphql } from 'gatsby'

import MainLayout from '../layouts/MainLayout'
import PostList from '../components/PostList'
import PostItem from '../components/PostItem'
import LinkButton from '../components/LinkButton'

import Box, { DisplayType, JustifyContent } from '../components/Box'

const Posts = ({ data }) => {
  const { edges: postList } = data.allMarkdownRemark

  return (
    <MainLayout>
      <Box
        display={DisplayType.FLEX}
        justifyContent={JustifyContent.FLEX_END}
        css={css`
          padding-bottom: 24px;
        `}
      >
        <LinkButton to="/resume">이력서</LinkButton>
      </Box>
      <PostList>
        {postList.map(({ node }, index) => {
          return (
            <PostItem
              key={`post-${index}`}
              title={node.frontmatter.title}
              description={node.frontmatter.description}
              createdAt={node.frontmatter.date}
              path={node.fields.slug}
              draft={node.frontmatter.draft}
            />
          )
        })}
      </PostList>
    </MainLayout>
  )
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { draft: { eq: false } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "YYYY년 M월 D일")
            description
            draft
          }
        }
      }
      group(field: frontmatter___tags) {
        fieldValue
        field
        nodes {
          frontmatter {
            title
          }
        }
      }
    }
  }
`

export default Posts
