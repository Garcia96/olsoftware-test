import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { CustomTableComponent } from "../../components/table/CustomTableComponent";
import * as UserService from "../../services/users";
import { ModalComponent } from "../../components/modal/ModalComponent";
import "./UsersPage.css";

function UsersPage() {
  const [usersData, setUsersData] = useState(null);
  const [deleteId, setDeleteId] = useState("");
  const navigate = useNavigate();

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
      deleteUser();
    }
    setDeleteId(null);
  };

  const deleteUser = async () => {
    await UserService.deleteUser(deleteId);
    setDeleteId(null);
    fetch();
  };

  return (
    <>
      <section>
        <Button className="new-button" onClick={handleOnClick}>
          Registrar Usuario
        </Button>
        <div className="user-container">
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
