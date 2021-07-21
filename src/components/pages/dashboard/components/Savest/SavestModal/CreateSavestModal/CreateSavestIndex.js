import React from "react";
import SelectSavestPlan from "../CreateSavestModal/SelectSavestPlan";
import CreateFlexible from "../CreateSavestModal/SavestFlexibleplan/CreateFlexible";
import HowOftenSavest from "../CreateSavestModal/SavestFlexibleplan/HowOftenSavest";
import SavingsSummary from "../CreateSavestModal/SavestFlexibleplan/SavingsSummary";
import SaveNow from "../CreateSavestModal/SavestFlexibleplan/SaveNow";
import SavePayment from "../CreateSavestModal/SavestFlexibleplan/SavePaymenMethod";
import backicon from "../../../../../../Assets/backicon.svg";

const CreateSavestIndex = ({ menu, setMenu }) => {
  let currentModal;
  switch (menu) {
    case 0:
      currentModal = <SelectSavestPlan setMenu={setMenu} />;
      break;

    case 1:
      currentModal = (
        <>
          <button
            className="backicon"
            onClick={() => {
              setMenu(0);
            }}
          >
            <img src={backicon} alt="back icon" />
          </button>
          <CreateFlexible setMenu={setMenu} />
        </>
      );
      break;

    case 2:
      currentModal = (
        <>
          <button
            className="backicon"
            onClick={() => {
              setMenu(1);
            }}
          >
            <img src={backicon} alt="back icon" />
          </button>
          <HowOftenSavest setMenu={setMenu} />
        </>
      );
      break;

    case 3:
      currentModal = (
        <>
          <button
            className="backicon"
            onClick={() => {
              setMenu(2);
            }}
          >
            <img src={backicon} alt="back icon" />
          </button>
          <SavingsSummary setMenu={setMenu} />
        </>
      );
      break;

    case 4:
      currentModal = (
        <>
          <button
            className="backicon"
            onClick={() => {
              setMenu(2);
            }}
          >
            <img src={backicon} alt="back icon" />
          </button>
          <SaveNow setMenu={setMenu} />
        </>
      );
      break;

    case 5:
      currentModal = (
        <>
          <button
            className="backicon"
            onClick={() => {
              setMenu(2);
            }}
          >
            <img src={backicon} alt="back icon" />
          </button>
          <SavePayment setMenu={setMenu} />
        </>
      );
      break;
  }

  return <div className="current-stage">{currentModal}</div>;
};

export default CreateSavestIndex;
