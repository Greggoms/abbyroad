import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { ReviewContainer, ReviewsWrapper } from "../elements"

export const Reviews = props => {
  return (
    <StaticQuery
      query={graphql`
        query {
          allGooglePlacesPlace {
            nodes {
              name
              user_ratings_total
              place_id
              childrenGooglePlacesReview {
                author_name
                rating
                profile_photo_url
                text
                relative_time_description
              }
            }
          }
        }
      `}
      render={data => (
        <ReviewsWrapper>
          {data.allGooglePlacesPlace.nodes.map(
            p =>
              p.place_id === props.googlePlaceId &&
              p.childrenGooglePlacesReview.map(
                (r, index) =>
                  r.rating >= 4 && (
                    <ReviewContainer key={index}>
                      <div className="user-info">
                        <img
                          height="50"
                          width="50"
                          src={r.profile_photo_url}
                          alt={r.author_name}
                        />{" "}
                        <div>
                          <p>
                            {r.author_name} – {r.rating}/5
                          </p>
                          <p>{r.relative_time_description}</p>
                        </div>
                      </div>
                      <p>{r.text}</p>
                    </ReviewContainer>
                  )
              )
          )}
        </ReviewsWrapper>
      )}
    />
  )
}
