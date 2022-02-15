import styled from "styled-components"

export const FooterContainer = styled.footer`
  background: rebeccapurple;

  .footer-content {
    margin: 0 auto;
    max-width: 960px;
    padding: 1.45rem 1.0875rem;
    color: ${props => props.theme.grayscale.light1};
  }
  a {
    color: ${props => props.theme.grayscale.light1};
  }
`
