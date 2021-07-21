import React from "react";
import MyInvestmentSilverPlan from "./MyInvestmentSilverPlan";
import Earning from "./Earning";
import backicon from "../../../../../../../Assets/backicon.svg";

const SpecialPackageIndex = ({ page, setPage, investment }) => {
  let currentPage;
  setTimeout(() => {
    if (page === 0) setPage(1);
  }, 10000);
  switch (page) {
    case 0:
      currentPage = (
        <MyInvestmentSilverPlan setPage={setPage} investment={investment} />
      );
      break;

    case 1:
      currentPage = (
        <>
          <button
            className="backicon"
            onClick={() => {
              setPage(0);
            }}
          >
            <img src={backicon} alt="back icon" />
          </button>
          <Earning setPage={setPage} />
        </>
      );
      break;
    default:
    // Ovest...
  }

  return <div className="current-stage">{currentPage}</div>;
};

export default SpecialPackageIndex;
