import React from 'react'
import { css } from '@emotion/core'
import styled from '@emotion/styled'

import Box, { Direction, DisplayType } from '../../components/Box'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { HEADER_HEIGHT, PAGE_PADDING, PAGE_WIDTH } from '../../config/ui'
import useSiteMetadata from '../../hooks/useSiteMetadata'
import GlobalStyle from '../../styles/GlobalStyle'

function MainLayout({ children, ...props }) {
  const { author, title } = useSiteMetadata()
  return (
    <>
      <GlobalStyle />
      <Header title={title} />
      <Box
        display={DisplayType.FLEX}
        direction={Direction.COL}
        css={css`
          height: 100%;
        `}
        {...props}
      >
        <MainContainer>{children}</MainContainer>
        <Footer author={author} />
      </Box>
    </>
  )
}

export default MainLayout

const MainContainer = styled.main`
  flex: 1 1;
  width: 100%;
  max-width: ${PAGE_WIDTH + PAGE_PADDING * 2}px;
  padding: ${HEADER_HEIGHT + PAGE_PADDING}px ${PAGE_PADDING}px ${PAGE_PADDING}px
    ${PAGE_PADDING}px;
  margin: 0 auto;
`
