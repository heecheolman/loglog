import React from 'react';
import './profile-card.scss';
import Divider from './divider'
import TimelineGroup from './timeline-group'
import { useSiteMetadata } from '../hooks/use-site-metadata'

function ProfileCard ({ timeline }) {
  const site = useSiteMetadata();
  return (
    <div className="profile-card">
      <div className="card-title">프로필</div>
      <div className="header">
        <div className="profile-image">
        </div>
      </div>
      <div className="body">
        <p>
          {site.description}
        </p>
        <div className="reference">
          <a href="https://github.com/heecheolman" target="_blank">Github</a>
        </div>
      </div>
      <Divider />
      <TimelineGroup timeline={timeline} />
    </div>
  )
}

export default ProfileCard;
