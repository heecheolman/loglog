import React from 'react'

import MainLayout from '../layouts/MainLayout'
import SEO from '../components/Seo'
import NotFound from '../components/NotFound'

const NotFoundPage = () => (
  <MainLayout>
    <SEO title="404 페이지를 찾을 수 없습니다" />
    <NotFound />
  </MainLayout>
)

export default NotFoundPage
