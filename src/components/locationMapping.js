import React, { useState, useEffect } from "react"
import { locations } from "./locationsDatabase"
import LocationLayout from "./locationLayout"
import { LocationsPageContainer, LocationPageContainer } from "../elements"

export const LocationMapping = props => {
  const [locationDetails, setLocationDetails] = useState([])

  useEffect(() => {
    setLocationDetails(locations)
  }, [])

  return props.layout === "all-locations" ? (
    <LocationsPageContainer>
      {locationDetails.map(({ id, img, name, slug }) => (
        <LocationLayout
          layout="all-locations"
          key={id}
          id={id}
          img={img}
          name={name}
          slug={slug}
        />
      ))}
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
              lat={lat}
              lng={lng}
              googlePlaceId={googlePlaceId}
            />
          ) : null
      )}
    </LocationPageContainer>
  )
}
