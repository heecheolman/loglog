import React from 'react'

import MainLayout from '../layouts/MainLayout'
import SEO from '../components/Seo'
import NotFound from '../components/NotFound'
import CardTitle from '../components/CardTitle'

import Section from '../resume-components/layouts/Section'
import Card from '../resume-components/layouts/Card'

const NotFoundPage = () => (
  <MainLayout>
    <SEO title="404 페이지를 찾을 수 없습니다" />
    <Section>
      <CardTitle>404</CardTitle>
      <Card>
        <NotFound />
      </Card>
    </Section>
  </MainLayout>
)

export default NotFoundPage
