import axios from "axios";
import { snakeToCamelMiddleware } from "./snakeToCamelMiddleware";

const baseUrl = process.env.REACT_APP_BASE_URL + "/login";

const login = async (username, pass) => {
  const data = await axios.get(`${baseUrl}?user=${username}&password=${pass}`);
  return snakeToCamelMiddleware(data);
};

export { login };
