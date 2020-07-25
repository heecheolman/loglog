import React from 'react'
import classNames from 'classnames'

import styles from './style.module.scss'
import Section from '../layouts/Section'
import useResume from '../../hooks/use-resume'

const Skills = ({ className }) => {
  const classProps = classNames(styles.skills, className)
  const { skills } = useResume()

  const SkillGroups = skills.map((skill, skillIndex) => {
    const SkillDetails = skill.details.map((detail, detailIndex) => {
      return <li key={`skill-detail-${detailIndex}`}>{detail}</li>
    })

    return (
      <div key={`skill-${skillIndex}`} className={styles.skill}>
        <div className={styles.skillGroupName}>{skill.title}</div>
        <ul className={styles.skillGroup}>{SkillDetails}</ul>
      </div>
    )
  })

  return (
    <Section className={classProps}>
      <div className={styles.title}>기술</div>
      {SkillGroups}
    </Section>
  )
}

export default Skills
