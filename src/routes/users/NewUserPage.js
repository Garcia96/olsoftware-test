import React, { useState } from "react";
import { UserFormComponent } from "../../components/userForm/UserFormComponent";
import "./UsersPage.css";
import { Alert } from "react-bootstrap";

const NewUserPage = () => {
  const [submitData, setSubmitData] = useState({
    show: false,
  });

  const onSubmitProjectForm = (data) => {
    setSubmitData({
      ...data,
      show: true,
    });
    setTimeout(() => {
      setSubmitData({
        show: false,
      });
    }, 3000);
  };

  return (
    <section>
      <div className="user-container">
        <Alert
          variant={submitData?.error ? "danger" : "success"}
          show={submitData?.show}
          onClose={() =>
            setSubmitData({
              show: false,
            })
          }
          dismissible
        >
          {submitData?.message}
        </Alert>
        <h3>Nuevo Usuario</h3>
        <UserFormComponent submitEvent={(data) => onSubmitProjectForm(data)} />
      </div>
    </section>
  );
};

export default NewUserPage;
