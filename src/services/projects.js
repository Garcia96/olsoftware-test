import axios from "axios";
import { snakeToCamelMiddleware } from "./snakeToCamelMiddleware";

const baseUrl = "http://localhost:3004/projects";

const getProjects = async () => {
  const data = await axios.get(baseUrl);
  return snakeToCamelMiddleware(data);
};

export { getProjects };
