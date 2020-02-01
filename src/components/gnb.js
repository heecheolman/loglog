import React from 'react';
import './gnb.scss';
import { Link } from 'gatsby'
import Toggle from './toggle'

function Gnb ({ siteTitle = '' }) {
  return (
    <nav className="gnb">
      <div className="inner-gnb">
        <div className="title-wrap">
          <Link to="/">{siteTitle}</Link>
          <Toggle />
        </div>
        <div className="category-wrap">
          <Link to="/" activeClassName="link-active">홈</Link>
          <Link to="/archives" activeClassName="link-active">아카이브</Link>
          {/*<Link to="/resume"  activeClassName="link-active">이력서</Link>*/}
        </div>
      </div>
    </nav>
  );
}

export default Gnb;
