import axios from "axios";
import { snakeToCamelMiddleware } from "./snakeToCamelMiddleware";

const baseUrl = process.env.REACT_APP_BASE_URL + "/users";

const getUsers = async () => {
  const data = await axios.get(baseUrl);
  return snakeToCamelMiddleware(data);
};

const getUser = async (id) => {
  const data = await axios.get(`${baseUrl}/${id}`);
  return data;
};

const newUser = async (request_body) => {
  const data = await axios.post(baseUrl, request_body);
  return snakeToCamelMiddleware(data);
};

const editUser = async (request_body, id) => {
  const data = await axios.put(`${baseUrl}/${id}`, request_body);
  return snakeToCamelMiddleware(data);
};

const deleteUser = async (id) => {
  const data = await axios.delete(`${baseUrl}/${id}`);
  return data;
};

export { getUsers, getUser, editUser, newUser, deleteUser };
