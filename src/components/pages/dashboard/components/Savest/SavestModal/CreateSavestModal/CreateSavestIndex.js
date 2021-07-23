import React from "react";
import SelectSavestPlan from "../CreateSavestModal/SelectSavestPlan";
import CreateFlexible from "../CreateSavestModal/SavestFlexibleplan/CreateFlexible";
import HowOftenSavest from "../CreateSavestModal/SavestFlexibleplan/HowOftenSavest";
import SavingsSummary from "../CreateSavestModal/SavestFlexibleplan/SavingsSummary";
import SaveNow from "../CreateSavestModal/SavestFlexibleplan/SaveNow";
import SavePayment from "../CreateSavestModal/SavestFlexibleplan/SavePaymentMethod";
import backicon from "../../../../../../Assets/backicon.svg";
import SavestCardInput from "../../../fundwallet/card/CardAmountInput";
import CreateFixed from "../CreateSavestModal/SavestFixedPlan/CreateFixed";
import HowOftenFixed from "../CreateSavestModal/SavestFixedPlan/HowOftenFixed";
import SavingSumFixed from "../CreateSavestModal/SavestFixedPlan/SavingSumFixed";
import SaveNowFixed from "../CreateSavestModal/SavestFixedPlan/SaveNowFixed";
import FixedPayment from "../CreateSavestModal/SavestFixedPlan/FixedPayment";
import SavestAccount from "../CreateSavestModal/SavestFixedPlan/SavestAccount";
import SaveNowEditPlan from "../CreateSavestModal/SavestFixedPlan/SaveNowEditPlan";
import EarningsSaveNow from "../CreateSavestModal/SavestFixedPlan/EarningsSaveNow";

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
              setMenu(3);
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
              setMenu(4);
            }}
          >
            <img src={backicon} alt="back icon" />
          </button>
          <SavePayment setMenu={setMenu} />
        </>
      );
      break;

    case 6:
      currentModal = <SavestCardInput setMenu={setMenu} />;
      break;

    case 7:
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
          <CreateFixed setMenu={setMenu} />
        </>
      );
      break;

    case 8:
      currentModal = (
        <>
          <button
            className="backicon"
            onClick={() => {
              setMenu(7);
            }}
          >
            <img src={backicon} alt="back icon" />
          </button>
          <HowOftenFixed setMenu={setMenu} />
        </>
      );
      break;

    case 9:
      currentModal = (
        <>
          <button
            className="backicon"
            onClick={() => {
              setMenu(8);
            }}
          >
            <img src={backicon} alt="back icon" />
          </button>
          <SavingSumFixed setMenu={setMenu} />
        </>
      );
      break;

    case 10:
      currentModal = (
        <>
          <button
            className="backicon"
            onClick={() => {
              setMenu(9);
            }}
          >
            <img src={backicon} alt="back icon" />
          </button>
          <SaveNowFixed setMenu={setMenu} />
        </>
      );
      break;

    case 11:
      currentModal = (
        <>
          <button
            className="backicon"
            onClick={() => {
              setMenu(10);
            }}
          >
            <img src={backicon} alt="back icon" />
          </button>
          <FixedPayment setMenu={setMenu} />
        </>
      );
      break;

    case 12:
      currentModal = (
        <>
          <button
            className="backicon"
            onClick={() => {
              setMenu(10);
            }}
          >
            <img src={backicon} alt="back icon" />
          </button>
          <SavestAccount setMenu={setMenu} />
        </>
      );
      break;

    case 13:
      currentModal = (
        <>
          <button
            className="backicon"
            onClick={() => {
              setMenu(12);
            }}
          >
            <img src={backicon} alt="back icon" />
          </button>
          <SaveNowEditPlan setMenu={setMenu} />
        </>
      );
      break;

    case 14:
      currentModal = (
        <>
          <button
            className="backicon"
            onClick={() => {
              setMenu(13);
            }}
          >
            <img src={backicon} alt="back icon" />
          </button>
          <EarningsSaveNow setMenu={setMenu} />
        </>
      );
      break;
  }

  return <div className="current-stage">{currentModal}</div>;
};

export default CreateSavestIndex;
