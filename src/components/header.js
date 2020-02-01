import PropTypes from "prop-types"
import React from "react"
import Gnb from './gnb'

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
