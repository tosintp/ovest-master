import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";
import { hideWithdrawalModal } from "../../../../../redux/actions/modal.action";
// import {CopyToClipboard} from 'react-copy-to-clipboard';
// import "./fundwallet.css";
// import FundWalletLogic from "../fundwallet/index";
// import backicon from "../../../../Assets/backicon.svg";

import closemodalicon from "../../../../Assets/closemodalicon.svg";
import WithdrawalMethod from "./WithdrawalMethod";

const WithDrawal = ({ toggleWithdrawalModalAppearance, stage, setStage }) => {
  // const [stage1, setStage1] = useState(0);
  const dispatch = useDispatch();

  return (
    <div className="Fund-wallet-method">
      <div className="Fund-wallet-method-head">
        <div className="">
          {stage === 0 ? (
            <button
              className="closemodalicon-btn"
              onClick={() => {
                setStage(0);
                dispatch(hideWithdrawalModal());
              }}
            >
              <img
                className="closemodalicon"
                src={closemodalicon}
                alt="close modal"
              />
            </button>
          ) : null}

          <div className=""></div>
          {/* <FundWalletLogic {...{ stage, setStage }}  /> */}
          <WithdrawalMethod {...{ stage, setStage }} />
        </div>
      </div>
    </div>
  );
};

export default WithDrawal;
