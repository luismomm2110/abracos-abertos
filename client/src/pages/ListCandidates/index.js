import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import auth from "../../auth/api-helper";

const ListCandidates = () => {
  const [candidates, setCandidates] = useState();
  const navigate = useNavigate();

  function SingleCandidate(props) {
    const handleDelete = (event) => {
      event.preventDefault();
      const url = `http://localhost:9000/api/candidate/${props._id}`;

      axios
        .delete(url)
        .then((response) => {
          console.log(response.data);
        })
        .then(
          setCandidates(candidates.filter((item) => item._id !== props._id))
        )
        .catch((error) => {
          console.log(error.response.data);
        });
    };

    const handleAccept = (event) => {
      event.preventDefault();
      const url = `http://localhost:9000/api/volunteers`;

      axios
        .post(url, props)
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error.response.data);
        });

      const urlDelete = `http://localhost:9000/api/candidate/${props._id}`;

      axios
        .delete(urlDelete)
        .then((response) => {
          console.log(response.data);
        })
        .then(
          setCandidates(candidates.filter((item) => item._id !== props._id))
        )
        .catch((error) => {
          console.log(error.response.data);
        });
    };

    return (
      <>
        <h4>Candidato</h4>
        <p>Nome: {props.name}</p>
        <p>Email: {props.email}</p>
        <p>Idade: {props.age}</p>
        <p>CPF: {props.cpf}</p>
        <p>Escolaridade: {props.educationalLevel}</p>
        <p>Endereço {props.address}</p>
        <p>Telefone {props.phone}</p>
        <div className="buttonRow">
          <button
            type="submit"
            class="btn btn-primary"
            onClick={() => navigate(`editarvoluntario/${props._id}`)}
          >
            Editar
          </button>
          <button type="submit" onClick={handleAccept} class="btn btn-primary">
            Aceitar Como voluntário
          </button>
          <button type="submit" onClick={handleDelete} class="btn btn-primary">
            Excluir
          </button>
        </div>
      </>
    );
  }

  useEffect(() => {
    fetch("http://localhost:9000/api/candidate")
      .then((response) => response.json())
      .then((data) => setCandidates(data))
      .catch(console.error);
  }, []);

  if (auth.isAuthenticated) {
    if (candidates) {
      return (
        <div className="listCandidates">
          {candidates.map((candidate, i) => (
            <SingleCandidate key={i} {...candidate} />
          ))}
        </div>
      );
    }
    return <div>Nenhum Candidato</div>;
  }
  return navigate(`control`);
};

export default ListCandidates;
