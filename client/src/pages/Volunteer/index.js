import { useState } from "react";
import axios from "axios";
import { VolunteerContainer } from "./styles";

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
      <form >
        <div>
          <div>
            <label for="inputName">Nome</label>
            <input
              type="name"
              id="inputName"
              name="name"
              placeholder="Nome"
              value={formFields.name}
              onChange={handleInput}
            />
          </div>
          <div>
            <label for="inputEmail">Email</label>
            <input
              type="email"
              id="inputEmail"
              name="email"
              value={formFields.email}
              placeholder="Email"
              onChange={handleInput}
            />
          </div>
        </div>
        <div >
          <div >
            <label for="inputAge">Idade</label>
            <input
              type="age"
              id="inputAge"
              name="age"
              placeholder="Idade"
              value={formFields.age}
              onChange={handleInput}
            />
          </div>
          <div >
            <label for="inputCPF">CPF</label>
            <input
              type="cpf"
              id="inputCPF"
              name="cpf"
              placeholder="CPF"
              value={formFields.cpf}
              onChange={handleInput}
            />
          </div>
        </div>
        <div >
          <div >
            <label for="inputEducationalLevel">Escolaridade</label>
            <input
              type="educationalLevel"
              id="inputEducationalLevel"
              name="educationalLevel"
              value={formFields.educationalLevel}
              placeholder="Escolaridade"
              onChange={handleInput}
            />
          </div>
          <div >
            <label for="inputAddress">Endereço</label>
            <input
              type="address"
              id="inputAdress"
              name="address"
              placeholder="Endereço"
              value={formFields.address}
              onChange={handleInput}
            />
          </div>
        </div>
        <div >
          <div >
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
            onClick={handleSubmit}
          >
            Enviar
          </button>
        </div>
      </form>
      </VolunteerContainer>
  );
}
