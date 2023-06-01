import React, { useEffect, useState } from "react";
import * as DashboardService from "../../services/dashboard";
import "./GeneralInfo.css";

function GeneralInfo() {
  const [cardsInfo, setCardsInfo] = useState({});

  useEffect(() => {
    const fetch = async () => {
      const response = await DashboardService.getDashboardCards();
      if (response) {
        setCardsInfo(response);
      }
    };
    fetch();
  }, []);

  return (
    <section className="cards-container container">
      <div>
        <span>Proyectos</span>
        <p>{cardsInfo?.projects}</p>
      </div>
      <div>
        <span>Incidentes registradas</span>
        <p>{cardsInfo?.pedingNc}</p>
      </div>
      <div>
        <span>Error de despliegue</span>
        <p>{cardsInfo?.errorsDeploy}</p>
      </div>
    </section>
  );
}

export { GeneralInfo };
