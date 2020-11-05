import React from 'react'
import classNames from 'classnames'

import styles from './style.module.scss'

const Tags = ({ className, tags }) => {
  const classProps = classNames(styles.tags, className)
  return (
    <div className={classProps}>
      <ul>
        <li>typescript</li>
        <li>angular</li>
        <li>javascript</li>
        <li>etc</li>
        <li>book</li>
        <li>conference</li>
      </ul>
    </div>
  )
}

export default Tags
