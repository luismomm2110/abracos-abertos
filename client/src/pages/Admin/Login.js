import { useState } from "react";
import { useNavigate } from "react-router";

export default function Login() {
  const initialValues = {
    login: "",
    password: "",
  };

  const [admState, setAdmState] = useState(initialValues);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(admState.login);
    if (Object.values(admState).some((field) => field !== "admin")) {
      alert("Credenciais erradas");
      return;
    }

    return navigate("/control");
  };

  const handleInput = (event) => {
    event.preventDefault();
    setAdmState(() => ({
      ...admState,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <div className="App">
      <h4>Página do Administrador</h4>
      <form className="volunteerForm">
        <div className="formRow">
          <div class="form-group">
            <label for="inputLogin">Login</label>
            <input
              type="login"
              class="form-control"
              id="inputName"
              name="login"
              value={admState.login}
              placeholder="login"
              onChange={handleInput}
            />
          </div>
          <div class="form-group ">
            <label for="inputPassword">Senha</label>
            <input
              type="password"
              class="form-control"
              id="inputPassword"
              name="password"
              value={admState.password}
              placeholder="Password"
              onChange={handleInput}
            />
          </div>
        </div>
        <button
          type="submit"
          class="btn btn-primary "
          style={{ width: "45%" }}
          onClick={handleSubmit}
        >
          Enviar
        </button>
      </form>
    </div>
  );
}
