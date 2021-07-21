import React from "react";
import "./SavestFlexible.css";

const CreateFlexible = ({ setMenu }) => {
  return (
    <div className="create-flexible-plan">
      <div className="create-flexible-plan-main">
        <div className="create-flexible-header">
          <h5 className="create-flexible-h5">Create Flexible Plan</h5>
          <p className="create-flexible-p">
            Save strictly for emergencies and earn up to 3.5% every 15 days.
          </p>
        </div>
        <div className="savest-amount-tosave">
          <p className="savest-amount-p">How often would you like to save ? </p>
          <input
            type="radio"
            id="html"
            name="fav_language"
            value="HTML"
            className=" mt-3"
          />
          <label htmlFor="" className="savest-plan-label">
            Daily
          </label>
          <br />
          <input
            type="radio"
            id="html"
            name="fav_language"
            value="HTML"
            className=" mt-4"
          />
          <label htmlFor="" className="savest-plan-label">
            Once a week
          </label>

          <br />
          <input
            type="radio"
            id="html"
            name="fav_language"
            value="HTML"
            className=" mt-4"
          />
          <label htmlFor="" className="savest-plan-label">
            Once a month
          </label>
        </div>
        <div className="amount-targeted">
          <p className="savest-amount-p2 mt-5">Payment date</p>
          <input type="text" name="" id="" className="savest-flexible-input" />

          <p className="savest-amount-p2 mt-5">
            When would you like to start saving?
          </p>
          <input type="text" name="" id="" className="savest-flexible-input" />
        </div>

        <button onClick={() => setMenu(3)} className="savest-button">
          Next
        </button>
      </div>
    </div>
  );
};

export default CreateFlexible;
