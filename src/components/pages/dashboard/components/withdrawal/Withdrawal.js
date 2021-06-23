import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";
 import { hideModal } from "../../../../../redux/actions/modal.action";
// import {CopyToClipboard} from 'react-copy-to-clipboard';
// import "./fundwallet.css";
// import FundWalletLogic from "../fundwallet/index";
// import backicon from "../../../../Assets/backicon.svg";

import closemodalicon from "../../../../Assets/closemodalicon.svg";

const Withdrawal = ({ toggleWithdrawalModalAppearance  }) => {
  const [stage, setStage] = useState( 0 );
  const dispatch = useDispatch()
  
  return (
    <div className="Fund-wallet-method">
      <div className="Fund-wallet-method-head">
      <div className="">
        {stage === 0 ? (
          <button
            className='closemodalicon-btn'
            onClick={() => {
              setStage(0);
              dispatch(hideModal());
            }}
          >
            <img className='closemodalicon' src={   closemodalicon} alt="close modal" />
          </button>
        ) : null}

     <div className="">
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nihil quae corrupti eius, recusandae dicta doloribus rem dolores a illum!
     </div>
        {/* <FundWalletLogic {...{ stage, setStage }}  /> */}
        </div>
      </div>
    </div>
  );
};


export default Withdrawal;
