import React from 'react'
import classNames from 'classnames'

import styles from './style.module.scss'

import Section from '../layouts/Section'
import Card from '../layouts/Card'
import CardTitle from '../../components/CardTitle'
import useResume from '../../hooks/use-resume'

const Education = ({ className }) => {
  const classProps = classNames(styles.education, className)
  const { education } = useResume()

  const Educations = education.map((edu, eduIndex) => {
    return (
      <Card key={`like-${eduIndex}`} className={styles.edu}>
        <div className={styles.name}>{edu.name}</div>
        <div className={styles.major}>{edu.major}</div>
        <div className={styles.term}>{edu.term}</div>
        <p className={styles.description}>{edu.description}</p>
      </Card>
    )
  })

  return (
    <Section className={classProps}>
      <CardTitle>학력</CardTitle>
      {Educations}
    </Section>
  )
}

export default Education
