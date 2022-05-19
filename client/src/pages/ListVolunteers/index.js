import { useState, useEffect } from "react";

const ListVolunteers = () => {
  const [volunteers, setVolunteers] = useState();

  function SingleVolunteer(props) {
    return (
      <>
        <h4>Voluntario</h4>
        <p>Nome: {props.name}</p>
        <p>Email: {props.email}</p>
        <p>Idade: {props.age}</p>
        <p>CPF: {props.cpf}</p>
        <p>Escolaridade: {props.educationalLevel}</p>
        <p>Endereço {props.address}</p>
        <p>Telefone {props.phone}</p>
      </>
    );
  }

  useEffect(() => {
    fetch("http://localhost:9000/api/volunteers")
      .then((response) => response.json())
      .then((data) => setVolunteers(data))
      .catch(console.error);
  }, []);

  if (volunteers) {
    return (
      <div className="listVolunteers">
        {volunteers.map((volunteer) => (
          <SingleVolunteer {...volunteer} />
        ))}
      </div>
    );
  }

  return <div>Não foram encontrados voluntários</div>;
};

export default ListVolunteers;
