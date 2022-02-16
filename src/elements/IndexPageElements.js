import styled from "styled-components"

export const IndexPageContainer = styled.section`
  grid-column: 3 / span 4;
  margin: 30px 0;

  display: flex;
  flex-direction: column;
  grid-gap: 10px;

  @media ${props => props.theme.breakpoints.mobile} {
    grid-column: 2 / span 6;
  }

  a,
  a:link {
    color: ${props => props.theme.colors.link};
    width: max-content;
  }

  a:hover {
    color: rebeccapurple;
  }

  a:active {
    color: ${props => props.theme.colors.green};
  }
`
