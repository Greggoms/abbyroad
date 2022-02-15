import styled from "styled-components"

export const MainContainer = styled.main`
  #gatsby-focus-wrapper {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: 70vh 1fr;
  }

  .locations {
    grid-column: 1 / -1;
    grid-row: 2;
  }
`
