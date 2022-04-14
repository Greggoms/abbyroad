import styled from "styled-components"

export const PromotionalContainer = styled.section`
  grid-column: 1 / -1;

  .promotional-content {
    margin: 20px 10vw;
    display: flex;
    flex-direction: column;
    align-items: center;

    .gatsby-image-wrapper {
      max-width: 600px;
    }
  }
`
