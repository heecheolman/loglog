import React from 'react'
import classNames from 'classnames'

import Section from '../layouts/Section'

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

    return (
      <div className={styles.split} key={`career-${careerIndex}`}>
        <div className={styles.left}>
          <div className={styles.company}>{career.company}</div>

          <div className={styles.term}>{career.term}</div>
          <div className={styles.position}>{career.position}</div>
          <div className={styles.product}>{career.product}</div>

          <p className={styles.description}>{career.description}</p>
        </div>
        <div className={styles.right}>{Projects}</div>
      </div>
    )
  })

  return (
    <Section className={classProps}>
      <div className={styles.title}>경력</div>
      {Careers}
    </Section>
  )
}

export default Career
