import React from "react"
import { Link } from "gatsby"
import { useSpring, easings } from "@react-spring/web"
import { ImageGallery } from "./ImageGallery"
import { Reviews } from "./reviews"
import { LocationContainer, LocationPreviewContainer } from "../elements"
import GoogleMap from "./GoogleMap"

export const LocationLayout = props => {
  const animationProps = useSpring({
    to: { transform: "translateX(0)", opacity: 1 },
    from: { transform: "translateX(10%)", opacity: -1 },
    config: {
      duration: 800,
      easing: easings.easeOutExpo,
    },
  })

  return props.layout === "all-locations" ? (
    <LocationPreviewContainer>
      <div className="blankspace" id={`a${props.id}`}></div>
      <div className="content">
        <Link to={`/locations/${props.slug}`} className="name-pic">
          <h2>{props.name}</h2>
          {props.img}
          <div className="overlay"></div>
        </Link>
        <div className="info">
          <a href={`tel: ${props.phonelink}`}>{props.phone}</a>
          <p>{props.address}</p>
          <ul>
            {props.hours.map((hour, index) => (
              <li key={index}>{hour}</li>
            ))}
          </ul>
        </div>
      </div>
    </LocationPreviewContainer>
  ) : (
    <LocationContainer style={animationProps}>
      <div className="top-section">
        <h1>{props.name}</h1>
        {props.img}
        <ImageGallery gallery={props.gallery} />
      </div>

      <div className="middle-section">
        <h2>Store Information</h2>
        <div className="info">
          <p>
            <a href={`tel: ${props.phonelink}`}>{props.phone}</a>
          </p>
          <p>{props.address}</p>
          <ul>
            {props.hours.map((hour, index) => (
              <li key={index}>{hour}</li>
            ))}
          </ul>
        </div>
        <div className="locationmap">
          <GoogleMap lat={props.lat} lng={props.lng} />
        </div>
      </div>

      <div className="reviews-section">
        <h2>Featured Google Reviews</h2>
        <Reviews googlePlaceId={props.googlePlaceId} />
      </div>
    </LocationContainer>
  )
}
