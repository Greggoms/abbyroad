import styled from "styled-components"

export const LocationContainer = styled.section`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 15rem 1fr min-content 25rem;

  margin-bottom: 2rem;

  h1 {
    grid-column: 1 / -1;
    grid-row: 1;
    align-self: flex-start;
    justify-self: flex-start;
    z-index: 1;

    background: ${props => props.theme.grayscale.dark4};
    color: ${props => props.theme.grayscale.light1};
    padding: 0.5rem 1rem;
  }

  .gatsby-image-wrapper {
    grid-column: 1 / -1;
    grid-row: 1;
  }

  button {
    grid-column: 3;
    grid-row: 1;
    align-self: flex-end;
    justify-self: flex-end;
    z-index: 1;

    background: ${props => props.theme.grayscale.dark4};
    color: ${props => props.theme.grayscale.light1};
    padding: 0.5rem 1rem;
    border: none;
    cursor: pointer;
  }

  .info {
    grid-column: 1 / -1;
    grid-row: 2;
  }

  .locationmap {
    grid-column: 1 / -1;
    grid-row: 4;
  }

  .reviews-section {
    grid-column: 1 / -1;
    grid-row: 3;
  }
`
