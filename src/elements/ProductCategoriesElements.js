import styled from "styled-components"

export const InventoryContainer = styled.section`
  grid-column: 1 / -1;

  color: ${props => props.theme.grayscale.light1};
  background: linear-gradient(
      217deg,
      rgba(51, 51, 51, 0.8),
      rgba(255, 0, 0, 0) 70.71%
    ),
    linear-gradient(127deg, rgba(10, 10, 10, 0.8), rgba(0, 255, 0, 0) 70.71%),
    linear-gradient(336deg, rgba(64, 64, 64, 0.8), rgba(0, 0, 255, 0) 70.71%);

  .inventory-content {
    margin: 20px 10vw;
  }

  h2 {
    margin-bottom: 10px;
  }

  p {
    margin: 0;
  }

  .disclaimer {
    margin-bottom: 10px;
    font-style: italic;
    font-size: 11pt;
  }

  .categories {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    gap: 10px 30px;
  }

  .category-open {
  }

  .category-item {
    display: flex;
    flex-direction: column;
    align-items: center;

    h3 {
      font-size: 12pt;
      margin: 0;
      text-align: center;
    }

    .gatsby-image-wrapper {
      max-width: 100px;
    }
  }

  a,
  a:link,
  a:visited {
    color: ${props => props.theme.colors.linkLight};
    width: max-content;
  }

  a:hover {
    color: rebeccapurple;
  }

  a:active {
    color: ${props => props.theme.colors.green};
  }
`
