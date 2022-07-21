import React, { useState, useEffect } from "react"
import { locations } from "./locationsDatabase"
import GoogleMapLocations from "./GoogleMapLocations"
import { LocationLayout } from "./locationLayout"
import { Clock } from "./Clock"
import { LocationsPageContainer, LocationPageContainer } from "../css"

export const LocationMapping = props => {
  const [locationDetails, setLocationDetails] = useState([])

  useEffect(() => {
    setLocationDetails(locations)
  }, [])

  return props.layout === "all-locations" ? (
    <LocationsPageContainer>
      <div className="locations-google-map">
        <GoogleMapLocations />
      </div>

      <Clock />

      <div className="locations-list">
        {locationDetails.map(
          ({
            id,
            img,
            name,
            slug,
            hours,
            hoursLong,
            isOpen,
            phone,
            phonelink,
            address,
          }) => (
            <LocationLayout
              layout="all-locations"
              key={id}
              id={id}
              img={img}
              name={name}
              slug={slug}
              phone={phone}
              phonelink={phonelink}
              address={address}
              hours={hours}
              hoursLong={hoursLong}
              isOpen={isOpen}
            />
          )
        )}
      </div>
    </LocationsPageContainer>
  ) : (
    <LocationPageContainer>
      {locationDetails.map(
        ({
          id,
          img,
          gallery,
          name,
          phone,
          phonelink,
          address,
          hours,
          hoursLong,
          isOpen,
          lat,
          lng,
          googlePlaceId,
          slug,
        }) =>
          props.location === slug ? (
            <LocationLayout
              key={id}
              id={id}
              img={img}
              gallery={gallery}
              name={name}
              phone={phone}
              phonelink={phonelink}
              address={address}
              hours={hours}
              hoursLong={hoursLong}
              isOpen={isOpen}
              lat={lat}
              lng={lng}
              googlePlaceId={googlePlaceId}
            />
          ) : null
      )}
    </LocationPageContainer>
  )
}
