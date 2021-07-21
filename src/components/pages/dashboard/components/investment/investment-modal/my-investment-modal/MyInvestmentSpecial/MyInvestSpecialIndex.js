import React from "react";
// import backicon from "../../../../../../../Assets/backicon.svg";
import MyInvestMoniya from "./MyInvestMoniya";

const MaturedSpecialIndex = ({ page, setPage, investment }) => {
  let currentPage;
  switch (page) {
    case 0:
      currentPage = (
        <MyInvestMoniya setPage={setPage} investment={investment} />
      );
      break;
    default:
    // Ovest...
  }

  return <div className="current-stage">{currentPage}</div>;
};

export default MaturedSpecialIndex;
