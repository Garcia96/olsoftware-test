import React from "react";
import { LoginForm } from "../../components/loginForm/LoginFormComponent";
import "./LoginPage.css";
import { Card } from "react-bootstrap";

function LoginPage() {
  return (
    <React.Fragment>
      <section className="login-container">
        <Card>
          <Card.Body>
            <h4 className="mb-4">Hola! Bienvenido a OL Software</h4>
            <LoginForm />
            <div className="extras">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault">
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
