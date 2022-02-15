import React from "react"
import { Carousel } from "react-responsive-carousel"
import { StaticImage } from "gatsby-plugin-image"
import { HeroContainer } from "../elements"

export const Hero = () => {
  return (
    <HeroContainer>
      <div className="hero-overlay"></div>
      <Carousel
        autoPlay
        infiniteLoop
        interval={5000}
        showArrows={false}
        renderIndicator={false}
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        className="hero-carousel"
      >
        <StaticImage
          src="../images/ARUniversity/ar_uni-store-2.jpg"
          alt="Abby Road University Store"
          placeholder="blurred"
          layout="fullWidth"
          className="hero-img"
        />
        <StaticImage
          src="../images/Jacksonville/jacksonville-store-1.JPG"
          alt="Abby Road University Store"
          placeholder="blurred"
          layout="fullWidth"
          className="hero-img"
        />
        <StaticImage
          src="../images/Maumelle/maumelle-store-1.jpg"
          alt="Abby Road University Store"
          placeholder="blurred"
          layout="fullWidth"
          className="hero-img"
        />
        <StaticImage
          src="../images/OtterCreek/otter_creek-store-3.jpg"
          alt="Abby Road University Store"
          placeholder="blurred"
          layout="fullWidth"
          className="hero-img"
        />
      </Carousel>

      <div className="tagline">
        <h2>Abby Road</h2>
        <h3>New website under construction!</h3>
      </div>
    </HeroContainer>
  )
}
