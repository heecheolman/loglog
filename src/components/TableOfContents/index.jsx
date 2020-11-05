import React from 'react'
import classNames from 'classnames'

import styles from './style.module.scss'

const TableOfContents = ({ htmlText, className }) => {
  const classProps = classNames(styles.navWrap, className)

  return (
    <div className={classProps}>
      <nav
        className={styles.nav}
        dangerouslySetInnerHTML={{ __html: htmlText }}
      />
    </div>
  )
}

export default TableOfContents
