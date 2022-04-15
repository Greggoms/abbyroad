import React from "react"
import { Map, Marker, GoogleApiWrapper } from "google-maps-react"
import { locations } from "./locationsDatabase"

const GoogleMapLocations = props => {
  return (
    <Map
      google={props.google}
      zoom={8.3}
      initialCenter={{ lat: 34.35696450367832, lng: -92.8822444126881 }}
    >
      {locations.map(({ lat, lng, name }) => (
        <Marker
          position={{ lat: lat, lng: lng }}
          title={`${name} Store`}
          name={`${name} Store`}
        />
      ))}
    </Map>
  )
}
export default GoogleApiWrapper({
  apiKey: process.env.GATSBY_MAPS_KEY,
})(GoogleMapLocations)
