import React from "react"
import { Link } from "gatsby"
import { NavContainer } from "../elements"

export const Nav = () => {
  return (
    <NavContainer>
      <Link to="/locations">Locations</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </NavContainer>
  )
}
