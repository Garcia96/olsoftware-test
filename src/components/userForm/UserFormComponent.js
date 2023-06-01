/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import * as UserService from "../../services/users";

const UserFormComponent = (props) => {
  const navigate = useNavigate();
  const params = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  useEffect(() => {
    if (params.id) {
      fetchUser();
    }
  }, []);

  const fetchUser = async () => {
    const response = await UserService.getUser(params.id);
    if (response.data) {
      reset({
        ...response.data,
        list: response.data.list.split("|"),
      });
    }
  };

  const onSubmit = (data) => {
    const formData = {
      ...data,
      list: data.list.join("|"),
    };
    if (params.id) {
      editUser(formData);
    } else {
      newUser(formData);
    }
  };

  const newUser = async (data) => {
    const response = await UserService.newUser(data);
    if (response && response.id) {
      reset();
      props.submitEvent({
        error: false,
        message: "Usuario creado correctamente",
      });
    }
  };

  const editUser = async (data) => {
    const response = await UserService.editUser(data, params.id);
    if (response && response.id) {
      props.submitEvent({
        error: false,
        message: "Usuario editado correctamente",
      });
    }
  };

  const handleCancel = (event) => {
    event.preventDefault();
    navigate("/users");
  };

  return (
    <Card>
      <Card.Body>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="name">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nombre"
                {...register("name", { required: true })}
              />
              {errors.name && (
                <span style={{ color: "red" }}>Este campo es requerido</span>
              )}
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="last_name">
              <Form.Label>Apellido</Form.Label>
              <Form.Control
                type="text"
                placeholder="Apellido"
                {...register("last_name", { required: true })}
              />
              {errors.last_name && (
                <span style={{ color: "red" }}>Este campo es requerido</span>
              )}
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="url_photo">
              <Form.Label>Url Foto</Form.Label>
              <Form.Control
                type="text"
                placeholder="Url"
                {...register("url_photo")}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="list">
              <Form.Label>Lista de habilidades</Form.Label>
              <Form.Select multiple {...register("list")}>
                <option value="Angular">Angular</option>
                <option value="React">React</option>
                <option value="Vue">Vue</option>
                <option value="NodeJS">NodeJS</option>
                <option value="Java">Java</option>
                <option value="Php">Php</option>
                <option value=".Net">.Net</option>
                <option value="SQLServer">SQLServer</option>
                <option value="Mysql">Mysql</option>
                <option value="PosgresSQL">PosgresSQL</option>
                <option value="MongoDB">MongoDB</option>
              </Form.Select>
            </Form.Group>

            <Form.Group as={Col} md="3" controlId="rol">
              <Form.Label>Role</Form.Label>
              <Form.Select {...register("rol")}>
                <option value="1">Admin</option>
                <option value="2">Desarrollador</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" as={Col} md="3" controlId="area">
              <Form.Label>Área</Form.Label>
              <Form.Control
                type="text"
                placeholder="Área"
                {...register("area", { required: true })}
              />
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

export { UserFormComponent };
