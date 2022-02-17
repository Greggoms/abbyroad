import React from "react"
import { Link } from "gatsby"
import { ImageGallery } from "./ImageGallery"
import { Reviews } from "./reviews"
import { LocationContainer, LocationPreviewContainer } from "../elements"
import GoogleMap from "./GoogleMap"

export const LocationLayout = props => {
  return props.layout === "all-locations" ? (
    <LocationPreviewContainer>
      <Link to={`/locations/${props.slug}`}>
        <div className="content">
          <h2>{props.name}</h2>
          {props.img}
          <div className="overlay"></div>
        </div>
      </Link>
    </LocationPreviewContainer>
  ) : (
    <LocationContainer>
      <h1>{props.name}</h1>
      {props.img}
      <ImageGallery gallery={props.gallery} />

      <div className="info">
        <a href={`tel: ${props.phonelink}`}>{props.phone}</a>
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

      <div className="reviews-section">
        <Reviews googlePlaceId={props.googlePlaceId} />
      </div>
    </LocationContainer>
  )
}
