import React from "react";
import AllTransactionModal from "./AllTransactionModal";

export const AllTransactionIndex = ({ Transac, setTransac }) => {
  let currentTransacation;
  switch (Transac) {
    case 0:
      currentTransacation = <AllTransactionModal setTransac={setTransac} />;
      break;

    default:
      break;
  }
  return <div className="current-page">{currentTransacation}</div>;
};

export const myTransaction = ( { }) => {};
