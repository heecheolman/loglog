import React from 'react'
import classNames from 'classnames'

import Section from '../layouts/Section'
import Card from '../layouts/Card'
import CardTitle from '../../components/CardTitle'
import Divider from '../../components/Divider'

import styles from './style.module.scss'
import useResume from '../../hooks/use-resume'

const Career = ({ className }) => {
  const classProps = classNames(styles.career, className)
  const { career } = useResume()

  const Careers = career.map((career, careerIndex) => {
    const Projects = career.projects.map((project, projectIndex) => {
      const Techs = project.techs.map((tech, techIndex) => {
        return (
          <div key={`career-project-tech-${techIndex}`} className={styles.tech}>
            {tech}
          </div>
        )
      })
      const Details = project.details.map((detail, detailIndex) => {
        return (
          <li
            key={`career-project-detail-${detailIndex}`}
            className={styles.detail}
          >
            {detail}
          </li>
        )
      })
      return (
        <div className={styles.project} key={`career-project-${projectIndex}`}>
          <div className={styles.projectName}>{project.name}</div>
          <div className={styles.time}>{project.time}</div>
          <p className={styles.description}>{project.description}</p>
          {project.details.length > 0 && (
            <ul className={styles.detailGroup}>{Details}</ul>
          )}
          <div>{Techs}</div>
        </div>
      )
    })
    const Descriptions = career.descriptions.map(
      (description, descriptionIndex) => (
        <p
          key={`description-${descriptionIndex}`}
          className={styles.description}
        >
          {description}
        </p>
      )
    )

    return (
      <Card key={`career-${careerIndex}`}>
        <div className={styles.subTitle}>{career.company}</div>

        <div className={styles.product}>{career.product}</div>
        <div className={styles.position}>{career.position}</div>
        <div className={styles.term}>{career.term}</div>
        {Descriptions}
        <Divider />
        {Projects}
      </Card>
    )
  })

  return (
    <Section className={classProps}>
      <CardTitle>경력</CardTitle>
      {Careers}
    </Section>
  )
}

export default Career
