import React from 'react'
import { css } from '@emotion/core'
import styled from '@emotion/styled'

import Box from '../../components/Box'
import Title from '../../components/Title'
import useResume from '../../hooks/useResume'

const Section = styled.section`
  margin-bottom: 5rem;
`

const DetailList = styled.ul`
  margin: 0;
  padding: 0;
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

const Skills = () => {
  const { skills } = useResume()

  const skillList = skills.map((skill, skillIndex) => {
    const detailList = skill.details.map((detail, detailIndex) => {
      return (
        <DetailListItem key={`detail-${detailIndex}`}>{detail}</DetailListItem>
      )
    })
    return (
      <Box
        key={`skill-${skillIndex}`}
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
            margin-bottom: 16px;
          `}
        >
          {skill.title}
        </Title>
        <DetailList>{detailList}</DetailList>
      </Box>
    )
  })

  return (
    <Section>
      <Title heading="h2">기술</Title>
      {skillList}
    </Section>
  )
}

export default Skills
