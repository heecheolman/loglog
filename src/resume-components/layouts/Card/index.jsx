import React from 'react'
import classNames from 'classnames'

import styles from './style.module.scss'

const Card = ({ className, children }) => {
  const classProps = classNames(styles.card, className)
  return <div className={classProps}>{children}</div>
}

export default Card
