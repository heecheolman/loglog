import React from 'react'
import classNames from 'classnames'

import styles from './style.module.scss'

import Section from '../layouts/Section'
import useResume from '../../hooks/use-resume'

const Ability = ({ className }) => {
  const classProps = classNames(styles.ability, className)
  const { abilities } = useResume()

  const Abilities = abilities.map((ability, index) => {
    const Details = ability.details.map((detail, detailIndex) => {
      return <li key={`ability-detail-${detailIndex}`}>{detail}</li>
    })

    return (
      <div key={`ability-${index}`}>
        <div className={styles.type}>{ability.title}</div>
        <ul>{Details}</ul>
      </div>
    )
  })

  return (
    <Section className={classProps}>
      <div className={styles.title}>역량</div>
      {Abilities}
    </Section>
  )
}

export default Ability
