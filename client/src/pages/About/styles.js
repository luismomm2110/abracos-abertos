import styled from "styled-components";

export const AboutContainer = styled.div`
  /* border: 2px solid red; */
`;

export const CollaboratorsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #005298;
  color: #fff;
  padding: 2rem;

  h1 {
    margin: 0;
    padding: 0;
  }
`;

export const PersonContainer = styled.div`
  display: flex;
  flex-direction: ${({ reverse }) => reverse ? "row-reverse" : "row"};
  justify-content: center;
  padding: 5rem;

  h3 {
    color: #171717;
  }
`;

export const PersonContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-left: 5rem;
  width: 30%;

  h2 {
    color: #005298;
    font-size: 3.5rem;
  }

  // Laptop configuration
  @media screen and (max-width: 1366px) {
    width: 45%;
  }
`;

export const PersonImage = styled.div`
  margin-left: 3rem;

  img {
    width: 400px;
  }
`;
