import axios from "axios";
import { snakeToCamelMiddleware } from "./snakeToCamelMiddleware";
const baseUrl = "http://localhost:3004/notification";

const getNotifications = async () => {
  const data = await axios.get(`${baseUrl}`);
  return snakeToCamelMiddleware(data);
};

export { getNotifications };
