import { useEffect } from "react";
import { AboutContainer, CollaboratorsContainer } from "./styles";
import Person from "../../components/Person";
import peopleData from "./assets/data.json";

export default function About({ isFooterFixed }) {
  useEffect(() => {
    isFooterFixed(false);
  }, [isFooterFixed]);

  return (
    <AboutContainer>
      <CollaboratorsContainer>
        <h1>Colaboradores/as</h1>
      </CollaboratorsContainer>
      {peopleData.persons.map(person => (
        <Person data={person} key={person.name} />
      ))}
    </AboutContainer>
  );
}
