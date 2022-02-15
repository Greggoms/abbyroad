import styled from "styled-components"

export const ContactPageContainer = styled.section`
  grid-column: 3 / span 4;
  margin-top: 30px;

  @media ${props => props.theme.breakpoints.mobile} {
    grid-column: 2 / span 6;
  }
`
