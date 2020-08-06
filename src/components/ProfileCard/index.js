import React from 'react'
import './index.scss'
import Divider from '../Divider'
import TimelineGroup from '../TimelineGroup'
import { useSiteMetadata } from '../../hooks/use-site-metadata'

const ProfileCard = ({ timeline }) => {
  const site = useSiteMetadata()
  return (
    <div className="profile-card">
      <div className="header">
        <div className="profile-image"></div>
      </div>
      <div className="body">
        <p dangerouslySetInnerHTML={{ __html: site.description }}></p>
        <div className="reference">
          <a
            href="https://github.com/heecheolman"
            target="_blank"
            rel="noopener noreferrer"
          >
            깃허브 방문하기
          </a>
        </div>
      </div>
      <Divider />
      <TimelineGroup timeline={timeline} />
    </div>
  )
}

export default ProfileCard
