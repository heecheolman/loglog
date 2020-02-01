import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import NotFound from '../components/not-found'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404 페이지를 찾을 수 없습니다"/>
    <NotFound />
  </Layout>
)

export default NotFoundPage
