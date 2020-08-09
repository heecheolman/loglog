import React from 'react'
import './index.scss'
import Divider from '../Divider'
import TimelineGroup from '../TimelineGroup'
import { useSiteMetadata } from '../../hooks/use-site-metadata'
import GithubIcon from '../../images/github.svg'
import EmailIcon from '../../images/mail.svg'

const ProfileCard = ({ timeline }) => {
  const site = useSiteMetadata()
  return (
    <div className="profile-card">
      <div className="header">
        <div className="profile-image"></div>
        <div className="reference">
          <a
            href="https://github.com/heecheolman"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon />
          </a>
          <a
            href="https://github.com/heecheolman"
            target="_blank"
            rel="noopener noreferrer"
          >
            <EmailIcon />
          </a>
        </div>
      </div>
      <div className="body">
        <p dangerouslySetInnerHTML={{ __html: site.description }}></p>
      </div>
      <Divider />
      <TimelineGroup timeline={timeline} />
    </div>
  )
}

export default ProfileCard
