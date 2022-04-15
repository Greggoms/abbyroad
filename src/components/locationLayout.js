import React from "react"
import { Link } from "gatsby"
import { useSpring, easings } from "@react-spring/web"
import { ImageGallery } from "./ImageGallery"
import { Reviews } from "./reviews"
import { LocationContainer, LocationPreviewContainer } from "../elements"
import GoogleMap from "./GoogleMap"

export const LocationLayout = props => {
  const currentHour = new Date().getHours()
  const currentDayOfWeek = new Date().getDay()

  const handleIsOpen = () => {
    if (
      currentDayOfWeek === 0 &&
      currentHour >= props.hoursLong.sunday.open &&
      currentHour < props.hoursLong.sunday.close
    ) {
      return (
        <p>
          <span className="open">Open</span> today until{" "}
          {props.hoursLong.sunday.close - 12}:00pm
        </p>
      )
    } else if (
      currentDayOfWeek === 1 &&
      currentHour >= props.hoursLong.monday.open &&
      currentHour < props.hoursLong.monday.close
    ) {
      return (
        <p>
          <span className="open">Open</span> today until{" "}
          {props.hoursLong.monday.close - 12}:00pm
        </p>
      )
    } else if (
      currentDayOfWeek === 2 &&
      currentHour >= props.hoursLong.tuesday.open &&
      currentHour < props.hoursLong.tuesday.close
    ) {
      return (
        <p>
          <span className="open">Open</span> today until{" "}
          {props.hoursLong.tuesday.close - 12}:00pm
        </p>
      )
    } else if (
      currentDayOfWeek === 3 &&
      currentHour >= props.hoursLong.wednesday.open &&
      currentHour < props.hoursLong.wednesday.close
    ) {
      return (
        <p>
          <span className="open">Open</span> today until{" "}
          {props.hoursLong.wednesday.close - 12}:00pm
        </p>
      )
    } else if (
      currentDayOfWeek === 4 &&
      currentHour >= props.hoursLong.thursday.open &&
      currentHour < props.hoursLong.thursday.close
    ) {
      return (
        <p>
          <span className="open">Open</span> today until{" "}
          {props.hoursLong.thursday.close - 12}:00pm
        </p>
      )
    } else if (
      currentDayOfWeek === 5 &&
      currentHour >= props.hoursLong.friday.open &&
      currentHour < props.hoursLong.friday.close
    ) {
      return (
        <p>
          <span className="open">Open</span> today until{" "}
          {props.hoursLong.friday.close - 12}:00pm
        </p>
      )
    } else if (
      currentDayOfWeek === 6 &&
      currentHour >= props.hoursLong.saturday.open &&
      currentHour < props.hoursLong.saturday.close
    ) {
      return (
        <p>
          <span className="open">Open</span> today until{" "}
          {props.hoursLong.saturday.close - 12}
          :00pm
        </p>
      )
    }
    return <p className="closed">Closed</p>
  }

  const animationProps = useSpring({
    to: { transform: "translateX(0)", opacity: 1 },
    from: { transform: "translateX(10%)", opacity: -1 },
    config: {
      duration: 800,
      easing: easings.easeOutExpo,
    },
  })

  return props.layout === "all-locations" ? (
    <LocationPreviewContainer>
      <div className="content">
        <Link to={`/locations/${props.slug}`} className="name-pic">
          <h2>{props.name}</h2>
          {props.img}
          <div className="overlay"></div>
        </Link>
        <div className="info">
          {handleIsOpen()}
          <a href={`tel: ${props.phonelink}`}>{props.phone}</a>
          <p>{props.address}</p>
          <Link to={props.slug}>Go to {props.name}'s page &#x2192;</Link>
        </div>
      </div>
    </LocationPreviewContainer>
  ) : (
    <LocationContainer style={animationProps}>
      <div className="top-section">
        <h1>{props.name}</h1>
        {props.img}
        <ImageGallery gallery={props.gallery} />
      </div>

      <div className="middle-section">
        <h2>Store Information</h2>
        <div className="info">
          <p>
            <a href={`tel: ${props.phonelink}`}>{props.phone}</a>
          </p>
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
      </div>

      <div className="reviews-section">
        <h2>Featured Google Reviews</h2>
        <Reviews googlePlaceId={props.googlePlaceId} />
      </div>
    </LocationContainer>
  )
}
