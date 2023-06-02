import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";

const ModalComponent = (props) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (props.id) {
      handleShow();
    }
  }, [props.id]);

  const handleClose = () => {
    setShow(false);
    props.deleteEvent(false);
  };
  const handleShow = () => setShow(true);
  const handleDelete = () => {
    setShow(false);
    props.deleteEvent(true);
  };

  return (
    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>Eliminar {props.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>¿Está seguro de eliminar este registro?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancelar
        </Button>
        <Button variant="primary" onClick={handleDelete}>
          Eliminar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export { ModalComponent };
