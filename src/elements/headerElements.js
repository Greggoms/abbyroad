import styled from "styled-components"

export const HeaderContainer = styled.header`
  display: grid;
  grid-template-columns: 10vw repeat(6, 1fr) 10vw;
  justify-items: center;

  background: rebeccapurple;

  .header-content {
    grid-column: 2 / span 6;

    padding-top: 10px;

    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    @media ${props => props.theme.breakpoints.mobile} {
      grid-column: 1 / -1;

      flex-direction: column;
      align-items: center;
    }

    a {
      color: ${props => props.theme.grayscale.light1};
      text-decoration: none;
    }

    .logo-link {
      display: flex;
      align-items: flex-end;
      gap: 10px;

      @media ${props => props.theme.breakpoints.mobile} {
        margin-bottom: 15px;
      }

      h1 {
        margin: 0;
        font-size: 14pt;
        max-width: min-content;
      }
    }
  }
`
