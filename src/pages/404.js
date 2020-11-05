import React from 'react'
import { css } from '@emotion/core'

import MainLayout from '../layouts/MainLayout'
import Title from '../components/Title'
import SEO from '../components/Seo'
import LinkButton from '../components/LinkButton'

const NotFoundPage = () => (
  <MainLayout>
    <SEO title="존재하지 않는 글이에요." />
    <Title
      heading="h3"
      css={css`
        font-weight: 400;
        margin-top: 0;
        margin-bottom: 24px;
      `}
    >
      존재하지 않는 글이에요.
    </Title>

    <LinkButton to="/">글 목록으로</LinkButton>
  </MainLayout>
)

export default NotFoundPage
