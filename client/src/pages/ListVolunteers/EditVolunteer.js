import { useParams } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";
import "./styles.css";

export default function EditVolunteer() {
  let { id } = useParams();
  const url = `http://localhost:9000/api/volunteers/${id}`;
  const [currentVolunteer, setVolunteer] = useState("");

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setVolunteer(data))
      .catch(console.error);
  }, [url]);

  const [formFields, setFormFields] = useState(currentVolunteer);

  if (currentVolunteer.length !== 0) {
    const handleSubmit = (event) => {
      event.preventDefault();

      if (Object.values(formFields).some((field) => field.length === 0)) {
        alert("Preencha todos campos");
        return;
      }

      axios
        .put(`http://localhost:9000/api/volunteers/${id}`, formFields)
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error.response.data);
        });

      setFormFields(() => ({ ...currentVolunteer }));
    };

    const handleInput = (event) => {
      event.preventDefault();
      setFormFields(() => ({
        ...formFields,
        [event.target.name]: event.target.value,
      }));
    };

    return (
      <div className="App">
        <form className="volunteerForm">
          <div className="formRow">
            <div className="form-group">
              <label htmlFor="inputName">Nome</label>
              <input
                type="name"
                className="form-control"
                id="inputName"
                name="name"
                placeholder={currentVolunteer.name}
                value={formFields.name}
                onChange={handleInput}
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="inputEmail">Email</label>
              <input
                type="email"
                className="form-control"
                id="inputEmail"
                name="email"
                placeholder={currentVolunteer.email}
                value={formFields.email}
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
                placeholder={currentVolunteer.age}
                value={formFields.age}
                onChange={handleInput}
              />
            </div>
            <div class="form-group col-md-6 ">
              <label for="inputCPF">CPF</label>
              <input
                type="cpf"
                class="form-control"
                id="inputCPF"
                name="cpf"
                placeholder={currentVolunteer.cpf}
                value={formFields.cpf}
                onChange={handleInput}
              />
            </div>
          </div>
          <div className="formRow">
            <div class="form-group">
              <label for="inputEducationalLevel">Escolaridade</label>
              <input
                type="educationalLevel"
                class="form-control"
                id="inputEducationalLevel"
                name="educationalLevel"
                placeholder={currentVolunteer.educationalLevel}
                value={formFields.educationalLevel}
                onChange={handleInput}
              />
            </div>
            <div class="form-group col-md-6">
              <label for="inputAddress">Endereço</label>
              <input
                type="address"
                class="form-control"
                id="inputAdress"
                name="address"
                placeholder={currentVolunteer.address}
                value={formFields.address}
                onChange={handleInput}
              />
            </div>
          </div>
          <div className="formRow">
            <div class="form-group">
              <label for="inputPhone">Telefone</label>
              <input
                type="phone"
                class="form-control"
                id="inputAdress"
                name="phone"
                placeholder={currentVolunteer.phone}
                value={formFields.phone}
                onChange={handleInput}
              />
            </div>
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
