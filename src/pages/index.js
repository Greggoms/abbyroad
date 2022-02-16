import React from "react"
import { Link } from "gatsby"
import Seo from "../components/seo"
import { Hero } from "../components/hero"
import { IndexPageContainer } from "../elements"

const IndexPage = () => (
  <>
    <Seo title="Home" />
    <Hero />
    <IndexPageContainer>
      <Link to="/locations">View our locations</Link>
      <Link to="/about">Read about us</Link>
      <Link to="/contact">Send us a comment, question, or concern</Link>
    </IndexPageContainer>
  </>
)

export default IndexPage
