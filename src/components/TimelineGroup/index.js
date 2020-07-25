import React from 'react'
import Timeline from '../Timeline'

const TimelineGroup = ({ timeline }) => {
  return (
    <div>
      {timeline.map((item, index) => (
        <Timeline
          key={index}
          date={item.date}
          title={item.title}
          major={item.major}
          thumbnail={item.thumbnail}
          description={item.description}
        />
      ))}
    </div>
  )
}

export default TimelineGroup
