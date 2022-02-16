import styled from "styled-components"

export const ContactPageContainer = styled.section`
  grid-column: 3 / span 4;
  margin-top: 30px;

  @media ${props => props.theme.breakpoints.mobile} {
    grid-column: 2 / span 6;
  }
`
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  grid-gap: 20px;

  .form-section {
    display: flex;
    flex-direction: column;
  }

  .input-name,
  .input-email,
  .input-subject {
    width: 300px;
    padding-left: 5px;
  }

  .input-message {
    min-height: 30px;
    min-width: 300px;
    max-width: 650px;
    padding-left: 5px;
  }

  .submit-btn {
    background: inherit;
    border: 2px solid rebeccapurple;
    width: max-content;
    padding: 5px 10px;
  }

  .error-message {
    color: #fa836e;
  }
`
