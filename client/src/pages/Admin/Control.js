import { Link, useNavigate } from "react-router-dom";
import auth from "../../auth/api-helper";

export default function AdmControl() {
  const navigate = useNavigate();
  /* APENAS PARA TESTE
  if (!auth.isAuthenticated()) {
    return navigate("/admin");
  }
  */

  return (
    <div style={{background: "red"}}>
      <h2> Página do Administrador </h2>
      <div>
        <Link to="listaestudantes">Lista de Estudantes</Link>
      </div>
      <div>
        <Link to="listavoluntarios">Lista Voluntários</Link>
      </div>
      <div>
        <Link to="candidatos">Candidatos</Link>
      </div>
    </div>
  );
}
