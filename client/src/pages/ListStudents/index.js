import { useState, useEffect } from "react";
import axios from "axios";

const ListStudents = () => {
  const [students, setStudents] = useState();

  function SingleStudent(props) {
    const handleDelete = (event) => {
      event.preventDefault();
      const url = `http://localhost:9000/api/students/${props._id}`;

      axios
        .delete(url)
        .then((response) => {
          console.log(response.data);
        })
        .then(setStudents(students.filter((item) => item._id !== props._id)))
        .catch((error) => {
          console.log(error.response.data);
        });
    };

    return (
      <>
        <h4>Nome do Estudante: {props.name}</h4>
        <p>Nome do pai: {props.parentName}</p>
        <p>Idade: {props.age}</p>
        <p>Telefone do parente: {props.parentTelephone}</p>
        <p>Nacionalidade: {props.nationality}</p>
        <p>Endereço: {props.address}</p>
        <button
          type="submit"
          onClick={handleDelete}
          class="btn btn-primary col-md-6"
        >
          Deletar Estudante
        </button>
      </>
    );
  }

  useEffect(() => {
    fetch("http://localhost:9000/api/students")
      .then((response) => response.json())
      .then((data) => setStudents(data))
      .catch(console.error);
  }, []);

  if (students) {
    return (
      <>
        <div className="listStudents">
          {students.map((student) => (
            <SingleStudent {...student} />
          ))}
        </div>
      </>
    );
  }

  return <div> Sem estudantes</div>;
};

export default ListStudents;
