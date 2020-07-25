import React from 'react'
import './index.scss'
import { Link } from 'gatsby'
import DarkMode from '../DarkMode'

const Gnb = ({ siteTitle = '' }) => {
  return (
    <nav className="gnb">
      <div className="inner-gnb">
        <div className="title-wrap">
          <Link to="/">{siteTitle}</Link>
          <DarkMode />
        </div>
        <div className="category-wrap">
          <Link to="/" activeClassName="link-active">
            홈
          </Link>
          <Link to="/archives" activeClassName="link-active">
            아카이브
          </Link>
          {/*<Link to="/resume"  activeClassName="link-active">이력서</Link>*/}
        </div>
      </div>
    </nav>
  )
}

export default Gnb
