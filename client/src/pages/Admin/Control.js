import { Link } from "react-router-dom";

export default function AdmControl() {
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
