/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useAppContext } from "../../services/provider";
import * as UserService from "../../services/users";
import * as ProjectService from "../../services/projects";

const ProjectFormComponent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [users, setUsers] = useState();
  const navigate = useNavigate();
  const params = useParams();
  const { user, dispatch } = useAppContext();

  useEffect(() => {
    fetchUsuarios();
    if (params.id) {
      fetchProject();
    }
  }, []);

  const fetchProject = async () => {
    const response = await ProjectService.getProject(params.id);
    if (response.data) {
      reset({
        ...response.data,
        backend_tecnology: response.data.backend_tecnology.split(","),
        frontend_tecnology: response.data.frontend_tecnology.split("|"),
        databases: response.data.databases.split("|"),
        developers: response.data.developers.split("|"),
      });
    }
  };

  const fetchUsuarios = async () => {
    const response = await UserService.getUsers();
    if (response) {
      setUsers(response.filter((user) => user.rol === 2));
    }
  };

  const onSubmit = (data) => {
    const formData = {
      ...data,
      backend_tecnology: data.backend_tecnology.join(","),
      frontend_tecnology: data.frontend_tecnology.join("|"),
      databases: data.databases.join("|"),
      developers: data.developers.join("|"),
      errors_count: 0,
      warning_count: 0,
      deploy_count: 0,
      percentage_completion: 0,
      report_nc: 0,
      status: "En Desarrollo",
    };
    if (params.id) {
      editProject(formData);
    } else {
      newProject(formData);
    }
  };

  const newProject = async (data) => {
    const response = await ProjectService.newProject(data);
    if (response && response.id) {
      reset();
      dispatchProject("Proyecto creado correctamente", false);
    }
  };

  const editProject = async (data) => {
    if (user.rol === 1) {
      const response = await ProjectService.editProject(data, params.id);
      if (response && response.id) {
        dispatchProject("Proyecto editado correctamente", false);
      }
    } else {
      dispatchProject("No tiene permiso para realizar esta operación", true);
    }
  };

  const dispatchProject = (message, error) => {
    dispatch({
      type: "ALERT",
      value: {
        error,
        message,
      },
    });
  };

  const handleCancel = (event) => {
    event.preventDefault();
    navigate("/projects");
  };

  return (
    <Card>
      <Card.Body>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="project_name">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nombre del proyecto"
                {...register("project_name", { required: true })}
              />
              {errors.project_name && (
                <span style={{ color: "red" }}>Este campo es requerido</span>
              )}
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="repo_url">
              <Form.Label>Url del repositorio</Form.Label>
              <Form.Control
                type="url"
                placeholder="Repo url"
                {...register("repo_url", { required: true })}
              />
              {errors.repo_url && (
                <span style={{ color: "red" }}>Este campo es requerido</span>
              )}
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="client">
              <Form.Label>Cliente</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nombre del cliente"
                {...register("client", { required: true })}
              />
              {errors.client && (
                <span style={{ color: "red" }}>Este campo es requerido</span>
              )}
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="developers">
              <Form.Label>Desarrolladores</Form.Label>
              <Form.Select multiple {...register("developers")}>
                {users &&
                  users.map((user, index) => (
                    <option key={index} value={user.name + " " + user.lastName}>
                      {user.name + " " + user.lastName}
                    </option>
                  ))}
              </Form.Select>
            </Form.Group>

            <Form.Group className="my-3" as={Col} md="3" controlId="ci">
              <Form.Check type="switch" label="CI" {...register("ci")} />
            </Form.Group>
            <Form.Group className="mb-3" as={Col} md="3" controlId="cd">
              <Form.Check type="switch" label="CD" {...register("cd")} />
            </Form.Group>
          </Row>

          <Row>
            <Form.Group as={Col} md="4" controlId="frontend_tecnology">
              <Form.Label>Tecnologías Frontend</Form.Label>
              <Form.Select multiple {...register("frontend_tecnology")}>
                <option value="Angular">Angular</option>
                <option value="React">React</option>
                <option value="Vue">Vue</option>
              </Form.Select>
            </Form.Group>

            <Form.Group as={Col} md="4" controlId="backend_tecnology">
              <Form.Label>Tecnologías Backend</Form.Label>
              <Form.Select multiple {...register("backend_tecnology")}>
                <option value="NodeJS">NodeJS</option>
                <option value="Java">Java</option>
                <option value="Php">Php</option>
                <option value=".Net">.Net</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" as={Col} md="4" controlId="databases">
              <Form.Label>Bases de datos</Form.Label>
              <Form.Select multiple {...register("databases")}>
                <option value="SQLServer">SQLServer</option>
                <option value="Mysql">Mysql</option>
                <option value="PosgresSQL">PosgresSQL</option>
                <option value="MongoDB">MongoDB</option>
              </Form.Select>
            </Form.Group>
          </Row>
          <div className="d-flex justify-content-end">
            <Button type="submit" className="mx-2">
              Enviar
            </Button>
            <Button type="button" variant="secondary" onClick={handleCancel}>
              Cancelar
            </Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
};

export { ProjectFormComponent };
