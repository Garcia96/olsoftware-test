import axios from "axios";

const baseUrl = "http://localhost:3004";

const getDashboardCards = async () => {
  const data = await axios.get(`${baseUrl}/dashboard_cards`);
  return data;
};

const getCpuReportData = async () => {
  const data = await axios.get(`${baseUrl}/cpu_report`);
  return data;
};

const getCommitsReportData = async () => {
  const data = await axios.get(`${baseUrl}/report_commits`);
  return data;
};

const getReleaseResumeData = async () => {
  const data = await axios.get(`${baseUrl}/release_resume`);
  return data;
};

export {
  getDashboardCards,
  getCpuReportData,
  getCommitsReportData,
  getReleaseResumeData,
};
