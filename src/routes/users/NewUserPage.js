import React from "react";
import { UserFormComponent } from "../../components/userForm/UserFormComponent";
import "./UsersPage.css";

const NewUserPage = () => {
  return (
    <section>
      <div className="user-container container">
        <h3>Nuevo Usuario</h3>
        <UserFormComponent />
      </div>
    </section>
  );
};

export default NewUserPage;
