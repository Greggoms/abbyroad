import styled from "styled-components"

export const ContactPageContainer = styled.section`
  grid-column: 2 / span 6;
  margin: 30px 0;

  @media ${props => props.theme.breakpoints.mobile} {
    grid-column: 2 / span 6;
  }
`
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;

  .form-section {
    display: flex;
    flex-direction: column;
  }

  .input-name,
  .input-email,
  .input-subject {
    /* min-width: 275px; */
    max-width: 300px;
    padding-left: 5px;
  }

  .input-message {
    min-height: 30px;
    /* min-width: 275px; */
    max-width: 650px;
    padding-left: 5px;
  }

  .submit-btn {
    cursor: pointer;
    background: inherit;
    border: 2px solid rebeccapurple;
    width: 150px;
    padding: 5px 10px;
    color: ${props => props.theme.grayscale.dark4};
  }

  .error-message {
    color: #fa836e;
  }
`
