import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { Chart as ChartJS } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import * as DashboardService from "../../services/dashboard";
import "./CpuReport.css";

ChartJS.register();

const CpuReport = () => {
  const [cpuReportData, setCpuReportData] = useState(null);
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    const fetch = async () => {
      const response = await DashboardService.getCpuReportData();
      if (response) {
        setCpuReportData(response);
        setChartData(dataChart(response));
      }
    };
    fetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const dataChart = (data) => {
    return {
      labels: data?.time.map((m) => m.time),
      datasets: [
        {
          label: "Semana",
          fill: false,
          data: data?.time.map((m) => m.value),
          tension: 0.5,
        },
      ],
    };
  };

  return (
    <section className="report-container">
      <Card className="commits-card">
        <Card.Body>
          <Card.Title>Detalles del Servidor</Card.Title>
          <p className="description">
            Información sobre el consumo y uso del servidor principal para
            desarrollo
          </p>
          {cpuReportData?.time && <Line data={chartData} />}
        </Card.Body>
      </Card>
    </section>
  );
};

export { CpuReport };
