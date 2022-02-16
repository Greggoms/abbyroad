import styled from "styled-components"

export const HeroContainer = styled.section`
  grid-column: 1 / -1;
  grid-row: 1;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;

  .hero-img {
    grid-column: 1;
    grid-row: 1;
    height: 50vh;
  }

  .hero-overlay {
    grid-column: 1;
    grid-row: 1;

    background: rgba(51, 51, 51, 0.6);
    z-index: 1;
  }

  .hero-carousel {
    grid-column: 1;
    grid-row: 1/-1;
  }

  .tagline {
    grid-column: 1;
    grid-row: 1/-1;
    justify-self: center;
    align-self: center;
    padding: 0 10px;

    color: ${props => props.theme.grayscale.light1};
    text-align: center;
    z-index: 2;
  }

  h2 {
    font-size: 60pt;
    margin-bottom: 1rem;

    @media ${props => props.theme.breakpoints.tablet} {
      font-size: 40pt;
    }
  }

  h3 {
    font-size: 20pt;
    @media ${props => props.theme.breakpoints.tablet} {
      font-size: 15pt;
    }
  }
`
