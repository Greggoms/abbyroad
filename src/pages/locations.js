import * as React from "react"
import Seo from "../components/seo"
import { LocationMapping } from "../components/locationMapping"

const locations = () => (
  <>
    <Seo title="Locations" />
    <LocationMapping layout="all-locations" />
  </>
)

export default locations
