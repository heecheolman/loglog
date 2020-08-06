import React from 'react'
import { graphql } from 'gatsby'

import MainLayout from '../layouts/MainLayout'
import SEO from '../components/Seo'
import PostGroup from '../components/PostGroup'
import CardTitle from '../components/CardTitle'
import Card from '../resume-components/layouts/Card'
import Section from '../resume-components/layouts/Section'

import postGroupByDate from '../services/post-group-by-date'

const isProduction = process.env.NODE_ENV === 'production'

const Posts = ({ data }) => {
  const { edges: postList, dateGroup } = data.allMarkdownRemark

  const targetPostList = isProduction
    ? postList.filter(({ node }) => !node.frontmatter.draft)
    : postList

  const postEntries = postGroupByDate(targetPostList, dateGroup)

  return (
    <MainLayout>
      <SEO title="포스트" />
      {postEntries.map(([title, postList], index) => (
        <Section key={`section-${index}`}>
          <CardTitle>{title}</CardTitle>
          <Card key={`card-${title}`}>
            <PostGroup title={title} postList={postList} />
          </Card>
        </Section>
      ))}
    </MainLayout>
  )
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          frontmatter {
            title
            date(formatString: "YYYY-MM-DD")
            path
            draft
          }
        }
      }
      dateGroup: group(field: frontmatter___date) {
        fieldValue
      }
    }
  }
`

export default Posts
