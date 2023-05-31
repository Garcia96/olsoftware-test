import React, { useState } from "react";
import { UserFormComponent } from "../../components/userForm/UserFormComponent";
import { Alert } from "react-bootstrap";
import "./UsersPage.css";

const EditUserPage = () => {
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
        <h3>Editar Usuario</h3>
        <UserFormComponent submitEvent={(data) => onSubmitProjectForm(data)} />
      </div>
    </section>
  );
};

export default EditUserPage;
