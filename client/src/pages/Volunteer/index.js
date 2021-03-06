import { useState } from "react";
import { VolunteerContainer } from "./styles";
import axios from "axios";


export default function Volunteer() {
  const initialValues = {
    name: "",
    email: "",
    age: "",
    cpf: "",
    educationalLevel: "",
    address: "",
    phone: "",
  };

  const [formFields, setFormFields] = useState({ initialValues });

  const handleSubmit = (event) => {
    event.preventDefault();

    if (Object.values(formFields).some((field) => field.length === 0)) {
      alert("Preencha todos campos");
      return;
    }

    axios
      .post("http://localhost:9000/api/candidate", formFields)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.response.data);
      });

    setFormFields(() => ({ ...initialValues }));
  };

  const handleInput = (event) => {
    event.preventDefault();
    setFormFields(() => ({
      ...formFields,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <VolunteerContainer>
      <h4>Seja um voluntário!</h4>
      <form className="volunteerForm">
        <div className="formRow">
          <div class="form-group">
            <label for="inputName">Nome</label>
            <input
              type="name"
              class="form-control"
              id="inputName"
              name="name"
              placeholder="Nome"
              value={formFields.name}
              onChange={handleInput}
            />
          </div>
          <div class="form-group ">
            <label for="inputEmail">Email</label>
            <input
              type="email"
              class="form-control"
              id="inputEmail"
              name="email"
              value={formFields.email}
              placeholder="Email"
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
              placeholder="Idade"
              value={formFields.age}
              onChange={handleInput}
            />
          </div>
          <div class="form-group  ">
            <label for="inputCPF">CPF</label>
            <input
              type="cpf"
              class="form-control"
              id="inputCPF"
              name="cpf"
              placeholder="CPF"
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
              value={formFields.educationalLevel}
              placeholder="Escolaridade"
              onChange={handleInput}
            />
          </div>
          <div class="form-group ">
            <label for="inputAddress">Endereço</label>
            <input
              type="address"
              class="form-control"
              id="inputAdress"
              name="address"
              placeholder="Endereço"
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
              placeholder="Telefone"
              value={formFields.phone}
              onChange={handleInput}
            />
          </div>
          <button
            type="submit"
            class="btn btn-primary "
            style={{ width: "42%" }}
            onClick={handleSubmit}
          >
            Enviar
          </button>
        </div>
      </form>
    </VolunteerContainer>
  );
}
