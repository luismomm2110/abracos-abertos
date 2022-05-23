import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import axios from "axios";

const ListVolunteers = () => {
  const [volunteers, setVolunteers] = useState();
  const navigate = useNavigate();

  function SingleVolunteer(props) {
    const handleDelete = (event) => {
      event.preventDefault();
      const url = `http://localhost:9000/api/volunteers/${props._id}`;

      axios
        .get(url)
        .then((response) => {
          console.log(response.data);
        })
        .then(
          setVolunteers(volunteers.filter((item) => item._id !== props._id))
        )
        .catch((error) => {
          console.log(error.response.data);
        });
    };

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
        <div>
          <button
            type="submit"
            class="btn btn-primary col-md-6"
            onClick={() => navigate(`editarvoluntario/${props._id}`)}
          >
            Editar Voluntário
          </button>
        </div>
        <button
          type="submit"
          onClick={handleDelete}
          class="btn btn-primary col-md-6"
        >
          Deletar Voluntário
        </button>
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
        {volunteers.map((volunteer, i) => (
          <SingleVolunteer key={i} {...volunteer} />
        ))}
      </div>
    );
  }
};

export default ListVolunteers;
