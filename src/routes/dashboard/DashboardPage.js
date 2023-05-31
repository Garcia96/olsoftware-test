import React from "react";
import { GeneralInfo } from "../../components/dashboard/GeneralInfo";
import { CpuReport } from "../../components/dashboard/CpuReport";
import { CommitsReport } from "../../components/dashboard/CommitsReport";
import { ReleaseResume } from "../../components/dashboard/ReleaseResume";

function DashboardPage() {
  return (
    <React.Fragment>
      <GeneralInfo />
      <CpuReport />
      <CommitsReport />
      <ReleaseResume />
    </React.Fragment>
  );
}

export default DashboardPage;
