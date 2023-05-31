import React from "react";
import Button from "react-bootstrap/Button";
import "./ProjectsPage.css";
import { CustomTableComponent } from "../../components/table/CustomTableComponent";

function ProjectsPage() {
  return (
    <section className="projects-container">
      <Button>Registrar Proyecto</Button>
      <CustomTableComponent />
    </section>
  );
}

export default ProjectsPage;
