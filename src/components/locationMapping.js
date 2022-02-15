import React from "react"
import { locations } from "./locationsDatabase"
import LocationLayout from "./locationLayout"

export const LocationMapping = () => {
  return (
    <div className="locations">
      {locations.map(
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
        }) => (
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
        )
      )}
    </div>
  )
}
