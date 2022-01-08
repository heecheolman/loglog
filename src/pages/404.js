import React from 'react'
import { css } from '@emotion/core'

import MainLayout from '../layouts/MainLayout'
import Title from '../components/Title'
import SEO from '../components/Seo'
import LinkButton from '../components/LinkButton'

function NotFoundPage() {
  return (
    <MainLayout>
      <SEO title="404" description="존재하지 않는 페이지입니다." />
      <Title
        heading="h3"
        css={css`
          font-weight: 400;
          margin-top: 0;
          margin-bottom: 24px;
        `}
      >
        존재하지 않는 페이지입니다.
      </Title>

      <LinkButton to="/">글 목록으로</LinkButton>
    </MainLayout>
  )
}

export default NotFoundPage
