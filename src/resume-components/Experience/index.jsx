import React from 'react'
import classNames from 'classnames'

import styles from './style.module.scss'
import Section from '../layouts/Section'
import Card from '../layouts/Card'
import Divider from '../../components/Divider'
import CardTitle from '../../components/CardTitle'
import useResume from '../../hooks/use-resume'

const Experience = ({ className }) => {
  const classProps = classNames(styles.experience, className)
  const { experience } = useResume()

  const Experience = experience.map((exp, index) => {
    const doits = exp.doit.map((done, index) => (
      <li key={`doit-${index}`}>{done}</li>
    ))

    return (
      <Card key={`exp-${index}`} className={styles.exp}>
        <div className={styles.subTitle}>{exp.name}</div>
        <div className={styles.term}>{exp.term}</div>
        <p className={styles.review}>{exp.review}</p>
        <Divider />
        <p className={styles.description}>{exp.description}</p>
        <ul className={styles.doit}>{doits}</ul>
      </Card>
    )
  })

  return (
    <Section className={classProps}>
      <CardTitle>경험</CardTitle>
      {Experience}
    </Section>
  )
}

export default Experience
