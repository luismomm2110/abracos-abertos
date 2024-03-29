import { useParams } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";
import "./styles.css";
import VolunteerCard from "./DropDownButton/DropdownCard";

export default function EditStudent() {
  let { id } = useParams();
  const urlStudent = `http://localhost:9000/api/students/${id}`;
  const urlListVolunteer = `http://localhost:9000/api/volunteers`;
  const [currentStudent, setStudent] = useState("");
  const [volunteers, setVolunteers] = useState([]);

  useEffect(() => {
    fetch(urlListVolunteer)
      .then((response) => response.json())
      .then((data) => setVolunteers(data))
      .catch(console.error);
  }, [urlListVolunteer]);

  useEffect(() => {
    fetch(urlStudent)
      .then((response) => response.json())
      .then((data) => setStudent(data))
      .catch(console.error);
  }, [urlStudent]);

  const [formFields, setFormFields] = useState(currentStudent);

  const onNewVolunteer = (idVolunteer, nameVolunteer) => {
    const newFormFields = [
      ...formFields,
      { _id: idVolunteer, name: nameVolunteer },
    ];
    setFormFields(newFormFields);
  };

  if (currentStudent.length !== 0) {
    const handleSubmit = (event) => {
      event.preventDefault();

      if (Object.values(formFields).some((field) => field.length === 0)) {
        alert("Preencha todos campos");
        return;
      }

      axios
        .put(`http://localhost:9000/api/students/${id}`, formFields)
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error.response.data);
        });

      setFormFields(() => ({ ...currentStudent }));
    };

    const handleInput = (event) => {
      event.preventDefault();
      setFormFields(() => ({
        ...formFields,
        [event.target.name]: event.target.value,
      }));
    };

    return (
      <div className="studentContainer">
        <form className="studentForm">
          <div className="formRow">
            <div className="form-group ">
              <label htmlFor="inputName">Nome</label>
              <input
                type="name"
                className="form-control"
                id="inputName"
                name="name"
                placeholder={currentStudent.name}
                value={formFields.name}
                onChange={handleInput}
              />
            </div>
            <div className="form-group col-md-6 col-xs-12">
              <label htmlFor="inputParentName">Nome do Responsável</label>
              <input
                type="parentName"
                className="form-control"
                id="inputParentName"
                name="parentName"
                placeholder={currentStudent.parentName}
                value={formFields.parentName}
                onChange={handleInput}
              />
            </div>
          </div>
          <div className="formRow">
            <div className="form-group">
              <label htmlFor="inputAge">Idade</label>
              <input
                type="age"
                className="form-control"
                id="inputAge"
                name="age"
                placeholder={currentStudent.age}
                value={formFields.age}
                onChange={handleInput}
              />
            </div>
            <div className="form-group col-md-6 ">
              <label htmlFor="inputNationality">País de Origem</label>
              <input
                type="nationality"
                className="form-control"
                id="inputNationality"
                name="nationality"
                placeholder={currentStudent.nationality}
                value={formFields.nationality}
                onChange={handleInput}
              />
            </div>
          </div>
          <div className="formRow">
            <div className="form-group">
              <label htmlFor="inputAddress">Endereço</label>
              <input
                type="address"
                className="form-control"
                id="inputAdress"
                name="address"
                placeholder={currentStudent.address}
                value={formFields.address}
                onChange={handleInput}
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="inputGrade">Ano do aluno na escola</label>
              <input
                type="grade"
                className="form-control"
                id="inputGrade"
                name="grade"
                placeholder={currentStudent.grade}
                value={formFields.grade}
                onChange={handleInput}
              />
            </div>
          </div>
          <div className="col-md-12">
            <VolunteerCard
              volunteer={currentStudent.volunteer.name}
              data={volunteers}
              onNewVolunteer={onNewVolunteer}
            />
          </div>
          <div className="formRow">
            <button
              type="submit"
              className="btn btn-primary col-md-12"
              onClick={handleSubmit}
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    );
  }

  return <div> Nenhum voluntario </div>;
}
