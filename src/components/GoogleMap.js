import React from "react"
import { Map, Marker, GoogleApiWrapper } from "google-maps-react"

const GoogleMap = props => {
  return (
    props.lat && (
      <Map
        google={props.google}
        zoom={15}
        initialCenter={{ lat: props.lat, lng: props.lng }}
      >
        <Marker
          position={{ lat: props.lat, lng: props.lng }}
          title={`${props.name} Store`}
          name={`${props.name} Store`}
        />
      </Map>
    )
  )
}
export default GoogleApiWrapper({
  apiKey: process.env.GATSBY_MAPS_KEY,
})(GoogleMap)
