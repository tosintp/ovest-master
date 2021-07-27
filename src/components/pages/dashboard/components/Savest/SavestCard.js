import React, { useState, useEffect } from "react";
import Savest from "../../assets/saveImg2.svg";
import Savest1 from "../../assets/savest.svg";
import createsavesticon from "../../assets/createsavesticon.svg";
import "./SavestCard.css";
import closemodalicon from "../../../../Assets/closemodalicon.svg";
import CreateSavestIndex from "./SavestModal/CreateSavestModal/CreateSavestIndex";
import { $api } from "../../../../../helpers/$api";

const SavestCard = () => {
  const [menu, setMenu] = useState(0);
  const [cardData, setCardData] = useState({
    total: 0,
    totalReturns: 0,
    percentageChane: "0.0",
  });

  useEffect(() => {
    (async () => {
      try {
        const { savest } = await $api.user.getBalances();

        setCardData(savest);
      } catch (error) {
        // error getting card data.
      }
    })();
  }, [setCardData]);

  return (
    <div className="savestSesson">
      <div className="savestCard">
        <div className="savestImage">
          <img src={Savest} alt="" className="saveImage" width="27px" />
        </div>
        <h6>Total Amount Saved</h6>
        <p>${cardData.total}</p>
      </div>
      <div
        className="savestCard1
      "
      >
        <div className="savestImage">
          <img src={Savest1} alt="" className="saveImg" width="27px" />
        </div>
        <h6>Total Returns</h6>
        <p>${cardData.totalReturns}</p>
        <span className="portfolioText">
          {cardData.percentageChane}% portfoilo change today
        </span>
      </div>
      <div className="saveCard">
        <div className="create-savest">
          <a href="#maturedinvestmentmodal">
            <img
              src={createsavesticon}
              alt="create-savest-icon"
              className="create-savestimg"
            />
          </a>
        </div>
        <p className="create-savestplan">Create a New Savest Plan</p>
      </div>
      <>
        <div id="maturedinvestmentmodal" className="maturedinvestmentmodal">
          <div className="investmodal-head">
            {menu === 0 ? (
              <a
                href="#dummy"
                className="closemodalicon-btn"
                onClick={() => {
                  setMenu(0);
                }}
              >
                <img src={closemodalicon} alt="" className="closemodal" />
              </a>
            ) : null}

            <CreateSavestIndex {...{ menu, setMenu }} />
          </div>
        </div>
      </>
    </div>
  );
};

export default SavestCard;
