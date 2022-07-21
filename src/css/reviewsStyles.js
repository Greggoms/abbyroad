import styled from "styled-components"

export const ReviewsWrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  gap: 2rem;

  margin: 20px 0;

  @media ${props => props.theme.breakpoints.mobile} {
    grid-template-columns: 1fr;
    gap: 0.5rem;
  }

  h2 {
    grid-column: 1 / -1;
    grid-row: 1;
    margin: 0;
  }
`
export const ReviewContainer = styled.li`
  list-style-type: none;
  padding: 15px;
  background: #fff;
  .user-info {
    display: flex;
    align-items: flex-start;
    width: 100%;
    max-width: 30rem;
    margin-bottom: 15px;

    img {
      margin-right: 10px;
      overflow: hidden;
    }
  }
  p {
    margin: 0;
  }
`
