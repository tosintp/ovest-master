import React from "react";
import DashboardLayout from "../../dashboardDefaultLayout/DashboardLayout";
import SavestTitle from "../Savest/savestTitle";
import SavestCard from "../Savest/SavestCard";
import Transaction from "../Savest/Transaction";
import './savest.css';

const Savest = () => {
  return (
    <>
    <DashboardLayout>
      <main>
        <div className="savest">
          <SavestTitle />
          <SavestCard />
          <Transaction/>
      </div>

      </main>
      </DashboardLayout>
      </>
  );
};

export default Savest;
