import PropTypes from 'prop-types'
import React from 'react'
import Gnb from '../Gnb'

const Header = ({ siteTitle }) => (
  <header>
    <Gnb siteTitle={siteTitle} />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
