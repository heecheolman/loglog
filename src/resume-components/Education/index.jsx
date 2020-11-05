import React from 'react'
import { css } from '@emotion/core'
import styled from '@emotion/styled'

import Box from '../../components/Box'
import P from '../../components/P'
import Title from '../../components/Title'
import useResume from '../../hooks/useResume'

const Section = styled.section`
  margin-bottom: 5rem;

  &:last-child {
    margin: 0;
  }
`

const Education = props => {
  const { education } = useResume()

  const educationList = education.map((edu, eduIndex) => {
    return (
      <Box
        key={`edu-${eduIndex}`}
        css={css`
          margin-bottom: 40px;
        `}
      >
        <Title
          heading="h3"
          css={css`
            font-weight: 400;
            font-size: 1.4rem;
            margin-top: 0;
            margin-bottom: 12px;
          `}
        >
          {edu.name}
        </Title>
        <P>{edu.major}</P>
        <P
          weak
          fontWeight={300}
          fontSize={0.9}
          css={css`
            margin-bottom: 16px;
          `}
        >
          {edu.period}
        </P>
        <P fontWeight={300} fontSize={0.9}>
          {edu.description}
        </P>
      </Box>
    )
  })

  return (
    <Section {...props}>
      <Title heading="h2">학력</Title>
      {educationList}
    </Section>
  )
}

export default Education
