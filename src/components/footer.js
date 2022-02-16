import React from "react"
import { FooterContainer } from "../elements"

export const Footer = () => {
  return (
    <FooterContainer>
      <div className="footer-content">
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a> by{" "}
        <a
          href="https://github.com/Greggoms"
          target="_blank"
          rel="noopener noreferrer"
        >
          Greggoms
        </a>
      </div>
    </FooterContainer>
  )
}
