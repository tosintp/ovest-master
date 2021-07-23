import React from "react";
import "./Transaction.css";
const SavestPlanDetails = ({
  img,
  title,
  amount,
  type,
  interest,
  percentage,
  duration,
}) => {
  return (
    <div className="tuition-main p-3">
      <div className="">
        <div className="mt-3">
          <img src={img} alt="" className="" />
        </div>
        <p className="tuition-fees mt-4">{title}</p>
        <p className="dollar-amount">{amount}</p>
        <p className="fixed-plan">{type}</p>
      </div>
      <div className="mt-5">
        <p className="interest-amount mt-4">{interest}</p>
        <p className="percentage-interest">{percentage}</p>
        <p className="perannum">{duration}</p>
      </div>
    </div>
  );
};

export default SavestPlanDetails;
