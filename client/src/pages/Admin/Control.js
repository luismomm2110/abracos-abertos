import { Link, useNavigate } from "react-router-dom";
import auth from "../../auth/api-helper";

export default function AdmControl() {
  const navigate = useNavigate();
  if (!auth.isAuthenticated()) {
    return navigate("/admin");
  }

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        position: "center",
        flexDirection: "column",
      }}
    >
      <h2> Página do Administrador </h2>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          position: "center",
          marginTop: "100px",
        }}
      >
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
