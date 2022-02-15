import React from "react"
import { Link } from "gatsby"
import { Map, Marker, GoogleApiWrapper } from "google-maps-react"
import { ImageGallery } from "./ImageGallery"
import { Reviews } from "./reviews"
import { LocationContainer, LocationPreviewContainer } from "../elements"

const LocationLayout = props => {
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

      {props.lat && (
        <Map
          google={props.google}
          zoom={15}
          initialCenter={{ lat: props.lat, lng: props.lng }}
          className="locationmap"
        >
          <Marker
            position={{ lat: props.lat, lng: props.lng }}
            title={`${props.name} Store`}
            name={`${props.name} Store`}
          />
        </Map>
      )}
      <div className="reviews-section">
        <h2>Testimonials</h2>
        <Reviews googlePlaceId={props.googlePlaceId} />
      </div>
    </LocationContainer>
  )
}
export default GoogleApiWrapper({
  apiKey: process.env.GATSBY_MAPS_KEY,
})(LocationLayout)
