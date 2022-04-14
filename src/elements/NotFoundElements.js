import styled from "styled-components"

export const NotFoundContainer = styled.section`
  grid-column: 3 / span 4;
  margin: 30px 0;

  .link-sections {
    display: flex;
    align-items: flex-start;
    gap: 35px;
    @media only screen and (max-width: 915px) {
      flex-direction: column;
    }
  }

  .location-links,
  .blog-links {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
`
