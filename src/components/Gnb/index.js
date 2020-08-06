import React from 'react'
import './index.scss'
import { Link } from 'gatsby'
import DarkMode from '../DarkMode'

const Gnb = ({ siteTitle = '' }) => {
  return (
    <div className="gnb">
      <div className="inner-gnb">
        <div className="title-wrap">
          <Link to="/">{siteTitle}</Link>
          <DarkMode />
        </div>
        <nav className="category-wrap">
          <Link to="/" activeClassName="link-active">
            홈
          </Link>
          <Link to="/posts" activeClassName="link-active">
            포스트
          </Link>
          <Link to="/resume" activeClassName="link-active">
            이력서
          </Link>
        </nav>
      </div>
    </div>
  )
}

export default Gnb
