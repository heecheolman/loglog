import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/Seo'
import NotFound from '../components/NotFound'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404 페이지를 찾을 수 없습니다" />
    <NotFound />
  </Layout>
)

export default NotFoundPage
