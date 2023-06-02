import React from "react";
import { UserFormComponent } from "../../components/userForm/UserFormComponent";
import "./UsersPage.css";

const EditUserPage = () => {
  return (
    <section>
      <div className="user-container container">
        <h3>Editar Usuario</h3>
        <UserFormComponent />
      </div>
    </section>
  );
};

export default EditUserPage;
