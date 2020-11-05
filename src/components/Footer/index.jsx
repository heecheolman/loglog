import React from 'react'
import styled from '@emotion/styled'

import P from '../../components/P'
import { PAGE_WIDTH, PAGE_PADDING, ANIMATION } from '../../config/ui'

const FooterContainer = styled.footer`
  width: 100%;
`
const InnerFooter = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  min-height: 80px;
  padding: 0 15px;
  width: 100%;
  max-width: ${PAGE_WIDTH + PAGE_PADDING * 2}px;
`

const FooterLink = styled.a`
  color: var(--textWeak);
  transition: ${ANIMATION.duration.fast} color ${ANIMATION.function.hover};

  &:hover {
    color: var(--primary);
  }
`

const Footer = ({ author, ...props }) => {
  return (
    <FooterContainer {...props}>
      <InnerFooter>
        <P weak fontSize={0.8}>
          ©{new Date().getFullYear()} {author}
        </P>
        <P weak fontSize={0.8}>
          Built with{' '}
          <FooterLink
            href="https://www.gatsbyjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Gatsby
          </FooterLink>
        </P>
      </InnerFooter>
    </FooterContainer>
  )
}

export default Footer
