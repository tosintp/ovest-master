import React, { useState } from "react";
import BAnkAccountMethod from "./withdrawal-pages/BankAccountMethod";
import BankConfirmPassword from "./withdrawal-pages/BankConfirmPassword";
import InvestPlan from "./withdrawal-pages/InvestPlan";
import SavestForm from "./withdrawal-pages/SavestForm";
import SavestNotice from "./withdrawal-pages/SavestNotice";
import TransferToInvestor from "./withdrawal-pages/TransferToInvestor";
import "./withdrawal.css";

import backicon from "../../../../Assets/backicon.svg";

const WithdrawalLogic = ({ stage, setStage }) => {
  let currentStage;

  switch (stage) {
    case 0:
      currentStage = <FundWalletMethod setStage={setStage} />;
      break;

    case 1:
      currentStage = (
        <>
          <button
            className="backicon"
            onClick={() => {
              setStage(0);
            }}
          >
            <img src={backicon} alt="back icon" />
          </button>
          <SavestForm setStage={setStage} />
        </>
      );
      break;

    case 2:
      currentStage = (
        <>
          <button
            className="backicon"
            onClick={() => {
              setStage(1);
            }}
          >
            <img src={backicon} alt="back icon" />
          </button>
          <BankTransferDetails setStage={setStage} />
        </>
      );
      break;

    case 3:
      currentStage = (
        <>
          <button
            className="backicon"
            onClick={() => {
              setStage(2);
            }}
          >
            <img src={backicon} alt="back icon" />
          </button>
          <BankTranferVerify setStage={setStage} />
        </>
      );
      break;
    case 4:
      currentStage = (
        <>
          {/* <button
            className="backicon"
            onClick={() => {
              setStage(2);
            }}
          >
            <img src={backicon} alt="back icon" />
          </button> */}
          <BankTransferSucces setStage={setStage} />
        </>
      );
      break;

    case 5:
      currentStage = (
        <>
          <button
            onClick={() => {
              setStage(0);
            }}
            style={{
              border: "none",
              background: "none",
              marginLeft: "34px",
              marginTop: "25px",
            }}
          >
            <img src={backicon} alt="back icon" />
          </button>
          <CardFunding setStage={setStage} />
        </>
      );
      break;

    case 6:
      currentStage = (
        <>
          <button
            onClick={() => {
              setStage(5);
            }}
            style={{
              border: "none",
              background: "none",
              marginLeft: "34px",
              marginTop: "25px",
            }}
          >
            <img src={backicon} alt="back icon" />
          </button>
          <AddNewBankCard setStage={setStage} />
        </>
      );
      break;

    case 7:
      currentStage = <CardAmountInput setStage={setStage} />;
      break;

    case 8:
      currentStage = <CardPaymentSuccess setStage={setStage} />;
      break;

    default:
      currentStage = <FundWalletMethod setStage={setStage} />;
      break;
  }

  return <div className="current-stage">{currentStage}</div>;
};

export default WithdrawalLogic;
