import React from 'react'
import classNames from 'classnames'

import styles from './style.module.scss'

import Section from '../layouts/Section'
import Card from '../layouts/Card'
import CardTitle from '../../components/CardTitle'
import useResume from '../../hooks/use-resume'

const Likes = ({ className }) => {
  const classProps = classNames(styles.likes, className)
  const { likes } = useResume()
  const LikeList = likes.map((like, likeIndex) => {
    const Details = like.details.map((detail, detailIndex) => (
      <li key={`like-detail-${detailIndex}`}>{detail}</li>
    ))
    const Name = like.link ? (
      <a href={like.link}>{like.name}</a>
    ) : (
      <span>{like.name}</span>
    )
    return (
      <div key={`like-${likeIndex}`} className={styles.like}>
        <div className={styles.likeName}>{Name}</div>
        <ul>{Details}</ul>
      </div>
    )
  })

  return (
    <Section className={classProps}>
      <CardTitle>취미</CardTitle>
      <Card>{LikeList}</Card>
    </Section>
  )
}

export default Likes
