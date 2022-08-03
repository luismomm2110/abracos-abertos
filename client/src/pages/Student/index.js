import { StudentContainer, Input, Button } from "./styles";
import { useForm } from "../../hooks/hooks";

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

  const [formFields, handleInput, handleSubmit] = useForm(
    initialValues,
    "students"
  );

  return (
    <div>
      <h1>Precisa de acompanhamento?</h1>
      <h2>Insira os dados do aluno aqui!</h2>
      <StudentContainer>
        <form>
          <div>
            <div>
              <label for="InputName">Nome</label>
              <Input
                type="name"
                class="form-control"
                id="InputName"
                name="name"
                placeholder="Nome"
                value={formFields.name}
                onChange={handleInput}
              />
            </div>
            <div>
              <label for="InputParentName">Nome do Responsável</label>
              <Input
                type="parentName"
                class="form-control"
                id="InputParentName"
                name="parentName"
                placeholder="Nome do Responsável"
                value={formFields.parentName}
                onChange={handleInput}
              />
            </div>
          </div>
          <div>
            <div>
              <label for="InputAge">Idade</label>
              <Input
                type="age"
                class="form-control"
                id="InputAge"
                name="age"
                placeholder="Idade"
                value={formFields.age}
                onChange={handleInput}
              />
            </div>
            <div>
              <label for="InputNationality">País de Origem</label>
              <Input
                type="nationality"
                class="form-control"
                id="InputNationality"
                name="nationality"
                placeholder="País de Origem"
                value={formFields.nationality}
                onChange={handleInput}
              />
            </div>
          </div>
          <div>
            <div>
              <label for="InputAddress">Endereço</label>
              <Input
                type="address"
                class="form-control"
                id="InputAdress"
                name="address"
                placeholder="Endereço"
                value={formFields.address}
                onChange={handleInput}
              />
            </div>
            <div>
              <label for="InputGrade">Ano do aluno na escola</label>
              <Input
                type="grade"
                class="form-control"
                id="InputGrade"
                name="grade"
                placeholder="Ano Escolar"
                value={formFields.grade}
                onChange={handleInput}
              />
            </div>
          </div>
          <div>
            <div>
              <label for="InputPhone">Telefone dos Resposáveis</label>
              <Input
                type="phone"
                class="form-control"
                id="InputAdress"
                name="parentTelephone"
                placeholder="Telefone dos Responsáveis"
                value={formFields.parentTelephone}
                onChange={handleInput}
              />
            </div>
            <Button type="submit" onClick={handleSubmit}>
              Enviar
            </Button>
          </div>
        </form>
      </StudentContainer>
    </div>
  );
}
