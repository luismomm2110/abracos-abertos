import { useState } from "react";
import axios from "axios";
import { VolunteerContainer, Input, Button } from "./styles";

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
            <label for="InputName">Nome</label>
            <Input
              type="name"
              id="InputName"
              name="name"
              placeholder="Nome"
              value={formFields.name}
              onChange={handleInput}
            />
          </div>
          <div>
            <label for="InputEmail">Email</label>
            <Input
              type="email"
              id="InputEmail"
              name="email"
              value={formFields.email}
              placeholder="Email"
              onChange={handleInput}
            />
          </div>
        </div>
        <div >
          <div >
            <label for="InputAge">Idade</label>
            <Input
              type="age"
              id="InputAge"
              name="age"
              placeholder="Idade"
              value={formFields.age}
              onChange={handleInput}
            />
          </div>
          <div >
            <label for="InputCPF">CPF</label>
            <Input
              type="cpf"
              id="InputCPF"
              name="cpf"
              placeholder="CPF"
              value={formFields.cpf}
              onChange={handleInput}
            />
          </div>
        </div>
        <div >
          <div >
            <label for="InputEducationalLevel">Escolaridade</label>
            <Input
              type="educationalLevel"
              id="InputEducationalLevel"
              name="educationalLevel"
              value={formFields.educationalLevel}
              placeholder="Escolaridade"
              onChange={handleInput}
            />
          </div>
          <div >
            <label for="InputAddress">Endereço</label>
            <Input
              type="address"
              id="InputAdress"
              name="address"
              placeholder="Endereço"
              value={formFields.address}
              onChange={handleInput}
            />
          </div>
        </div>
        <div >
          <div >
            <label for="InputPhone">Telefone</label>
            <Input
              type="phone"
              class="form-control"
              id="InputAdress"
              name="phone"
              placeholder="Telefone"
              value={formFields.phone}
              onChange={handleInput}
            />
          </div>
          <Button onClick={handleSubmit}> 
            Enviar
          </Button>
        </div>
      </form>
      </VolunteerContainer>
  );
}
