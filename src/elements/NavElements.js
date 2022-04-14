import styled from "styled-components"

export const NavContainer = styled.nav`
  grid-column: 1 / -1;

  position: sticky;
  top: 0px;
  height: max-content;
  background: rebeccapurple;
  padding: 10px 0;

  z-index: 100;

  .svg-link {
    grid-column: 1;
    grid-row: 1;

    color: ${props => props.theme.grayscale.light1};
  }

  .nav-content {
    display: flex;
    justify-content: center;
    margin: 0 10vw;
  }

  p {
    margin: 0;
  }

  a {
    color: ${props => props.theme.grayscale.light1};
    text-decoration: none;
  }

  a:not(:first-child) {
    margin-left: 20px;

    @media ${props => props.theme.breakpoints.mobile} {
      margin-left: 8px;
    }
  }
`
