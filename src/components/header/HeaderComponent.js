import React, { useRef, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { NavLink } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { BiUserCircle } from "react-icons/bi";
import { AiOutlineProject } from "react-icons/ai";
import { VscTypeHierarchySub } from "react-icons/vsc";
import { IoIosNotificationsOutline } from "react-icons/io";
import "./HeaderComponent.css";

function HeaderComponent() {
  const [isOpen, setIsOpen] = useState(false);
  const btnRef = useRef();

  const handleToggle = (event) => {
    setIsOpen(!isOpen);
  };

  const handleClick = () => {
    if (isOpen) {
      btnRef.current.click();
    }
  };

  return (
    <React.Fragment>
      {["lg"].map((expand) => (
        <Navbar
          key={expand}
          bg="light"
          expand={expand}
          className="mb-3"
          fixed="top"
          onToggle={handleToggle}
          collapseOnSelect={true}
        >
          <Container fluid>
            <Navbar.Brand href="#">Ol Software</Navbar.Brand>
            <div>
              <span className="notification">
                {" "}
                <IoIosNotificationsOutline />
              </span>
              <Navbar.Toggle
                ref={btnRef}
                aria-controls={`offcanvasNavbar-expand-${expand}`}
              />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    Ol Software
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <NavLink
                      onClick={handleClick}
                      to="/dashboard"
                      className="nav-link"
                    >
                      <RxDashboard /> Dashboard
                    </NavLink>
                    <NavLink
                      onClick={handleClick}
                      to="/projects"
                      className="nav-link"
                    >
                      <AiOutlineProject /> Lista de proyectos
                    </NavLink>
                    <NavLink
                      onClick={handleClick}
                      to="/users"
                      className="nav-link"
                    >
                      <BiUserCircle /> Lista de usuarios
                    </NavLink>
                    <NavLink onClick={handleClick} to="/" className="nav-link">
                      <VscTypeHierarchySub /> Administrar roles
                    </NavLink>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </div>
          </Container>
        </Navbar>
      ))}
    </React.Fragment>
  );
}

export { HeaderComponent };
