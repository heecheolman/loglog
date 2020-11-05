import React from 'react'
import { css } from '@emotion/core'
import styled from '@emotion/styled'

import Box from '../../components/Box'
import P from '../../components/P'
import Title from '../../components/Title'
import useResume from '../../hooks/useResume'

const Section = styled.section`
  margin-bottom: 5rem;
`

const DetailList = styled.ul`
  margin: 0;
  padding: 1rem 0 1rem 0rem;
  list-style: none;
`

const DetailListItem = styled.li`
  position: relative;
  font-size: 0.9rem;
  font-weight: 300;
  color: var(--textNormal);
  padding-left: 16px;
  padding-top: 2px;
  padding-bottom: 2px;

  &:before {
    display: inline-block;
    position: absolute;
    content: '•';
    left: 0;
    color: var(--primary);
  }
`

const Experience = () => {
  const { experience } = useResume()

  const experiences = experience.map((exp, expIndex) => {
    const details = exp.details.map((detail, detailIndex) => {
      return (
        <DetailListItem key={`detail-${detailIndex}`}>{detail}</DetailListItem>
      )
    })
    return (
      <Box
        key={`exp-${expIndex}`}
        css={css`
          margin-bottom: 40px;
        `}
      >
        <Title
          heading="h3"
          css={css`
            font-weight: 400;
            font-size: 1.4rem;
            margin: 0;
          `}
        >
          {exp.name}
        </Title>
        <P
          weak
          fontWeight={300}
          fontSize={0.9}
          css={css`
            margin-bottom: 16px;
          `}
        >
          {exp.period}
        </P>
        <P fontWeight={300} fontSize={0.9}>
          {exp.description}
          <br />
          <br />
          {exp.review}
        </P>
        <DetailList>{details}</DetailList>
      </Box>
    )
  })

  return (
    <Section>
      <Title heading="h2">경험</Title>
      {experiences}
    </Section>
  )
}

export default Experience
