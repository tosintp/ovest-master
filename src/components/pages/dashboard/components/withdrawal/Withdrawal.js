import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";
 import { hideModal } from "../../../../../redux/actions/modal.action";
// import {CopyToClipboard} from 'react-copy-to-clipboard';
// import "./fundwallet.css";
// import FundWalletLogic from "../fundwallet/index";
// import backicon from "../../../../Assets/backicon.svg";

import closemodalicon from "../../../../Assets/closemodalicon.svg";
import WithdrawalMethod from "./WithdrawalMethod";

const WithDrawal = ({ toggleWithdrawalModalAppearance  }) => {
  const [stage1, setStage1] = useState( 0 );
  const dispatch = useDispatch()
  
  return (
    <div className="Fund-wallet-method">
      <div className="Fund-wallet-method-head">
      <div className="">
        {stage1 === 0 ? (
          <button
            className='closemodalicon-btn'
            onClick={() => {
              setStage1(0);
              dispatch(hideModal());
            }}
          >
            <img className='closemodalicon' src={   closemodalicon} alt="close modal" />
          </button>
        ) : null}

     <div className="">
     </div>
        {/* <FundWalletLogic {...{ stage, setStage }}  /> */}
        <WithdrawalMethod {...{stage1, setStage1}}/>
        </div>
      </div>
    </div>
  );
};


export default WithDrawal;
