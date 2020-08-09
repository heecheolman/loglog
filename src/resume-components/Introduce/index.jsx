import React from 'react'
import classNames from 'classnames'

import styles from './style.module.scss'

import Section from '../layouts/Section'
import Card from '../layouts/Card'
import CardTitle from '../../components/CardTitle'
import useResume from '../../hooks/use-resume'
import GithubIcon from '../../images/github.svg'
import EmailIcon from '../../images/mail.svg'

const Introduce = ({ className }) => {
  const classProps = classNames(styles.introduce, className)
  const { introduce } = useResume()

  return (
    <Section className={classProps}>
      <CardTitle>이력서</CardTitle>
      <Card>
        <div className={styles.header}>
          <div className={styles.name}>{introduce.name}</div>
          <div className={styles.position}>{introduce.job}</div>
          <p className={styles.contact}>
            <a
              className={styles.icon}
              target="_blank"
              rel="noreferrer"
              href={introduce.contact.github}
            >
              <GithubIcon />
            </a>
            <a
              className={styles.icon}
              rel="noreferrer"
              href={`mailto:${introduce.contact.email}`}
            >
              <EmailIcon />
            </a>
          </p>
        </div>
        <p
          className={styles.description}
          dangerouslySetInnerHTML={{ __html: introduce.description }}
        ></p>
      </Card>
    </Section>
  )
}

export default Introduce
