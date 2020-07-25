import React from 'react'
import './index.scss'
import Divider from '../Divider'
import TimelineGroup from '../TimelineGroup'
import { useSiteMetadata } from '../../hooks/use-site-metadata'

const ProfileCard = ({ timeline }) => {
  const site = useSiteMetadata()
  return (
    <div className="profile-card">
      <h2>프로필</h2>
      <div className="header">
        <div className="profile-image"></div>
      </div>
      <div className="body">
        <p>{site.description}</p>
        <div className="reference">
          <a
            href="https://github.com/heecheolman"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </div>
      </div>
      <Divider />
      <TimelineGroup timeline={timeline} />
    </div>
  )
}

export default ProfileCard
