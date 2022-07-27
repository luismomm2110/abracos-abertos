import "./styles.css";
import { useState } from "react";
import axios from "axios";

export default function Student() {
  const initialValues = {
    name: "",
    parentName: "",
    parentTelephone: "",
    age: "",
    nationality: "",
    address: "",
    grade: "",
  };

  const [formFields, setFormFields] = useState(initialValues);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (Object.values(formFields).some((field) => field.length === 0)) {
      alert("Preencha todos campos");
      return;
    }

    axios
      .post("http://localhost:9000/api/students", formFields)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.response.data);
      });

    setFormFields({ ...initialValues });
  };

  const handleInput = (event) => {
    event.preventDefault();
    setFormFields({ ...formFields, [event.target.name]: event.target.value });
  };

  return (
    <div>
      <h1>Precisa de acompanhamento?</h1>
      <h2>Insira os dados do aluno aqui!</h2>
      <form>
        <div>
          <div >
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
          <div class="form-group col-md-6 col-xs-12">
            <label for="inputParentName">Nome do Responsável</label>
            <input
              type="parentName"
              class="form-control"
              id="inputParentName"
              name="parentName"
              placeholder="Nome do Responsável"
              value={formFields.parentName}
              onChange={handleInput}
            />
          </div>
        </div>
        <div>
          <div>
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
          <div>
            <label for="inputNationality">País de Origem</label>
            <input
              type="nationality"
              class="form-control"
              id="inputNationality"
              name="nationality"
              placeholder="País de Origem"
              value={formFields.nationality}
              onChange={handleInput}
            />
          </div>
        </div>
        <div >
          <div>
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
          <div>
            <label for="inputGrade">Ano do aluno na escola</label>
            <input
              type="grade"
              class="form-control"
              id="inputGrade"
              name="grade"
              placeholder="Ano Escolar"
              value={formFields.grade}
              onChange={handleInput}
            />
          </div>
        </div>
        <div >
          <div>
            <label for="inputPhone">Telefone dos Resposáveis</label>
            <input
              type="phone"
              class="form-control"
              id="inputAdress"
              name="parentTelephone"
              placeholder="Telefone dos Responsáveis"
              value={formFields.parentTelephone}
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
