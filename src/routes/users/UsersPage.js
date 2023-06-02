import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { CustomTableComponent } from "../../components/table/CustomTableComponent";
import * as UserService from "../../services/users";
import { ModalComponent } from "../../components/modal/ModalComponent";
import { useAppContext } from "../../services/provider";
import "./UsersPage.css";

function UsersPage() {
  const [usersData, setUsersData] = useState(null);
  const [deleteId, setDeleteId] = useState("");
  const navigate = useNavigate();
  const { user, dispatch } = useAppContext();

  useEffect(() => {
    fetch();
  }, []);

  const fetch = async () => {
    const response = await UserService.getUsers();
    if (response) {
      setUsersData(response);
    }
  };

  const handleOnClick = (event) => {
    event.preventDefault();
    navigate("new");
  };

  const handleEvent = (row) => {
    setDeleteId(row.id);
  };

  const handleDelete = (data) => {
    if (data) {
      if (user.rol === 1) {
        deleteUser();
      } else {
        dispatch({
          type: "ALERT",
          value: {
            error: true,
            message: "No tiene permiso para realizar esta operación",
          },
        });
      }
    }
    setDeleteId(null);
  };

  const deleteUser = async () => {
    await UserService.deleteUser(deleteId);
    setDeleteId(null);
    fetch();
    dispatch({
      type: "ALERT",
      value: {
        error: false,
        message: "Usuario eliminado correctamente",
      },
    });
  };

  return (
    <>
      <section>
        <Button className="new-button" onClick={handleOnClick}>
          Registrar Usuario
        </Button>
        <div className="user-container container">
          {usersData && (
            <CustomTableComponent
              data={usersData}
              title="Usuarios"
              deleteEvent={(row) => handleEvent(row)}
            />
          )}
        </div>
      </section>

      {deleteId && (
        <ModalComponent
          title="usuario"
          id={deleteId}
          deleteEvent={(data) => handleDelete(data)}
        />
      )}
    </>
  );
}

export default UsersPage;
