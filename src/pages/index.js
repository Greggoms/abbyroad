import React from "react"
import Seo from "../components/seo"
import { Hero } from "../components/hero"
import { Perks } from "../components/Perks"
import { ProductCategories } from "../components/ProductCategories"
import { Promotional } from "../components/Promotional"

const IndexPage = () => {
  return (
    <>
      <Seo title="Home" />
      <Hero />
      <Perks />
      <ProductCategories />
      <Promotional />
    </>
  )
}

export default IndexPage
