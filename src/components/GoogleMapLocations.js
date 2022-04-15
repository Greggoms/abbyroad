import React, { useState } from "react"
import { Map, Marker, InfoWindow, GoogleApiWrapper } from "google-maps-react"
import styled from "styled-components"
import { locations } from "./locationsDatabase"

const GoogleMapLocations = props => {
  const [showInfoWindow, setShowInfoWindow] = useState(false)
  const [activeMarker, setActiveMarker] = useState({})
  const [selectedPlace, setSelectedPlace] = useState({})

  const onMarkerClick = (props, marker, e) => {
    setShowInfoWindow(true)
    setActiveMarker(marker)
    setSelectedPlace(props)
  }

  const onMapClicked = () => {
    if (showInfoWindow) {
      setShowInfoWindow(false)
      setActiveMarker(null)
    }
  }

  return (
    <Map
      google={props.google}
      initialCenter={{ lat: 34.2588171915625, lng: -92.58897345490621 }}
      zoom={8}
      onClick={onMapClicked}
    >
      {locations.map(({ lat, lng, name }) => (
        <Marker
          key={name}
          position={{ lat: lat, lng: lng }}
          title={`${name} Store`}
          name={`${name} Store`}
          onClick={onMarkerClick}
        />
      ))}
      <InfoWindow marker={activeMarker} visible={showInfoWindow}>
        <InfoWindowContainer>
          <h2>{selectedPlace.name}</h2>
        </InfoWindowContainer>
      </InfoWindow>
    </Map>
  )
}
export default GoogleApiWrapper({
  apiKey: process.env.GATSBY_MAPS_KEY,
})(GoogleMapLocations)

const InfoWindowContainer = styled.div`
  display: flex;
  flex-direction: column;
`
