import { useState } from "react";
import { useNavigate } from "react-router";
import { signin } from "../../auth/api-auth.js";
import auth from "../../auth/api-helper.js";
import { LoginContainer } from "./styles";

export default function Login() {
  const initialValues = {
    login: "",
    password: "",
  };

  const [admState, setAdmState] = useState(initialValues);
  const [loginStatus, setLoginStatus] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const admin = {
      email: admState.login || undefined,
      password: admState.password || undefined,
    };

    signin(admin).then((data) => {
      if (data.error) {
        setLoginStatus("Usuário e/ou senha inválida");
        setAdmState({ ...initialValues, error: data.error });
      } else {
        auth.authenticate(data, () => {
          setAdmState({ ...admState, error: "", redirectToReferrer: true });
          return navigate("/control");
        });
      }
    });
  };

  const handleInput = (event) => {
    event.preventDefault();
    setAdmState(() => ({
      ...admState,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <LoginContainer>
      <h4>Página do Administrador</h4>
      <form className="volunteerForm">
        <div className="formRow">
          <div className="form-group">
            <label htmlFor="inputLogin">Login</label>
            <input
              type="login"
              className="form-control"
              id="inputName"
              name="login"
              value={admState.login}
              placeholder="login"
              onChange={handleInput}
            />
          </div>
          <div className="form-group ">
            <label htmlFor="inputPassword">Senha</label>
            <input
              type="password"
              className="form-control"
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
          className="btn btn-primary "
          style={{ width: "45%" }}
          onClick={handleSubmit}
        >
          Enviar
        </button>
        <p>{loginStatus} </p>
      </form>
    </LoginContainer>
  );
}
