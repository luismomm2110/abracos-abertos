import "./styles.css";
import { useState } from "react";
import axios from "axios";

export default function Volunteer() {
  const [formFields, setFormFields] = useState({
    name: "",
    email: "",
    age: 18,
    cpf: "",
    educationalLevel: "",
    address: "",
    phone: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormFields({ ...formFields, [event.target.name]: event.target.value });

    axios
      .post("http://localhost:9000/api/volunteers", formFields)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  return (
    <div className="volunteerContainer">
      <h1>Voluntaria-se!</h1>
      <form className="volunteerForm">
        <div class="form-row">
          <div class="form-group col-md-3">
            <label for="inputName">Nome</label>
            <input
              type="name"
              class="form-control"
              id="inputName"
              name="name"
              placeholder="Nome"
              onChange={handleSubmit}
            />
          </div>
          <div class="form-group col-md-3">
            <label for="inputEmail">Email</label>
            <input
              type="email"
              class="form-control"
              id="inputEmail"
              name="email"
              placeholder="Email"
              onChange={handleSubmit}
            />
          </div>
          <div class="form-group col-md-3">
            <label for="inputAge">Idade</label>
            <input
              type="age"
              class="form-control"
              id="inputAge"
              name="age"
              placeholder="Idade"
              onChange={handleSubmit}
            />
          </div>
          <div class="form-group col-md-3">
            <label for="inputCPF">CPF</label>
            <input
              type="cpf"
              class="form-control"
              id="inputCPF"
              name="cpf"
              placeholder="CPF"
              onChange={handleSubmit}
            />
          </div>
          <div class="form-group col-md-3">
            <label for="inputEducationalLevel">Escolaridade</label>
            <input
              type="educationalLevel"
              class="form-control"
              id="inputEducationalLevel"
              name="educationalLevel"
              placeholder="Escolaridade"
              onChange={handleSubmit}
            />
          </div>
          <div class="form-group col-md-3">
            <label for="inputAddress">Endereço</label>
            <input
              type="address"
              class="form-control"
              id="inputAdress"
              name="address"
              placeholder="Endereço"
              onChange={handleSubmit}
            />
          </div>
          <div class="form-group col-md-3">
            <label for="inputPhone">Telefone</label>
            <input
              type="phone"
              class="form-control"
              id="inputAdress"
              name="phone"
              placeholder="Telefone"
              onChange={handleSubmit}
            />
          </div>
        </div>

        <button
          type="submit"
          class="btn btn-primary col-md-3"
          onClick={handleSubmit}
        >
          Enviar
        </button>
      </form>
    </div>
  );
}
