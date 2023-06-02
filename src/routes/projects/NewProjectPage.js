import React from "react";
import { ProjectFormComponent } from "../../components/projectForm/ProjectFormComponent";
import "./ProjectsPage.css";

const NewProjectPage = () => {
  return (
    <section>
      <div className="projects-container container">
        <h3>Nuevo Projecto</h3>
        <ProjectFormComponent />
      </div>
    </section>
  );
};

export default NewProjectPage;
