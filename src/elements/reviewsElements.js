import styled from "styled-components"

export const ReviewsWrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  grid-gap: 2rem;

  margin: 0;

  @media ${props => props.theme.breakpoints.mobile} {
    grid-template-columns: 1fr;
    grid-gap: 0.5rem;
  }
`
export const ReviewContainer = styled.li`
  list-style-type: none;
  padding: 15px;
  background: ${props => props.theme.grayscale.light1};
  .user-info {
    display: flex;
    align-items: flex-start;
    width: 100%;
    max-width: 30rem;

    img {
      margin-right: 10px;
      overflow: hidden;
    }

    p {
      margin: 0;
    }
  }
`
