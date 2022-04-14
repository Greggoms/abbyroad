import React, { useState, useEffect } from "react"
import scrollTo from "gatsby-plugin-smoothscroll"
import { locations } from "./locationsDatabase"
import { LocationLayout } from "./locationLayout"
import { LocationsPageContainer, LocationPageContainer } from "../elements"
// import { Li } from "../utils/Li"

export const LocationMapping = props => {
  const [locationDetails, setLocationDetails] = useState([])
  // const [active, setActive] = useState(false)

  useEffect(() => {
    setLocationDetails(locations)
  }, [])

  return props.layout === "all-locations" ? (
    <LocationsPageContainer>
      <div className="quick-scroll">
        <h3>Quick Scroll</h3>
        <nav>
          <ul>
            {locationDetails.map(({ name, id }) => (
              <li key={id}>
                <button
                  onClick={() => {
                    scrollTo(`#a${id}`)
                  }}
                >
                  {name}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="locations-list">
        {locationDetails.map(
          ({ id, img, name, slug, hours, phone, phonelink, address }) => (
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
