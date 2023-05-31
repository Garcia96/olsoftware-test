import React from "react";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import "./CustomTableComponent.css";

const CustomTableComponent = (props) => {
  const labels = Object.keys(props.data[0]);
  const navigate = useNavigate();

  const handleEdit = (row) => {
    navigate(`${row.id}`);
  };

  const handleDelete = (row) => {
    props.deleteEvent(row);
  };

  return (
    <Card>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Table responsive className="custom-table">
          <thead>
            <tr>
              {labels.map((label, index) => (
                <th key={index}>{label}</th>
              ))}
              <th key="acciones">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {props.data.map((row, index) => (
              <tr key={index}>
                {labels.map((label, i) => {
                  if (
                    label === "developers" ||
                    label === "list" ||
                    label === "frontendTecnology" ||
                    label === "databases"
                  ) {
                    const dArray = row[label].split("|");
                    return (
                      <td key={i} className="item-listviewed">
                        {dArray.map((item, j) => {
                          return (
                            <p key={j} className="mb-0">
                              {item}
                            </p>
                          );
                        })}
                      </td>
                    );
                  }
                  if (typeof row[label] === "boolean") {
                    return <td key={i}>{String(row[label])}</td>;
                  }
                  return <td key={i}>{row[label]}</td>;
                })}
                <td key={index}>
                  <Button
                    type="button"
                    variant="outline-primary"
                    className="ml-2"
                    onClick={() => handleEdit(row)}
                  >
                    <AiOutlineEdit />
                  </Button>
                  <Button
                    type="button"
                    variant="outline-danger"
                    className="ml-2"
                    onClick={() => handleDelete(row)}
                  >
                    <AiOutlineDelete />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};

export { CustomTableComponent };
