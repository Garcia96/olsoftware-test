import React, { useState } from "react";
import { ProjectFormComponent } from "../../components/projectForm/ProjectFormComponent";
import { Alert } from "react-bootstrap";
import "./ProjectsPage.css";

const EditProjectPage = () => {
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
      <div className="projects-container container">
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
        <h3>Editar Proyecto</h3>
        <ProjectFormComponent
          submitEvent={(data) => onSubmitProjectForm(data)}
        />
      </div>
    </section>
  );
};

export default EditProjectPage;
