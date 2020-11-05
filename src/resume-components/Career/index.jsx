import React from 'react'
import { css } from '@emotion/core'
import styled from '@emotion/styled'

import Box, {
  DisplayType,
  Direction,
  JustifyContent,
  AlignItems,
} from '../../components/Box'
import P from '../../components/P'
import Title from '../../components/Title'

import useResume from '../../hooks/useResume'
import { ANIMATION } from '../../config/ui'

const Section = styled.section`
  margin-bottom: 100px;
`

const ProjectList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`

const ProjectListItem = styled.li`
  margin-bottom: 48px;
  padding-left: 16px;
  border-left: 1px dashed var(--borderWeak);
`

const DetailList = styled.ul`
  margin: 0;
  padding: 12px 0 12px 0rem;
  list-style: none;
`

const DetailListItem = styled.li`
  position: relative;
  padding-left: 16px;
  padding-top: 2px;
  padding-bottom: 2px;
  font-size: 0.9rem;
  font-weight: 300;
  color: var(--textNormal);

  &:before {
    position: absolute;
    left: 0;
    display: inline-block;
    content: '•';
    color: var(--primary);
  }
`

const TechList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  list-style: none;
`

const TechListItem = styled.li`
  margin: 2px;
  padding: 4px 10px;
  font-size: 0.8rem;
  font-weight: 300;
  background-color: var(--primaryButtonBg);
  color: var(--primaryButtonText);
  border-radius: 4px;
  line-height: 1.3;
`

const BusinessCard = styled.a`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 306px;
  width: 100%;
  height: 170px;
  margin-bottom: 32px;
  padding: 18px;
  border: 1px solid var(--borderWeak);
  border-radius: 8px;
  cursor: pointer;
  text-decoration: none;

  transition-property: all;
  transition-duration: ${ANIMATION.duration.fast};
  transition-timing-function: ${ANIMATION.function.hover};

  &:hover {
    border-color: var(--primary);
    * {
      color: var(--primary);
    }
  }
`

const CompanyLogo = styled.img`
  width: 90px;
  height: auto;
`

const Career = () => {
  const { career } = useResume()
  const careers = career.map((c, careerIndex) => {
    const teams = c.teams.map((t, teamIndex) => {
      const projects = t.projects.map((p, projectIndex) => {
        const details = p.details.map((detail, detailIndex) => {
          return (
            <DetailListItem key={`detail-${detailIndex}`}>
              {detail}
            </DetailListItem>
          )
        })
        const techs = p.techs.map((tech, techIndex) => {
          return <TechListItem key={`tech-${techIndex}`}>{tech}</TechListItem>
        })
        return (
          <ProjectListItem key={`project-${projectIndex}`}>
            <Title
              heading="h3"
              css={css`
                font-size: 1.2rem;
                font-weight: 400;
                margin-top: 0;
                margin-bottom: 4px;
              `}
            >
              {p.name}
            </Title>
            <P
              weak
              fontWeight={300}
              fontSize={0.9}
              css={css`
                margin-bottom: 16px;
              `}
            >
              {p.period}
            </P>
            <P fontWeight={300} fontSize={0.9}>
              {p.description}
            </P>
            <DetailList>{details}</DetailList>
            <TechList>{techs}</TechList>
          </ProjectListItem>
        )
      })
      return (
        <React.Fragment key={`team-${teamIndex}`}>
          <Box
            css={css`
              margin-bottom: 32px;
            `}
          >
            <Title
              heading="h3"
              css={css`
                font-size: 1.4rem;
                margin-top: 0;
                margin-bottom: 4px;
                font-weight: 400;
              `}
            >
              {t.name}
            </Title>
            <P
              weak
              fontSize={0.9}
              fontWeight={300}
              css={css`
                margin-bottom: 16px;
              `}
            >
              {t.period}
            </P>
            <P fontWeight={300}>{t.description}</P>
          </Box>
          <ProjectList>{projects}</ProjectList>
        </React.Fragment>
      )
    })
    return (
      <Section key={`career-${careerIndex}`}>
        <BusinessCard href={c.companyLink} target="_blank">
          <Box
            display={DisplayType.FLEX}
            justifyContent={JustifyContent.FLEX_END}
            alignItems={AlignItems.FLEX_START}
            css={css`
              width: 100%;
              flex: 1 1 0;
              transition: inherit;
            `}
          >
            <CompanyLogo src={c.companyLogo} alt={c.companyName} />
          </Box>
          <Box
            display={DisplayType.FLEX}
            direction={Direction.COL}
            justifyContent={JustifyContent.FLEX_END}
            css={css`
              transition: inherit;
            `}
          >
            <Title
              heading="h3"
              css={css`
                font-size: 1.2rem;
                font-weight: 300;
                margin-top: 0;
                margin-bottom: 8px;
              `}
            >
              {c.companyName}
            </Title>
            <P fontWeight={300} fontSize={0.9}>
              {c.position}
            </P>
            <P fontWeight={300} weak fontSize={0.9}>
              {c.period}
            </P>
          </Box>
        </BusinessCard>
        {teams}
      </Section>
    )
  })
  return (
    <Section>
      <Title heading="h2">경력</Title>
      {careers}
    </Section>
  )
}

export default Career
