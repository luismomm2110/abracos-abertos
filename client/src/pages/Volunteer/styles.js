import styled from "styled-components";

export const VolunteerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 4rem;

  button {
    margin-bottom: 0.50rem;
  }

  & .formRow {

    div.form-group {
      margin-left: 2rem;
      margin-bottom: 1rem;

      & + &:last-child {
        margin: 0;
      }
    }
  }

`;
