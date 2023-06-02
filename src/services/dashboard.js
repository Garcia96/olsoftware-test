import axios from "axios";
import { snakeToCamelMiddleware } from "./snakeToCamelMiddleware";

const baseUrl = process.env.REACT_APP_BASE_URL;

const getDashboardCards = async () => {
  const data = await axios.get(`${baseUrl}/dashboard_cards`);
  return snakeToCamelMiddleware(data);
};

const getCpuReportData = async () => {
  const data = await axios.get(`${baseUrl}/cpu_report`);
  return snakeToCamelMiddleware(data);
};

const getCommitsReportData = async () => {
  const data = await axios.get(`${baseUrl}/report_commits`);
  return snakeToCamelMiddleware(data);
};

const getReleaseResumeData = async () => {
  const data = await axios.get(`${baseUrl}/release_resume`);
  return snakeToCamelMiddleware(data);
};

export {
  getDashboardCards,
  getCpuReportData,
  getCommitsReportData,
  getReleaseResumeData,
};
