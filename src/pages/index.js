import React from 'react'
import { graphql } from 'gatsby'

import MainLayout from '../layouts/MainLayout'
import SEO from '../components/Seo'
import ProfileCard from '../components/ProfileCard'
import CardTitle from '../components/CardTitle'
import Card from '../resume-components/layouts/Card'
import Section from '../resume-components/layouts/Section'

import { useSiteMetadata } from '../hooks/use-site-metadata'

const Home = () => {
  const { timeline } = useSiteMetadata()
  return (
    <MainLayout>
      <SEO title="홈" />
      <Section>
        <CardTitle>안녕하세요</CardTitle>
        <Card>
          <ProfileCard timeline={timeline} />
        </Card>
      </Section>
    </MainLayout>
  )
}

export const query = graphql`
  query HomePageQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          frontmatter {
            title
            date(formatString: "YYYY-MM-DD")
            path
            tags
          }
        }
      }
      dateGroup: group(field: frontmatter___date) {
        fieldValue
      }
    }
  }
`

export default Home
