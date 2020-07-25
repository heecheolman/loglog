import React from 'react'
import classNames from 'classnames'

import styles from './style.module.scss'
import Section from '../layouts/Section'
import useResume from '../../hooks/use-resume'

const Contact = ({ className }) => {
  const classProps = classNames(styles.contact, className)
  const { contact } = useResume()

  return (
    <Section className={classProps}>
      <div className={styles.title}>Contact</div>
      <ul>
        <li>
          <a target="_blank" rel="noreferrer" href={contact.github}>
            깃허브
          </a>
        </li>
        <li>
          <a rel="noreferrer" href={`mailto:${contact.email}`}>
            이메일
          </a>
        </li>
      </ul>
    </Section>
  )
}

export default Contact
