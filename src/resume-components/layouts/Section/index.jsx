import React from 'react'
import classNames from 'classnames'

import styles from './style.module.scss'

const Section = ({ className, children }) => {
  const classProps = classNames(styles.section, className)

  return <section className={classProps}>{children}</section>
}

export default Section
