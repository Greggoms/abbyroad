import styled from "styled-components"
import { animated } from "@react-spring/web"

export const LocationsPageContainer = styled.section`
  grid-column: 2 / span 6;

  display: grid;
  grid-template-columns: 160px 1fr;
  gap: 20px;

  @media ${props => props.theme.breakpoints.tablet} {
    gap: 0;
  }

  a {
    text-decoration: none;
  }

  .quick-scroll {
    position: sticky;
    top: 60px;
    height: max-content;

    border: 1px solid #333;
    border-radius: 5px;
    padding: 5px;
    margin: 60px 0 0 0;

    @media ${props => props.theme.breakpoints.tablet} {
      display: none;
    }

    h3 {
      margin: 0;
      margin-bottom: 5px;
      border-bottom: 1px solid #ccc;
    }

    ul {
      list-style-type: none;
      display: flex;
      flex-direction: column;
      gap: 5px;
    }

    button {
      border: none;
      background: inherit;
      cursor: pointer;
    }
  }

  .locations-list {
    display: flex;
    flex-direction: column;

    @media ${props => props.theme.breakpoints.tablet} {
      grid-column: 1 / -1;
    }
  }
`
export const LocationPageContainer = styled.section`
  grid-column: 1 / -1;

  overflow: hidden;
`
export const LocationPreviewContainer = styled.div`
  .content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: min-content auto;
    grid-column-gap: 10px;

    @media ${props => props.theme.breakpoints.tablet} {
      grid-template-columns: 1fr;
    }
  }

  :last-child {
    margin-bottom: 20px;
  }

  .name-pic {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;

    .gatsby-image-wrapper,
    .overlay {
      grid-column: 1;
      grid-row: 1;
    }

    .gatsby-image-wrapper {
      height: 200px;
    }

    .overlay {
      z-index: 2;

      width: 100%;
      height: 100%;
      background: rgba(52, 52, 52, 0.7);
    }
  }

  .info {
    grid-column: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media ${props => props.theme.breakpoints.tablet} {
      display: none;
    }

    ul {
      list-style-type: none;
    }

    a,
    a:link {
      color: ${props => props.theme.colors.linkDark};
      width: max-content;
    }

    a:hover {
      color: ${props => props.theme.grayscale.dark4};
    }

    a:active {
      color: ${props => props.theme.colors.green};
    }
  }

  .blankspace {
    grid-row: 1;
    padding-bottom: 60px;

    @media ${props => props.theme.breakpoints.tablet} {
      padding-bottom: 20px;
    }
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
  a,
  a:link {
    color: ${props => props.theme.grayscale.light1};
  }

  a:hover {
    color: ${props => props.theme.colors.linkDark};
  }

  a:active {
    color: ${props => props.theme.colors.green};
  }
`

export const LocationContainer = styled(animated.section)`
  display: grid;
  grid-template-columns: 50px repeat(6, 1fr) 50px;
  grid-template-rows: repeat(3, min-content) max-content;
  // grid-row-gap: 20px;

  @media ${props => props.theme.breakpoints.mobile} {
    grid-template-columns: 10px 1fr 10px;
  }

  .top-section {
    grid-row: 1;
    grid-column: 1 / -1;

    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
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

  .middle-section {
    grid-column: 2 / span 6;

    display: grid;
    grid-template-columns: 325px 1fr;
    grid-template-rows: min-content 1fr;
    gap: 20px;

    margin: 20px 0 0 0;

    @media ${props => props.theme.breakpoints.tablet} {
      grid-template-columns: 1fr;
      grid-template-rows: auto;
    }

    h2 {
      grid-column: 1;
      grid-row: 1;
      align-self: flex-end;

      margin: 0;
    }

    ul {
      list-style-type: none;
    }

    @media ${props => props.theme.breakpoints.mobile} {
      grid-column: 2;
    }
  }

  .info {
    grid-column: 1;
    grid-row: 2;
  }

  .locationmap {
    grid-column: 2;
    grid-row: 1/-1;
    position: relative !important;
    height: 50vh !important;

    @media ${props => props.theme.breakpoints.tablet} {
      grid-column: 1;
      grid-row: 3;
    }
  }

  .reviews-section {
    grid-column: 2 / span 6;

    padding: 0 50px;

    @media ${props => props.theme.breakpoints.tablet} {
      padding: 0;
    }

    @media ${props => props.theme.breakpoints.mobile} {
      grid-column: 2;
    }

    h2 {
      margin-top: 20px;
      text-align: center;
      color: ${props => props.theme.grayscale.dark4};
    }
  }
`
