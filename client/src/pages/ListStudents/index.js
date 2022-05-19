import { useState, useEffect } from "react";

function SingleStudent(props) {
  return (
    <>
      <h4>Nome do Estudante: {props.name}</h4>
      <p>Nome do pai: {props.parentName}</p>
      <p>Idade: {props.age}</p>
      <p>Telefone do parente: {props.parentTelephone}</p>
      <p>Nacionalidade: {props.nationality}</p>
      <p>Endereço: {props.address}</p>
    </>
  );
}

const ListStudents = () => {
  const [students, setStudents] = useState();

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
