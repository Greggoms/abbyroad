import styled from "styled-components"

export const Navbar = styled.section`
  position: sticky;
  top: 0px;
  height: max-content;
  background: rebeccapurple;
  padding: 10px 0;

  z-index: 100;

  .nav-content {
    display: grid;
    grid-template-columns: 10vw repeat(3, 1fr) 10vw;

    @media ${props => props.theme.breakpoints.mobile} {
      grid-template-columns: 10vw 1fr 10vw;
    }
  }

  .svg-link {
    grid-column: 2;
    justify-self: center;

    @media ${props => props.theme.breakpoints.mobile} {
      grid-column: 1 / 2;
      grid-row: 1 / 3;
      justify-self: flex-end;
      align-self: center;
    }

    a {
      color: ${props => props.theme.grayscale.light1};
    }
  }

  p {
    margin: 0;
  }
`

export const NavLinks = styled.nav`
  display: flex;
  justify-self: center;
  grid-column: 3;

  @media ${props => props.theme.breakpoints.mobile} {
    grid-column: 2;
    grid-row: 1;
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
