import React from "react";

import "./maincen.css";

import CompleteSetup from "./complete-setup/CompleteSetup";
import RecentTransaction from "./RecentTransaction/RecentTransaction";
import TransactionChart from "./RecentTransaction/transactionchart/TransactionChart";
import NoRecentTransaction from "./no-recent-transaction/NoRecentTransaction";

function MainCenL() {
  return (
    <div className="main-cen-l">
      <CompleteSetup />
      {/* <RecentTransaction /> */}
      {/* <TransactionChart /> */}
      <NoRecentTransaction />
    </div>
  );
}

export default MainCenL;
