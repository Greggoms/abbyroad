import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Carousel } from "react-responsive-carousel"
import { HeroContainer } from "../css"

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
        <h2>Welcome</h2>
        <h3>We offer top of the line smoking essentials</h3>
      </div>
    </HeroContainer>
  )
}
