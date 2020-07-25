import React from 'react'
import classNames from 'classnames'

import styles from './style.module.scss'

import Section from '../layouts/Section'

const Introduce = ({ className }) => {
  const classProps = classNames(styles.introduce, className)

  return (
    <Section className={classProps}>
      <h1 className={styles.title}>
        안녕하세요.
        <br />
        <span className={styles.primary}>웹 프론트엔드 개발자, 김희철</span>
        입니다.
      </h1>

      <p>직관적이고 남녀노소 사용하기 편리한 서비스를 개발하고싶습니다.</p>
      <p>사용자가 필요한 데이터를 보기쉽게 시각화하는것을 좋아합니다.</p>
    </Section>
  )
}

export default Introduce
