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
            <div class="form-group ">
              <label for="inputName">Nome</label>
              <input
                type="name"
                class="form-control"
                id="inputName"
                name="name"
                placeholder={currentStudent.name}
                value={formFields.name}
                onChange={handleInput}
              />
            </div>
            <div class="form-group col-md-6 col-xs-12">
              <label for="inputParentName">Nome do Responsável</label>
              <input
                type="parentName"
                class="form-control"
                id="inputParentName"
                name="parentName"
                placeholder={currentStudent.parentName}
                value={formFields.parentName}
                onChange={handleInput}
              />
            </div>
          </div>
          <div className="formRow">
            <div class="form-group">
              <label for="inputAge">Idade</label>
              <input
                type="age"
                class="form-control"
                id="inputAge"
                name="age"
                placeholder={currentStudent.age}
                value={formFields.age}
                onChange={handleInput}
              />
            </div>
            <div class="form-group col-md-6 ">
              <label for="inputNationality">País de Origem</label>
              <input
                type="nationality"
                class="form-control"
                id="inputNationality"
                name="nationality"
                placeholder={currentStudent.nationality}
                value={formFields.nationality}
                onChange={handleInput}
              />
            </div>
          </div>
          <div className="formRow">
            <div class="form-group">
              <label for="inputAddress">Endereço</label>
              <input
                type="address"
                class="form-control"
                id="inputAdress"
                name="address"
                placeholder={currentStudent.address}
                value={formFields.address}
                onChange={handleInput}
              />
            </div>
            <div class="form-group col-md-6">
              <label for="inputGrade">Ano do aluno na escola</label>
              <input
                type="grade"
                class="form-control"
                id="inputGrade"
                name="grade"
                placeholder={currentStudent.grade}
                value={formFields.grade}
                onChange={handleInput}
              />
            </div>
          </div>
          <VolunteerCard />
          <div className="formRow">
            <button
              type="submit"
              class="btn btn-primary col-md-6"
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
