import React, { useState } from "react";
import "./SilverInvestment.css";
import "../../investment/investment-modal/InvestmentModal.css";

import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import { hideInvestModal } from "../../../../../../redux/actions/modal.action";
import Rectangle64 from "../../../assets/Rectangle 64.svg";
import Rectangle68 from "../../../assets/Rectangle 68.svg";
import Rectangle66 from "../../../assets/Rectangle 66.svg";
import closemodalicon from "../../../../../Assets/closemodalicon.svg";

import { showInvestModal } from "../../../../../../redux/actions/modal.action";

const SilverInvestment = ({ toggleModalInvestAppearance }) => {
  const [stage, setStage] = useState(0);
  const dispatch = useDispatch();


  const openModal = () => {
    toggleModalInvestAppearance();
    console.log("Open redux");
  };
  return (
    <div className="parent-silverinvestment">
      <p className="get-started">Select an investment plan to get started</p>
      <div className="silver-investment mt-3">
        <img src={Rectangle64} alt="" className="silverinvestment-img" />
        <div className="silver-investmentchild">
          <h6 className="silverinvestment-h6">Silvest Investment Plan</h6>
          <p className="silverinvestment-p">
            Lock-away funds safely in our Silvest investment plan for
            <span> 3 months</span> with at least <span>NGN50,000.</span>
          </p>

          <a href="#silver-modal">
            <button className="silverinvestment-button">View Details</button>
          </a>
        </div>
      </div>

      <div className="gold-investment">
        <img src={Rectangle68} alt="" className="silverinvestment-img" />
        <div className="silver-investmentchild">
          <h6 className="silverinvestment-h6">Silvest Investment Plan</h6>
          <p className="silverinvestment-p">
            Lock-away funds safely in our Silvest investment plan for
            <span> 3 months</span> with at least <span>NGN50,000.</span>
          </p>
          <button className="silverinvestment-button">View Details</button>
        </div>
      </div>

      <div className="special-package">
        <img src={Rectangle66} alt="" className="silverinvestment-img" />
        <div className="silver-investmentchild">
          <h6 className="silverinvestment-h6">Silvest Investment Plan</h6>
          <p className="silverinvestment-p">
            Lock-away funds safely in our Silvest investment plan for
            <span> 3 months</span> with at least <span>NGN50,000.</span>
          </p>
          <button className="silverinvestment-button">View Details</button>
        </div>
      </div>

      <>
        <div id="silver-modal" className="invest-modal">
          <div className="investmodal-head">
            {stage === 0 ? (
              <a href="#" className="closemodalicon-btn">
                <img
                  className="closemodalicon"
                  src={closemodalicon}
                  alt="close modal"
                />
              </a>
            ) : null}
            <div>
              {/* <button
                onclick={() => {
                  setStage(1);
                }}
              >
                next
              </button> */}
            </div>
        
          </div>
        </div>
      </>

      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore omnis
        repellendus quae qui? Doloremque perspiciatis a mollitia inventore
        voluptatem earum.
      </div>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  toggleModalInvestAppearance: () => dispatch(showInvestModal()),
  // toggleWithdrawalModalAppearance: () => dispatch(showWithdrawalModal()),
});
export default connect(null, mapDispatchToProps)(SilverInvestment);
