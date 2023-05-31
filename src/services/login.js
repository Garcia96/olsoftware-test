import axios from "axios";
import { snakeToCamelMiddleware } from "./snakeToCamelMiddleware";

const baseUrl = "http://localhost:3004/login";

const login = async (username, pass) => {
  const data = await axios.get(`${baseUrl}?user=${username}&password=${pass}`);
  return snakeToCamelMiddleware(data);
};

export { login };
