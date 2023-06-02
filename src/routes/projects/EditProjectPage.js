import React from "react";
import { ProjectFormComponent } from "../../components/projectForm/ProjectFormComponent";
import "./ProjectsPage.css";

const EditProjectPage = () => {
  return (
    <section>
      <div className="projects-container container">
        <h3>Editar Proyecto</h3>
        <ProjectFormComponent />
      </div>
    </section>
  );
};

export default EditProjectPage;
