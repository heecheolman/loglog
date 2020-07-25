import React from 'react'
import './index.scss'
import Divider from '../Divider'

const Timeline = ({ date, title, description, major, thumbnail }) => {
  return (
    <div className="timeline">
      <div className="timeline-content">
        <div className="timeline-title">
          <span className="title">{title}</span>
          <Divider type="vertical" />
          <span className="major">{major}</span>
        </div>
        <div
          className="timeline-description"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>
      <div className="line" />
      <div className="symbol" />
      <div className="date">{date}</div>
    </div>
  )
}

export default Timeline
