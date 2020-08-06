import React from 'react'
import classNames from 'classnames'

import styles from './style.module.scss'

import Section from '../layouts/Section'
import Card from '../layouts/Card'
import CardTitle from '../../components/CardTitle'
import useResume from '../../hooks/use-resume'

const Introduce = ({ className }) => {
  const classProps = classNames(styles.introduce, className)
  const { introduce } = useResume()

  return (
    <Section className={classProps}>
      <CardTitle>이력서</CardTitle>
      <Card>
        <h2 className={styles.subTitle}>{introduce.name}</h2>
        <h3 className={styles.position}>{introduce.job}</h3>
        <p className={styles.description}>{introduce.description}</p>

        <p className={styles.contact}>
          <a target="_blank" rel="noreferrer" href={introduce.contact.github}>
            깃허브 방문하기
          </a>
          <a rel="noreferrer" href={`mailto:${introduce.contact.email}`}>
            이메일로 연락하기
          </a>
        </p>
      </Card>
    </Section>
  )
}

export default Introduce
