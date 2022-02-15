import React from "react"
import { Map, Marker, GoogleApiWrapper } from "google-maps-react"
import { ImageGallery } from "./ImageGallery"
import { Reviews } from "./reviews"
import { LocationContainer } from "../elements"

const LocationLayout = props => {
  return (
    <LocationContainer>
      <h1>{props.name}</h1>

      <div className="info">
        <a href={`tel: ${props.phonelink}`}>{props.phone}</a>
        <p>{props.address}</p>
        <ul>
          {props.hours.map((hour, index) => (
            <li key={index}>{hour}</li>
          ))}
        </ul>
      </div>

      {props.img}
      <ImageGallery gallery={props.gallery} />
      {props.lat && (
        <Map
          google={props.google}
          zoom={15}
          initialCenter={{ lat: props.lat, lng: props.lng }}
          className="locationmap"
          style={{
            position: "relative !important",
            width: "100%",
            height: "100%",
          }}
        >
          <Marker
            position={{ lat: props.lat, lng: props.lng }}
            title={`${props.name} Store`}
            name={`${props.name} Store`}
            style={{
              position: "relative !important",
              width: "100%",
              height: "300px",
            }}
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
