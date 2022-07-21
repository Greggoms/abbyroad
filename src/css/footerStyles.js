import styled from "styled-components"

export const FooterContainer = styled.footer`
  display: grid;
  grid-template-columns: 10vw repeat(6, 1fr) 10vw;

  background: rebeccapurple;

  .footer-content {
    grid-column: 2 / span 6;
    grid-column-gap: 20px;

    padding: 10px 0;
    color: ${props => props.theme.grayscale.light1};
  }
  a {
    color: ${props => props.theme.grayscale.light1};
  }
`
