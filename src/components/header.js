import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { HeaderContainer } from "../elements"

const Header = ({ siteTitle }) => (
  <HeaderContainer>
    <div className="header-content">
      <h1>
        <Link to="/">{siteTitle}</Link>
      </h1>
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
