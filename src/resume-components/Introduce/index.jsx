import React from 'react'
import { css } from '@emotion/core'
import styled from '@emotion/styled'

import useResume from '../../hooks/useResume'
import P from '../../components/P'
import Title from '../../components/Title'
import Span from '../../components/Span'
import Box, { DisplayType, JustifyContent } from '../../components/Box'
import { ANIMATION } from '../../config/ui'

const Section = styled.section`
  margin-bottom: 5rem;
`

const A = styled.a`
  margin-right: 12px;
  font-size: 0.9rem;
  text-decoration: underline;
  font-weight: 300;
  color: var(--textNormal);
  transition: ${ANIMATION.duration.fast} color ${ANIMATION.function.hover};

  &:hover {
    color: var(--primary);
  }
  &:last-child {
    margin-right: 0;
  }
`

const Introduce = ({ className }) => {
  const { introduce } = useResume()

  return (
    <Section>
      <Title
        heading="h2"
        css={css`
          margin-top: 0;
          margin-bottom: 44px;
        `}
      >
        <Span
          fontWeight={300}
          css={css`
            font-size: inherit;
          `}
        >
          안녕하세요.
        </Span>
        <br />
        {introduce.job}, {introduce.name}
        <Span
          fontWeight={300}
          css={css`
            font-size: inherit;
          `}
        >
          입니다.
        </Span>
      </Title>
      <P
        fontWeight={300}
        css={css`
          margin-bottom: 32px;
        `}
        dangerouslySetInnerHTML={{ __html: introduce.description }}
      />
      <Box display={DisplayType.FLEX} justifyContent={JustifyContent.FLEX_END}>
        <A href={`mailto:${introduce.contact.email}`}>
          {introduce.contact.email}
        </A>
        <A href={introduce.contact.github}>Github</A>
        <A href={introduce.contact.blog}>Blog</A>
      </Box>
    </Section>
  )
}

export default Introduce
