import React from "react";
import { Outlet } from "react-router-dom";
import { HeaderComponent } from "../../components/header/HeaderComponent";

function HomePage() {
  return (
    <React.Fragment>
      <HeaderComponent />

      <main className="mt-5">
        <Outlet />
      </main>
    </React.Fragment>
  );
}

export { HomePage };
