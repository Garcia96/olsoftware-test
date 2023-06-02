import axios from "axios";
import { snakeToCamelMiddleware } from "./snakeToCamelMiddleware";

const baseUrl = process.env.REACT_APP_BASE_URL + "/projects";

const getProjects = async () => {
  const data = await axios.get(baseUrl);
  return snakeToCamelMiddleware(data);
};

const getProject = async (id) => {
  const data = await axios.get(`${baseUrl}/${id}`);
  return data;
};

const newProject = async (request_body) => {
  const data = await axios.post(baseUrl, request_body);
  return snakeToCamelMiddleware(data);
};

const editProject = async (request_body, id) => {
  const data = await axios.put(`${baseUrl}/${id}`, request_body);
  return snakeToCamelMiddleware(data);
};

const deleteProject = async (id) => {
  const data = await axios.delete(`${baseUrl}/${id}`);
  return data;
};

export { getProjects, newProject, getProject, editProject, deleteProject };
