import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { CustomTableComponent } from "../../components/table/CustomTableComponent";
import { ModalComponent } from "../../components/modal/ModalComponent";
import { useAppContext } from "../../services/provider";
import * as ProjectService from "../../services/projects";
import "./ProjectsPage.css";

function ProjectsPage() {
  const [projectsData, setProjectsData] = useState(null);
  const [deleteId, setDeleteId] = useState("");
  const navigate = useNavigate();
  const { user, dispatch } = useAppContext();

  useEffect(() => {
    fetch();
  }, []);

  const fetch = async () => {
    const response = await ProjectService.getProjects();
    if (response) {
      setProjectsData(response);
    }
  };

  const handleOnClick = (event) => {
    event.preventDefault();
    navigate("/projects/new");
  };

  const handleEvent = (row) => {
    setDeleteId(row.id);
  };

  const handleDelete = (data) => {
    if (data) {
      if (user.rol === 1) {
        deleteProject();
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

  const deleteProject = async () => {
    await ProjectService.deleteProject(deleteId);
    setDeleteId(null);
    fetch();
    dispatch({
      type: "ALERT",
      value: {
        error: false,
        message: "Proyecto eliminado correctamente",
      },
    });
  };

  return (
    <>
      <section>
        <Button className="new-button" onClick={handleOnClick}>
          Registrar Proyecto
        </Button>
        <div className="projects-container container">
          {projectsData && (
            <CustomTableComponent
              data={projectsData}
              title="Proyectos"
              deleteEvent={(row) => handleEvent(row)}
            />
          )}
        </div>
      </section>

      {deleteId && (
        <ModalComponent
          title="proyecto"
          id={deleteId}
          deleteEvent={(data) => handleDelete(data)}
        />
      )}
    </>
  );
}

export default ProjectsPage;
