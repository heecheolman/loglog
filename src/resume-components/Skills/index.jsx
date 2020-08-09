import React from 'react'
import classNames from 'classnames'

import styles from './style.module.scss'
import Section from '../layouts/Section'
import Card from '../layouts/Card'
import CardTitle from '../../components/CardTitle'
import useResume from '../../hooks/use-resume'

const Skills = ({ className }) => {
  const classProps = classNames(styles.skills, className)
  const { skills } = useResume()

  const SkillGroups = skills.map((skill, skillIndex) => {
    const SkillDetails = skill.details.map((detail, detailIndex) => {
      return (
        <li className="custom-li" key={`skill-detail-${detailIndex}`}>
          {detail}
        </li>
      )
    })

    return (
      <div key={`skill-${skillIndex}`} className={styles.skill}>
        <div className={styles.skillGroupName}>{skill.title}</div>
        <ul className="custom-ul">{SkillDetails}</ul>
      </div>
    )
  })

  return (
    <Section className={classProps}>
      <CardTitle>기술</CardTitle>
      <Card>{SkillGroups}</Card>
    </Section>
  )
}

export default Skills
