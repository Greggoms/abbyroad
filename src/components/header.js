import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { HeaderContainer } from "../elements"

export const Header = () => {
  return (
    <HeaderContainer>
      <div className="header-content">
        <Link to="/" className="logo-link">
          <StaticImage
            src="../images/abby-road-logo.png"
            alt="Abby Road Logo"
            placeholder="blurred"
            layout="fixed"
            width={80}
          />
          <h1>Abby Road</h1>
        </Link>
      </div>
    </HeaderContainer>
  )
}
