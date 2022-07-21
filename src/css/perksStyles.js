import styled from "styled-components"

export const PerksContainer = styled.section`
  grid-column: 1 / -1;

  display: flex;
  flex-direction: column;
  gap: 10px;

  .perks {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr min-content;

    @media ${props => props.theme.breakpoints.desktop} {
      display: flex;
      flex-direction: column;
    }
    h3 {
      margin-bottom: 10px;
    }
  }

  .perk {
    display: grid;
    grid-template-columns: 1fr;
    gap: 10px;

    /* min-height: 60vh; */

    h2 {
      font-size: 45pt;
      text-align: center;
      @media ${props => props.theme.breakpoints.tablet} {
        font-size: 30pt;
      }
      @media ${props => props.theme.breakpoints.mobile} {
        font-size: 22pt;
      }
    }

    p {
      margin: 0;
    }
    .special-h2 {
      display: flex;
      font-size: 45pt;
      justify-content: center;
      @media ${props => props.theme.breakpoints.tablet} {
        font-size: 30pt;
      }
      @media ${props => props.theme.breakpoints.mobile} {
        font-size: 22pt;
      }
    }

    a {
      color: ${props => props.theme.colors.purple};
    }

    svg {
      font-size: 20pt;
      margin: 0 auto;
    }

    .background {
      grid-column: 1;
      grid-row: 1;

      width: 100%;
      height: 100%;
      filter: opacity(60%);

      &-one {
        background: linear-gradient(to bottom left, #ffcf67, #d3321d);
      }
      &-two {
        background: linear-gradient(to bottom right, #aef551, #10bd35);
      }
    }

    .perk-content {
      grid-column: 1;
      grid-row: 1;
      z-index: 1;
      justify-items: space-around;

      margin: 30px;
    }

    .appcard {
      display: flex;
      align-items: flex-start;
      gap: 15px;

      @media ${props => props.theme.breakpoints.desktop} {
        flex-direction: column;
      }

      .gatsby-image-wrapper {
        min-width: 200px;
        max-width: 250px;
      }
    }
  }

  a,
  a:link,
  a:visited {
    color: ${props => props.theme.colors.linkDark};
    width: max-content;
  }

  a:hover {
    color: rebeccapurple;
  }

  a:active {
    color: ${props => props.theme.colors.green};
  }
`
