import styled from "styled-components"

export const HeaderContainer = styled.header`
  background: rebeccapurple;

  .header-content {
    margin: 0 auto;
    max-width: 960px;
    padding: 1.45rem 1.0875rem;

    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    @media ${props => props.theme.breakpoints.mobile} {
      flex-direction: column;
      align-items: center;
    }

    h1 {
      margin: 0;
      @media ${props => props.theme.breakpoints.mobile} {
        margin-bottom: 20px;
      }
    }

    a {
      color: ${props => props.theme.grayscale.light1};
      text-decoration: none;
    }
  }
`
