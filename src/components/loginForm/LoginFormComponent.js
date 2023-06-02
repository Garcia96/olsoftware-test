import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../services/provider";
import * as loginService from "../../services/login";
import * as userService from "../../services/users";

const LoginForm = () => {
  const navigate = useNavigate();
  const [username, setUsername] = React.useState("");
  const [pass, setPass] = React.useState("");
  const { dispatch } = useAppContext();

  const handleLogin = async (event) => {
    event.preventDefault();
    const response = await loginService.login(username, pass);
    if (response.length) {
      dispatchUserLogin(response[0]);
      setUsername("");
      setPass("");
    } else {
      dispatch({
        type: "ALERT",
        value: {
          error: true,
          message: "Usuario o contraseña incorrectos",
        },
      });
    }
  };

  const dispatchUserLogin = async (user) => {
    const response = await userService.getUser(user.userId);
    if (response.data) {
      localStorage.setItem(
        "OLSOFTWARELOGIN",
        btoa(JSON.stringify(response.data))
      );
      dispatch({
        type: "LOGIN",
        value: response.data,
      });
      navigate("/");
    }
  };

  return (
    <React.Fragment>
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-4" controlId="username">
          <Form.Control
            type="text"
            value={username}
            placeholder="Usuario"
            onChange={({ target }) => setUsername(target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-4" controlId="password">
          <Form.Control
            type="password"
            value={pass}
            placeholder="Contraseña"
            onChange={({ target }) => setPass(target.value)}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Ingresar
        </Button>
      </Form>
    </React.Fragment>
  );
};

export { LoginForm };
