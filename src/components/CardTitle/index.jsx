import React, { useState, useEffect, useRef } from 'react'

import styles from './style.module.scss'

const CardTitle = ({ children }) => {
  const ref = useRef()
  const [width, setWidth] = useState(0)

  useEffect(() => {
    setWidth(ref.current.clientWidth)
  }, [])

  return (
    <div className={styles.titleWrap}>
      <h2 ref={ref} className={styles.title}>
        {children}
      </h2>
      <div style={{ width }} className={styles.tape}></div>
    </div>
  )
}

export default CardTitle
