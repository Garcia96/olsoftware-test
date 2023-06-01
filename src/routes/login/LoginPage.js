import React from "react";
import { LoginForm } from "../../components/loginForm/LoginFormComponent";
import "./LoginPage.css";
import { Card } from "react-bootstrap";

function LoginPage() {
  return (
    <React.Fragment>
      <section className="login-container container">
        <Card>
          <Card.Body>
            <h4 className="mb-4">Hola! Bienvenido a OL Software</h4>
            <LoginForm />
            <div className="extras">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Recuerdame
                </label>
              </div>
              <a href="#recuperar">Recuperar contraseña?</a>
            </div>
          </Card.Body>
        </Card>
      </section>
    </React.Fragment>
  );
}

export { LoginPage };
