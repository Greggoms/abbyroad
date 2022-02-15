import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { HeaderContainer } from "../elements"
import { Nav } from "./Nav"

const Header = ({ siteTitle }) => (
  <HeaderContainer>
    <div className="header-content">
      <h1>
        <Link to="/">{siteTitle}</Link>
      </h1>
      <Nav />
    </div>
  </HeaderContainer>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
