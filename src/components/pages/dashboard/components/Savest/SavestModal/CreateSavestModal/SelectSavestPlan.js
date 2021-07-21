import React from "react";
import "./SelectSavestPlan.css";
import savestfeeicon from "../../../../assets/savestfee-icon.svg";
import savesthouseicon from "../../../../assets/savest-houseicon.svg";

const SelectSavestPlan = ({ setMenu }) => {
  return (
    <div className="select-savest-body">
      <div className="select-savest-main">
        <div className="select-savest-header">
          <h5 className="select-savest-h5">Select a Plan</h5>
          <p className="select-savest-p">
            Let’s help you save, you can have different plans.
          </p>
        </div>
        <div className="savest-plans">
          <div className="fixed-savest-plan">
            <div className="fixed-savest-plan-body">
              <div className="fixed-plan-img">
                <img src={savestfeeicon} alt="" />
              </div>
              <h5 className="fixed-plan-h5">Fixed Savest Plan</h5>
              <p className="fixed-plan-p">
                Save strictly for your goals on your terms for a minimum of 3
                months and earn minimum of 7% every month.
              </p>
            </div>
          </div>
          <div className="flexible-savest-plan">
            <div className="fixed-savest-plan-body">
              <div className="fixed-plan-img">
                <img src={savesthouseicon} alt="" onClick={() => setMenu(1)} />
              </div>
              <h5 className="fixed-plan-h5">Flexible Savest Plan</h5>
              <p className="fixed-plan-p">
                Save money for emergencies, and have access to it anytime,
                anyday.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectSavestPlan;
