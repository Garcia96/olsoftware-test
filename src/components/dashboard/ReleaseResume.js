import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { Chart as ChartJS } from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import * as DashboardService from "../../services/dashboard";

ChartJS.register();

const ReleaseResume = () => {
  const [releaseResumeData, setReleaseResumeData] = useState(null);
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    const fetch = async () => {
      const response = await DashboardService.getReleaseResumeData();
      if (response) {
        setReleaseResumeData(response);
        setChartData(dataChart(response));
      }
    };
    fetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const dataChart = (data) => {
    return {
      labels: data?.topProjects.map((m) => m.name),
      datasets: [
        {
          label: "Proyectos",
          fill: false,
          data: data?.topProjects.map((m) => m.porcentaje),
          tension: 0.5,
        },
      ],
    };
  };

  return (
    <section className="report-container container">
      <Card className="commits-card">
        <Card.Body>
          <Card.Title>Avance de proyectos</Card.Title>
          <p className="description">Reportes de entrega</p>
          {releaseResumeData?.topProjects && <Bar data={chartData} />}
        </Card.Body>
      </Card>
    </section>
  );
};

export { ReleaseResume };
