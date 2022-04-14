import styled from "styled-components"

export const AboutPageContainer = styled.section`
  grid-column: 2 / span 6;
  margin-top: 30px;

  @media ${props => props.theme.breakpoints.mobile} {
    grid-column: 2 / span 6;
  }
`
