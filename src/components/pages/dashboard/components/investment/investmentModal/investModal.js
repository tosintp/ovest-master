import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { hideInvestModal } from "../../../../../../redux/actions/modal.action";
// import {CopyToClipboard} from 'react-copy-to-clipboard';
// import "./fundwallet.css";
// import FundWalletLogic from "../fundwallet/index";
// import backicon from "../../../../Assets/backicon.svg";
import closemodalicon from "../../../../../Assets/closemodalicon.svg";

const InvestModal = ({ toggleModalAppearance }) => {
  const [stage, setStage] = useState(0);
  const dispatch = useDispatch();

  return (
    <div className="Fund-wallet-method">
      <div className="Fund-wallet-method-head">
        <div className="">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum
          debitis culpa vel beatae, ipsa quod consequatur doloribus asperiores
          ratione alias nostrum, reprehenderit magnam numquam tempore totam
          voluptate quidem molestiae illum.
          {stage === 0 ? (
            <button
              className="closemodalicon-btn"
              onClick={() => {
                // setStage(0);
                dispatch(hideInvestModal());
              }}
            >
              <img
                className="closemodalicon"
                src={closemodalicon}
                alt="close modal"
              />
            </button>
          ) : null}
          <div>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam
            molestiae eaque quod corporis veniam aliquam neque nostrum quo sit
            corrupti.
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestModal;
