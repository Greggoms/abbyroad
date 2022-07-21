import styled from "styled-components"

export const PotencyCalculatorContainer = styled.section`
  h4 {
    margin-bottom: 10px;
  }

  .inputs {
    display: flex;
    gap: 10px;

    @media ${props => props.theme.breakpoints.mobile} {
      flex-direction: column;
    }

    p {
      margin: 0;
      margin-bottom: -2px;
      font-size: 10pt;
    }
  }
`
