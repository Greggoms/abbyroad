import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Zoom from "react-medium-image-zoom"
import { PromotionalContainer } from "../elements"
import "react-medium-image-zoom/dist/styles.css"

export const Promotional = () => {
  return (
    <PromotionalContainer>
      <div className="promotional-content">
        <h2>Incoming Deals! Mark your Calendars!</h2>

        <Zoom>
          <StaticImage
            alt="April 20th Sale 2022"
            src="../images/promotionals/2022-abby_road.jpg"
            placeholder="blurred"
          />
        </Zoom>
      </div>
    </PromotionalContainer>
  )
}
