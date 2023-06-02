import axios from "axios";
import { snakeToCamelMiddleware } from "./snakeToCamelMiddleware";
const baseUrl = process.env.REACT_APP_BASE_URL + "/notification";

const getNotifications = async () => {
  const data = await axios.get(`${baseUrl}`);
  return snakeToCamelMiddleware(data);
};

export { getNotifications };
