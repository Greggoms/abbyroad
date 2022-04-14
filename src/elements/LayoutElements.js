import styled from "styled-components"

export const MainContainer = styled.main`
  margin: 0 auto;

  #gatsby-focus-wrapper {
    display: grid;
    grid-template-columns: 10vw repeat(6, 1fr) 10vw;

    @media ${props => props.theme.breakpoints.mobile} {
      grid-template-columns: 10px repeat(6, 1fr) 10px;
    }
  }
`

export const LayoutContainer = styled.div`
  /*///////////////////////////
  // Keeps footer at bottom. //
  ///////////////////////////*/

  display: grid;
  grid-template-rows: min-content min-content 1fr min-content;
  min-height: 100vh;

  /*/////////////////////////*/

  .content {
    background: ${props => props.theme.grayscale.light1};
  }
`
