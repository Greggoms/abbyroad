import styled from "styled-components"

export const LocationsPageContainer = styled.section`
  grid-column: 2 / span 6;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(48%, 1fr));
  grid-gap: 20px;

  margin: 1.0875rem 0;

  a {
    text-decoration: none;
  }
`
export const LocationPageContainer = styled.section`
  grid-column: 1 / -1;
  margin: 0 0 1.0875rem 0;
`

export const LocationContainer = styled.section`
  display: grid;
  grid-template-columns: 50px repeat(6, 1fr) 50px;
  grid-template-rows: repeat(3, min-content) max-content;
  grid-row-gap: 20px;

  @media ${props => props.theme.breakpoints.mobile} {
    grid-template-columns: 10px 1fr 10px;
  }

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
    height: 300px;
  }

  button {
    grid-column: 3 / -1;
    grid-row: 1;
    align-self: flex-end;
    justify-self: flex-end;
    z-index: 1;

    background: ${props => props.theme.grayscale.dark4};
    color: ${props => props.theme.grayscale.light1};
    padding: 0.5rem 1rem;
    border: none;
    cursor: pointer;

    @media ${props => props.theme.breakpoints.mobile} {
      grid-column: 2 / -1;
    }
  }

  .info {
    grid-column: 3 / span 4;
    justify-self: center;

    ul {
      list-style-type: none;
    }

    @media ${props => props.theme.breakpoints.mobile} {
      grid-column: 2;
    }
  }

  .locationmap {
    grid-column: 1 / -1;

    position: relative !important;
    height: 50vh !important;
  }

  .reviews-section {
    grid-column: 2 / span 6;

    @media ${props => props.theme.breakpoints.mobile} {
      grid-column: 2;
    }
  }
`
export const LocationPreviewContainer = styled.div`
  .content {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
  }

  h2 {
    grid-column: 1;
    grid-row: 1;
    justify-self: center;
    align-self: center;

    text-align: center;
    font-size: 30pt;
    margin-bottom: 0;
    z-index: 3;

    @media ${props => props.theme.breakpoints.tablet} {
      font-size: 20pt;
    }
  }

  .gatsby-image-wrapper {
    grid-column: 1;
    grid-row: 1;

    height: 200px;
  }

  .overlay {
    grid-column: 1;
    grid-row: 1;
    z-index: 2;

    width: 100%;
    height: 100%;
    background: rgba(52, 52, 52, 0.7);
  }

  a,
  a:link {
    color: ${props => props.theme.grayscale.light1};
  }

  a:hover {
    color: ${props => props.theme.colors.link};
  }

  a:active {
    color: ${props => props.theme.colors.green};
  }
`
