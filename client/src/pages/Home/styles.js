import styled from 'styled-components';
import background from "./assets/principal.jpeg";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MainImage = styled.div`
  background-image: url(${ background });
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
  height: 300px;
  width: 600px;
`;

export const MainSection = styled.section`
  display: flex;
  width: 65%;
  margin-top: 4em;
  margin-bottom: 2em;

  // Laptop configuration
  @media screen and (max-width: 1366px) {
    width: 85%;
  }
`;

export const MainTitle = styled.h2`
  text-align: center;
  color: #005298;
  font-size: 2.2rem;
  font-weight: 600;
  margin-bottom: 2rem;

  & span {
    color: black;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;

  // Laptop configuration
  @media screen and (max-width: 1366px) {
    width: 55%;
  }
`;

export const FriendsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
`;

export const TextParagraph = styled.span`
  font-weight: 400;
  color: #171717;
  text-align: left;
  line-height: 1.7em;
  width: 70%;
  margin-bottom: 1rem;

  & + & {
    margin-bottom: 0;
  }
`;

export const ProjectContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: #005298;
  color: #fff;
  padding: 2.5rem;

  p {
    margin: 0;
    padding: 0;
    font-family: "Roboto", sans-serif;
  }

  margin-bottom: 2rem;
`;

export const ProjectWrapper = styled.div`
  display: flex;
  width: 60%;

  // Laptop configuration
  @media screen and (max-width: 1366px) {
    width: 90%;
  }
`;

export const ProjectDiv = styled.div`
  display: flex;
  justify-content: center;
  border: 5px solid #6EC1E4;
  padding: 4rem 3rem 4rem 3rem;
  margin-right: 1rem;
  height: 100%;
  width: 100%;

  h2 {
    font-weight: 600;
    font-size: 1.8rem;
  }
`;

export const ProjectItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  /* background: red; */
  box-sizing: border-box;
  margin-right: 1rem;
  margin-left: 2rem;

  & + &:last-child {
    margin: 0;
  }
`;

export const OurGoalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 1rem 0 1.5rem 0;

  & img {
    width: 230px;
    margin-bottom: 1.5rem;
  }

  & p {
    text-align: center;
    font-weight: 600;
    line-height: 1.3em;
    color: #54595F;
    width: 60%;
  }

  & h3 {
    font-size: 1.3rem;
    font-weight: 700;
  }
`;

export const InformationContainer = styled.div`
  display: flex;
  color: #54595F;
  font-weight: 600;
  font-size: 0.9rem;
  /* border: 2px solid blue; */

  & span {
    /* border: 2px solid red; */
    margin-right: 4rem;

    &:last-child {
      margin-right: 0;
    }
  }
`;
