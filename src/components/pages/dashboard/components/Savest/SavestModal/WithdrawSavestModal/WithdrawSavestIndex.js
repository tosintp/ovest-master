import React from "react";
import SavestWithdraw from "./SavestWithdraw"
import ConfirmDetails from "./ConfirmDetails"
import backicon from "../../../../../../Assets/backicon.svg";


const WithdrawSavestIndex = ({ menu, setMenu }) => {
  let currentModal;
  switch (menu) {
    case 0:
      currentModal = <SavestWithdraw setMenu={setMenu} />;
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
          <ConfirmDetails setMenu={setMenu} />
        </>
      );
      break;


   
  }

  return <div className="current-stage">{currentModal}</div>;
};

export default WithdrawSavestIndex;
