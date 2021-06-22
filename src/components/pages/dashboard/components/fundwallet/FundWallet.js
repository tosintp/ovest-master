import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";
import { hideModal } from "../../../../../redux/actions/modal.action";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import "./fundwallet.css";
import FundWalletLogic from "../fundwallet/index";
import backicon from "../../../../Assets/backicon.svg";

import closemodalicon from "../../../../Assets/closemodalicon.svg";

const FundWallet = ({ toggleModalAppearance }) => {
  const [stage, setStage] = useState( 0 );
  const dispatch = useDispatch()
  
  return (
    <div className="Fund-wallet-method">
      <div className="Fund-wallet-method-head">
        {stage === 0 ? (
          <button
            className='closemodalicon-btn'
            onClick={() => {
              setStage(0);
              dispatch(hideModal());
            }}
          >
            <img className='closemodalicon' src={closemodalicon} alt="close modal" />
          </button>
        ) : null}

        <FundWalletLogic {...{ stage, setStage }}  />
      </div>
    </div>
  );
};


export default FundWallet;
