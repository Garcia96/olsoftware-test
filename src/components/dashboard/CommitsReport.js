import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { Chart as ChartJS } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import * as DashboardService from "../../services/dashboard";

import "./CommitsReport.css";

ChartJS.register();

const CommitsReport = () => {
  const [commitsData, setCommitsData] = useState(null);
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    const fetch = async () => {
      const response = await DashboardService.getCommitsReportData();
      if (response) {
        setCommitsData(response.data);
        setChartData(dataChart(response.data));
      }
    };
    fetch();
  }, []);

  const dataChart = (data) => {
    return {
      labels: data?.map((m) => m.month),

      datasets: [
        {
          label: "Features",
          fill: false,
          data: data?.map((m) => m.feat),
          tension: 0.5,
        },
        {
          label: "Fixes",
          fill: false,
          data: data?.map((m) => m.fix),
          tension: 0.5,
        },
      ],
    };
  };

  return (
    <section className="report-container">
      <Card bg="primary" text="white" className="commits-card">
        <Card.Body>
          <Card.Title className="mb-4">Reporte de commits por mes</Card.Title>
          <p className="resume">Total commits últimos 12 meses</p>
          <p className="commit-count">
            {commitsData &&
              commitsData
                .map((m) => m.feat + m.fix)
                .reduce((acc, val) => acc + val, 0)}
          </p>
          {commitsData && <Line data={chartData} />}
        </Card.Body>
      </Card>
    </section>
  );
};

export { CommitsReport };
