import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

import Box from '../../components/Box'
import DarkMode from '../../components/DarkMode'
import { HEADER_HEIGHT, PAGE_PADDING, ANIMATION } from '../../config/ui'

const HeaderContainer = styled.header`
  /* position: fixed;
  top: 0; */
  height: ${HEADER_HEIGHT}px;
  width: 100%;
  padding: 0 ${PAGE_PADDING}px;
  z-index: 1;
  transition: ${ANIMATION.duration.default} background-color
    ${ANIMATION.function.default};
  background-color: var(--bg);
  /* border-bottom: 1px dashed var(--borderWeak); */

  @media print {
    display: none;
  }
`

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
`

const PageTitle = styled(Link)`
  font-size: 1.5rem;
  color: var(--textNormal);
  text-decoration: none;
  font-weight: 600;
  position: relative;
`

const Dot = styled.span`
  font-size: 1.5rem;
  color: var(--primary);
`

const Header = ({ title = '', ...props }) => {
  return (
    <HeaderContainer {...props}>
      <NavContainer>
        <Box>
          <PageTitle to="/">
            {title}
            <Dot>*</Dot>
          </PageTitle>
        </Box>
        <Box>
          <DarkMode />
        </Box>
      </NavContainer>
    </HeaderContainer>
  )
}

export default Header
