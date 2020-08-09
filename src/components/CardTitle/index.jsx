import React from 'react'

import styles from './style.module.scss'

const CardTitle = ({ children }) => {
  return (
    <div className={styles.titleWrap}>
      <h2 className={styles.title}>{children}</h2>
      <div className={styles.tape}></div>
    </div>
  )
}

export default CardTitle
