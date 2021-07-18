import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { hideModal } from "../../../../../redux/actions/modal.action";
import "./fundwallet.css";
import FundWalletLogic from "../fundwallet/index";
import closemodalicon from "../../../../Assets/closemodalicon.svg";

const FundWallet = ({ toggleModalAppearance }) => {
  const [stage, setStage] = useState(0);
  const [stageEmit, setStageEmit] = useState([]);
  const dispatch = useDispatch();

  const setStageWithEmit = (stage, ...emit) => {
    if (emit.length) {
      setStageEmit(emit);
    }

    setStage(stage);
  };

  return (
    <div className="Fund-wallet-method">
      <div className="Fund-wallet-method-head">
        <div className="">
          {stage === 0 ? (
            <button
              className="closemodalicon-btn"
              onClick={() => {
                // setStage(0);
                dispatch(hideModal());
              }}
            >
              <img
                className="closemodalicon"
                src={closemodalicon}
                alt="close modal"
              />
            </button>
          ) : null}

          <FundWalletLogic
            {...{ stage, setStage: setStageWithEmit, stageEmit }}
          />
        </div>
      </div>
    </div>
  );
};

export default FundWallet;
