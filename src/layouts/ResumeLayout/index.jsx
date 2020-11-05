import React from 'react'
import styled from '@emotion/styled'

import Box from '../../components/Box'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { PAGE_WIDTH, PAGE_PADDING, HEADER_HEIGHT } from '../../config/ui'
import useSiteMetadata from '../../hooks/useSiteMetadata'

const Main = styled.main`
  display: block;
  position: relative;
  width: 100%;
  height: 100%;
  max-width: ${PAGE_WIDTH + PAGE_PADDING * 2}px;
  padding: ${HEADER_HEIGHT + PAGE_PADDING}px ${PAGE_PADDING}px 0;
  margin: 0 auto;
`

const ResumeLayout = ({ children, ...props }) => {
  const { author, title } = useSiteMetadata()
  return (
    <Box>
      <Header title={title} />
      <Main {...props}>{children}</Main>
      <Footer author={author} />
    </Box>
  )
}

export default ResumeLayout
